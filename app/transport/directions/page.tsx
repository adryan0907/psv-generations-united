"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useState, useId } from "react"

// Sample meeting points data
const meetingPoints = [
  {
    id: 'cafe',
    name: 'Philips Stadium Café',
    address: 'Frederiklaan 10A',
    postcode: '5616 NH Eindhoven'
  },
  {
    id: 'shop',
    name: 'PSV Fan Shop',
    address: 'Philips Stadion',
    postcode: '5616 NH Eindhoven'
  }
]

export default function Directions() {
  const [location, setLocation] = useState("")
  const [showDirections, setShowDirections] = useState(false)
  const iframeId = useId()

  const handleGetDirections = () => {
    if (location) {
      setShowDirections(true)
    }
  }

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
        setShowDirections(true)
      })
    }
  }

  if (showDirections) {
    return (
      <div className="bg-white min-h-screen">
        {/* Header */}
        <header className="bg-[#E31E25] text-white p-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setShowDirections(false)} className="text-white">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold">Route to Stadium</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="pb-24">
          {/* Route Info */}
          <div className="p-4 bg-[#E31E25] text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <p className="text-sm opacity-80">From</p>
                <p className="font-bold truncate">{location}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm opacity-80">To</p>
                <p className="font-bold">Philips Stadium</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <span>🚶‍♂️</span>
                <span className="text-sm">25 min</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <span>📍</span>
                <span className="text-sm">2.5 km</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[calc(100vh-280px)]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${encodeURIComponent(location)}&destination=Philips+Stadion+Eindhoven&mode=walking`}
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              name={iframeId}
            />
          </div>

          {/* Action Buttons */}
          <div className="fixed bottom-[80px] left-0 right-0 p-4 bg-white border-t">
            <div className="flex gap-4">
              <Button 
                variant="outline"
                className="flex-1 border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white py-6 text-lg font-bold"
                onClick={() => window.open(`https://maps.google.com/directions?origin=${encodeURIComponent(location)}&destination=Philips+Stadion+Eindhoven`)}
              >
                Open in Maps
              </Button>
              <Button 
                className="flex-1 bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-lg font-bold"
                onClick={() => setShowDirections(false)}
              >
                Change Route
              </Button>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-[999] bg-white py-4 px-6 flex justify-between items-center border-t">
          <Link href="/" className="flex flex-col items-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-1">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <span className="text-sm">Home</span>
          </Link>
          <Link href="/transport" className="flex flex-col items-center">
            <Image
              src="/bus-icon.png"
              alt="Transport"
              width={24}
              height={24}
              className="mb-1"
            />
            <span className="text-sm">Transport</span>
          </Link>
          <Link href="/meetups" className="flex flex-col items-center text-[#E31E25]">
            <Image
              src="/coffee-icon.png"
              alt="Meetups"
              width={24}
              height={24}
              className="mb-1"
            />
            <span className="text-sm">Meetups</span>
          </Link>
          <Link href="/tickets/book" className="flex flex-col items-center">
            <Image
              src="/ticket-icon.png"
              alt="Tickets"
              width={24}
              height={24}
              className="mb-1"
            />
            <span className="text-sm">Tickets</span>
          </Link>
          <Link href="/chat" className="flex flex-col items-center">
            <Image
              src="/chat-icon.png"
              alt="Chat"
              width={24}
              height={24}
              className="mb-1"
            />
            <span className="text-sm">Chat</span>
          </Link>
        </nav>
      </div>
    )
  }

  // Original return for location input view
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-[#E31E25] text-white p-4">
        <div className="flex items-center gap-3">
          <Link href="/transport" className="text-white">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold">Directions</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {/* Location Input */}
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-sm border p-4 mb-4">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your starting location"
              className="w-full text-lg text-gray-600 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button 
              onClick={handleGetDirections}
              className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-lg font-bold"
            >
              Get Directions
            </Button>
            <Button 
              onClick={handleUseCurrentLocation}
              variant="outline"
              className="w-full border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white py-6 text-lg font-bold"
            >
              Use Current Location
            </Button>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative h-[300px] w-full mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0403711218584!2d5.467022776855787!3d51.44171831611747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d91b5579c39f%3A0x3b6c4f168145cc91!2sPhilips%20Stadion!5e0!3m2!1sen!2snl!4v1709828058664!5m2!1sen!2snl"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            name={iframeId}
          />
          <Link 
            href="https://maps.google.com"
            className="absolute bottom-4 left-4 text-blue-500 bg-white px-3 py-1 rounded text-sm"
          >
            View larger map
          </Link>
        </div>

        {/* Meeting Points */}
        <div className="px-4">
          <h2 className="text-xl font-bold mb-4">Meeting Points</h2>
          <div className="space-y-4">
            {meetingPoints.map((point) => (
              <div key={point.id} className="bg-white rounded-lg shadow-sm border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{point.name}</h3>
                    <p className="text-gray-600">{point.address}</p>
                    <p className="text-gray-600">{point.postcode}</p>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white"
                    onClick={() => window.open(`https://maps.google.com/directions?daddr=${encodeURIComponent(`${point.address}, ${point.postcode}`)}`)}
                  >
                    Route
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-[999] bg-white py-4 px-6 flex justify-between items-center border-t">
        <Link href="/" className="flex flex-col items-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-1">
            <span className="text-white text-2xl">⚡</span>
          </div>
          <span className="text-sm">Home</span>
        </Link>
        <Link href="/transport" className="flex flex-col items-center">
          <Image
            src="/bus-icon.png"
            alt="Transport"
            width={24}
            height={24}
            className="mb-1"
          />
          <span className="text-sm">Transport</span>
        </Link>
        <Link href="/meetups" className="flex flex-col items-center text-[#E31E25]">
          <Image
            src="/coffee-icon.png"
            alt="Meetups"
            width={24}
            height={24}
            className="mb-1"
          />
          <span className="text-sm">Meetups</span>
        </Link>
        <Link href="/tickets/book" className="flex flex-col items-center">
          <Image
            src="/ticket-icon.png"
            alt="Tickets"
            width={24}
            height={24}
            className="mb-1"
          />
          <span className="text-sm">Tickets</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center">
          <Image
            src="/chat-icon.png"
            alt="Chat"
            width={24}
            height={24}
            className="mb-1"
          />
          <span className="text-sm">Chat</span>
        </Link>
      </nav>
    </div>
  )
} 