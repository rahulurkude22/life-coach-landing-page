function HeroSection() {
  return (
    <section className="bg-[#eae9e5] py-12 px-4">
      <div className="mx-auto text-center">
        <div className="w-full flex justify-center">
          <img className="" src="images/herosection.png" alt="Alisha Jaiswal" />
        </div>

        <div className="md:w-3xl flex justify-center bg-linear-to-t from-teal-900  to-teal-700 text-white rounded-full py-4 px-8 my-3 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <a
            href="https://topmate.io/unfoldwith_alisha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg md:text-6xl font-semibold text-nowrap"
          >
            <span>Book 1:1 session - 40 mins</span>
          </a>
        </div>
        <p className="text-sm font-bold mb-3">or</p>
        <div className="w-fit bg-linear-to-t from-blue-800 to-blue-500 text-white rounded-full py-3 px-6 mb-6 mx-auto  transition-all duration-300 hover:scale-105">
          <a
            href="https://www.unfoldwithalisha.com"
            target="_blank"
            className="text-xs md:text-4xl font-semibold text-nowrap"
          >
            Visit our website
          </a>
        </div>
        <div className="w-fit bg-linear-to-t from-red-800 to-red-500 text-white rounded-full py-3 px-6 mb-6 mx-auto">
          <span className="text-xs md:text-4xl font-semibold text-nowrap">
            With over 100+ life transformed.
          </span>
        </div>
        <div className="mb-6">
          <p className="text-sm md:text-base font-semibold text-gray-700 mb-2">
            <span className="underline">
              Rewire Procrastination, Calm Your Nervous System,
            </span>{" "}
            and Get Things Done With Clarity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
