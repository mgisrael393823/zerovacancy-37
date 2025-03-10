
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import PreviewSearch from '../components/PreviewSearch';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';
import HowItWorksSection from '../components/HowItWorksSection';
import { BottomNav } from '../components/navigation/BottomNav';
import { Banner } from '@/components/ui/banner';
import { Button } from '@/components/ui/button';
import { Star, Sparkle } from 'lucide-react';
import { GlowDialog } from '@/components/ui/glow-dialog';
import { Spotlight } from '@/components/ui/spotlight';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { FeaturesSectionWithHoverEffects } from '@/components/Features';
import Pricing from '@/components/Pricing';
import { AuroraBackground } from '@/components/ui/aurora-background';

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showGlowDialog, setShowGlowDialog] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    setShowGlowDialog(!hasVisited);
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleTryNowClick = () => {
    setShowGlowDialog(true);
  };

  return <div className="flex flex-col min-h-screen">
      <Header />
      {showBanner && <div className="relative">
          <Banner variant="purple" size="lg" action={<Button variant="secondary" size="sm" className="
                  flex text-xs sm:text-sm items-center 
                  whitespace-nowrap px-3 py-2 sm:px-5 sm:py-2.5
                  bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold
                  border-2 border-amber-300
                  transition-all duration-200
                  min-h-[2.25rem] sm:min-h-[2.5rem]
                  min-w-[8rem] sm:min-w-[9rem]
                  touch-manipulation
                  shadow-[0_2px_10px_rgba(0,0,0,0.15)]
                " onClick={handleTryNowClick}>
                Get Early Access
              </Button>} layout="complex" isClosable onClose={() => setShowBanner(false)} className="animate-in fade-in slide-in-from-top duration-500 relative overflow-hidden min-h-[3.25rem] sm:min-h-[3.5rem] my-0 py-0">
            <div className="flex items-center justify-center gap-3 sm:gap-4 relative z-10">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300 animate-pulse" />
              <AnimatedShinyText className="
                  text-sm sm:text-base font-bold inline-block
                  text-white relative z-10 rounded
                  px-1 tracking-wide
                " shimmerWidth={200}>
                Join the AI-powered revolution in property management!
              </AnimatedShinyText>
            </div>
          </Banner>
        </div>}

      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section - No animations or colors */}
        <div className="relative overflow-hidden bg-white">
          <Hero />
        </div>

        <div className="space-y-0">
          {/* How It Works Section - Adjusted spacing */}
          <div id="how-it-works" className="relative bg-gradient-to-b from-white via-gray-50 to-white py-8 sm:py-16 lg:py-20 overflow-hidden border-t border-b border-gray-100">
            <div className="absolute inset-0 bg-[radial-gradient(#f1f1f1_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
            <Spotlight className="from-blue-500/20 via-cyan-500/20 to-teal-500/20" size={350} />
            <div className="relative z-10">
              <HowItWorksSection />
            </div>
          </div>
          
          {/* Featured Creators Section - Adjusted spacing */}
          <div className="bg-white py-10 sm:py-16 lg:py-20 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <div id="search" className="relative overflow-hidden w-full">
                <PreviewSearch />
              </div>
            </div>
          </div>

          {/* Professional Content Creation Services - Adjusted spacing */}
          <div className="relative py-10 sm:py-16 lg:py-20 overflow-hidden bg-white border-t border-b border-gray-100">
            {/* Changed to plain white background without patterns or animations */}
            <div className="absolute inset-0 bg-white"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
              <FeaturesSectionWithHoverEffects />
            </div>
          </div>

          {/* Pricing Section - Adjusted spacing */}
          <div id="pricing" className="relative py-10 sm:py-16 lg:py-20 overflow-hidden bg-white border-b border-gray-100">
            {/* Removed background pattern */}
            <div className="absolute inset-0 bg-white"></div>
            <Spotlight className="from-indigo-500/20 via-purple-500/20 to-pink-500/20" size={350} />
            <div className="relative z-10 max-w-7xl mx-auto">
              <Pricing />
            </div>
          </div>

          {/* Final CTA Section - Adjusted spacing */}
          <div className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-[#F6F6F7]">
            <Spotlight className="from-purple-500/20 via-pink-500/20 to-red-500/20" size={350} />
            <div className="relative z-10 max-w-7xl mx-auto">
              <CallToActionSection />
            </div>
          </div>
        </div>

        <Footer />
      </main>
      <BottomNav />
      <GlowDialog open={showGlowDialog} onOpenChange={setShowGlowDialog} />
    </div>;
};
export default Index;
