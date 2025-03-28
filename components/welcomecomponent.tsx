'use client';

export default function WelcomeComponent() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white text-center">
      <div className="max-w-full mx-auto px-4"> {/* Remove max-w-4xl to allow full width */}
        <h1 className="text-gray-700 text-4xl md:text-5xl font-extrabold mb-10">
          WELCOME TO WOW CREATION,CREATIVE GRAPHIC DESIGN SRI LANKA.
        </h1>
        
        <p className="text-gray-600 text-lg mb-8">
          At WOW CREATION, there are no limits to what can be designed. Our talented community of designers can create anything you need, from stunning logos to beautiful business portfolios. Gavlik offers some of the best creative graphic design services in Sri Lanka, ensuring that our clients’ projects have the maximum impact. We take a hands-on approach to meet our clients’ needs and deliver memorable experiences. With a dedicated team backing everything we do, our creative possibilities are endless. Simply choose the right design service from the list below to kick off your project right away.
        </p>
        
        <section className="py-12 bg-gray-100 text-center">
          <div className="max-w-full mx-auto px-4"> {/* Make sure the content fills the available space */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">10</h3>
                <p className="text-gray-600 mt-2 text-sm">YEARS</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">3000+</h3>
                <p className="text-gray-600 mt-2 text-sm">HAPPY CLIENTS</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">6000</h3>
                <p className="text-gray-600 mt-2 text-sm">MEET UPS</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">400</h3>
                <p className="text-gray-600 mt-2 text-sm">PROJECTS</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
