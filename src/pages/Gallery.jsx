import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const Gallery = () => {
  // Example images and videos - replace with your actual file paths
  const items = [
    { src: "/gallery/2.jpg" }, // Image
    { src: "/gallery/3.jpg" }, // Image
    { src: "/gallery/6.mp4" }, // Video
    { src: "/gallery/4.jpg" }, // Image
    // { src: "/gallery/7.mp4" }, // Video
    { src: "/gallery/5.jpg" }, // Image
    { src: "/gallery/10.mp4" },
    { src: "/gallery/15.jpg" },
    { src: "/gallery/16.jpg" } ,// Image
    { src: "/gallery/17.jpg" }, // Video
    { src: "/gallery/18.jpg" }, // Image
    { src: "/gallery/19.jpg" },
    { src: "/gallery/20.jpg" }
  // Video
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of items per page

  // Calculate start and end index for pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);

  // Lightbox navigation functions
  const nextImage = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === paginatedItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === 0 ? paginatedItems.length - 1 : prevIndex - 1
    );
  };

  // Pagination controls
  const totalPages = Math.ceil(items.length / pageSize);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setPhotoIndex(0); // Reset photo index on page change
  };

  return (
    <div className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-800">
            Our Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Showcasing our finest creations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <div className="aspect-square overflow-hidden">
                {item.src.endsWith(".mp4") ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Gallery item ${index}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="absolute top-4 right-4 bg-white/30 p-2 rounded-full backdrop-blur-sm">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no items match filter */}
        {paginatedItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No gallery items found.</p>
          </div>
        )}

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 disabled:bg-pink-300"
          >
            Previous
          </button>
          <span className="text-lg font-medium text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 disabled:bg-pink-300"
          >
            Next
          </button>
        </div>

        {/* Custom Lightbox */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <div className="relative w-full max-w-4xl p-4">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-0 -mt-12 -mr-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Current image or video */}
              <div className="relative">
                {items[photoIndex].src.endsWith(".mp4") ? (
                  <video
                    src={items[photoIndex].src}
                    className="w-full h-auto max-h-[80vh] object-contain rounded"
                    controls
                    playsInline
                  />
                ) : (
                  <img
                    src={items[photoIndex].src}
                    alt={`Gallery item ${photoIndex}`}
                    className="w-full h-auto max-h-[80vh] object-contain rounded"
                  />
                )}
              </div>

              {/* Navigation buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={prevImage}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full m-4 transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={nextImage}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full m-4 transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-pink-800 mb-4">
            Ready for your transformation?
          </h3>
          <p className="text-gray-600 mb-6">
            Book your appointment today and join our gallery of beautiful
            transformations.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
