"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { use } from "react"

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

export default function JoinMeetup({ params }: { params: Promise<{ meetupId: string }> }) {
  const resolvedParams = use(params)
  const meetup = meetups[resolvedParams.meetupId as keyof typeof meetups]

  if (!meetup) {
    return <div>Meetup not found</div>
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-[#E31E25] text-white p-4">
        <div className="flex items-center gap-3">
          <Link href="/meetups" className="text-white">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold">Join Meetup</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        {/* Meetup Details Card */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <h2 className="text-xl font-bold mb-2">{meetup.title}</h2>
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <span>📍</span>
            <span>{meetup.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span>🕒</span>
            <span>{meetup.date} • {meetup.time}</span>
          </div>
          <div className="flex items-center gap-2 mb-4 bg-[#E31E25]/10 text-[#E31E25] rounded-full px-3 py-1 w-fit">
            <span>👥</span>
            <span>{meetup.attendees} supporters attending</span>
          </div>
          <p className="text-gray-700">
            {meetup.description}
          </p>
        </div>

        {/* Preferences Section */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <h3 className="font-bold mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox id="assistance" className="mt-1 border-[#E31E25] text-[#E31E25]" />
              <Label htmlFor="assistance" className="text-sm leading-tight cursor-pointer">
                I need mobility assistance
                <span className="block text-gray-500 text-xs mt-1">
                  Our volunteers will help you at the meetup location
                </span>
              </Label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="seating" className="mt-1 border-[#E31E25] text-[#E31E25]" />
              <Label htmlFor="seating" className="text-sm leading-tight cursor-pointer">
                I prefer seated area
                <span className="block text-gray-500 text-xs mt-1">
                  We'll ensure seating is available for you
                </span>
              </Label>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <h3 className="font-bold mb-3">Available at this meetup</h3>
          <div className="space-y-2">
            {meetup.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-[#E31E25]" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Join Button */}
        <Button className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-lg font-bold">
          Confirm & Join Meetup
        </Button>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white py-4 px-6 flex justify-between items-center border-t">
        <Link href="/" className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center mb-1">
            <div className="bg-black rounded-full p-2">
              <span className="text-white text-lg">⚡</span>
            </div>
          </div>
          <span className="text-xs text-gray-600">Home</span>
        </Link>
        <Link href="/meetups" className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center mb-1">
            <span className="text-2xl">☕</span>
          </div>
          <span className="text-xs text-[#E31E25]">Meetups</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center mb-1">
            <span className="text-2xl">💬</span>
          </div>
          <span className="text-xs text-gray-600">Chat</span>
        </Link>
      </nav>
    </div>
  )
} 