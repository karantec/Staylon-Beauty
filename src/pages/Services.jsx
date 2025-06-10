import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Signature Nails');
  
  const serviceCategories = [
    {
      title: 'Signature Nails',
      services: [
        {
          title: 'Gel Polish Application',
          description: 'A flawless coat of high-gloss color, perfect for every occasion. Our premium gel polish provides long-lasting shine and durability without chipping.',
          image: '/banner/gelpolish.jpg',
          // price: '₹550'
        },
        {
          title: 'Temporary Nail Enhancements',
          description: 'Strengthen and enhance your natural nails with our premium builder base. This innovative treatment adds structure while allowing natural growth.',
          image: '/banner/temp1.jpg',
          // price: '₹750'
        },
       
        {
          title: 'Soft Gel Extensions',
          description: 'Seamless, flexible enhancements for a lightweight, natural feel. Our soft gel extensions move with your natural nails for comfort and durability.',
          image: '/banner/soft-get.jpg',
          // price: '₹900'
        },
         {
          title: 'Gum Gel Extensions',
          description: 'Seamless, flexible enhancements for a lightweight, natural feel. Our soft gel extensions move with your natural nails for comfort and durability.',
          image: '/banner/gumgel.jpg',
          // price: '₹900'
        },

      ]
    },
    {
      title: 'Premium Nails',
      services: [
        {
          title: 'Structure BIAB Enhancements',
          description: 'Ideal for those seeking durable, sculpted nail extensions that resist chipping and maintain their flawless shape over time. This treatment offers added resilience while preserving a sleek and stylish look — perfect for everyday wear or special occasions..',
          image: '/banner/Struture.jpg',
          // price: '₹950'
        },
        {
          title: 'Gel Extensions',
          description: 'Elevate your nails with our Premium Gel Extensions, expertly crafted for custom length and lasting strength. These extensions provide a smooth, glossy finish that serves as a flawless base for intricate nail art or classic styles. Designed for durability and beauty, they are the ultimate choice for a luxurious, long-lasting manicure..',
          image: '/banner/gel2.jpg',
          // price: '₹1200'
        },
        
      ]
    }
  ];

  // Find the active category
  const activeCategoryData = serviceCategories.find(cat => cat.title === activeCategory);

  // Limit to showing only 4 services
  const limitedServices = activeCategoryData?.services.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            SHRINGAR.KAY<span className="text-rose-500">🤍</span> Signature Nail Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury at your fingertips with our premium nail services, designed to enhance your natural beauty with precision and care.
          </p>
        </div>
        
        {/* Category Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.title)}
                className={`px-6 py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 
                  ${activeCategory === category.title 
                    ? 'bg-rose-500 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Services Grid - Limited to 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {limitedServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image || `/api/placeholder/400/300?text=${service.title}`} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                  <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded-full text-xs font-medium">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                <Link to="/appointment" className="block w-full">
                  <button className="w-full bg-gray-100 hover:bg-rose-500 hover:text-white text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Services Button */}
       
       
      </div>
    </section>
  );
};

export default ServicesSection;