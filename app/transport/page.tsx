"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Sample transport options
const transportOptions = [
  {
    id: 'bus',
    name: 'Supporter Bus',
    time: '12:30',
    pickup: 'Central Station',
    price: '8',
    status: 'Available',
    seats: '12',
    image: '/supporter-bus.jpg',
    tag: 'MATCH TRANSPORT'
  },
  {
    id: 'shuttle',
    name: 'Stadium Shuttle',
    time: '13:00',
    pickup: 'City Center',
    price: '5',
    status: 'Limited',
    seats: '4',
    image: '/stadium-shuttle.jpg',
    tag: 'MATCH TRANSPORT'
  }
]

export default function Transport() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-[#E31E25] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/idfewo20xH_1740486009112.png"
              alt="PSV Logo"
              width={32}
              height={32}
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold">MATCH TRANSPORT</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {/* Featured Map */}
        <div className="relative h-[70vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0403711218584!2d5.467022776855787!3d51.44171831611747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d91b5579c39f%3A0x3b6c4f168145cc91!2sPhilips%20Stadion!5e0!3m2!1sen!2snl!4v1709828058664!5m2!1sen!2snl"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-8 left-4 z-20">
            <span className="bg-[#E31E25] px-3 py-1 text-sm font-bold text-white">
              PICKUP POINTS
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
            <h2 className="text-3xl font-bold mb-2">PSV vs Ajax</h2>
            <p className="text-lg mb-4 text-white/90">Sun, 24 Mar • 14:30</p>
            <Button 
              className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-xl font-medium"
              asChild
            >
              <Link href="/transport/directions">
                View All Routes
              </Link>
            </Button>
          </div>
        </div>

        {/* Transport Options */}
        <div className="px-4">
          <h3 className="text-sm font-bold text-gray-500 mt-6 mb-4">AVAILABLE TRANSPORT</h3>
          <div className="space-y-4">
            {transportOptions.map((option) => (
              <div key={option.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[200px]">
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#E31E25] px-3 py-1 text-sm font-bold text-white">
                      {option.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{option.name}</h3>
                      <p className="text-base text-gray-800">Departure: {option.time}</p>
                    </div>
                    <div className="bg-[#E31E25]/10 text-[#E31E25] px-4 py-2 rounded-full text-base font-bold">
                      {option.seats} seats left
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-base text-gray-800 border-t pt-4 mb-4">
                    <span className="font-medium">From: {option.pickup}</span>
                    <span className="font-medium">€{option.price}</span>
                  </div>
                  <Button 
                    className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-lg font-bold"
                    asChild
                  >
                    <Link href={`/transport/book/${option.id}`}>
                      Book Transport
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4">
          <h3 className="text-sm font-bold text-gray-500 mt-6 mb-4">QUICK ACTIONS</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/meetups" className="block">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="mb-2">
                  <span className="bg-[#E31E25] text-white px-3 py-1 text-sm font-bold">MEETUPS</span>
                </div>
                <h3 className="font-bold text-lg">Join Meetup</h3>
              </div>
            </Link>
            <Link href="/tickets/book" className="block">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="mb-2">
                  <span className="bg-[#E31E25] text-white px-3 py-1 text-sm font-bold">TICKETS</span>
                </div>
                <h3 className="font-bold text-lg">Book Tickets</h3>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-[999] bg-white py-4 px-6 flex justify-between items-center border-t">
        <Link href="/" className="flex flex-col items-center text-gray-700">
          <span className="text-2xl mb-1">🏠</span>
          <span className="text-sm font-medium">Home</span>
        </Link>
        <Link href="/meetups" className="flex flex-col items-center text-gray-700">
          <span className="text-2xl mb-1">☕</span>
          <span className="text-sm font-medium">Meetups</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center text-gray-700">
          <span className="text-2xl mb-1">💬</span>
          <span className="text-sm font-medium">Chat</span>
        </Link>
      </nav>
    </div>
  )
} 