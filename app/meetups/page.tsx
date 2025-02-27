"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Sample meetups data
const meetups = [
  {
    id: 'pre-match',
    title: 'Pre-match Gathering',
    location: 'Philips Stadium Café',
    time: '12:30',
    date: 'Sun, 24 Mar',
    attendees: 25,
    description: 'Join fellow PSV supporters before the match for refreshments and conversation.',
    status: 'Open',
    image: '/philips-stadium-cafe.jpg',
    tag: 'FEATURED MEETUP'
  },
  {
    id: 'supporters-club',
    title: 'Supporters Club Meetup',
    location: 'PSV Fan Shop',
    time: '13:00',
    date: 'Sun, 24 Mar',
    attendees: 15,
    description: 'Meet at the official PSV Fan Shop with other supporters.',
    status: 'Limited Spots',
    image: '/psv-fan-shop.jpg',
    tag: 'SUPPORTER EVENT'
  }
]

export default function Meetups() {
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
            <h1 className="text-2xl font-bold">MATCHDAY MEETUPS</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {/* Featured Meetup */}
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
              MEETING POINTS
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
            <h2 className="text-3xl font-bold mb-2">Philips Stadium Area</h2>
            <p className="text-lg mb-4 text-white/90">
              Multiple meetup locations around the stadium
            </p>
            <Button 
              className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-xl font-medium"
              asChild
            >
              <Link href="/meetups/directions">
                Get Directions
              </Link>
            </Button>
          </div>
        </div>

        {/* Meetups List */}
        <div className="px-4">
          <h3 className="text-sm font-bold text-gray-500 mt-6 mb-4">AVAILABLE MEETUPS</h3>
          <div className="space-y-4">
            {meetups.map((meetup) => (
              <div key={meetup.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />
                  <Image
                    src={meetup.image}
                    alt={meetup.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#E31E25] px-3 py-1 text-sm font-bold text-white">
                      {meetup.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2">{meetup.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-base text-gray-800">{meetup.date} • {meetup.time}</p>
                    <p className="text-base text-gray-800">{meetup.location}</p>
                    <div className="flex items-center text-base text-gray-800">
                      <span className="text-[#E31E25] mr-2">👥</span>
                      <span>{meetup.attendees} supporters attending</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-lg font-bold"
                    asChild
                  >
                    <Link href={`/meetups/join/${meetup.id}`}>
                      Join Meetup
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
            <Link href="/transport" className="block">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="mb-2">
                  <span className="bg-[#E31E25] text-white px-3 py-1 text-sm font-bold">TRANSPORT</span>
                </div>
                <h3 className="font-bold text-lg">Book Match Transport</h3>
              </div>
            </Link>
            <Link href="/tickets/book" className="block">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="mb-2">
                  <span className="bg-[#E31E25] text-white px-3 py-1 text-sm font-bold">TICKETS</span>
                </div>
                <h3 className="font-bold text-lg">Book Match Tickets</h3>
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
        <Link href="/meetups" className="flex flex-col items-center text-[#E31E25]">
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