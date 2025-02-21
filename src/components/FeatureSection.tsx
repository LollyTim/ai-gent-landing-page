import { images } from "../constants/images";

const FeatureSection = () => {


    return (
        <section className="bg-black w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                {/* Feature 1 */}
                <div
                    className={` flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 mb-20 lg:mb-32 transition-all duration-700 ease-out`}>
                    <div className="w-[80%] lg:w-5/12 max-w-lg">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-geist-regular mb-4 sm:mb-6">
                            Trained by you, <br className="hidden sm:block" />
                            responds like you
                        </h2>
                        <p className="text-base sm:text-lg text-[#A1A1A1] font-geist-regular leading-relaxed">
                            AI-Gent adopts your communication style, tone & language when responding to enquiries
                        </p>
                    </div>
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
                        <img
                            src={images.image.trainedBYImg}
                            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] transform hover:scale-105 transition-transform duration-300"
                            alt="AI Training Visualization"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Feature 2 */}
                <div
                    className={`feature-container flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 mb-20 lg:mb-32 transition-all duration-700 ease-out`}
                >
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-start order-2 lg:order-1">
                        <img
                            src={images.image.channelsIMg}
                            className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] transform hover:scale-105 transition-transform duration-300"
                            alt="Support Channels"
                            loading="lazy"
                        />
                    </div>
                    <div className="w-[80%] lg:w-5/12 max-w-lg order-1 lg:order-2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-geist-regular mb-4 sm:mb-6">
                            Available for your primary support channels
                        </h2>
                        <p className="text-base sm:text-lg text-[#A1A1A1] font-geist-regular leading-relaxed">
                            AI-Gent adopts your communication style, tone & language when responding to enquiries
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div
                    className={`feature-container flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 transition-all duration-700 ease-out`}
                >
                    <div className="w-[80%] lg:w-5/12 max-w-lg">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-geist-regular mb-4 sm:mb-6">
                            No code required
                        </h2>
                        <p className="text-base sm:text-lg text-[#A1A1A1] font-geist-regular leading-relaxed">
                            Set up in minutes!
                        </p>
                    </div>
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
                        <img
                            src={images.image.nocodeImg}
                            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] transform hover:scale-105 transition-transform duration-300"
                            alt="No Code Setup"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;