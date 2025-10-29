function Certifications() {
  return (
    <section className="bg-blue-900 text-white py-12 px-4">
      <div className="mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8">Certifications</h2>

        <div className="w-full mx-auto mb-8 flex flex-col md:flex-row">
          <div className="w-full">
            <img
              className=""
              src="images/certificates/c1.jpg"
              alt="Certificate 1"
            />
          </div>
          <div className="w-full">
            <img
              className=""
              src="images/certificates/c2.jpg"
              alt="Certificate 2"
            />
          </div>
          <div className="w-full">
            <img
              className=""
              src="images/certificates/c3.jpg"
              alt="Certificate 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
