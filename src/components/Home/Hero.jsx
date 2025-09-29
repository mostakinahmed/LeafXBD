const BannerSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-25 px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main Banner */}
      <div className="md:col-span-2">
        <img
          src="https://www.startech.com.bd/image/cache/catalog/home/banner/2025/eid_ul_adha_notice/washin-machine-982x500.webp"
          alt="Main Banner"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Right Sideboxes */}
      <div className="space-y-4">
        {/* Compare Box */}
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="font-semibold text-gray-800 mb-2">Compare Products</h3>
          <input
            type="text"
            placeholder="Search and Select Product"
            className="w-full mb-2 px-3 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Search and Select Product"
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            View Comparison
          </button>
        </div>

        {/* Career Banner */}
        <img
          src="https://www.startech.com.bd/image/catalog/home/job-career-2024.webp"
          alt="Career Banner"
          className="w-full h-auto rounded"
        />
      </div>

      {/* Info Cards Section */}
      <div className="col-span-1 md:col-span-3 mt-4 flex flex-col md:flex-row gap-4 justify-between text-gray-700">
        {/* Card 1 */}
        <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
          <h4 className="text-[20px] font-semibold text-indigo-600">
            1M+ Sold
          </h4>
          <p className="text-md text-gray-500 mt-1">
            Trusted by customers nationwide
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
          <h4 className="text-[20px] font-semibold text-indigo-600">
            Fast Delivery
          </h4>
          <p className="text-md text-gray-500 mt-1">Anywhere in Bangladesh</p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-white px-6 py-4 rounded-md shadow-sm hover:shadow-md transition text-center">
          <h4 className="text-[20px] font-semibold text-indigo-600">
            24/7 Support
          </h4>
          <p className="text-md text-gray-500 mt-1">Live chat & hotline</p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
