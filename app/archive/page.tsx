import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Archive, Calendar } from "lucide-react";

export default function ArchivePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              News Archive
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              Browse our historical news and announcements.
            </p>

            <div className="max-w-4xl">
              <div className="space-y-6">
                {Array.from({ length: 10 }).map((_, i) => (
                  <article key={i} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                          <Archive className="w-8 h-8 text-gray-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>December {2024 - Math.floor(i / 3)}, {2024 - Math.floor(i / 3)}</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-dark">
                          Archived News Article Title {i + 1}
                        </h2>
                        <p className="text-gray-600 text-sm">
                          Brief description of the archived news article and its content...
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="btn-secondary">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
