"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Sample matches data
const matches = [
  {
    id: 'ajax',
    opponent: 'Ajax',
    date: 'Sun, 24 Mar',
    time: '14:30',
    competition: 'Eredivisie',
    status: 'High Demand',
    priceFrom: '30'
  },
  {
    id: 'feyenoord',
    opponent: 'Feyenoord',
    date: 'Sun, 31 Mar',
    time: '16:45',
    competition: 'Eredivisie',
    status: 'Limited',
    priceFrom: '30'
  },
  {
    id: 'az',
    opponent: 'AZ',
    date: 'Sun, 7 Apr',
    time: '14:30',
    competition: 'Eredivisie',
    status: 'Available',
    priceFrom: '25'
  }
]

export default function Tickets() {
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
            <h1 className="text-2xl font-bold">Match Tickets</h1>
          </div>
          <button className="text-2xl">⋮</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        {/* Senior Benefits Banner */}
        <div className="bg-[#E31E25]/10 rounded-lg p-5 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-white rounded-full p-3">
              <span className="text-[#E31E25] text-2xl">👵</span>
            </div>
            <div>
              <h2 className="font-bold text-xl text-[#E31E25] mb-2">Senior Benefits</h2>
              <p className="text-base text-gray-800">
                Special discounts and assistance available for supporters aged 65+
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Matches */}
        <h2 className="text-2xl font-bold mb-5">Upcoming Matches</h2>
        <div className="space-y-5">
          {matches.map((match) => (
            <div key={match.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-xl mb-1">PSV vs {match.opponent}</h3>
                    <p className="text-base text-gray-800">{match.date} • {match.time}</p>
                  </div>
                  <div className="bg-[#E31E25]/10 text-[#E31E25] px-4 py-2 rounded-full text-base font-bold">
                    {match.status}
                  </div>
                </div>
                <div className="flex items-center justify-between text-base text-gray-800 border-t pt-4">
                  <span className="font-medium">{match.competition}</span>
                  <span className="font-medium">From €{match.priceFrom}</span>
                </div>
                <Button 
                  className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white mt-4 py-6 text-lg font-bold"
                  asChild
                >
                  <Link href={`/tickets/book`}>
                    Book Tickets
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-lg p-5 mt-6">
          <h3 className="font-bold text-xl mb-4">Ticket Information</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="bg-[#E31E25]/10 rounded-full p-3 mt-1">
                <span className="text-[#E31E25] text-lg">🦽</span>
              </div>
              <span className="text-base text-gray-800">Accessible seating available in all sections</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-[#E31E25]/10 rounded-full p-3 mt-1">
                <span className="text-[#E31E25] text-lg">👥</span>
              </div>
              <span className="text-base text-gray-800">Companion tickets available at reduced rates</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-[#E31E25]/10 rounded-full p-3 mt-1">
                <span className="text-[#E31E25] text-lg">🚌</span>
              </div>
              <span className="text-base text-gray-800">Transport booking available after ticket purchase</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-[999] bg-white py-4 px-6 flex justify-between items-center border-t">
        <Link href="/" className="flex flex-col items-center text-gray-700">
          <span className="text-2xl mb-1">🏠</span>
          <span className="text-sm font-medium">Home</span>
        </Link>
        <Link href="/transport" className="flex flex-col items-center text-gray-700">
          <span className="text-2xl mb-1">🚌</span>
          <span className="text-sm font-medium">Transport</span>
        </Link>
        <Link href="/meetups" className="flex flex-col items-center text-gray-700">
          <span className="text-2xl mb-1">☕</span>
          <span className="text-sm font-medium">Meetups</span>
        </Link>
        <Link href="/tickets" className="flex flex-col items-center text-[#E31E25]">
          <span className="text-2xl mb-1">🎟️</span>
          <span className="text-sm font-medium">Tickets</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center text-gray-700">
          <span className="text-2xl mb-1">💬</span>
          <span className="text-sm font-medium">Chat</span>
        </Link>
      </nav>
    </div>
  )
} 