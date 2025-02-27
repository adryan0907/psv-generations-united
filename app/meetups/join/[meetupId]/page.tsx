"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Sample meetup data - in a real app, this would come from an API
const meetups = {
  'pre-match': {
    title: 'Pre-match Gathering',
    location: 'Philips Stadium Café',
    time: '18:00',
    date: 'Sun, 24 Mar',
    attendees: 25,
    description: 'Join fellow PSV supporters before the match for refreshments and conversation. Perfect for sharing memories and making new friends.',
    amenities: [
      'Refreshments available',
      'Match ticket collection point',
      'Volunteer assistance',
      'Indoor seating'
    ]
  },
  'supporters-club': {
    title: 'Supporters Club Meetup',
    location: 'PSV Fan Shop',
    time: '17:30',
    date: 'Sun, 24 Mar',
    attendees: 15,
    description: 'Meet at the official PSV Fan Shop with other supporters. Great opportunity to get your matchday merchandise and meet fellow fans.',
    amenities: [
      'Shop discounts for attendees',
      'Photo opportunities',
      'Meet PSV legends',
      'Indoor location'
    ]
  }
}

export default function JoinMeetup({ params }: { params: { meetupId: string } }) {
  const meetup = meetups[params.meetupId as keyof typeof meetups]

  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <header className="bg-[#E31E25] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/meetups" className="text-2xl">←</Link>
            <h1 className="text-xl font-semibold">Join Meetup</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        {/* Meetup Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-1">{meetup.title}</h2>
            <p className="text-gray-600 mb-1">{meetup.location}</p>
            <p className="text-gray-600 mb-3">{meetup.date} • {meetup.time}</p>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#E31E25]/10 rounded-full p-1">
                <span className="text-[#E31E25]">👥</span>
              </div>
              <span className="text-gray-700">{meetup.attendees} supporters attending</span>
            </div>
            <p className="text-gray-700 mb-4">
              {meetup.description}
            </p>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h3 className="font-bold mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox id="assistance" className="mt-1" />
              <Label htmlFor="assistance" className="text-sm leading-tight cursor-pointer">
                I need mobility assistance
                <span className="block text-gray-600 text-xs mt-1">
                  Our volunteers will help you at the meetup location
                </span>
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="seating" className="mt-1" />
              <Label htmlFor="seating" className="text-sm leading-tight cursor-pointer">
                I prefer seated area
                <span className="block text-gray-600 text-xs mt-1">
                  We'll ensure seating is available for you
                </span>
              </Label>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-bold mb-3">Available at this meetup</h3>
          <ul className="space-y-2">
            {meetup.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-[#E31E25]">•</span>
                <span className="text-gray-700">{amenity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Join Button */}
        <Button className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-lg">
          Confirm & Join Meetup
        </Button>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-[999] bg-white py-3 px-6 flex justify-between items-center border-t">
        <Link href="/" className="flex flex-col items-center text-gray-600">
          <span className="text-2xl">🏠</span>
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/transport" className="flex flex-col items-center text-gray-600">
          <span className="text-2xl">🚌</span>
          <span className="text-xs">Transport</span>
        </Link>
        <Link href="/meetups" className="flex flex-col items-center text-[#E31E25]">
          <span className="text-2xl">☕</span>
          <span className="text-xs">Meetups</span>
        </Link>
        <Link href="/tickets" className="flex flex-col items-center text-gray-600">
          <span className="text-2xl">🎟️</span>
          <span className="text-xs">Tickets</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center text-gray-600">
          <span className="text-2xl">💬</span>
          <span className="text-xs">Chat</span>
        </Link>
      </nav>
    </div>
  )
} 