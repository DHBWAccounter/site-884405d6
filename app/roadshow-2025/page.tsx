import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Roadshow2025Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              Bitcoin Roadshow 2025
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              Join us for an exciting journey across Switzerland, bringing Bitcoin education and community to cities nationwide.
            </p>

            <div className="bg-primary rounded-lg p-8 text-white mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">
                Coming to a City Near You
              </h2>
              <p className="text-white/90 max-w-3xl">
                The Bitcoin Roadshow 2025 is a series of events taking place across Switzerland, featuring expert speakers, networking opportunities, and educational content about Bitcoin and cryptocurrency.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8 font-serif text-dark">
              Upcoming Events
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-gray-500">Q1 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Zurich</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Location TBD</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Time TBD</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-gray-500">Q1 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Geneva</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Location TBD</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Time TBD</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-gray-500">Q2 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Basel</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Location TBD</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Time TBD</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-gray-500">Q2 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Luzern</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Location TBD</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Time TBD</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 font-serif text-dark">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive updates about the Roadshow 2025, including event dates, speaker announcements, and registration information.
              </p>
              <a href="/contact-1" className="btn-primary">
                Subscribe for Updates
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
