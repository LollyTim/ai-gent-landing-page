
const LikeAPro = () => {
    return (
        <section className="w-full bg-black flex items-center justify-center p-4">
            <div className="w-full xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl max-w-sm rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
                <div className="p-8 flex flex-col items-center gap-6">
                    <h2 className="text-2xl md:text-3xl font-medium text-white text-center">
                        Handle customer support{' '}
                        <span className="text-yellow-500 italic">like a pro</span>
                    </h2>

                    <p className="text-sm md:text-base text-zinc-400 text-center max-w-xl">
                        Integrate the most advanced customer support agent into business in minutes,
                        automate responses with a round the clock coverage, saving you time & money.
                    </p>

                    <button
                        className="mt-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full text-white text-sm md:text-base font-medium"
                        aria-label="Pre-subscribe with 50% discount"
                    >
                        Pre-subscribe (50% discount)
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LikeAPro;