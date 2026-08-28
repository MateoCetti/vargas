import Footer from "@/components/footer"
import HeroSection from "./_sections/HeroSection"
import AboutSection from "./_sections/AboutSection"
import ProductsSection from "./_sections/ProductsSection"
import SocialSection from "./_sections/SocialSection"
import RepartosSection from "./_sections/RepartosSection"

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <RepartosSection />
      <SocialSection />
      <Footer />
    </main>
  )
}
