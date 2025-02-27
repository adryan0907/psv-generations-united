"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BookTickets() {
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
            <h1 className="text-2xl font-bold">Book Tickets</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        {/* Match Info */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-bold text-2xl mb-1">PSV vs Ajax</h2>
                <p className="text-base text-gray-800">Sun, 24 Mar • 14:30</p>
              </div>
              <div className="bg-[#E31E25]/10 text-[#E31E25] px-4 py-2 rounded-full text-base font-bold">
                High Demand
              </div>
            </div>
            <div className="flex items-center gap-2 text-base text-gray-800">
              <span>🏟️</span>
              <span>Philips Stadium</span>
            </div>
          </div>
        </div>

        {/* Ticket Selection */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="p-5">
            <h3 className="font-bold text-xl mb-4">Select Tickets</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-bold text-lg">Adult</h4>
                  <p className="text-base text-gray-800">Age 18-64</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold">€35</span>
                  <select className="border rounded-lg p-2">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-bold text-lg">Senior</h4>
                  <p className="text-base text-gray-800">Age 65+</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold">€25</span>
                  <select className="border rounded-lg p-2">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="p-5">
            <h3 className="font-bold text-xl mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-base text-gray-800">
                <span>Subtotal</span>
                <span className="font-medium">€65.00</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-800">Senior discount</span>
                <span className="text-[#E31E25]">-€10.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-3 border-t">
                <span>Total</span>
                <span>€55.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link href="/transport" className="block">
            <div className="bg-white rounded-lg shadow-md p-5 text-center">
              <div className="text-3xl mb-2">🚌</div>
              <h3 className="font-bold text-lg">Book Transport</h3>
            </div>
          </Link>
          <Link href="/meetups" className="block">
            <div className="bg-white rounded-lg shadow-md p-5 text-center">
              <div className="text-3xl mb-2">☕</div>
              <h3 className="font-bold text-lg">Join Meetup</h3>
            </div>
          </Link>
        </div>

        {/* Confirm Button */}
        <Button 
          className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-lg font-bold"
          asChild
        >
          <Link href="/tickets/confirmation">
            Confirm Booking
          </Link>
        </Button>
      </main>

      {/* Simplified Bottom Navigation */}
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