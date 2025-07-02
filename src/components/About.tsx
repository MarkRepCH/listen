import React from 'react';
import { Mic, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Über den Podcast
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fisching for Energy ist der führende Schweizer Podcast über nachhaltige Energie, 
            Klimawandel und Energiemanagement für eine bessere Zukunft.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Unsere Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Wir bringen komplexe Themen rund um erneuerbare Energien, Nachhaltigkeit und 
              Klimaschutz auf verständliche Weise näher. Durch Gespräche mit Experten, 
              Wissenschaftlern und Visionären schaffen wir Bewusstsein für das Energiemanagement und ihre Auswirkungen auf unser tägliches Leben.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Jede Episode ist eine Reise in die Welt der Energie. Wie bringe ich meinen Energiepegel nach oben? Wie motiviere ich mich und wie gewinne ich positive Energie? Was kann ich auch tun, um nicht nur mit meiner, sondern auch mit der Energie rund um mein
Leben nachhaltig umzugehen?
            </p>
          </div>
          <div className="relative">
            <img 
              src="/Cover_1-min.jpg" 
              alt="Podcast Hosts" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-[#FF463C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mic size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Expertengespräche</h4>
            <p className="text-gray-600">
              Interviews mit führenden Wissenschaftlern und Branchenexperten
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-[#FF463C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Community</h4>
            <p className="text-gray-600">
              Eine aktive Gemeinschaft von Energie-Enthusiasten und Umweltschützern
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-[#FF463C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Ausgezeichnet</h4>
            <p className="text-gray-600">
              Unsere Co-Moderatoren sind ausgezeichnete Podcaster 
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-[#FF463C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Themen</h4>
            <p className="text-gray-600">
              Die besprochenen Themen sind tiefgründig und betreffen uns Alle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;