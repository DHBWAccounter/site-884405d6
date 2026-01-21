"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              width={140}
              height={140}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link nav-link-active">Home</Link>
            
            {/* News Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                News
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  <Link href="/bitcoin-association-switzerland" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    News
                  </Link>
                  <Link href="/archive" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Archive
                  </Link>
                </div>
              </div>
            </div>

            {/* Events Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                Events
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  <Link href="/roadshow-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Roadshow 2025
                  </Link>
                  <Link href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Bitcoin Meetup (Zurich)
                  </Link>
                  <Link href="https://www.meetup.com/Bitcoin-Meetup-Geneva" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Bitcoin Meetup Geneva
                  </Link>
                  <Link href="https://www.meetup.com/Bitcoin-Meetup-Luzern" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Bitcoin Meetup Luzern
                  </Link>
                  <Link href="https://www.meetup.com/Bitcoin-Meetup-Neuchatel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Bitcoin Meetup Neuchatel
                  </Link>
                  <Link href="https://www.meetup.com/bitcoin-meetup-basel/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Bitcoin Meetup Basel
                  </Link>
                </div>
              </div>
            </div>

            {/* Membership Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                Membership
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  <Link href="/private" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Private
                  </Link>
                  <Link href="/corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Corporate
                  </Link>
                  <Link href="/our-corporate-members" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Our Corporate Members
                  </Link>
                </div>
              </div>
            </div>

            {/* Participate Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                Participate
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  <Link href="/meetups-events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Meetups & Events
                  </Link>
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                About
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  <Link href="/about-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    About
                  </Link>
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Board
                  </Link>
                  <Link href="/finances" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Finances
                  </Link>
                  <Link href="/statutes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Statutes
                  </Link>
                  <Link href="/media-kit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Media Kit
                  </Link>
                  <Link href="/contact-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container-custom py-4 space-y-4">
            <Link href="/" className="block nav-link nav-link-active">Home</Link>
            
            <div className="space-y-2">
              <div className="font-medium text-gray-900">News</div>
              <div className="pl-4 space-y-2">
                <Link href="/bitcoin-association-switzerland" className="block nav-link">News</Link>
                <Link href="/archive" className="block nav-link">Archive</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Events</div>
              <div className="pl-4 space-y-2">
                <Link href="/roadshow-2025" className="block nav-link">Roadshow 2025</Link>
                <Link href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/" className="block nav-link">Bitcoin Meetup (Zurich)</Link>
                <Link href="https://www.meetup.com/Bitcoin-Meetup-Geneva" className="block nav-link">Bitcoin Meetup Geneva</Link>
                <Link href="https://www.meetup.com/Bitcoin-Meetup-Luzern" className="block nav-link">Bitcoin Meetup Luzern</Link>
                <Link href="https://www.meetup.com/Bitcoin-Meetup-Neuchatel" className="block nav-link">Bitcoin Meetup Neuchatel</Link>
                <Link href="https://www.meetup.com/bitcoin-meetup-basel/" className="block nav-link">Bitcoin Meetup Basel</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Membership</div>
              <div className="pl-4 space-y-2">
                <Link href="/private" className="block nav-link">Private</Link>
                <Link href="/corporate" className="block nav-link">Corporate</Link>
                <Link href="/our-corporate-members" className="block nav-link">Our Corporate Members</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Participate</div>
              <div className="pl-4 space-y-2">
                <Link href="/meetups-events" className="block nav-link">Meetups & Events</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">About</div>
              <div className="pl-4 space-y-2">
                <Link href="/about-1" className="block nav-link">About</Link>
                <Link href="/board" className="block nav-link">Board</Link>
                <Link href="/finances" className="block nav-link">Finances</Link>
                <Link href="/statutes" className="block nav-link">Statutes</Link>
                <Link href="/media-kit" className="block nav-link">Media Kit</Link>
                <Link href="/contact-1" className="block nav-link">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
