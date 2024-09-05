import restaurantImage from "../../assets/Diploma in Tourism & Hospitality Management Course.jpg";
const WhoWeAre = () => {
  return (
    <div className="py-4 font-sans flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
        <img
          src={restaurantImage}
          alt="Restaurant"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Who We Are</h3>
        <p className="text-gray-700 text-justify">
          X-group Chain Restaurant is the foremost name of luxury and runs with
          15 branches in some prime locations of Dhaka City. All the branches
          are designed beautifully boasted with Millennium modern outlook with a
          touch of local heritage, having Thai, Chinese, Indian, Traditional &
          Continental cuisine. Host your events at the meeting spaces equipped
          with modern facilities. Alongside, nowadays it is a trend to introduce
          home delivery through online app, so we have introduced our own online
          delivery app in the name of Foodbitebd. This is to make sure extra
          precaution of your health & safety and serve you better as well.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
