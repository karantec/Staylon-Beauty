import React from "react";
import { Link } from "react-router-dom";
import OpeningHours from "./OpeningHours";
import { 
  Sparkles, 
  Heart, 
  Users, 
  Award, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Scissors
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/90 to-pink-100/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-40"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-6">
              <Scissors size={16} className="mr-1" />
              Nail Artistry At Its Finest
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-500 leading-tight">
              Welcome to Shringar.kay🤍
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto my-6 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A boutique home-based nail studio where artistry meets luxury. Every nail service is crafted with precision, 
              care and attention to detail that transforms your hands into works of art.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/services" className="px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Explore Our Services
              </Link>
              <Link to="/appointment" className="px-6 py-3 rounded-lg border-2 border-rose-400 text-rose-500 font-medium hover:bg-rose-50 transition-all duration-300 hover:-translate-y-1">
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            {/* Image Gallery */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/gallery/2.jpg" 
                    alt="Nail Art Sample" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mt-8">
                  <img 
                    src="/gallery/3.jpg" 
                    alt="Studio Interior" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/gallery/4.jpg" 
                    alt="Client Experience" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg -mt-8">
                  <img 
                    src="/gallery/5.jpg" 
                    alt="Nail Set" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-rose-500 font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
                Transform Your Nails, <br />
                <span className="text-rose-500">Elevate Your Confidence</span>
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                At <span className="font-semibold text-rose-600">Shringar.kay</span>, we believe that beautiful nails are more than just an accessory—they're an expression of your unique style and personality. Our cozy home-based studio offers a personal, relaxed environment where you can unwind while we work our magic.
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Founded with a passion for nail artistry and a commitment to excellence, we've cultivated a space where meticulous attention to detail meets creative expression. Every client receives personalized care and leaves with nails that not only look stunning but feel amazing too.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Signature Services:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-gray-700">Russian Manicure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-gray-700">Gel Polish Manicure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-gray-700">Soft Gel Extensions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-gray-700">Gel Nail Extensions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-gray-700">Gum Gel Enhancements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-gray-700">Custom Nail Art</span>
                </div>
              </div>
              
              <div className="flex gap-6 items-center mt-10">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-200 flex items-center justify-center text-rose-600 font-bold border-2 border-white">K</div>
                  <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold border-2 border-white">M</div>
                  <div className="w-12 h-12 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold border-2 border-white">S</div>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Join our growing family</div>
                  <div className="text-sm text-gray-500">1,200+ happy clients and counting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-rose-500 font-medium">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
              What Sets Us Apart
            </h2>
            <p className="text-gray-700">
              At Shringar.kay, we're committed to excellence in every aspect of our service. 
              Our core values guide everything we do, ensuring you receive nothing but the best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 border border-rose-100">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors">
                <Sparkles size={24} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Artistry</h3>
              <p className="text-gray-600">
                Every nail set is treated as a canvas for creative expression, crafted with precision and artistic flair.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 border border-rose-100">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors">
                <Heart size={24} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Personal Care</h3>
              <p className="text-gray-600">
                We take time to understand your preferences and style, ensuring results that are uniquely you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 border border-rose-100">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors">
                <ShieldCheck size={24} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hygiene First</h3>
              <p className="text-gray-600">
                Your safety is our priority with strict sterilization protocols and fresh tools for every client.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 border border-rose-100">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors">
                <Award size={24} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Techniques</h3>
              <p className="text-gray-600">
                We continually refine their craft to deliver flawless results every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics/Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="p-8 md:p-10 text-center border-r border-b md:border-b-0 border-white/20">
                <div className="text-4xl font-bold text-white mb-2">2+</div>
                <div className="text-rose-100">Years of Expertise</div>
              </div>
              <div className="p-8 md:p-10 text-center border-b md:border-r md:border-b-0 border-white/20">
                <div className="text-4xl font-bold text-white mb-2">1,200+</div>
                <div className="text-rose-100">Smiling Clients</div>
              </div>
              <div className="p-8 md:p-10 text-center border-r md:border-r border-white/20">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-rose-100">Signature Styles</div>
              </div>
              <div className="p-8 md:p-10 text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-rose-100">Client Happiness</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Info Section */}
      <section className="py-16 md:py-24 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Map & Contact */}
            <div className="w-full lg:w-7/12">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Visit Our <span className="text-rose-500">Home Studio</span>
              </h2>
              
              {/* Google Maps Embed */}
              <div className="w-full h-64 md:h-80 rounded-xl mb-8 overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15071.44280646253!2d72.85589515651698!3d19.20128557654576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73e6d455aff%3A0xea1c99aef5048b9c!2sAkurli%20Rd%2C%20Kandivali%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1745913146153!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Shringar.kay Location"
                ></iframe>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl shadow-sm flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                      <MapPin size={20} className="text-rose-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-sm text-gray-600">
                      Akurli Cross Road, Kandivali East, Mumbai - 400101
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                      <Phone size={20} className="text-rose-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-sm text-gray-600">
                      +91 9004065531
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                      <Instagram size={20} className="text-rose-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Instagram</h3>
                    <p className="text-sm text-gray-600">
                      @shringar.kay_
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hours & Booking */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Studio Hours
                </h3>
                
                <OpeningHours />
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Ready for Your Nail Transformation?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Book your appointment now and experience the Shringar.kay difference. 
                    Your journey to beautiful nails is just a click away.
                  </p>
                  
                  <Link to="/appointment">
                    <button className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                      <Clock size={18} className="mr-2" />
                      Book Your Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
              Experience the Magic of Shringar.kay
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-rose-100 relative z-10">
              From classic elegance to bold statement designs, we're here to make your nail dreams come true. 
              Join our growing family of satisfied clients today.
            </p>
            <Link to="/gallery">
              <button className="px-8 py-3 bg-white text-rose-500 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative z-10">
                View Our Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;