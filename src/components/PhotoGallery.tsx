import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  src: string;
  alt: string;
  title?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setSelectedPhoto(photo)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-soft hover:shadow-warm transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent group"
            aria-label={`Voir ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              {photo.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary-foreground font-medium text-sm">
                    {photo.title}
                  </p>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <div className="relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedPhoto && (
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;
