import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Star, MapPin, Clock, Utensils, Car, Award, Home } from 'lucide-react';

const ZonaTourismReplica = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'accommodation', label: 'Accommodation' },
    { id: 'places', label: 'Places' },
    { id: 'events', label: 'Events' },
    { id: 'go-zona', label: 'GoZoNa' }
  ];

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const RecommendationCard = ({ image, title, description, highlight, gradient }) => (
    <div className={`relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 ${gradient} group cursor-pointer`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
      <div className="h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <div className="text-sm opacity-90 space-y-1 mb-3">
          {description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <p className="text-yellow-300 font-semibold text-sm">✨ {highlight}</p>
      </div>
    </div>
  );

  const ReviewCard = ({ initial, name, review, bgColor, avatar }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
      <div className="flex gap-4">
        <div className={`w-14 h-14 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-lg`}>
          {initial}
        </div>
        <div className="flex-1">
          <div className="font-bold text-white mb-2">{name}</div>
          <p className="text-gray-300 text-sm leading-relaxed">{review}</p>
        </div>
      </div>
    </div>
  );

  if (activeSection !== 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-6 capitalize">
            {activeSection.replace('-', ' ')} Section
          </h2>
          <p className="text-xl opacity-80 mb-8">This section is under development</p>
          <button
            onClick={() => showSection('home')}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            <Home className="inline mr-2" size={20} />
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl' : 'bg-white/90 backdrop-blur-md'
      }`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => showSection('home')}>
            <div className="text-4xl font-black">
              <span className="text-yellow-500">Z</span>
              <span className="text-blue-500">o</span>
              <span className="text-gray-600">N</span>
              <span className="text-blue-500">a</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => showSection(item.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t shadow-2xl">
            <ul className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => showSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white py-20 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
                  Ready to explore<br />
                  <span className="text-yellow-300 drop-shadow-lg">Batam?</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed opacity-90">
                  Lost is not an option anymore.<br />
                  Let ZoNa guide you like a local.
                </p>
                <button
                  onClick={() => showSection('places')}
                  className="bg-yellow-400 text-blue-800 px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-yellow-400/25"
                >
                  Discover Batam
                  <ChevronRight className="inline ml-2" size={20} />
                </button>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-64 flex items-center justify-center overflow-hidden shadow-inner">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-2xl">
                      <img src="images/bare.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why ZoNa Section */}
        <section className="py-20 bg-gradient-to-br from-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-blue-600 mb-4">
                Why ZoNa?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your ultimate guide to exploring Batam with ease and confidence.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: 'Top-Rated Attraction',
                  desc: 'From luxurious resorts to vibrant markets, we\'ve gathered all of it.',
                  color: 'bg-yellow-500'
                },
                {
                  icon: <Home className="w-8 h-8" />,
                  title: 'Stay Comfortably',
                  desc: 'Choose your home away from home that suits your preferences.',
                  color: 'bg-blue-500'
                },
                {
                  icon: <Utensils className="w-8 h-8" />,
                  title: 'Local Cuisines',
                  desc: 'Discover traditional local cafes to fresh seafood restaurants.',
                  color: 'bg-red-500'
                },
                {
                  icon: <Car className="w-8 h-8" />,
                  title: 'Trip Everywhere',
                  desc: 'Become a local; we help you to travel easily and efficiently.',
                  color: 'bg-green-500'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`${feature.color} w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendation Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-blue-600 mb-4">
                Recommendation
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Try the experience, then allow us to know your opinion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RecommendationCard
                title="Montigo Resort Nongsa"
                image={'images/montigo-resorts-nongsa.jpg'}
                description="📍 2.3 km from Hang Nadim Intl. Airport
                ⛴️ 1.1 km from Batam Centre Ferry Port
                🏖️ 5 km from Nagoya Business Beach"
                highlight="A resort with stunning ocean views"
                gradient="bg-gradient-to-br from-blue-500 to-purple-600"
              />
              <RecommendationCard
                title="Pulau Penyengat"
                image={'images/masjid_penyengat.jpg'}                
                description="📍 2 km from Batam Pinang
                ⛴️ 1 hour from Harbour Bay Ferry Port
                🏖️ 1 hour from Kijang Ferry Port"
                highlight="Your go-to for historical island exploration"
                gradient="bg-gradient-to-br from-green-500 to-blue-500"
              />
              <RecommendationCard
                title="Luti Gendang"
                image={'images/luti-gendang.jpg'}
                description="🍽️ Fried dough filled with rich spices
                😋 Savory, a good discovery for first-timers
                🛒 Available at most traditional markets"
                highlight="Authentic traditional cuisine you must try"
                gradient="bg-gradient-to-br from-orange-500 to-red-500"
              />
            </div>
          </div>
        </section>

        {/* GoZoNa Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-1">
                <h2 className="text-4xl font-black mb-8">
                  Explore Batam with <span className="text-yellow-300">GoZoNa</span>
                </h2>
                <p className="text-2xl mb-6 text-blue-100 font-light">
                  Your seamless way to explore Batam
                </p>
                <p className="mb-6 text-blue-100 leading-relaxed text-lg">
                  Discover top destinations, comfy rides, and curated experiences - all in one trip.
                </p>
                <p className="mb-8 text-blue-100 leading-relaxed">
                  By <span className="font-bold text-yellow-300">GoZoNa</span>, we collaborate with the government and local partners, delivering a comfortable, authentic cultural journey.
                </p>
                <button
                  onClick={() => showSection('go-zona')}
                  className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 shadow-2xl transform hover:scale-105"
                >
                  Explore GoZoNa
                  <ChevronRight className="inline ml-2" size={20} />
                </button>
              </div>
              
              <div className="text-center lg:order-2">
                <div className="w-32 h-32 mx-auto bg-yellow-400 rounded-full flex items-center justify-center text-6xl shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  🚌
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advertisement Section */}
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-gray-300 to-gray-400 rounded-3xl h-40 flex items-center justify-center shadow-xl">
              <span className="text-4xl font-black text-gray-600 tracking-widest">ADS</span>
            </div>
          </div>
        </section>

        {/* Users Review Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-black mb-16 text-center">Users Review</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <ReviewCard
                initial="H"
                name="Himmel"
                review="The website is very clear, helpful, and not confusing. There is also a recommendation part to show popular things, which helped me to make up my plans."
                bgColor="bg-gradient-to-r from-blue-500 to-blue-600"
              />
              <ReviewCard
                initial="T"
                name="Thorinn"
                review="First time using this website, happy with the planned and awesome website interface to discover."
                bgColor="bg-gradient-to-r from-yellow-500 to-orange-500"
              />
            </div>

            <div className="text-center">
              <p className="text-2xl mb-6 font-light">Give us some star(s)?</p>
              <div className="flex justify-center gap-2 text-4xl mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform cursor-pointer" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-4xl font-black cursor-pointer">
                  <span className="text-yellow-400">Z</span>
                  <span className="text-blue-400">o</span>
                  <span className="text-gray-300">N</span>
                  <span className="text-blue-400">a</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 flex items-center">
                📧 <a href="mailto:zona.official@gmail.com" className="ml-2 hover:text-blue-300 transition-colors">zona.official@gmail.com</a>
              </p>
              <address className="text-gray-400 text-sm not-italic leading-relaxed">
                📍 Engku Putri, Kec. Batam, Kec. Batam Kota,<br />
                Kota Batam, Kepulauan Riau, Indonesia
              </address>
            </div>

            <div className="text-right">
              <h4 className="text-xl font-bold mb-6">Connect with Us</h4>
              <div className="flex justify-end gap-4 mb-6">
                <a href="#" className="text-3xl hover:text-red-400 transition-colors transform hover:scale-110">📺</a>
                <a href="#" className="text-3xl hover:text-blue-400 transition-colors transform hover:scale-110">❌</a>
                <a href="#" className="text-3xl hover:text-pink-400 transition-colors transform hover:scale-110">📷</a>
              </div>

              <div className="flex gap-3 justify-end">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg">
                  ENG
                </button>
                <button className="bg-gray-700 text-gray-300 px-6 py-3 rounded-full font-bold hover:bg-gray-600 transition-all">
                  IND
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ZoNa. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default ZonaTourismReplica;