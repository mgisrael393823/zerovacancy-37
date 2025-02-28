
import React from 'react';
import { SearchBar } from './search/SearchBar';
import { CreatorsList } from './search/CreatorsList';
import { ShineBorder } from './ui/shine-border';

const PreviewSearch = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="rounded-xl overflow-hidden bg-white">
          <div className="p-4 sm:p-8 w-full">
            <div className="w-full bg-white space-y-6 sm:space-y-8">
              {/* Title and subtitle */}
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3 sm:mb-4">Discover Featured Creators</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find the perfect professional for your property content needs
                </p>
              </div>
              
              {/* Search bar */}
              <div className="w-full">
                <SearchBar onLocationSelect={() => {}} />
              </div>
            
              {/* Creator cards - only this section gets the shine border */}
              <ShineBorder 
                borderRadius={12}
                borderWidth={2}
                duration={10}
                color={["#4F46E5", "#8B5CF6", "#EC4899"]}
                className="w-full"
              >
                <div className="w-full">
                  <CreatorsList 
                    creators={[
                      {
                        name: "Emily Johnson",
                        services: ["Photography", "Virtual Staging"],
                        price: 150,
                        rating: 4.9,
                        reviews: 127,
                        location: "New York, NY",
                        image: "/newemilyprofile.jpg",
                        workExamples: ["/1-d2e3f802.jpg"]
                      },
                      {
                        name: "Jane Cooper",
                        services: ["Video Tours", "Drone Footage"],
                        price: 200,
                        rating: 4.8,
                        reviews: 98,
                        location: "Los Angeles, CA",
                        image: "/janeprofile.png",
                        workExamples: ["/janesub.jpg", "/janesub2.png", "/janesub3.webp"]
                      },
                      {
                        name: "Michael Brown",
                        services: ["3D Tours", "Floor Plans"],
                        price: 175,
                        rating: 4.7,
                        reviews: 82,
                        location: "Chicago, IL",
                        image: "/emily profile.jpeg",
                        workExamples: ["/1-d2e3f802.jpg"]
                      }
                    ]}
                    sortBy="rating"
                    onSort={() => {}}
                    onImageLoad={() => {}}
                    loadedImages={new Set()}
                    imageRef={() => {}}
                  />
                </div>
              </ShineBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSearch;
