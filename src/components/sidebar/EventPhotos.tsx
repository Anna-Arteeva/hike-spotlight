import React from 'react';

interface Photo {
  image: string;
  alt?: string;
  width: string;
  height: string;
}

interface EventPhotosProps {
  photos: Photo[];
  additionalCount?: number;
}

export const EventPhotos: React.FC<EventPhotosProps> = ({ photos, additionalCount }) => {
  return (
    <div className="flex relative gap-1.5 h-[67px] w-[311px] max-md:w-full max-md:max-w-[280px] max-sm:gap-1 max-sm:w-full max-sm:max-w-[250px]">
      {photos.map((photo, index) => {
        const isLast = index === photos.length - 1;

        if (isLast && additionalCount) {
          return (
            <div key={index} className="relative h-[67px] w-[70px] max-sm:h-[55px] max-sm:w-[55px]">
              <img
                src={photo.image}
                alt={photo.alt || ''}
                className="shrink-0 rounded-md h-[67px] w-[70px] max-sm:h-[55px] max-sm:w-[55px] object-cover"
              />
              <div className="absolute text-xs text-white font-bold h-[15px] left-[21px] top-[26px] w-[29px] max-sm:top-5 max-sm:left-[13px]">
                +{additionalCount}
              </div>
            </div>
          );
        }

        return (
          <img
            key={index}
            src={photo.image}
            alt={photo.alt || ''}
            className={`shrink-0 rounded-md object-cover ${photo.height} ${photo.width}`}
          />
        );
      })}
    </div>
  );
};
