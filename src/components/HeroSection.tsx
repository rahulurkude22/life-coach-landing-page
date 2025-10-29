function HeroSection() {
  return (
    <section className="bg-[#eae9e5] py-12 px-4">
      <div className="mx-auto text-center">
        <div className="w-full flex justify-center">
          <img className="" src="images/herosection.png" alt="Alisha Jaiswal" />
        </div>

        <div className="w-fit bg-linear-to-t from-gray-800 to-gray-500 text-white rounded-full py-3 px-6 mb-6 mx-auto">
          <a
            href="https://topmate.io/unfoldwith_alisha"
            target="_blank"
            className="text-xs md:text-4xl font-semibold text-nowrap"
          >
            Book a 1-on-1 Mind Clarity Session with Alisha Jaiswal
          </a>
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
