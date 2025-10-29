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
      <div className="md:w-3xl flex justify-center bg-linear-to-t from-teal-900  to-teal-700 text-white rounded-full py-4 px-8 my-3 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <a
          href="https://topmate.io/unfoldwith_alisha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg md:text-6xl font-semibold text-nowrap"
        >
          <span>Book 1:1 session</span>
        </a>
      </div>
    </section>
  );
}

export default ProcessSection;
