import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Building2, CheckCircle, Users } from "lucide-react";

export default function CorporateMembershipPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
                Corporate Membership
              </h1>
              <p className="text-lg text-gray-700 mb-12">
                Partner with Bitcoin Association Switzerland and demonstrate your commitment to the Bitcoin ecosystem.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-lg p-8">
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4 font-serif text-dark">
                    Corporate Partnership
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Elevate your company's presence in the Bitcoin community through corporate membership.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Brand visibility on our website</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Sponsorship opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Access to member network</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Speaking opportunities at events</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary rounded-lg p-8 text-white">
                  <Users className="w-12 h-12 mb-4" />
                  <h2 className="text-2xl font-bold mb-4 font-serif">
                    Why Partner With Us
                  </h2>
                  <p className="text-white/90 mb-6">
                    Join leading companies supporting Bitcoin adoption in Switzerland.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Connect with Bitcoin enthusiasts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Shape industry discussions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Recruitment opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Thought leadership platform</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 font-serif text-dark">
                  Become a Corporate Member
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us to discuss corporate membership opportunities and how we can work together.
                </p>
                <a href="/contact-1" className="btn-primary">
                  Inquire About Partnership
                </a>
              </div>

              <div className="text-center">
                <a href="/our-corporate-members" className="text-primary hover:text-primary-dark font-medium">
                  View Our Current Corporate Members →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
