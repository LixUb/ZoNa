import React, { useState, useEffect, useRef } from 'react';

const ZoNaTourism = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="text-yellow-400">Z</span>
              <span className="text-blue-500">o</span>
              <span className="text-gray-600">N</span>
              <span className="text-blue-500">a</span>
            </div>
            <div className="ml-2 flex">
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'accommodation', label: 'Accommodation' },
              { id: 'places', label: 'Places' },
              { id: 'events', label: 'Events' },
              { id: 'go-zona', label: 'GoZoNa' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => showSection(item.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white'
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
            className="md:hidden text-gray-600 text-2xl p-2"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <ul className="flex flex-col p-4 gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'accommodation', label: 'Accommodation' },
                { id: 'places', label: 'Places' },
                { id: 'events', label: 'Events' },
                { id: 'go-zona', label: 'GoZoNa' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => showSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
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
        {activeSection === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white py-20 overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      Ready to explore<br />
                      <span className="text-yellow-300">Batam?</span>
                    </h1>
                    <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                      Lost is not an option anymore.<br />
                      Let ZoNa guide you like a local.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                      <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" 
                          alt="Barelang Bridge Batam"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    {/* Navigation Arrow */}
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Why ZoNa Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">
                  Why ZoNa?
                </h2>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                  {[
                    {
                      icon: '🏆',
                      title: 'Top-Rated Attraction',
                      desc: 'From luxurious resort to vibrant markets, we ve gathered all of it.'
                    },
                    {
                      icon: '🏨',
                      title: 'Stay Comfortably',
                      desc: 'Choose your home away from homes that suit your preferences.'
                    },
                    {
                      icon: '🍽️',
                      title: 'Local Cuisines',
                      desc: 'Discover traditional local cafes to seafood.'
                    },
                    {
                      icon: '🚗',
                      title: 'Trip Everywhere',
                      desc: 'Become a local, we help you to travel easily.'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Recommendation Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">
                  Recommendation
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Try the experience, then allow us to know your opinion
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      image: 'URL_GAMBAR_MONTIGO_RESORT',
                      title: 'Montigo Resort Nongsa',
                      distance: '2.3 km from Hang Nadim Intl. Airport',
                      ferry: '1.1 km from Batam Centre Ferry Port',
                      beach: '5 km from Nagoya Business Beach',
                      highlight: 'A resort with ocean view'
                    },
                    {
                      image: 'URL_GAMBAR_PULAU_PENYENGAT',
                      title: 'Pulau Penyengat',
                      distance: '2 km from Batam Pinang',
                      ferry: '1 hour from Harbour Bay Ferry Port',
                      beach: '1 hour from Kijang Ferry Port',
                      highlight: 'Your go to the historical island'
                    },
                    {
                      image: 'URL_GAMBAR_LUTI_GENDANG',
                      title: 'Luti Gendang',
                      distance: 'Fried dough filled with rich spice',
                      ferry: 'Savory, a good discovery for first timer',
                      beach: 'Available at most traditional market',
                      highlight: 'Authentic traditional cuisine'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-3 text-gray-800">{item.title}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>📍 {item.distance}</p>
                          <p>⛴️ {item.ferry}</p>
                          <p>🏖️ {item.beach}</p>
                          <p className="font-medium text-blue-600 mt-2">✨ {item.highlight}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* GoZoNa Section */}
            <section className="py-16 bg-blue-600 text-white">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:order-2">
                    <div className="text-6xl mb-4">🚌</div>
                  </div>
                  <div className="lg:order-1">
                    <h2 className="text-3xl font-bold mb-6">
                      Explore Batam with <span className="text-yellow-300">GoZoNa</span>
                    </h2>
                    <p className="text-xl mb-4 text-blue-100">
                      Your seamless way to explore Batam
                    </p>
                    <p className="mb-4 text-blue-100">
                      Discover top destinations, comfy rides, and curated experiences - all in one trip.
                    </p>
                    <p className="mb-6 text-blue-100">
                      By <span className="font-bold text-yellow-300">GoZoNa</span>, we collaborate with the government and local partners, delivering a comfortable, authentic cultural journey.
                    </p>
                    <button 
                      onClick={() => showSection('go-zona')}
                      className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Advertisement Section */}
            <section className="py-12 bg-gray-100">
              <div className="container mx-auto px-6">
                <div className="bg-gray-300 rounded-xl h-32 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">ADS</span>
                </div>
              </div>
            </section>

            {/* Users Review Section */}
            <section className="py-16 bg-gray-800 text-white">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Users Review</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">H</span>
                    </div>
                    <div>
                      <div className="font-bold mb-1">Himmel</div>
                      <p className="text-gray-300 text-sm">
                        "The website is very clear, helpful, and not confusing. There is also a recommendation part to show popular things, which helped me to make up my plans."
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">T</span>
                    </div>
                    <div>
                      <div className="font-bold mb-1">Thorinn</div>
                      <p className="text-gray-300 text-sm">
                        "First time using this website happy with the planned and awesome website interface to discover"
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-lg mb-4">Give us some star(s)?</p>
                  <div className="flex justify-center gap-2 text-2xl">
                    {'⭐'.repeat(5)}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Other Sections Placeholder */}
        {activeSection !== 'home' && (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 capitalize">
                {activeSection.replace('-', ' ')} Section
              </h2>
              <p className="text-gray-600 mb-8">This section is under development</p>
              <button 
                onClick={() => showSection('home')}
                className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold">
                  <span className="text-yellow-400">Z</span>
                  <span className="text-blue-400">o</span>
                  <span className="text-gray-300">N</span>
                  <span className="text-blue-400">a</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">📧 zona.official@gmail.com</p>
              <p className="text-gray-400 text-sm">
                📍 Engku Putri, Kec. Batam, Kec. Batam Kota,<br />
                Kota Batam, Kepulauan Riau, Indonesia
              </p>
            </div>
            
            <div className="text-right">
              <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
              <div className="flex justify-end gap-4 mb-4">
                <a href="#" className="text-2xl hover:text-blue-400 transition-colors">📺</a>
                <a href="#" className="text-2xl hover:text-gray-400 transition-colors">❌</a>
                <a href="#" className="text-2xl hover:text-pink-400 transition-colors">📷</a>
              </div>
              
              <div className="flex gap-2 justify-end">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  ENG
                </button>
                <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors">
                  IND
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 ZoNa. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ZoNaTourism;