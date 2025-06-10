const OpeningHours = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Opening Hours</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Plan your visit to our Studio
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="2.PNG"
                alt="Salon Interior"
                className="rounded-lg w-full"
              />
            </div>

            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold mb-6">Our Schedule</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b pb-2">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">11:00 AM - 6:00 PM</span>
                </li>
              </ul>

              <div className="mt-8 bg-light p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">Holiday Notice</h4>
                <p>
                  We remain closed on major public holidays. Please call ahead
                  during festival seasons to confirm timings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
