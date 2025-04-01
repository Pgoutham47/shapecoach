
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "ShapeCoach transformed my fitness journey. The AI-powered recommendations are so personalized - it's like having a personal trainer who knows exactly what I need.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "As someone with a busy schedule, ShapeCoach has been a game-changer. The personalized meal plans and time-efficient workouts fit perfectly into my lifestyle.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I've tried many fitness apps before, but ShapeCoach is on another level. The AI actually understands my goals and adapts as I progress. I've never been fitter!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    quote: "The nutrition guidance from ShapeCoach helped me discover a sustainable way of eating that supports my fitness goals without feeling restrictive.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 bg-brand-blue">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            See how ShapeCoach has helped people transform their fitness journey with AI-powered coaching.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-yellow">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              size={18}
                              className={`${
                                index < testimonial.rating
                                  ? "text-brand-yellow fill-brand-yellow"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg text-white italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-brand-blue/80 hover:bg-brand-blue text-white rounded-full p-2 focus:outline-none border border-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-brand-blue/80 hover:bg-brand-blue text-white rounded-full p-2 focus:outline-none border border-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
              className={`mx-1 w-3 h-3 rounded-full focus:outline-none ${
                activeIndex === index
                  ? "bg-brand-yellow"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
