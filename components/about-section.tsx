import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
              alt="About Bitcoin Association"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-dark">
              About
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Find out about our organization and mission.
            </p>
            <Link href="/about-1" className="btn-primary">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
