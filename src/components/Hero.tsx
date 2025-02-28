
"use client";

import { useEffect, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { WaitlistCTA } from "./ui/waitlist-cta";
import { CreatorSearchSection } from "./CreatorSearchSection";

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const isMobile = useIsMobile();
  const titles = useMemo(() => ["Converts", "Engages", "Drives Leads"], []);
  
  useEffect(() => {
    const timeout = isMobile ? 2500 : 2000;
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, timeout);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length, isMobile]);
  
  return <div className="w-full relative">
      <div className="w-full py-0 bg-white">
        <section className={cn(
          "flex items-center justify-center flex-col", 
          "px-4 sm:px-6", 
          "py-[40px] sm:py-[64px]", 
          "my-[32px] sm:my-[48px]", 
          "min-h-fit sm:min-h-[70vh]", 
          "relative z-10", 
          "gap-4 sm:gap-6"
        )}>
          <div className="flex gap-6 sm:gap-8 flex-col max-w-10xl mx-auto w-full px-[3px]">
            <h1 className="tracking-tight leading-[1.1] text-center font-bold">
              <span className={cn(
                "text-primary inline font-light", 
                "text-4xl sm:text-5xl lg:text-6xl", 
                "tracking-[-0.02em]",
                "text-gray-900",
                "block sm:inline-block mb-2 sm:mb-0"
              )}>
                Property Content that
              </span>
              <span role="text" aria-label={`Property Content that ${titles[titleNumber]}`} className="relative flex w-full justify-center h-[1.6em] sm:h-[1.8em] md:h-[1.6em] lg:h-[1.4em] overflow-hidden mt-2 sm:mt-3">
                {titles.map((title, index) => (
                  <span 
                    key={index} 
                    className={cn(
                      "absolute font-playfair tracking-[-0.02em]",
                      "text-gray-800",
                      titleNumber === index && "text-5xl sm:text-6xl lg:text-7xl"
                    )}
                    style={{
                      opacity: titleNumber === index ? 1 : 0,
                      transform: `translateY(${titleNumber === index ? 0 : (titleNumber > index ? -20 : 20)}px)`,
                      transition: "opacity 0.3s ease, transform 0.3s ease"
                    }}
                  >
                    {title}
                  </span>
                ))}
              </span>
            </h1>

            <p className={cn(
              "text-sm sm:text-lg lg:text-xl", 
              "leading-[1.6]", 
              "tracking-wide", 
              "text-gray-700", 
              "text-center", 
              "max-w-[650px]", 
              "mx-auto", 
              "px-4 sm:px-6", 
              "[word-spacing:0.12em] sm:[word-spacing:0.16em]", 
              "relative z-10", 
              "mt-2 mb-0"
            )}>
              Connect with expert content creators for your next project. Our AI-powered platform matches you with the perfect professional for your needs and budget.
            </p>
          </div>
          
          <div className={cn("w-full", "mt-4 sm:mt-6", "px-4 sm:px-6")}>
            <WaitlistCTA className="mb-6" />
          </div>
          
          {/* Creator Search Section added below WaitlistCTA */}
          <div className="w-full mt-4">
            <CreatorSearchSection className="mx-auto" />
          </div>
        </section>
      </div>
    </div>;
}

export default Hero;
