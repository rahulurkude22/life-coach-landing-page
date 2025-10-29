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
        <div className="w-fit bg-linear-to-t from-gray-800 to-gray-500 text-white rounded-full py-3 px-6 mb-6 mx-auto">
          <a
            href="https://topmate.io/unfoldwith_alisha"
            target="_blank"
            className="text-xs md:text-4xl font-semibold text-nowrap"
          >
            Book a 1-on-1 Mind Clarity Session with Alisha Jaiswal
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
