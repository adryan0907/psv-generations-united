"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TicketConfirmation() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-[#E31E25] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/idfewo20xH_1740486009112.png"
              alt="PSV Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h1 className="text-xl font-semibold">Booking Confirmed</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        {/* Success Message */}
        <div className="text-center mb-8 mt-4">
          <div className="w-20 h-20 bg-[#E31E25]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600">Your tickets have been booked successfully</p>
        </div>

        {/* Ticket Details */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-xl">PSV vs Ajax</h3>
              <p className="text-gray-600">Sun, 24 Mar • 14:30</p>
            </div>
            <div className="bg-[#E31E25]/10 rounded-full p-2">
              <span className="text-[#E31E25] text-2xl">🎟️</span>
            </div>
          </div>
          <div className="border-t pt-4 mt-2">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Senior Ticket (65+)</span>
              <span>1x</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Companion Ticket</span>
              <span>0x</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Paid</span>
              <span>€55.00</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-bold mb-3">Important Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="bg-[#E31E25]/10 rounded-full p-2 mt-1">
                <span className="text-[#E31E25] text-sm">📱</span>
              </div>
              <span className="text-gray-700">Your e-tickets will be sent to your email</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-[#E31E25]/10 rounded-full p-2 mt-1">
                <span className="text-[#E31E25] text-sm">🚶</span>
              </div>
              <span className="text-gray-700">Stadium assistance has been arranged</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-[#E31E25]/10 rounded-full p-2 mt-1">
                <span className="text-[#E31E25] text-sm">🎯</span>
              </div>
              <span className="text-gray-700">Your seats are in the accessible section</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6">
            View E-Tickets
          </Button>
          <Link href="/transport">
            <Button variant="outline" className="w-full border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white py-6">
              Book Transport
            </Button>
          </Link>
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
        <Link href="/meetups" className="flex flex-col items-center text-gray-600">
          <span className="text-2xl">☕</span>
          <span className="text-xs">Meetups</span>
        </Link>
        <Link href="/tickets" className="flex flex-col items-center text-[#E31E25]">
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