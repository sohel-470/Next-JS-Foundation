import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Spotlightnew } from "./ui/spotlight-new";
import { SparklesCore } from "./ui/sparkles";
import { Button } from "./ui/moving-border";
import { MaskContainer } from "@/components/ui/svg-mask-effect"

function HeroSection() {
    return (
        <div className="h-screen w-full rounded-md flex items-center justify-center relative overflow-hidden mx-auto">

            {/* --- BACKGROUND LAYERS (z-0) --- */}
            <Spotlightnew />
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.5}
                    maxSize={1}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* --- STATIC TOP LAYER (z-50) --- */}
            {/* The Title is placed here so it floats ABOVE the mask and is always visible */}
            <div className="absolute top-0 w-full z-50 flex flex-col items-center pt-20 md:pt-32 pointer-events-none">
                <h1 className="text-4xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    CONVOLUTION XI
                </h1>
            </div>

            {/* --- MASK LAYER (z-20) --- */}
            {/* This fills the whole container. The paragraph is the 'children' (visible) 
                and 'Hello Bachho' is the 'revealText' (hidden until hover) */}
            <div className="absolute inset-0 z-20 w-full h-full">
                <MaskContainer
                    revealText={
                        <div className="flex flex-col items-center justify-center text-center h-full w-full">
                            <span className="text-purple-400 text-8xl font-bold">2026</span>
                            <span className="text-blue-500 text-4xl font-bold mt-4">ELECTRICAL'S LARGEST TECHNO-MANAGEMENT FEST</span>
                        </div>
                    }
                    className="h-full w-full bg-transparent" // Ensure it takes full height
                >
                    {/* This is the paragraph that shows by default */}
                    <div className="flex flex-col items-center justify-center h-full w-full pt-32">
                        <p className="font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
                            Convolution XI is the eleventh edition of the annual
                            techno-management fest organized by the Students' Forum of the
                            Department of Electrical Engineering, Jadavpur University.
                            Convolution acts as an umbrella event comprising of several
                            student interaction events, technical competitions, workshops,
                            and has also hosted, in the past, lectures by some of the most
                            illustrious names in academia and industry alike.
                        </p>
                    </div>
                </MaskContainer>
            </div>

            {/* --- STATIC BOTTOM LAYER (z-50) --- */}
            {/* The button is placed here so it floats ABOVE the mask and stays clickable */}
            <div className="absolute bottom-1 md:bottom-1 z-50 w-full flex justify-center">
                <Link href={"/courses"}>
                    <Button borderRadius="1.75rem"
                        borderClassName="bg-[radial-gradient(white_0%,#06b6d4_60%,transparent_100%)]"
                        className="bg-slate-900 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer hover:bg-slate-700 transition duration-500">
                        Explore Events
                    </Button>
                </Link>
            </div>

        </div>
    );
}

export default HeroSection;