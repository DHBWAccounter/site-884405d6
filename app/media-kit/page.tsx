import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Download, Image, FileText } from "lucide-react";

export default function MediaKitPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-dark">
              Media Kit
            </h1>
            <p className="text-lg text-gray-700 mb-12">
              Official logos, images, and resources for media and partners.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Image className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dark">Logo Pack</h3>
                <p className="text-gray-600 mb-4">
                  Official Bitcoin Association Switzerland logos in various formats and sizes.
                </p>
                <button className="flex items-center text-primary hover:text-primary-dark font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dark">Press Release</h3>
                <p className="text-gray-600 mb-4">
                  Latest press releases and official announcements from the association.
                </p>
                <button className="flex items-center text-primary hover:text-primary-dark font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Image className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dark">Event Photos</h3>
                <p className="text-gray-600 mb-4">
                  High-resolution photos from our events and meetups.
                </p>
                <button className="flex items-center text-primary hover:text-primary-dark font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 font-serif text-dark">
                Brand Guidelines
              </h2>
              <p className="text-gray-600 mb-4">
                When using our logo and brand assets, please follow these guidelines:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Do not modify or distort the logo</li>
                <li>• Maintain adequate clear space around the logo</li>
                <li>• Use approved color versions only</li>
                <li>• Do not use the logo to endorse third-party products without permission</li>
                <li>• Contact us for any questions about brand usage</li>
              </ul>
            </div>

            <div className="bg-primary rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4 font-serif">
                Media Inquiries
              </h2>
              <p className="text-white/90 mb-6">
                For press inquiries, interview requests, or additional media resources, please contact us.
              </p>
              <a href="/contact-1" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary bg-white hover:bg-gray-100 transition-colors duration-200 rounded-full">
                Contact Media Team
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
