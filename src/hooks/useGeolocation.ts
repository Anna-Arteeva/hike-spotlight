import { useState, useEffect, useCallback } from 'react';

interface GeolocationState {
  city: string | null;
  loading: boolean;
  error: string | null;
  requested: boolean;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    city: null,
    loading: false,
    error: null,
    requested: false,
  });

  const requestLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setState(prev => ({ ...prev, error: 'Geolocation not supported', requested: true }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, requested: true }));

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          // Use reverse geocoding to get city name
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
          );
          const data = await response.json();
          
          const city = data.address?.city || 
                       data.address?.town || 
                       data.address?.village || 
                       data.address?.municipality ||
                       data.address?.county ||
                       null;
          
          setState({ city, loading: false, error: null, requested: true });
          
          // Persist to localStorage
          if (city) {
            localStorage.setItem('userCity', city);
          }
        } catch {
          setState(prev => ({ ...prev, loading: false, error: 'Failed to get city name', requested: true }));
        }
      },
      (error) => {
        setState({ city: null, loading: false, error: error.message, requested: true });
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 }
    );
  }, []);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCity = localStorage.getItem('userCity');
    if (savedCity) {
      setState(prev => ({ ...prev, city: savedCity }));
    }
  }, []);

  return { ...state, requestLocation };
};
