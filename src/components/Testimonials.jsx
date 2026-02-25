
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { BlurFade } from "./ui/blur-fade";

const content = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=12",
    name: "John Appiah",
    role: "Product Manager",
    text: "Great work on the project. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=25",
    name: "Jane Smith",
    role: "UI/UX Designer",
    text: "Excellent attention to detail and quality. love his work❤️!",
    rating: 4,
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=36",
    name: "Doris Agyemang",
    role: "Frontend Developer",
    text: "Outstanding collaboration and communication.",
    rating: 5,
  },
  {
    id: 4,
    image: "https://i.pravatar.cc/150?img=45",
    name: "Sarah Williams",
    role: "Marketing Lead",
    text: "Delivered beyond expectations. The UI feels modern and intuitive.",
    rating: 5,
  },
  {
    id: 5,
    image: "https://i.pravatar.cc/150?img=52",
    name: "David Brown",
    role: "Software Engineer",
    text: "Clean code, smooth animations, and great performance.",
    rating: 4,
  },
  {
    id: 6,
    image: "https://i.pravatar.cc/150?img=60",
    name: "David Oduro",
    role: "Startup Founder",
    text: "Helped bring our product vision to life with precision.",
    rating: 5,
  },
  {
    id: 7,
    image: "https://i.pravatar.cc/150?img=18",
    name: "Daniel Martinez",
    role: "Backend Developer",
    text: "Fantastic teamwork and strong frontend expertise.",
    rating: 4,
  },
  {
    id: 8,
    image: "https://i.pravatar.cc/150?img=22",
    name: "Olivia Wilson",
    role: "Project Coordinator",
    text: "Very responsive and always delivered on time.",
    rating: 5,
  },
  {
    id: 9,
    image: "https://i.pravatar.cc/150?img=29",
    name: "James Eddison",
    role: "Tech Lead",
    text: "Impressive problem-solving skills and attention to detail.",
    rating: 5,
  },
  {
    id: 10,
    image: "https://i.pravatar.cc/150?img=33",
    name: "Andrew Akoto",
    role: "Product Designer",
    text: "A pleasure to work with — creative, reliable, and skilled.",
    rating: 4,
  },
];


const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <>
       {/* <section className="relative py-24 px-6 overflow-hidden"> */}
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl" /> */}

      {/* Title */}
      <div className="text-center mb-16">
        <BlurFade delay={0.2} inView>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Clients Say
          </h2>
        </BlurFade>
        <BlurFade delay={0.4} inView>
          <p className="text-white/70 mt-4">
            Real feedback from people I’ve worked with
          </p>
        </BlurFade>
      </div>

      <Carousel
        plugins={[plugin.current]}
        opts={{ align: "start", loop: true }}
        className="w-full max-w-6xl"
      >
        <CarouselContent>
          {content.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-4">
                <Card className="h-full rounded-3xl border border-white/20 bg-zinc-950 backdrop-blur-xl shadow-2xl hover:scale-[1.03] transition-all duration-500">
                  <CardContent className="flex flex-col items-center text-center p-8 space-y-6">
                    
                    {/* Avatar */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-lg"
                    />

                    {/* Name & Role */}
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-white/70">{item.role}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 justify-center">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={18}
                          className={
                            index < item.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-white/30"
                          }
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-white/80 text-sm leading-relaxed">
                      “{item.text}”
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-white/20 backdrop-blur-lg border border-white/20 text-white hover:bg-white/30 h" />
        <CarouselNext className="bg-white/20 backdrop-blur-lg border border-white/20 text-white hover:bg-white/30" />
      </Carousel>
    {/* </section> */}
    </>
 
  );
};

export default Testimonials;

