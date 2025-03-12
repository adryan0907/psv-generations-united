"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Sample profiles data
const profiles = [
  {
    id: 'jan',
    name: "Jan",
    age: 68,
    image: "/44617875_10156802076973953_318062304161693696_n.jpg",
    bio: "PSV fan since 1960. Love discussing classic matches!",
    location: "Eindhoven",
    interests: ["Classic matches", "Stadium tours", "Pre-match meetups"],
    tag: "SUPPORTER MATCH"
  },
  {
    id: 'henk',
    name: "Henk",
    age: 72,
    image: "/OldStars-walking-football-Loek-Weimar-web.jpg",
    bio: "Season ticket holder for 40 years. Remember the glory days!",
    location: "Eindhoven",
    interests: ["Season ticket holder", "Match day groups", "Transport sharing"],
    tag: "SUPPORTER MATCH"
  }
]

export default function Home() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const router = useRouter()

  const handleDislike = () => {
    setCurrentProfileIndex((prev) => (prev + 1) % profiles.length)
  }

  const handleLike = () => {
    // Get current profile
    const currentProfile = profiles[currentProfileIndex]
    
    // Show match animation/dialog here if needed
    
    // Redirect to chat with the matched user
    router.push(`/chat/${currentProfile.id}`)
  }

  const currentProfile = profiles[currentProfileIndex]

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
            <h1 className="text-2xl font-bold">PSV GENERATIONS</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {/* Featured Profile */}
        <div className="relative h-[70vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />
          <Image
            src={currentProfile.image}
            alt={`${currentProfile.name}'s profile`}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute top-8 left-4 z-20">
            <span className="bg-[#E31E25] px-3 py-1 text-sm font-bold text-white">
              {currentProfile.tag}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
            <h2 className="text-3xl font-bold mb-2">
              {currentProfile.name}, {currentProfile.age}
            </h2>
            <p className="text-lg mb-4 text-white/90">
              {currentProfile.bio}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {currentProfile.interests.map((interest, index) => (
                <span 
                  key={index}
                  className="bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button 
                onClick={handleDislike}
                className="flex-1 bg-black/40 backdrop-blur-sm hover:bg-black/50 text-white py-6 text-xl font-medium"
              >
                Skip
              </Button>
              <Button 
                onClick={handleLike}
                className="flex-1 bg-[#E31E25] hover:bg-[#cc1b21] text-white py-6 text-xl font-medium"
              >
                Connect
              </Button>
            </div>
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
                <h3 className="font-bold text-lg">Join Pre-match Gathering</h3>
              </div>
            </Link>
            <Link href="/transport" className="block">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="mb-2">
                  <span className="bg-[#E31E25] text-white px-3 py-1 text-sm font-bold">TRANSPORT</span>
                </div>
                <h3 className="font-bold text-lg">Book Match Transport</h3>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-[999] bg-white py-4 px-6 flex justify-between items-center border-t">
        <Link href="/" className="flex flex-col items-center text-[#E31E25]">
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

