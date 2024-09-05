const OurValue = () => {
  return (
    <section className="py-12">
      <div className="text-center">
        <h2 className="mb-5 text-2xl font-bold text-gray-700 md:text-4xl font-heading text-center">
          Our Values
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 p-5 transform transition-transform duration-500 hover:scale-105">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-5">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Excellence
              </h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, ensuring that our
                students receive the highest quality education and support.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-5 transform transition-transform duration-500 hover:scale-105">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-5">
              <h3 className="text-xl font-bold mb-3 text-green-600">
                Integrity
              </h3>
              <p className="text-gray-700">
                We uphold the highest standards of integrity, honesty, and
                professionalism in all our interactions and endeavors.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-5 transform transition-transform duration-500 hover:scale-105">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-5">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">
                Innovation
              </h3>
              <p className="text-gray-700">
                We embrace innovation and creativity, constantly seeking new
                ways to enhance the learning experience and meet the evolving
                needs of the industry.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-5 transform transition-transform duration-500 hover:scale-105">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-5">
              <h3 className="text-xl font-bold mb-3 text-purple-600">
                Inclusivity
              </h3>
              <p className="text-gray-700">
                We celebrate diversity and promote inclusivity, creating a
                welcoming and supportive environment where everyone feels valued
                and respected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
