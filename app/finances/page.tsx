import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TrendingUp, FileText } from "lucide-react";

export default function FinancesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              Financial Transparency
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              We believe in complete transparency regarding our finances and operations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-8">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4 font-serif text-dark">
                  Our Commitment
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Bitcoin Association Switzerland is committed to financial transparency. As a non-profit organization, we ensure that all funds are used responsibly to further our mission of promoting Bitcoin education and adoption in Switzerland.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4 font-serif text-dark">
                  Annual Reports
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We publish annual financial reports detailing our income, expenses, and activities. These reports are available to our members and the public.
                </p>
                <p className="text-sm text-gray-500">
                  Financial reports will be available here soon.
                </p>
              </div>
            </div>

            <div className="bg-primary rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 font-serif">
                Support Our Mission
              </h2>
              <p className="text-white/90 mb-6">
                Your support helps us continue our work in promoting Bitcoin education and advocacy in Switzerland.
              </p>
              <a href="/contact-1" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary bg-white hover:bg-gray-100 transition-colors duration-200 rounded-full">
                Contact Us About Donations
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
