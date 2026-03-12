'use client'
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student"
  },
  {
    quote: "The piano lessons were incredibly structured and easy to follow. I went from beginner to confidently playing my favorite songs.",
    name: "Emily Roberts",
    title: "Piano Student"
  },
  {
    quote: "This academy gave me the confidence to perform live. The vocal coaching was simply amazing.",
    name: "Sophia Martinez",
    title: "Vocal Student"
  },
  {
    quote: "Learning music production here helped me turn my passion into a real skill. The instructors explain everything clearly.",
    name: "Daniel Cooper",
    title: "Music Production Student"
  },
  {
    quote: "The guitar course helped me master fingerstyle and chord progressions in just a few weeks.",
    name: "Ryan Taylor",
    title: "Advanced Guitar Student"
  },
  {
    quote: "I never imagined I could learn violin online so easily. The lessons are detailed and very engaging.",
    name: "Olivia Brown",
    title: "Violin Student"
  },
  {
    quote: "The DJ and electronic music course opened up a whole new world for me. I now create my own tracks.",
    name: "Marcus White",
    title: "DJ & EDM Student"
  },
  {
    quote: "Every lesson feels personal and motivating. This school really cares about student growth.",
    name: "Hannah Lee",
    title: "Music Theory Student"
  }
];



function Testimonials() {
  return (
    <div className="min-h-screen w-full dark: bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <h2 className="text-white text-7xl font-bold text-center mb-30 z-10">Past Experiences</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

    </div>
  )
}

export default Testimonials
