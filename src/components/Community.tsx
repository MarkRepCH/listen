import React, { useState } from 'react';
import { Users, MessageCircle, Send, Star, Calendar, Award, CheckCircle } from 'lucide-react';

const Community = () => {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      // In einer echten Anwendung würde hier eine API-Anfrage gesendet werden
      console.log('Frage eingereicht:', {
        question: question.trim(),
        email: email.trim() || 'Anonym',
        timestamp: new Date().toISOString(),
        guestName: upcomingGuest.name
      });
      
      setIsSubmitted(true);
      setQuestion('');
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const upcomingGuest = {
    name: "Amelie Müller",
    title: "Leiterin Nachhaltigkeitsstrategie",
    company: "Swiss Re",
    expertise: "Klimarisiken & Nachhaltige Finanzierung",
    bio: "Amelie Müller ist eine führende Expertin für Klimarisiken und nachhaltige Finanzierung. Bei Swiss Re leitet sie die Entwicklung innovativer Versicherungslösungen für erneuerbare Energien und Klimaanpassung. Mit über 15 Jahren Erfahrung in der Finanzbranche bringt sie einzigartige Einblicke in die Schnittstelle zwischen Klimawandel und Wirtschaft mit.",
    topics: [
      "Klimarisiken in der Versicherungsbranche",
      "Finanzierung von Erneuerbaren Energien",
      "ESG-Kriterien und Nachhaltigkeit",
      "Klimaanpassungsstrategien"
    ],
    image: "/Cover_1-min.jpg", // Placeholder image
    recordingDate: "28. Februar 2024",
    achievements: [
      "Top 40 unter 40 Nachhaltigkeitsexperten 2023",
      "Autorin von 'Climate Finance Revolution'",
      "Keynote Speaker bei der UN Climate Finance Summit"
    ]
  };

  const communityStats = [
    { number: "2.5K+", label: "Community Mitglieder" },
    { number: "150+", label: "Eingereichte Fragen" },
    { number: "25+", label: "Beantwortet im Podcast" },
    { number: "4.9★", label: "Community Rating" }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users size={48} className="text-[#FF463C] mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Community
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Werden Sie Teil unserer wachsenden Community und gestalten Sie den Podcast mit. 
            Stellen Sie Fragen an unsere Gäste und diskutieren Sie über die Zukunft der Energie.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-[#FF463C] mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Upcoming Guest Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20">
          <div className="bg-gradient-to-r from-[#FF463C] to-[#e63d34] text-white p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold">Nächster Gast</h3>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={20} className="mr-2" />
                <span className="font-medium">{upcomingGuest.recordingDate}</span>
              </div>
            </div>
            <p className="text-white/90 text-lg">
              Seien Sie dabei, wenn wir mit unserem nächsten Gast über die Zukunft der nachhaltigen Finanzierung sprechen.
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Guest Image and Basic Info */}
              <div className="lg:col-span-1">
                <div className="relative mb-6">
                  <img 
                    src={upcomingGuest.image} 
                    alt={upcomingGuest.name}
                    className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-4 right-4 bg-[#FF463C] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Nächster Gast
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{upcomingGuest.name}</h4>
                  <p className="text-lg text-[#FF463C] font-semibold mb-1">{upcomingGuest.title}</p>
                  <p className="text-gray-600 mb-4">{upcomingGuest.company}</p>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Expertise</div>
                    <div className="text-gray-900 font-semibold">{upcomingGuest.expertise}</div>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Über unseren Gast</h5>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {upcomingGuest.bio}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <MessageCircle size={20} className="mr-2 text-[#FF463C]" />
                        Gesprächsthemen
                      </h6>
                      <ul className="space-y-2">
                        {upcomingGuest.topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-[#FF463C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h6 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award size={20} className="mr-2 text-[#FF463C]" />
                        Auszeichnungen
                      </h6>
                      <ul className="space-y-2">
                        {upcomingGuest.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <Star size={16} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Submission */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Stellen Sie Ihre Frage
              </h3>
              <p className="text-lg text-gray-600">
                Haben Sie eine Frage an {upcomingGuest.name}? Reichen Sie sie hier ein und 
                sie könnte in der nächsten Episode beantwortet werden!
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-800 mb-2">Vielen Dank!</h4>
                <p className="text-green-700">
                  Ihre Frage wurde erfolgreich eingereicht. Wir werden sie an {upcomingGuest.name} weiterleiten 
                  und hoffentlich in der nächsten Episode beantworten.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Ihre E-Mail-Adresse (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF463C] focus:border-transparent transition-colors"
                      placeholder="ihre.email@beispiel.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Optional: Für Rückfragen oder Updates zur Episode
                    </p>
                  </div>
                  <div className="flex items-end">
                    <div className="bg-gray-50 rounded-lg p-4 w-full">
                      <div className="text-sm text-gray-600">
                        <strong>Tipp:</strong> Stellen Sie spezifische Fragen zu {upcomingGuest.expertise.toLowerCase()}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Frage an {upcomingGuest.name} *
                  </label>
                  <textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF463C] focus:border-transparent transition-colors resize-none"
                    placeholder="Welche Rolle spielen Versicherungen bei der Finanzierung von Klimaschutzprojekten?"
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {question.length}/500 Zeichen
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#FF463C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e63d34] transition-colors flex items-center justify-center space-x-2 mx-auto"
                  >
                    <Send size={20} />
                    <span>Frage einreichen</span>
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  Durch das Einreichen stimmen Sie zu, dass Ihre Frage möglicherweise im Podcast verwendet wird.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Community-Richtlinien</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-[#FF463C] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle size={24} />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Respektvoller Umgang</h5>
              <p className="text-gray-600 text-sm">
                Behandeln Sie alle Community-Mitglieder mit Respekt und Höflichkeit.
              </p>
            </div>
            <div>
              <div className="bg-[#FF463C] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star size={24} />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Qualitätsfragen</h5>
              <p className="text-gray-600 text-sm">
                Stellen Sie durchdachte, spezifische Fragen zu nachhaltiger Energie.
              </p>
            </div>
            <div>
              <div className="bg-[#FF463C] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users size={24} />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Gemeinsam lernen</h5>
              <p className="text-gray-600 text-sm">
                Teilen Sie Ihr Wissen und lernen Sie von anderen Community-Mitgliedern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;