import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen, Anregungen oder möchten Sie als Gast im Podcast auftreten? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Schreiben Sie uns
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF463C] focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF463C] focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Betreff *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF463C] focus:border-transparent transition-colors"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="guest">Als Gast auftreten</option>
                  <option value="collaboration">Zusammenarbeit</option>
                  <option value="feedback">Feedback</option>
                  <option value="technical">Technische Frage</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF463C] focus:border-transparent transition-colors resize-none"
                  placeholder="Teilen Sie uns Ihr Anliegen mit..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF463C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e63d34] transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Nachricht senden</span>
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Weitere Kontaktmöglichkeiten
            </h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FF463C] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">E-Mail</h4>
                  <p className="text-gray-600">kontakt@fisching-for-energy.ch</p>
                  <p className="text-gray-600">redaktion@fisching-for-energy.ch</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF463C] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h4>
                  <p className="text-gray-600">@fischingforenergy</p>
                  <p className="text-gray-600">LinkedIn, Twitter, Instagram</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF463C] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h4>
                  <p className="text-gray-600">+41 123 456 789</p>
                  <p className="text-gray-500 text-sm">Mo-Fr, 9:00-17:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF463C] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Adresse</h4>
                  <p className="text-gray-600">
                    Fisching for Energy<br />
                    Bahnhofsplatz 1A<br />
                    Landquart                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Podcast-Gast werden?
              </h4>
              <p className="text-gray-600 mb-4">
                Sie sind Experte im Bereich nachhaltiger Energie oder haben eine 
                spannende Geschichte zu erzählen? Wir freuen uns auf Ihre Einsendung!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;