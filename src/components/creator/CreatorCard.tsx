
import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Star, Image, CheckCircle, Sparkle, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { CreatorRating } from './CreatorRating';
import { GlowDialog } from '../ui/glow-dialog';

interface Creator {
  name: string;
  services: string[];
  price: number;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  workExamples: string[];
  tags?: string[];
}

interface CreatorCardProps {
  creator: Creator;
  onImageLoad?: (imageSrc: string) => void;
  loadedImages: Set<string>;
  imageRef: (node: HTMLImageElement | null) => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({ 
  creator, 
  onImageLoad, 
  loadedImages, 
  imageRef 
}) => {
  const isMobile = useIsMobile();
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsImageLoaded(true);
    if (onImageLoad) {
      onImageLoad(creator.image);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    if (onImageLoad) {
      onImageLoad(creator.image);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const getDefaultTags = (name: string, services: string[]) => {
    if (name === 'John Smith' && services.includes('Photography')) {
      return ['#RealEstate', '#Aerial', '#IndoorDroneTour'];
    }
    if (name === 'Jane Cooper') {
      return ['#Interior', '#Design', '#Staging'];
    }
    if (name === 'Emily Johnson') {
      return ['#POV', '#TikTok', '#ComeTourWithMe'];
    }
    if (name === 'Michael Brown') {
      return ['#3DTours', '#FloorPlans', '#Interactive'];
    }
    return ['#Professional', '#Creative', '#Expert'];
  };

  const getTagStyle = (tag: string) => {
    // Using only gray for all tags
    return "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 border border-gray-200";
  };

  const tags = creator.tags || getDefaultTags(creator.name, creator.services);

  // Determine if we should use a video, image, or fallback for each creator
  const getMedia = () => {
    if (creator.name === 'Emily Johnson') {
      return { type: 'image', src: '/newemilyprofile.jpg' };
    }
    if (creator.name === 'Jane Cooper') {
      return { type: 'image', src: '/janeprofile.png' };
    }
    if (creator.name === 'Michael Brown') {
      // Provide fallback image in case video fails
      if (imageError) {
        return { type: 'image', src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952' };
      }
      return { type: 'video', src: '/michaelprofile.mov' };
    }
    return { type: 'image', src: creator.image };
  };

  const media = getMedia();
  
  return (
    <article>
      <Card className="overflow-hidden h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div className="relative">
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
            <span className="px-2 sm:px-2.5 py-1 text-xs sm:text-sm font-medium bg-white text-gray-900 rounded-full shadow-sm border border-gray-100">
              From ${creator.price}
            </span>
          </div>

          <div className="relative aspect-[4/3]">
            {media.type === 'image' ? (
              <img 
                src={media.src}
                alt={`${creator.name} - ${creator.services.join(", ")} specialist in ${creator.location}`}
                className="w-full h-full object-cover object-center"
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            ) : (
              <>
                {/* Video element with fallback in case it fails to load */}
                <video
                  src={media.src}
                  className="w-full h-full object-cover object-center"
                  onError={() => setImageError(true)}
                  onLoadedData={handleVideoLoad}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Fallback image that shows while video is loading */}
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-gray-200"></div>
                )}
              </>
            )}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" 
              aria-hidden="true"
            />
            
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white select-text">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="font-semibold text-base sm:text-xl">{creator.name}</h3>
                <CheckCircle 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200"
                  aria-label="Verified Creator"
                />
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
                <MapPin 
                  className="w-3.5 h-3.5 text-white/90" 
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm text-white/90">{creator.location}</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5 sm:mt-1">
                {creator.services.join(" • ")}
              </p>
            </div>
          </div>
          
          <div className="p-3 sm:p-4 flex flex-col h-[180px] bg-white">
            <div className="flex flex-col h-full">
              {/* Tags section - fixed height */}
              <div className="mb-3">
                <div 
                  className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                  role="list"
                  aria-label="Creator specialties"
                >
                  <div className="flex flex-nowrap gap-1.5 sm:gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[10px] sm:text-xs px-2 py-1 rounded-full whitespace-nowrap bg-gray-100 text-gray-600 border border-gray-200"
                        role="listitem"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Rating section - consistent height */}
              <div className="mb-auto">
                <CreatorRating rating={creator.rating} reviews={creator.reviews} name={creator.name} />
              </div>
              
              {/* Button section - fixed at bottom with consistent height */}
              <div className="flex justify-center mt-3">
                <Button 
                  onClick={() => setShowEmailDialog(true)}
                  aria-label={`Join waitlist to work with ${creator.name}`}
                  className="w-[70%] h-9 sm:h-10 text-xs sm:text-sm px-3 sm:px-4 bg-gray-800 hover:bg-gray-700 text-white"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <GlowDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
    </article>
  );
};
