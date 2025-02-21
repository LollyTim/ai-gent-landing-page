import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWorksSection from "./components/HowItWorksSection"
import KnowledgeBased from "./components/Knowledgebased"
import LikeAPro from "./components/LikeAPro"
import WhatOurCustSays from "./components/WhatOurCustSays"




function App() {


  return (
    <main className=" w-full bg-black overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <WhatOurCustSays />
      <LikeAPro />
      <KnowledgeBased />
      <Footer />

    </main>
  )
}

export default App
