import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Newspaper, Calendar } from "lucide-react";

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              News
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              Latest updates and announcements from Bitcoin Association Switzerland.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <article key={i} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>January {2025 - i + 1}, 2025</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-dark">
                      News Article Title {i}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      Brief excerpt from the news article describing the content and key points...
                    </p>
                    <a href="#" className="text-primary hover:text-primary-dark font-medium text-sm">
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
