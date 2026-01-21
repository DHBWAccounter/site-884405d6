import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Building2 } from "lucide-react";

export default function CorporateMembersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              Our Corporate Members
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              We're proud to partner with leading companies in the Bitcoin ecosystem.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <Building2 className="w-16 h-16 text-gray-300" />
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-lg p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4 font-serif">
                Become a Corporate Member
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join our growing list of corporate partners and demonstrate your commitment to Bitcoin's future in Switzerland.
              </p>
              <a href="/corporate" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary bg-white hover:bg-gray-100 transition-colors duration-200 rounded-full">
                Learn About Corporate Membership
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
