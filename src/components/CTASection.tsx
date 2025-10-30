function CTASection() {
  return (
    <section className="bg-linear-to-b from-pink-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
          "MEET YOUR COACH"
        </h2>

        <div className="w-full flex justify-center">
          <img src="images/footer.png" alt="Footer" />
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
        <div className="w-fit bg-linear-to-t from-blue-800 to-blue-500 text-white rounded-full py-3 px-6 mb-6 mx-auto">
          <a
            href="https://www.unfoldwithalisha.com"
            target="_blank"
            className="text-xs md:text-4xl font-semibold text-nowrap"
          >
            Visit our website
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
