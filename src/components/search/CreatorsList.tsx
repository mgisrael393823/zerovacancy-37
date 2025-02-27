
import React, { useCallback, useEffect } from 'react';
import { CreatorCard } from '../creator/CreatorCard';
import { SortMenu } from '../sorting/SortMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Users, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Creator {
  name: string;
  services: string[];
  price: number;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  workExamples: string[];
}

interface CreatorsListProps {
  creators: Creator[];
  sortBy: string;
  onSort: (value: string) => void;
  onImageLoad: (imageSrc: string) => void;
  loadedImages: Set<string>;
  imageRef: (node: HTMLImageElement | null) => void;
}

export const CreatorsList: React.FC<CreatorsListProps> = ({
  creators,
  sortBy,
  onSort,
  onImageLoad,
  loadedImages,
  imageRef,
}) => {
  const isMobile = useIsMobile();
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: false,
    dragFree: false,
    skipSnaps: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Force a reInit after mount
    const timer = setTimeout(() => {
      emblaApi.reInit();
    }, 100);
    
    return () => {
      clearTimeout(timer);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);
  
  const sortOptions = [
    { label: 'Rating', value: 'rating' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Distance', value: 'distance' }
  ];

  return (
    <div className="w-full space-y-2 sm:space-y-6">
      {/* Desktop Social Proof Stats - Only visible on desktop */}
      {!isMobile && (
        <div className="hidden sm:flex justify-between items-center mb-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                <Users className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">85+ Verified Creators</span>
                <div className="text-xs text-gray-500">in your area</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center mr-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">100% Satisfaction</span>
                <div className="text-xs text-gray-500">guaranteed</div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "flex justify-end"
          )}>
            <SortMenu 
              options={sortOptions}
              onSort={onSort}
              defaultValue={sortBy}
            />
          </div>
        </div>
      )}

      {isMobile ? (
        <div className="w-full relative">
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {creators.map((creator, index) => (
                <div 
                  key={creator.name} 
                  className="min-w-[90%] w-[90%] pl-2 pr-2"
                >
                  <CreatorCard
                    creator={creator}
                    onImageLoad={onImageLoad}
                    loadedImages={loadedImages}
                    imageRef={imageRef}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-black/30 text-white backdrop-blur-sm transition-opacity",
              !prevBtnEnabled && "opacity-0 pointer-events-none"
            )}
            aria-label="Previous creator"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-black/30 text-white backdrop-blur-sm transition-opacity",
              !nextBtnEnabled && "opacity-0 pointer-events-none"
            )}
            aria-label="Next creator"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {creators.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === selectedIndex ? "bg-primary" : "bg-gray-300"
                )}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to creator ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.name}
              creator={creator}
              onImageLoad={onImageLoad}
              loadedImages={loadedImages}
              imageRef={imageRef}
            />
          ))}
        </div>
      )}
    </div>
  );
};
