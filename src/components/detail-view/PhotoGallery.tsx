import React from "react";

interface PhotoGalleryProps {
  images: string[];
  onAddPhotos?: () => void;
  addPhotoLabel?: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  images,
  onAddPhotos,
  addPhotoLabel = "Add route photos",
}) => {
  // Create a masonry-style layout with placeholder images
  const galleryItems = [
    { className: "col-span-2 row-span-2 h-[280px]" },
    { className: "col-span-1 h-[180px]" },
    { className: "col-span-1 h-[180px]" },
    { className: "col-span-1 h-[130px]" },
    { className: "col-span-1 h-[130px]" },
    { className: "col-span-1 h-[100px]" },
    { className: "col-span-1 h-[100px]" },
  ];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`${item.className} bg-muted rounded-lg overflow-hidden`}
          >
            {images[index] ? (
              <img
                src={images[index]}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted" />
            )}
          </div>
        ))}
      </div>
      
      {onAddPhotos && (
        <button
          onClick={onAddPhotos}
          className="text-primary text-sm hover:underline cursor-pointer"
        >
          {addPhotoLabel}
        </button>
      )}
    </div>
  );
};

export default PhotoGallery;
