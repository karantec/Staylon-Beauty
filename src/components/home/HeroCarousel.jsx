import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      image: "/banner/gum-gel.jpg",
      subtitle: "Luxury Gel Nails",
      title: "Gel Nails",
     
      ctaText: "Book Gel Nails",
      ctaLink: "/appointment?service=gel-nails",
    },
    {
      image: "/banner/Struture.jpg",
      subtitle: "Strong Yet Elegant",
      title: "Structured Nails / BIAB",
     
      ctaText: "Book Structured Nails",
      ctaLink: "/appointment?service=structured-nails",
    },
    
    {
      image: "/banner/temp1.jpg",
      subtitle: "Instant Beauty",
      title: "Temporary Nails",
    
      ctaText: "Book Temporary Nails",
      ctaLink: "/appointment?service=temporary-nails",
    },
    {
      image: "/banner/gumgel.jpg",
      subtitle: "Instant Beauty",
      title: "Gum Gel",
    
      ctaText: "Book Gum Gel",
      ctaLink: "/appointment?service=temporary-nails",
    },
    {
      image: "/banner/Gelextension.jpg",
      subtitle: "Elegant Extensions",
      title: "Gel Extensions",
     
      ctaText: "Book Gel Extensions",
      ctaLink: "/appointment?service=gel-extensions",
    },
    
  ];

  const CustomIndicator = ({ onClickHandler, isSelected, index, label }) => (
    <li
      className={`inline-block mx-2 mb-2 h-3 cursor-pointer transition-all duration-300 ${
        isSelected
          ? "w-12 bg-pink-500"
          : "w-3 bg-white bg-opacity-60 hover:bg-opacity-100"
      } rounded-full`}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );

  const getAnimationClass = (index) =>
    index === activeSlide && isLoaded
      ? "opacity-100 transform translate-y-0"
      : "opacity-0 transform translate-y-8";

  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={6000}
        stopOnHover={false}
        swipeable
        emulateTouch
        className="h-screen"
        renderIndicator={CustomIndicator}
        onChange={(index) => setActiveSlide(index)}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-[80vh] relative overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 scale-105 transition-transform duration-10000 ease-linear"
              style={{
                transform: activeSlide === index ? "scale(1)" : "scale(1.05)",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-20">
                <div className="max-w-xl text-white text-left">
                  <div
                    className={`transition-all duration-700 delay-300 ease-out ${getAnimationClass(
                      index
                    )}`}
                  >
                    <h6 className="text-sm md:text-base uppercase tracking-widest mb-3 inline-block bg-pink-600 bg-opacity-80 px-3 py-1 rounded">
                      {slide.subtitle}
                    </h6>
                  </div>

                  <div
                    className={`transition-all duration-700 delay-500 ease-out ${getAnimationClass(
                      index
                    )}`}
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                      {slide.title}
                    </h1>
                  </div>

                  <div
                    className={`transition-all duration-700 delay-700 ease-out ${getAnimationClass(
                      index
                    )}`}
                  >
                    <div className="w-16 h-1 bg-pink-500 mb-6"></div>
                  </div>

                  <div
                    className={`transition-all duration-700 delay-900 ease-out ${getAnimationClass(
                      index
                    )}`}
                  >
                    <p className="text-base md:text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  <div
                    className={`transition-all duration-700 delay-1100 ease-out ${getAnimationClass(
                      index
                    )}`}
                  >
                    <Link
                      to={slide.ctaLink}
                      className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-md transition duration-300 transform hover:translate-y-px hover:shadow-lg"
                    >
                      {slide.ctaText}
                    </Link>

                    <Link
                      to="/services"
                      className="inline-block ml-4 text-white border border-white hover:border-pink-300 hover:text-pink-300 font-medium px-6 py-3 rounded-md transition duration-300"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black opacity-60"></div>
            <div className="hidden md:block absolute top-1/4 right-20 w-24 h-24 border-4 border-pink-500 opacity-20"></div>
            <div className="hidden md:block absolute bottom-1/4 right-40 w-16 h-16 rounded-full border-4 border-white opacity-20"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
