import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft, Download, Copy, Check } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

interface TranscriptSegment {
  timestamp: string;
  speaker: string;
  text: string;
}

const TranscriptPage = () => {
  const { episodeId } = useParams<{ episodeId: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedResults, setHighlightedResults] = useState<number[]>([]);
  const [currentResult, setCurrentResult] = useState(0);
  const [copied, setCopied] = useState(false);

  // Mock transcript data - in a real app, this would come from an API
  const transcript: TranscriptSegment[] = [
    {
      timestamp: "00:00",
      speaker: "Host",
      text: "Willkommen zu einer neuen Episode von Fisching for Energy. Heute sprechen wir über die Zukunft der Solarenergie und die revolutionären Entwicklungen bei Perovskite-Zellen."
    },
    {
      timestamp: "00:15",
      speaker: "Dr. Sarah Müller",
      text: "Vielen Dank für die Einladung. Perovskite-Zellen sind wirklich ein Gamechanger in der Photovoltaik-Industrie. Sie bieten das Potenzial für deutlich höhere Wirkungsgrade bei gleichzeitig niedrigeren Produktionskosten."
    },
    {
      timestamp: "00:35",
      speaker: "Host",
      text: "Das klingt vielversprechend. Können Sie uns erklären, was Perovskite-Zellen so besonders macht und wie sie sich von herkömmlichen Silizium-Solarzellen unterscheiden?"
    },
    {
      timestamp: "00:50",
      speaker: "Dr. Sarah Müller",
      text: "Perovskite haben eine einzigartige Kristallstruktur, die es ermöglicht, Licht sehr effizient zu absorbieren. Im Gegensatz zu Silizium können sie bei niedrigeren Temperaturen hergestellt werden, was den Energieaufwand in der Produktion erheblich reduziert."
    },
    {
      timestamp: "01:15",
      speaker: "Host",
      text: "Welche Herausforderungen gibt es noch bei der Kommerzialisierung dieser Technologie?"
    },
    {
      timestamp: "01:25",
      speaker: "Dr. Sarah Müller",
      text: "Die größte Herausforderung ist derzeit die Langzeitstabilität. Während Silizium-Module 25 Jahre oder länger halten, müssen wir bei Perovskiten noch an der Haltbarkeit arbeiten. Aber die Fortschritte sind vielversprechend."
    }
  ];

  const episodeTitle = "Die Zukunft der Solarenergie: Perovskite und neue Materialien";
  const episodeDate = "15. Januar 2024";
  const episodeDuration = "45:32";

  useEffect(() => {
    if (searchTerm) {
      const results: number[] = [];
      transcript.forEach((segment, index) => {
        if (segment.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
            segment.speaker.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push(index);
        }
      });
      setHighlightedResults(results);
      setCurrentResult(0);
    } else {
      setHighlightedResults([]);
      setCurrentResult(0);
    }
  }, [searchTerm]);

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const scrollToResult = (direction: 'next' | 'prev') => {
    if (highlightedResults.length === 0) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentResult < highlightedResults.length - 1 ? currentResult + 1 : 0;
    } else {
      newIndex = currentResult > 0 ? currentResult - 1 : highlightedResults.length - 1;
    }
    
    setCurrentResult(newIndex);
    
    const element = document.getElementById(`segment-${highlightedResults[newIndex]}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const copyTranscript = async () => {
    const fullText = transcript.map(segment => 
      `[${segment.timestamp}] ${segment.speaker}: ${segment.text}`
    ).join('\n\n');
    
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy transcript:', error);
    }
  };

  const downloadTranscript = () => {
    const fullText = transcript.map(segment => 
      `[${segment.timestamp}] ${segment.speaker}: ${segment.text}`
    ).join('\n\n');
    
    const blob = new Blob([fullText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcript-episode-${episodeId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <Link 
              to="/#episodes" 
              className="flex items-center text-[#FF463C] hover:text-[#e63d34] transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Zurück zu Episoden
            </Link>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={copyTranscript}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Kopiert!' : 'Kopieren'}</span>
              </button>
              
              <button
                onClick={downloadTranscript}
                className="flex items-center space-x-2 px-4 py-2 bg-[#FF463C] text-white rounded-lg hover:bg-[#e63d34] transition-colors"
              >
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {episodeTitle}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <span>Episode {episodeId}</span>
            <span>•</span>
            <span>{episodeDate}</span>
            <span>•</span>
            <span>{episodeDuration}</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Im Transkript suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF463C] focus:border-transparent"
            />
          </div>
          
          {highlightedResults.length > 0 && (
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-gray-600">
                {highlightedResults.length} Ergebnis{highlightedResults.length !== 1 ? 'se' : ''} gefunden
                {highlightedResults.length > 1 && ` (${currentResult + 1} von ${highlightedResults.length})`}
              </span>
              
              {highlightedResults.length > 1 && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => scrollToResult('prev')}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                  >
                    Vorheriges
                  </button>
                  <button
                    onClick={() => scrollToResult('next')}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                  >
                    Nächstes
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Transcript Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Transkript</h2>
            
            <div className="space-y-6">
              {transcript.map((segment, index) => (
                <div
                  key={index}
                  id={`segment-${index}`}
                  className={`p-4 rounded-lg transition-colors ${
                    highlightedResults.includes(index) && currentResult === highlightedResults.indexOf(index)
                      ? 'bg-yellow-50 border-2 border-yellow-200'
                      : highlightedResults.includes(index)
                      ? 'bg-yellow-25 border border-yellow-100'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block bg-[#FF463C] text-white text-xs px-2 py-1 rounded font-mono">
                        {segment.timestamp}
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="font-semibold text-gray-900 mb-1">
                        {highlightText(segment.speaker, searchTerm)}
                      </div>
                      <div className="text-gray-700 leading-relaxed">
                        {highlightText(segment.text, searchTerm)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptPage;