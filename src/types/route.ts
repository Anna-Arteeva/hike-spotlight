export type Difficulty = 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6';
export type RouteType = 'loop' | 'out_and_back' | 'point_to_point';

export type Facility = 'Mountain huts' | 'Restaurants' | 'Toilets' | 'Parking on the way';
export type Highlight = 'Coastline' | 'Mountain ridge' | 'Lakes' | 'Waterfalls';
export type Feature = 'Via ferrata' | 'Climbing' | 'Mountain bike park';

export interface Route {
  id: string;
  slug: string;
  title: string;
  summary: string;
  country: string;
  region: string;
  distance_km: number;
  duration_min: number;
  elevation_gain_m: number;
  difficulty: Difficulty;
  route_type: RouteType;
  facilities: Facility[];
  highlights: Highlight[];
  features: Feature[];
  images?: string[];
  created_at?: string;
}

export interface RouteFilters {
  country?: string;
  region?: string;
  difficulty?: Difficulty[];
  distance_min?: number;
  distance_max?: number;
  duration_min?: number;
  duration_max?: number;
  elevation_min?: number;
  elevation_max?: number;
  facilities?: Facility[];
  highlights?: Highlight[];
  features?: Feature[];
  route_type?: RouteType;
}

export type SortOption = 
  | 'relevance' 
  | 'distance_asc' 
  | 'distance_desc' 
  | 'duration_asc' 
  | 'duration_desc' 
  | 'elevation_asc' 
  | 'elevation_desc' 
  | 'recent';

export const FACILITIES: Facility[] = ['Mountain huts', 'Restaurants', 'Toilets', 'Parking on the way'];
export const HIGHLIGHTS: Highlight[] = ['Coastline', 'Mountain ridge', 'Lakes', 'Waterfalls'];
export const FEATURES: Feature[] = ['Via ferrata', 'Climbing', 'Mountain bike park'];
export const DIFFICULTIES: Difficulty[] = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'];
export const ROUTE_TYPES: { value: RouteType; label: string }[] = [
  { value: 'loop', label: 'Loop' },
  { value: 'out_and_back', label: 'Out & Back' },
  { value: 'point_to_point', label: 'Point to Point' },
];

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  T1: 'T1 - Hiking',
  T2: 'T2 - Mountain hiking',
  T3: 'T3 - Demanding',
  T4: 'T4 - Alpine hiking',
  T5: 'T5 - Demanding alpine',
  T6: 'T6 - Difficult alpine',
};
