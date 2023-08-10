import Marquee from "react-fast-marquee";

const MarqueePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-5">
        Marquee React
      </h1>
      <div className="background-image mx-auto">
        <Marquee speed={100} pauseOnHover>
          <div className="marquee-content p-5 m-5">
            <span className="hover:text-white mr-20">Software Engineer</span>
            <span className="hover:text-white mr-20">Frontend Developer</span>
            <span className="hover:text-white mr-20">Backend Developer</span>
            <span className="hover:text-white mr-20">Fullstack Developer</span>
            <span className="hover:text-white">Mobile Developer</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueePage;
