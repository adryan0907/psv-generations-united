"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"

export default function Directions() {
  const [location, setLocation] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGetDirections = () => {
    // Handle get directions
    console.log("Getting directions for:", location)
  }

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
      })
    }
  }

  if (!mounted) return null

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#E31E25] text-white p-4">
        <div className="flex items-center gap-3">
          <Link href="/meetups" className="text-white">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold">Directions</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        {/* Location Input */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your starting location"
            className="w-full text-lg text-gray-600 outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-6">
          <Button 
            onClick={handleGetDirections}
            className="flex-1 bg-[#E31E25] hover:bg-[#cc1b21] text-white"
          >
            Get Directions
          </Button>
          <Button 
            onClick={handleUseCurrentLocation}
            variant="outline"
            className="flex-1 border border-[#E31E25] text-[#E31E25] bg-white hover:bg-[#E31E25] hover:text-white"
          >
            Use Current Location
          </Button>
        </div>

        {/* Map */}
        <div className="relative h-[300px] w-full mb-6 rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0403711218584!2d5.467022776855787!3d51.44171831611747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d91b5579c39f%3A0x3b6c4f168145cc91!2sPhilips%20Stadion!5e0!3m2!1sen!2snl!4v1709828058664!5m2!1sen!2snl"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Link 
            href="https://maps.google.com"
            className="absolute bottom-4 left-4 text-blue-500 bg-white px-3 py-1 rounded text-sm"
          >
            View larger map
          </Link>
        </div>

        {/* Meeting Points */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Meeting Points</h2>
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg mb-1">Philips Stadium Café</h3>
                <p className="text-gray-600">Frederiklaan 10A</p>
                <p className="text-gray-600">5616 NH Eindhoven</p>
              </div>
              <Button 
                variant="outline"
                className="border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white"
              >
                Route
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg mb-1">PSV Fan Shop</h3>
                <p className="text-gray-600">Philips Stadion</p>
                <p className="text-gray-600">5616 NH Eindhoven</p>
              </div>
              <Button 
                variant="outline"
                className="border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white"
              >
                Route
              </Button>
            </div>
          </div>
        </div>
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