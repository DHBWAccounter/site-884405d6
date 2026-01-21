import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-dark">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Get in touch with Bitcoin Association Switzerland.
            </p>
            <div className="max-w-2xl">
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                For media inquiries, membership questions, or general information about our events and activities, please reach out to us.
              </p>
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">
                  This contact form is under construction. In the meantime, please connect with us through our social media channels or attend one of our meetups.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
