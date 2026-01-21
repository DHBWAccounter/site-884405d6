import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-dark">
              Terms and Conditions
            </h1>
            <div className="max-w-3xl prose prose-lg">
              <p className="text-gray-700 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the Bitcoin Association Switzerland website, you agree to be bound by these terms and conditions.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 font-serif text-dark">
                Use License
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 font-serif text-dark">
                Disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all warranties.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 font-serif text-dark">
                Limitations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Bitcoin Association Switzerland be liable for any damages arising out of the use or inability to use the materials on our website.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
