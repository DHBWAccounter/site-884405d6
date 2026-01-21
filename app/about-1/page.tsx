import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-dark">
              About Us
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Learn more about Bitcoin Association Switzerland and our mission to promote Bitcoin adoption and education.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              This page is under construction. Please check back soon for more information about our organization, history, and goals.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
