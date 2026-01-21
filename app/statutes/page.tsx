import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Scale } from "lucide-react";

export default function StatutesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              Statutes
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              The official statutes governing Bitcoin Association Switzerland.
            </p>

            <div className="max-w-4xl">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <div className="flex items-start mb-6">
                  <Scale className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2 font-serif text-dark">
                      Association Statutes
                    </h2>
                    <p className="text-gray-600">
                      The statutes define the purpose, organization, and operation of Bitcoin Association Switzerland as a non-profit organization under Swiss law.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Article 1: Name and Seat</h3>
                    <p className="text-gray-600">
                      The association is named "Bitcoin Association Switzerland" and has its seat in Zurich, Switzerland.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Article 2: Purpose</h3>
                    <p className="text-gray-600">
                      The purpose of the association is to promote the understanding, adoption, and development of Bitcoin and related technologies in Switzerland.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Article 3: Membership</h3>
                    <p className="text-gray-600">
                      Any natural or legal person who supports the purpose of the association may become a member. Membership is granted upon application and approval by the board.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Article 4: Organization</h3>
                    <p className="text-gray-600">
                      The association consists of the General Assembly, the Board, and the Auditors. The General Assembly is the supreme body of the association.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Article 5: Finances</h3>
                    <p className="text-gray-600">
                      The association's financial resources consist of membership fees, donations, and other income. The association operates on a non-profit basis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-lg p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-4 font-serif">
                  Full Statutes Document
                </h3>
                <p className="text-white/90 mb-6">
                  The complete statutes document is available upon request.
                </p>
                <a href="/contact-1" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary bg-white hover:bg-gray-100 transition-colors duration-200 rounded-full">
                  Request Full Document
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
