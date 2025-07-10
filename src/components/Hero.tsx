import React, { useState } from 'react';
import { Play, Pause, Download, Share2 } from 'lucide-react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Cover_Podcast.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8 mt-32">
        <img 
            src="/Logo.png" 
            alt="Fisching for Energy Logo" 
            className="h-28 w-auto mx-auto mb-6 drop-shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
         
          <span className="block text-[#FF463C]"></span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Der Podcast über nachhaltige Energie, Innovation und die Zukunft unseres Planeten
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="#episodes"
            className="flex items-center space-x-3 bg-[#FF463C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e63d34] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <Play size={24} />
            <span>Neueste Episode</span>
          </a>


          <button className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
            <Share2 size={20} />
            <span>Teilen</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-[#FF463C] mb-2">10+</div>
            <div className="text-gray-200">Episoden</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-[#FF463C] mb-2">50K+</div>
            <div className="text-gray-200">Hörer</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl mb-32 sm:mb-0 p-6 border border-white/20">
            <div className="text-3xl font-bold text-[#FF463C] mb-2">4.8★</div>
            <div className="text-gray-200">Bewertung</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mt-32">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;