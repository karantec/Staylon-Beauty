import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/test/1.jpg",
    },
    {
      image: "/test/2.jpg",
    },
    {
      image: "/test/3.jpg",
    },
    {
      image: "/test/4.jpg",
    },
    {
      image: "/test/5.jpg",
    },
    {
      image: "/test/6.jpg",
    },
    {
      image: "/test/7.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 250);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 250);
  };

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 250);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Our Happy Clients
          </h2>
          <p className="text-xl text-rose-500 max-w-2xl mx-auto leading-relaxed">
            See what our clients have to say about us! Real testimonials from real people.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-9xl mx-auto">
          <div className="bg-black rounded-3xl shadow-2xl overflow-hidden">
            {/* Image Container */}
            <div className="relative">
              <img
                src={testimonials[currentIndex].image}
                alt={`Testimonial ${currentIndex + 1}`}
                className={`w-full h-auto max-h-96 object-contain rounded-3xl transition-all duration-500 ${
                  isAnimating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-rose-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-rose-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index 
                  ? "bg-rose-500 w-8 shadow-lg" 
                  : "bg-rose-200 w-3 hover:bg-rose-300"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mt-6">
          <div className="bg-rose-100 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-rose-500 h-full rounded-full transition-all duration-4000 ease-linear"
              style={{ 
                width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;