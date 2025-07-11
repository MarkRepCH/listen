import React, { useState } from 'react';
import { Play, Clock, Calendar, Download, Heart } from 'lucide-react';

const Episodes = () => {
  const [likedEpisodes, setLikedEpisodes] = useState<number[]>([]);

  const episodes = [
    {
      id: 1,
      title: "Die Zukunft der Solarenergie: Perovskite und neue Materialien",
      description: "Ein tiefgreifender Blick auf die neuesten Entwicklungen in der Solartechnologie und wie Perovskite-Zellen die Branche revolutionieren könnten.",
      duration: "45:32",
      date: "15. Januar 2024",
      guest: "Dr. Sarah Müller, Fraunhofer ISE",
      category: "Solarenergie"
    },
    {
      id: 2,
      title: "Offshore-Windparks: Giganten der Energiewende",
      description: "Wie schwimmende Windparks neue Möglichkeiten für die Windenergie eröffnen und welche technischen Herausforderungen dabei zu meistern sind.",
      duration: "52:18",
      date: "8. Januar 2024",
      guest: "Prof. Michael Schmidt, TU Hamburg",
      category: "Windenergie"
    },
    {
      id: 3,
      title: "Wasserstoff: Der Energieträger der Zukunft?",
      description: "Eine umfassende Analyse der Wasserstofftechnologie, ihrer Potentiale und Grenzen in der zukünftigen Energieversorgung.",
      duration: "48:45",
      date: "1. Januar 2024",
      guest: "Dr. Anna Weber, Max-Planck-Institut",
      category: "Wasserstoff"
    },
    {
      id: 4,
      title: "Smart Grids: Intelligente Stromnetze für die Energiewende",
      description: "Wie künstliche Intelligenz und IoT-Technologien unsere Stromnetze revolutionieren und die Integration erneuerbarer Energien ermöglichen.",
      duration: "41:27",
      date: "25. Dezember 2023",
      guest: "Thomas Klein, Siemens Energy",
      category: "Smart Grid"
    },
    {
      id: 5,
      title: "Batterietechnologie: Von Lithium zu Natrium",
      description: "Die neuesten Entwicklungen in der Batterietechnologie und warum Natrium-Ionen-Batterien die Zukunft der Energiespeicherung sein könnten.",
      duration: "39:15",
      date: "18. Dezember 2023",
      guest: "Dr. Lisa Chen, CATL Europe",
      category: "Speichertechnologie"
    },
    {
      id: 6,
      title: "Geothermie: Die unterschätzte Energiequelle",
      description: "Warum Geothermie eine Schlüsselrolle in der Energiewende spielen könnte und welche innovativen Ansätze es gibt.",
      duration: "44:33",
      date: "11. Dezember 2023",
      guest: "Prof. Robert Fischer, GFZ Potsdam",
      category: "Geothermie"
    }
  ];

  const toggleLike = (episodeId: number) => {
    setLikedEpisodes(prev => 
      prev.includes(episodeId) 
        ? prev.filter(id => id !== episodeId)
        : [...prev, episodeId]
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Solarenergie': 'bg-yellow-100 text-yellow-800',
      'Windenergie': 'bg-blue-100 text-blue-800',
      'Wasserstoff': 'bg-green-100 text-green-800',
      'Smart Grid': 'bg-purple-100 text-purple-800',
      'Speichertechnologie': 'bg-orange-100 text-orange-800',
      'Geothermie': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="episodes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Neueste Episoden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere neuesten Gespräche über die Zukunft der Energie
          </p>
        </div>

        <div className="space-y-8">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#FF463C] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(episode.category)}`}>
                      {episode.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {episode.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      {episode.duration}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF463C] transition-colors">
                    {episode.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {episode.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 font-medium">
                      Mit: {episode.guest}
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => toggleLike(episode.id)}
                        className={`p-2 rounded-full transition-colors ${
                          likedEpisodes.includes(episode.id) 
                            ? 'text-[#FF463C] bg-red-50' 
                            : 'text-gray-400 hover:text-[#FF463C] hover:bg-red-50'
                        }`}
                      >
                        <Heart size={20} fill={likedEpisodes.includes(episode.id) ? 'currentColor' : 'none'} />
                      </button>
                      
                      <button className="p-2 rounded-full text-gray-400 hover:text-[#FF463C] hover:bg-gray-100 transition-colors">
                        <Download size={20} />
                      </button>
                      
                      <button className="bg-[#FF463C] text-white px-6 py-2 rounded-full font-medium hover:bg-[#e63d34] transition-colors">
                        Anhören
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Alle Episoden anzeigen
          </button>
        </div>

        {/* Spotify Integration */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Hören Sie uns auf Spotify
            </h3>
            <p className="text-lg text-gray-600">
              Alle Episoden sind auch direkt auf Spotify verfügbar
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <iframe 
              style={{borderRadius: '12px'}} 
              src="https://open.spotify.com/embed/playlist/6ZV7Fit84TutFx6Oo3t873?utm_source=generator" 
              width="100%" 
              height="370" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;