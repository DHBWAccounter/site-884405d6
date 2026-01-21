import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, MapPin, Users } from "lucide-react";

export default function MeetupsEventsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              Meetups & Events
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              Join our community events and connect with Bitcoin enthusiasts across Switzerland.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Zurich Meetup */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-dark">Zurich</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Regular meetups in Zurich featuring presentations, discussions, and networking.
                </p>
                <a
                  href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Meetup →
                </a>
              </div>

              {/* Geneva Meetup */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-dark">Geneva</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our Geneva community for monthly Bitcoin discussions and events.
                </p>
                <a
                  href="https://www.meetup.com/Bitcoin-Meetup-Geneva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Meetup →
                </a>
              </div>

              {/* Luzern Meetup */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-dark">Luzern</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Connect with Bitcoin enthusiasts in the Luzern area.
                </p>
                <a
                  href="https://www.meetup.com/Bitcoin-Meetup-Luzern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Meetup →
                </a>
              </div>

              {/* Neuchatel Meetup */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-dark">Neuchatel</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Regular meetups in Neuchatel for Bitcoin education and networking.
                </p>
                <a
                  href="https://www.meetup.com/Bitcoin-Meetup-Neuchatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Meetup →
                </a>
              </div>

              {/* Basel Meetup */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-dark">Basel</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Join the Basel Bitcoin community for regular meetups and discussions.
                </p>
                <a
                  href="https://www.meetup.com/bitcoin-meetup-basel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Meetup →
                </a>
              </div>

              {/* Roadshow */}
              <div className="bg-primary rounded-lg p-6 hover:shadow-lg transition-shadow text-white">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  <h3 className="text-xl font-bold">Roadshow 2025</h3>
                </div>
                <p className="text-white/90 mb-4">
                  Join us for our special Bitcoin Roadshow events across Switzerland in 2025.
                </p>
                <a
                  href="/roadshow-2025"
                  className="text-white hover:text-white/80 font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Join CTA */}
            <div className="mt-16 text-center bg-gray-50 rounded-lg p-12">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 font-serif text-dark">
                Become a Member
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join Bitcoin Association Switzerland and become part of our growing community. Choose from private or corporate membership options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/private" className="btn-primary">
                  Private Membership
                </a>
                <a href="/corporate" className="btn-secondary">
                  Corporate Membership
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
