import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-4 font-serif text-primary">
                404
              </h1>
              <h2 className="text-3xl font-bold mb-4 font-serif text-dark">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Sorry, we couldn't find the page you're looking for.
              </p>
              <Link href="/" className="btn-primary">
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
