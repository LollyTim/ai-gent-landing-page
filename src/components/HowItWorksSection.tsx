import { images } from "../constants/images";

const HowItWorksSection = () => {
    return (
        <div className="w-full bg-black py-16">
            <div className="container xl:max-w-5xl md:w-[100%] w-[80%] mx-auto px-4">
                <h2 className="text-white font-geist-regular text-4xl text-center mb-12">How it works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#171717] p-8 rounded-lg flex flex-col items-start text-start">
                        <img src={images.image.NetConfIcon} alt="Connect into system" className="mb-6" />
                        <h3 className="text-white text-xl font-geist-regular mb-4">Connect into system</h3>
                        <p className="text-[#A1A1A1] font-geist-regular text-sm  text-start w-[242px]">
                            Easily connect AI-Gent into your customer success channels
                        </p>
                        <a href="#" className="text-blue-400 underline">Create Account</a>
                    </div>
                    <div className="bg-[#171717] p-8 rounded-lg flex flex-col items-start text-start">
                        <img src={images.image.NetConfIcon} alt="Supply required info" className="mb-6" />
                        <h3 className="text-white text-xl font-geist-regular mb-4">Supply required info</h3>
                        <p className="text-[#A1A1A1] font-geist-regular text-sm ">
                            Customize your customer success agent in less than 5 minutes
                        </p>
                        <a href="#" className="text-white underline">Learn More</a>
                    </div>
                    <div className="bg-[#171717] p-8 rounded-lg flex flex-col items-start text-start">
                        <img src={images.image.NetConfIcon} alt="Enjoy 24/7 support" className="mb-6" />
                        <h3 className="text-white text-xl font-geist-regular mb-4">Enjoy 24/7 support</h3>
                        <p className="text-[#A1A1A1] font-geist-regular text-sm ">
                            Watch your new customer support agent handle frontline 24/7
                        </p>
                        <a href="#" className="text-white underline">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;