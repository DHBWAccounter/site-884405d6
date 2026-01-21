import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { AboutSection } from "@/components/about-section";
import { JoinSection } from "@/components/join-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
        <Mission />
        <AboutSection />
        <JoinSection />
      </div>
      <Footer />
    </main>
  );
}
