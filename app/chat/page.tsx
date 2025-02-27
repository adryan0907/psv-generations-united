"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Sample matches data
const matches = [
  {
    id: 'jan',
    name: 'Jan',
    age: 68,
    image: '/44617875_10156802076973953_318062304161693696_n.jpg',
    lastSeen: 'Online',
    interests: 'Classic PSV matches',
    tag: 'NEW MATCH'
  },
  {
    id: 'henk',
    name: 'Henk',
    age: 72,
    image: '/OldStars-walking-football-Loek-Weimar-web.jpg',
    lastSeen: '2h ago',
    interests: 'Season ticket holder',
    tag: 'NEW MATCH'
  }
]

// Sample chats data
const chats = [
  {
    id: 'volunteer',
    name: 'Volunteer Support',
    avatar: 'V',
    isVolunteer: true,
    status: 'Available to help',
    isOnline: true,
    unread: 0,
    tag: 'SUPPORT'
  },
  {
    id: 'match-day',
    name: 'Match Day Group',
    avatar: '👥',
    members: '15 members',
    unread: 2,
    tag: 'GROUP CHAT'
  },
  {
    id: 'transport',
    name: 'Transport Coordination',
    avatar: '🚌',
    description: 'For Ajax match',
    unread: 0,
    tag: 'TRANSPORT'
  }
]

export default function Chat() {
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
            <h1 className="text-2xl font-bold">MESSAGES</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {/* New Matches */}
        <div className="px-4">
          <h3 className="text-sm font-bold text-gray-500 mt-6 mb-4">NEW MATCHES</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {matches.map((match) => (
              <Link 
                key={match.id} 
                href={`/chat/${match.id}`}
                className="flex-shrink-0 w-[240px] bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-[180px]">
                  <Image
                    src={match.image}
                    alt={`${match.name}'s profile`}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#E31E25] px-3 py-1 text-sm font-bold text-white">
                      NEW MATCH
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">{match.name}, {match.age}</h3>
                  <p className="text-base text-gray-800">{match.interests}</p>
                  <div className="flex items-center mt-2">
                    <span className={`w-2 h-2 rounded-full mr-2 ${match.lastSeen === 'Online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                    <span className="text-sm text-gray-600">{match.lastSeen}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Active Chats */}
        <div className="px-4">
          <h3 className="text-sm font-bold text-gray-500 mt-6 mb-4">ACTIVE CHATS</h3>
          <div className="space-y-4">
            {chats.map((chat) => (
              <Link 
                key={chat.id}
                href={`/chat/${chat.id}`}
                className="block bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-5 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                    chat.isVolunteer ? 'bg-[#E31E25] text-white' : 'bg-gray-100'
                  }`}>
                    {chat.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="bg-[#E31E25] px-3 py-1 text-sm font-bold text-white">
                          {chat.tag}
                        </span>
                      </div>
                      {chat.unread > 0 && (
                        <span className="bg-[#E31E25] text-white text-sm px-3 py-1 rounded-full">
                          {chat.unread} NEW
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg mt-2">{chat.name}</h3>
                    <p className="text-base text-gray-800">
                      {chat.status || chat.members || chat.description}
                    </p>
                  </div>
                  {chat.isOnline && (
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  )}
                </div>
              </Link>
            ))}
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
                <h3 className="font-bold text-lg">Join Meetup</h3>
              </div>
            </Link>
            <Link href="/transport" className="block">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="mb-2">
                  <span className="bg-[#E31E25] text-white px-3 py-1 text-sm font-bold">TRANSPORT</span>
                </div>
                <h3 className="font-bold text-lg">Book Transport</h3>
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
        <Link href="/meetups" className="flex flex-col items-center text-gray-700">
          <span className="text-2xl mb-1">☕</span>
          <span className="text-sm font-medium">Meetups</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center text-[#E31E25]">
          <span className="text-2xl mb-1">💬</span>
          <span className="text-sm font-medium">Chat</span>
        </Link>
      </nav>
    </div>
  )
} 