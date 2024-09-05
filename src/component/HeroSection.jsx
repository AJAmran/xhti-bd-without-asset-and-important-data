import { Link } from "react-router-dom";

const HeroSection = ({ data }) => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${data?.image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full md:max-w-2xl px-4 md:px-0">
          <h2 className="mb-4 text-4xl md:text-3xl max-w-2xl font-bold text-white font-heading">
            {data?.title}
          </h2>
          <p className="mb-4 text-lg md:text-xl">
            {data.description}
          </p>
          {data?.btn && (
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/">
                <button className="btn bg-primary border-0 text-white">
                  {data.secondButton}
                </button>
              </Link>
              <Link to={data.link}>
                <button className="btn btn-outline text-secondary">
                  {data?.btn}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
