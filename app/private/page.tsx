import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { User, CheckCircle } from "lucide-react";

export default function PrivateMembershipPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
                Private Membership
              </h1>
              <p className="text-lg text-gray-700 mb-12">
                Join our community of Bitcoin enthusiasts and help shape the future of Bitcoin in Switzerland.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-lg p-8">
                  <User className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4 font-serif text-dark">
                    Individual Membership
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Become a private member and connect with like-minded individuals passionate about Bitcoin.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Access to exclusive events</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Networking opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Voting rights on association matters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Regular updates and newsletters</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary rounded-lg p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4 font-serif">
                    Membership Benefits
                  </h2>
                  <p className="text-white/90 mb-6">
                    As a private member, you'll be part of Switzerland's leading Bitcoin community.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Influence Bitcoin policy in Switzerland</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Educational resources and workshops</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Member-only meetups and gatherings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Support the Bitcoin ecosystem</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 font-serif text-dark">
                  Ready to Join?
                </h3>
                <p className="text-gray-600 mb-6">
                  Membership applications are processed on a rolling basis. Contact us to learn more about becoming a private member.
                </p>
                <a href="/contact-1" className="btn-primary">
                  Apply for Membership
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
