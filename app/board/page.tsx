import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Users } from "lucide-react";

export default function BoardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              Board of Directors
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              Meet the team leading Bitcoin Association Switzerland.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dark">Board Member {i}</h3>
                  <p className="text-primary text-sm mb-2">Position Title</p>
                  <p className="text-gray-600 text-sm">
                    Brief description of the board member's background and role in the association.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
