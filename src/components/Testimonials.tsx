import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MySwiper from "./MySwiper";
import { SwiperSlide } from "swiper/react";

function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const videoRef = useRef(null);
  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Sarah Johnson",
  //     role: null,
  //     image: "images/testimonials/anycript_thumbnail_1.webp",
  //     content:
  //       "Hi, I'm Beathe. I attend today this season, and I feel like we are not alone. There is many people that is the same problem. It's fun to listen to them, and also we had some learning from their problems. I feel more relaxed. I totally recommend it.",
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     name: "Rimjhim Rai",
  //     role: null,
  //     image: "images/testimonials/anycript_thumbnail_2.webp",
  //     content:
  //       "I was waiting since a very long time for this session with Alisha. We had a very great time. She answered all the questions and all the doubts. She cleared and looking forward for more such classes.. Alisha has us a lot. Was a good session. Thank you.",
  //     rating: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "Shivali Khanna",
  //     role: null,
  //     image: "images/testimonials/anycript_thumbnail_3.webp",
  //     content:
  //       "Hi, I'm Shivali Khanna. Today, I attended a very good session by Mrs. Alisha. It was a life coach session about time, family, life, career, and how to manage my time for my family and my career. With this session, it was a very self-realization session where I realized what are my goals in life and how I should work towards them, how I should manage my time between my career and my kids... ",
  //     rating: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "Sheetal Kandwal",
  //     role: "Professional Anchor & Model",
  //     image: "images/testimonials/anycript_thumbnail_6.webp",
  //     content:
  //       "Life is itself a learning process. Life coach, I never understood and didn't know. I came here as a interaction. But I got this wheel which I wanted to mark myself as a result of my points. I got to know how many things I'm in, how many things I have, and how many things I have to work on. So at this date, I'm taking a lot of questions... ",
  //     rating: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "Snehal Rai",
  //     role: "Signature Analyst",
  //     image: "images/testimonials/anycript_thumbnail_30.webp",
  //     content:
  //       "Hello, everyone. My name is Snehal Rai. I'm a signature analyst. And I'm going to attend Alicia Jaiswal's session today. And it's amazing. It's really outstanding. So normally, you don't have a problem, you should have fun and interactive sessions. Because you can learn something. As I said, if you have anxiety, you can just put your face in your face and see the result. And see the result.. I'm happy. I'm happy coming here. Thank you so much, Alisha.",
  //     rating: 5,
  //   },
  // ];
  const testimonials = [
    {
      id: 1,
      title: "Beathe",
      description:
        "Hi, I'm Beathe. I attend today this season, and I feel like we are not alone. There is many people that is the same problem. It's fun to listen to them, and also we had some learning from their problems. I feel more relaxed. I totally recommend it.",
      author: "Beathe",
      role: null,
      videoUrl: "videos/1.mp4",
      thumbnail: "images/testimonials/anycript_thumbnail_1.webp",
    },
    {
      id: 2,
      title: "Rimjhim Rai",
      description:
        "I was waiting since a very long time for this session with Alisha. We had a very great time. She answered all the questions and all the doubts. She cleared and looking forward for more such classes.. Alisha has us a lot. Was a good session. Thank you.",
      author: "Rimjhim Rai",
      role: null,
      videoUrl: "videos/2.mp4",
      thumbnail: "images/testimonials/anycript_thumbnail_2.webp",
    },
    {
      id: 3,
      title: "Shivali Khanna",
      description:
        "Hi, I'm Shivali Khanna. Today, I attended a very good session by Mrs. Alisha. It was a life coach session about time, family, life, career, and how to manage my time for my family and my career. With this session, it was a very self-realization session where I realized what are my goals in life and how I should work towards them, how I should manage my time between my career and my kids. She gave me a lot of coaching tips, a lot of ideas, and how, as a person, I should value my strengths and weaknesses. I I should improve my weaknesses as a person.",
      author: "Shivali Khanna",
      role: null,
      videoUrl: "videos/3.mp4",
      thumbnail: "images/testimonials/anycript_thumbnail_3.webp",
    },
    {
      id: 4,
      title: "Sheetal Kandwal",
      description:
        "Life is itself a learning process. Life coach, I never understood and didn't know. I came here as a interaction. But I got this wheel which I wanted to mark myself as a result of my points. I got to know how many things I'm in, how many things I have, and how many things I have to work on. So at this date, I'm taking a lot of questions. I'm going to go home and do a lot of homework at home, on which I'm going to. I will work, and how can I get in progress, how can I get in personal growth? The thing I have never thought has been ignited, that question has arised.",
      author: "Sheetal Kandwal",
      role: "Professional Anchor & Model",
      videoUrl: "videos/4.mp4",
      thumbnail: "images/testimonials/anycript_thumbnail_30.webp",
    },
    {
      id: 5,
      title: "Snehal Rai",
      description:
        "Hello, everyone. My name is Snehal Rai. I'm a signature analyst. And I'm going to attend Alicia Jaiswal's session today. And it's amazing. It's really outstanding. So normally, you don't have a problem, you should have fun and interactive sessions. Because you can learn something. As I said, if you have anxiety, you can just put your face in your face and see the result. And see the result.. I'm happy. I'm happy coming here. Thank you so much, Alisha.",
      author: "Snehal Rai",
      role: "Signature Analyst",
      videoUrl: "videos/5.mp4",
      thumbnail: "images/testimonials/anycript_thumbnail_6.webp",
    },
  ];

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

  const handleTestimonialChange = (index) => {
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
