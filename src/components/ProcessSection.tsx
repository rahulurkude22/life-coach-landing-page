function ProcessSection() {
  return (
    <section className="bg-[#f0f0f0] py-12 px-4">
      <div className="max-w-4xl mx-auto mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          WHAT YOU’LL GET IN THE 1:1 SESSION
        </h2>

        <div className="w-full flex justify-center max-w-2xl mx-auto">
          <img src="images/processSection.png" alt="Process" />
        </div>
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
    </section>
  );
}

export default ProcessSection;
