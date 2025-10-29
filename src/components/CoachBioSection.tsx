function CoachBioSection() {
  return (
    <section className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8">
          The 4-Step Transformation from Stress to Clarity™
        </h2>

        <div className="w-full mx-auto mb-8 grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <img className="md:scale-120" src="images/1.png" alt="image 1" />
          </div>
          <div className="w-full">
            <img className="md:scale-120" src="images/2.png" alt="image 2" />
          </div>
          <div className="w-full">
            <img className="md:scale-120" src="images/3.png" alt="image 3" />
          </div>
          <div className="w-full">
            <img className="md:scale-120" src="images/4.png" alt="image 4" />
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://topmate.io/unfoldwith_alisha"
            target="_blank"
            className="md:text-4xl bg-linear-to-b from-orange-400 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition"
          >
            Yes! I'm Ready to Start My Journey
          </a>
        </div>
      </div>
    </section>
  );
}

export default CoachBioSection;
