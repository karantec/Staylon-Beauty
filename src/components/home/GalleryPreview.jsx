import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Nail gallery images
  const galleryImages = [
    '/banner/soft-get.jpg',
    '/banner/gelpolish.jpg',
        '/banner/Struture.jpg',

        '/banner/temp1.jpg',
    '/gallery/3.jpg',
    '/gallery/14.jpg',
    '/gallery/2.jpg',
    '/banner/temp-nail.jpg',
    '/gallery/10.jpg'
  ];

  // Nail categories for filtering
  const categories = ['All', 'Gel Polish', 'Extensions', 'Nail Art', 'BIAB'];
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            SHRINGAR.KAY<span className="text-rose-500">🤍</span> Nail Transformations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our gallery of stunning nail transformations that showcase our artistry, precision, and commitment to nail perfection.
          </p>
        </div>

        {/* Nail Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 
                ${activeCategory === category
                  ? 'bg-rose-500 text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item overflow-hidden rounded-xl shadow-lg relative ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={image || `/api/placeholder/400/300?text=Nail Art ${index + 1}`}
                alt={`Nail transformation ${index + 1}`}
                className={`w-full ${index === 0 ? 'h-96 sm:h-full' : 'h-64 sm:h-72'} object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />
              
              {/* Overlay on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-white text-xs font-medium uppercase tracking-wider mb-1">
                 
                </span>
                <h3 className="text-white text-lg font-bold mb-2">
                 
                </h3>
                <div className="flex items-center text-rose-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
     
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center">
          <Link to="/gallery">
            <button className="inline-flex items-center bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
              View Complete Nail Gallery
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;