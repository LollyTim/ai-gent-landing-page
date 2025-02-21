

const Footer = () => {
    return (
        <div className="bg-black *:p-4 md:p-6 lg:p-8 text-center">
            <div className=" flex flex-row justify-between items-center w-[80%] mx-auto">
                <h1 className="text-sm md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 lg:mb-5">Al-Gent</h1>
                <a href="mailto:info@al-gent.com" className="text-white mb-3 md:mb-4 lg:mb-5 block">
                    Send us a mail
                </a>

            </div>
            <p className="text-xs md:text-sm lg:text-base text-white/40">
                Copyright @ Al-Gent Inc. 2025
            </p>
        </div>
    );
};

export default Footer;