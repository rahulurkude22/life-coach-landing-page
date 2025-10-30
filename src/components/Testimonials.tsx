import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MySwiper from "./MySwiper";
import { SwiperSlide } from "swiper/react";
import { testimonials } from "../utils";

function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleTestimonialChange = (index: number) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // refresh video when testimonial changes
      setIsPlaying(false);
    }
  }, [currentTestimonial]);

  return (
    <section className="bg-[#e4e0d8] py-12 px-4">
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Hear directly from the people who have experienced the difference
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video Section */}
                <div className="relative bg-black aspect-video lg:aspect-auto max-h-[600px]">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover "
                    poster={testimonials[currentTestimonial].thumbnail}
                    onClick={handleVideoClick}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source
                      src={testimonials[currentTestimonial].videoUrl}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play/Pause Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                    onClick={handleVideoClick}
                  >
                    {!isPlaying && (
                      <button className="bg-teal-800 hover:bg-teal-700 text-white rounded-full p-6 shadow-2xl transform hover:scale-110 transition-transform">
                        <Play className="w-12 h-12" fill="white" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                  <div className="mb-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                      {testimonials[currentTestimonial].title}
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                      {testimonials[currentTestimonial].description}
                    </p>
                    <div className="border-t border-white/20 pt-6">
                      <p className="text-white font-semibold text-xl">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-slate-900">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex gap-3 mt-auto">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleTestimonialChange(index)}
                        className={`h-3 rounded-full transition-all ${
                          index === currentTestimonial
                            ? "w-12 bg-teal-800"
                            : "w-3 bg-teal-600 hover:bg-teal-700"
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-8">
              <MySwiper>
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide className="mb-5">
                    <div className="p-5">
                      <button
                        key={testimonial.id}
                        onClick={() => handleTestimonialChange(index)}
                        className={`relative rounded-lg overflow-hidden aspect-video transition-all ${
                          index === currentTestimonial
                            ? "ring-4 ring-teal-800 scale-105"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={testimonial.thumbnail}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-3">
                          <p className="text-white text-sm font-medium truncate">
                            {testimonial.author}
                          </p>
                        </div>
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </MySwiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
