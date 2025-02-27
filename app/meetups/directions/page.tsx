"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Directions() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <header className="bg-[#E31E25] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/meetups" className="text-2xl">←</Link>
            <h1 className="text-xl font-semibold">Directions</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        {/* Search Input */}
        <div className="mb-6">
          <Input
            placeholder="Enter your starting location"
            className="w-full p-3 border rounded-lg mb-2"
          />
          <div className="flex gap-2">
            <Button className="flex-1 bg-[#E31E25] hover:bg-[#cc1b21] text-white">
              Get Directions
            </Button>
            <Button variant="outline" className="border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white">
              Use Current Location
            </Button>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="relative w-full h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0403711218584!2d5.467022776855787!3d51.44171831611747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d91b5579c39f%3A0x3b6c4f168145cc91!2sPhilips%20Stadion!5e0!3m2!1sen!2snl!4v1709828058664!5m2!1sen!2snl"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Meeting Points List */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold mb-4">Meeting Points</h2>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Philips Stadium Café</h3>
                <p className="text-gray-600 text-sm">Frederiklaan 10A</p>
                <p className="text-gray-600 text-sm">5616 NH Eindhoven</p>
              </div>
              <Button variant="outline" size="sm" className="border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white">
                Route
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">PSV Fan Shop</h3>
                <p className="text-gray-600 text-sm">Philips Stadion</p>
                <p className="text-gray-600 text-sm">5616 NH Eindhoven</p>
              </div>
              <Button variant="outline" size="sm" className="border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white">
                Route
              </Button>
            </div>
          </div>
        </div>
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