import Footer from "@/components/footer"
import WaveDivider from "@/components/wave-divider"
import HeroSection from "./_sections/HeroSection"
import AboutSection from "./_sections/AboutSection"
import ProductsSection from "./_sections/ProductsSection"
import SocialSection from "./_sections/SocialSection"
import RepartosSection from "./_sections/RepartosSection"

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <WaveDivider fillClass="text-green-600" bgClass="bg-green-600" />
      <AboutSection />
      <WaveDivider fillClass="text-green-600" flipped />
      <ProductsSection />
      <WaveDivider fillClass="text-black" />
      <SocialSection />
      <WaveDivider fillClass="text-black" flipped />
      <RepartosSection />
      <Footer />
    </main>
  )
}
