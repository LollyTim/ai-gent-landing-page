import { images } from "../constants/images";
import NavBar from "./NavBar";

const HeroSection = () => {
    return (
        <section className="w-full bg-black flex flex-col min-h-screen relative">

            <NavBar />
            <img
                src={images.image.radialGradient}
                loading="eager"
                alt=""
                className="w-full max-w-[1200px] absolute top-0 left-1/2 transform -translate-x-1/2 xl:translate-x-0 xl:left-[400px] lg:left-[350px]"
            />

            <div className="flex flex-col justify-center items-center w-full px-4 xl:max-w-5xl mx-auto flex-grow">

                <div className="bg-[radial-gradient(50% 50% at 50% 50%, #2F2F2F 0%, #171717 100%)] rounded-full py-2 px-4">
                    <h4 className="font-normal font-geist-regular text-white text-sm sm:text-base">
                        Hi, I am the top AI customer service agent
                    </h4>
                </div>

                <div className="w-full max-w-[690px] flex flex-col gap-4 sm:gap-7 mt-6">
                    <h1 className="font-geist-regular font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-[67.2px] text-white text-center">
                        <span className="text-gold1">AI-powered</span> support agent, delivering 24/7 efficiency
                    </h1>

                    <p className="text-sm sm:text-base font-light font-geist-regular leading-relaxed text-center text-white">
                        Upgrade your customer support system with an AI-powered agent, greater efficiency at lower costs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2.5 mx-auto">
                        <button className="py-2 px-6 sm:py-3 sm:px-7 bg-btnBlue rounded-full text-white text-sm sm:text-base">
                            Pre-subscribe (50% discount)
                        </button>
                        <button className="py-2 px-6 sm:py-3 sm:px-7 bg-transparent border border-white text-white rounded-full text-sm sm:text-base">
                            Sign up for newsletter
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-4 sm:gap-8 justify-between items-center mx-auto w-full max-w-[90%] sm:max-w-[80%] py-8 sm:py-10">
                <h3 className="font-geist-medium text-sm sm:text-lg leading-6 sm:leading-7 text-center text-white/40">
                    Join 100+ businesses already securing their early access at 50% off!
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-12">
                    <img src={images.image.rebank} alt="Rebank" className="w-16 sm:w-20 h-auto" />
                    <img src={images.image.packfleet} alt="Packfleet" className="w-16 sm:w-20 h-auto" />
                    <img src={images.image.cable} alt="Cable" className="w-16 sm:w-20 h-auto" />
                    <img src={images.image.hypermile} alt="Hypermile" className="w-16 sm:w-20 h-auto" />
                    <img src={images.image.citationsy} alt="Citationsy" className="w-16 sm:w-20 h-auto" />
                    <img src={images.image.miminum} alt="Minimum" className="w-16 sm:w-20 h-auto" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;