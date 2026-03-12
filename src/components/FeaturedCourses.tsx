'use client';
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { CometCard } from "@/components/ui/comet-card";

interface Course {
    id: number,
    title: String,
    slug: String,
    description: String,
    price: number,
    instructor: String,
    isFeatured: boolean
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 bg-slate-950 text-white">
            <div>
                <div className="text-center">
                    <h2 className="text-2xl text-teal-600 font-semibold tracking-wide uppercase">Featured Events</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-4 sm:px-8">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center h-full">
                            {/* 1. BackgroundGradient wraps the whole card */}
                            <BackgroundGradient className="rounded-[22px] h-full max-w-sm bg-zinc-900">
                                
                                {/* 2. CometCard is inside the Gradient */}
                                <CometCard className="h-full">
                                    {/* 3. The Card Content (Title, Desc) is inside the CometCard */}
                                    <div 
                                        className="relative h-full flex flex-col items-center text-center rounded-[20px] bg-[#1F2121] p-6 sm:p-8"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        
                                        {/* Title */}
                                        <p className="text-lg sm:text-xl font-bold text-white mt-4 mb-2">
                                            {course.title}
                                        </p>

                                        {/* Description */}
                                        <p className="text-sm text-neutral-400 flex-grow mb-8 leading-relaxed">
                                            {course.description}
                                        </p>

                                        {/* Learn More Button */}
                                        <Link href={`/courses/${course.slug}`}>
                                            <button className="px-6 py-2 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-500 transition duration-200 cursor-pointer">
                                                Register
                                            </button>
                                        </Link>

                                        {/* Optional: Hashtag decoration from your original design */}
                                        <div className="w-full mt-6 flex justify-between items-end border-t border-neutral-700 pt-4 opacity-50">
                                            <span className="text-[10px] uppercase text-neutral-500">Convolution XI</span>
                                            <span className="text-[10px] text-neutral-500">#2025</span>
                                        </div>

                                    </div>
                                </CometCard>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"} className="px-6 py-3 rounded-lg border border-teal-500 text-white hover:bg-teal-900 transition duration-300 font-semibold">
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses