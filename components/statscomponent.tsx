'use client';

export default function StatsComponent() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-blue-500">12</h3>
            <p className="text-gray-600 mt-2 text-sm">YEARS</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-blue-500">300</h3>
            <p className="text-gray-600 mt-2 text-sm">HAPPY CLIENTS</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-blue-500">600</h3>
            <p className="text-gray-600 mt-2 text-sm">MEET UPS</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-blue-500">400</h3>
            <p className="text-gray-600 mt-2 text-sm">PROJECTS</p>
          </div>
        </div>
      </div>
    </section>
  );
}