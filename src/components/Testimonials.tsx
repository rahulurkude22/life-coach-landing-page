import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: null,
      image: "images/testimonials/anycript_thumbnail_1.webp",
      content:
        "Hi, I'm Beathe. I attend today this season, and I feel like we are not alone. There is many people that is the same problem. It's fun to listen to them, and also we had some learning from their problems. I feel more relaxed. I totally recommend it.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rimjhim Rai",
      role: null,
      image: "images/testimonials/anycript_thumbnail_2.webp",
      content:
        "I was waiting since a very long time for this session with Alisha. We had a very great time. She answered all the questions and all the doubts. She cleared and looking forward for more such classes.. Alisha has us a lot. Was a good session. Thank you.",
      rating: 5,
    },
    {
      id: 3,
      name: "Shivali Khanna",
      role: null,
      image: "images/testimonials/anycript_thumbnail_3.webp",
      content:
        "Hi, I'm Shivali Khanna. Today, I attended a very good session by Mrs. Alisha. It was a life coach session about time, family, life, career, and how to manage my time for my family and my career. With this session, it was a very self-realization session where I realized what are my goals in life and how I should work towards them, how I should manage my time between my career and my kids... ",
      rating: 5,
    },
    {
      id: 3,
      name: "Sheetal Kandwal",
      role: "Professional Anchor & Model",
      image: "images/testimonials/anycript_thumbnail_6.webp",
      content:
        "Life is itself a learning process. Life coach, I never understood and didn't know. I came here as a interaction. But I got this wheel which I wanted to mark myself as a result of my points. I got to know how many things I'm in, how many things I have, and how many things I have to work on. So at this date, I'm taking a lot of questions... ",
      rating: 5,
    },
    {
      id: 3,
      name: "Snehal Rai",
      role: "Signature Analyst",
      image: "images/testimonials/anycript_thumbnail_30.webp",
      content:
        "Hello, everyone. My name is Snehal Rai. I'm a signature analyst. And I'm going to attend Alicia Jaiswal's session today. And it's amazing. It's really outstanding. So normally, you don't have a problem, you should have fun and interactive sessions. Because you can learn something. As I said, if you have anxiety, you can just put your face in your face and see the result. And see the result.. I'm happy. I'm happy coming here. Thank you so much, Alisha.",
      rating: 5,
    },
  ];
  return (
    <section className="bg-[#e4e0d8] py-12 px-4">
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-50"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
