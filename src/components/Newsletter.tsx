import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-[#FF463C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Mail size={64} className="text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bleiben Sie informiert
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Erhalten Sie wöchentlich die neuesten Episoden, Insights und 
            exklusive Inhalte direkt in Ihr Postfach.
          </p>
        </div>

        {isSubscribed ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <CheckCircle size={48} className="text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Vielen Dank!</h3>
            <p className="text-white/90">Sie haben sich erfolgreich für unseren Newsletter angemeldet.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                className="flex-grow px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#FF463C] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Abonnieren
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Keine Spam-Mails. Jederzeit abbestellbar.
            </p>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Wöchentlich</div>
            <div className="text-white/80">Neue Episoden</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Exklusiv</div>
            <div className="text-white/80">Bonus-Inhalte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Kostenlos</div>
            <div className="text-white/80">Immer gratis</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;