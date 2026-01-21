import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-dark">
              Privacy Policy
            </h1>
            <div className="max-w-3xl prose prose-lg">
              <p className="text-gray-700 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bitcoin Association Switzerland is committed to protecting your privacy. This privacy policy explains how we collect, use, and safeguard your personal information.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 font-serif text-dark">
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 font-serif text-dark">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, and to communicate with you about events and updates.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 font-serif text-dark">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this privacy policy, please contact us.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
