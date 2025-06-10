import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm uppercase tracking-wider text-rose-500 font-semibold mb-2">
                  About Us
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  Shringar.kay Home Based Nails Studio
                 
                </h3>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                At Shringar.kay, we specialize in premium nail services designed
                to enhance your natural beauty.  We are  delivering
                flawless results using high-quality products for a luxurious
                salon experience that leaves you feeling refreshed and
                confident.
              </p>

              <div className="flex flex-wrap gap-8 md:gap-12 mt-6">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-rose-600">6+</span>
                  <span className="text-gray-700 font-medium mt-1">
                    Signature Services
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-rose-600">100%</span>
                  <span className="text-gray-700 font-medium mt-1">
                    Satisfaction
                  </span>
                </div>
              </div>

              <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/banner/gum-gel.jpg"
                  alt="Shringar.kay Beauty Parlour"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent element */}
              <div className="absolute -bottom-6 -left-6 bg-rose-100 rounded-lg p-6 shadow-lg hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-rose-500 h-12 w-12 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      Signature Nail Services
                    </p>
                    <p className="text-gray-600 text-sm">
                      Luxury for your hands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
