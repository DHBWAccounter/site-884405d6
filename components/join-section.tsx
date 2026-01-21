import Link from "next/link";
import Image from "next/image";

export function JoinSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-dark">
              Join Us
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              You can become a contributor to our cause, or participate yourself.
            </p>
            <Link href="/meetups-events" className="btn-primary">
              Find Out How →
            </Link>
          </div>
          <div>
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
              alt="Join Bitcoin Association"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
