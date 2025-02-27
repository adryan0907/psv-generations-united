"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react'

// Sample messages data
const messages = [
  {
    id: 1,
    text: "Hi Jan! I'd love to hear about classic PSV matches!",
    sender: "user",
    timestamp: "14:30"
  },
  {
    id: 2,
    text: "Welcome! I remember the 1988 European Cup final like it was yesterday. What a match that was against Benfica!",
    sender: "match",
    timestamp: "14:31"
  },
  {
    id: 3,
    text: "That must have been incredible! I've only seen highlights. Would you tell me more about the atmosphere?",
    sender: "user",
    timestamp: "14:32"
  },
  {
    id: 4,
    text: "The atmosphere was electric! The whole city was red and white. Would you like to meet at the next match? I can share more stories!",
    sender: "match",
    timestamp: "14:33"
  }
]

export default function ChatWithUser({ params }: { params: { userId: string } }) {
  const [newMessage, setNewMessage] = useState('')

  const handleSend = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to an API
      console.log('Sending message:', newMessage)
      setNewMessage('')
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <header className="bg-[#E31E25] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/chat" className="text-2xl">←</Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/44617875_10156802076973953_318062304161693696_n.jpg"
                  alt="Jan's profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="font-semibold">Jan</h1>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
          </div>
          <button className="text-xl">⋮</button>
        </div>
      </header>

      {/* Chat Messages */}
      <main className="p-4 pb-36">
        <div className="max-w-lg mx-auto space-y-4">
          {/* Match Notification */}
          <div className="bg-[#E31E25]/10 rounded-lg p-4 text-center mb-6">
            <div className="flex justify-center gap-4 mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/profile-pic.jpg"
                  alt="Your profile"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/44617875_10156802076973953_318062304161693696_n.jpg"
                  alt="Jan's profile"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-[#E31E25] font-semibold mb-1">It's a Match!</p>
            <p className="text-gray-600 text-sm">
              You and Jan both want to connect. Start chatting about PSV!
            </p>
          </div>

          {/* Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-[#E31E25] text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="mb-1">{message.text}</p>
                <p className={`text-xs ${
                  message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Message Input */}
      <div className="fixed bottom-[72px] left-0 right-0 p-4 bg-white border-t">
        <div className="max-w-lg mx-auto flex gap-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-3 border rounded-full"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button
            onClick={handleSend}
            className="bg-[#E31E25] hover:bg-[#cc1b21] rounded-full px-6"
          >
            Send
          </Button>
        </div>
      </div>

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
        <Link href="/tickets" className="flex flex-col items-center text-gray-600">
          <span className="text-2xl">🎟️</span>
          <span className="text-xs">Tickets</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center text-[#E31E25]">
          <span className="text-2xl">💬</span>
          <span className="text-xs">Chat</span>
        </Link>
      </nav>
    </div>
  )
} 