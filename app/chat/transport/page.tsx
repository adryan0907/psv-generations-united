"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MoreVertical, Send } from "lucide-react"
import { useState, useEffect } from "react"

// Sample messages for transport coordination
const initialMessages = [
  {
    id: 1,
    text: "Welcome to the Transport Group! This group is for coordinating transport to the Ajax match.",
    sender: "admin",
    time: "14:30",
    name: "Transport Coordinator"
  },
  {
    id: 2,
    text: "I'm looking for 2 seats from Veldhoven area. Anyone driving?",
    sender: "other",
    time: "14:31",
    name: "Jan"
  },
  {
    id: 3,
    text: "I have space in my car from Veldhoven! Meeting at XYZ parking lot at 12:30",
    sender: "other",
    time: "14:32",
    name: "Henk"
  }
]

export default function TransportChat() {
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        name: "You"
      }
    ])
    setNewMessage("")
  }

  if (!mounted) return null

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#E31E25] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/chat" className="text-white">
            <ArrowLeft size={24} />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🚌</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Transport Coordination</h1>
              <p className="text-sm">15 members</p>
            </div>
          </div>
        </div>
        <button type="button" className="text-white">
          <MoreVertical size={24} />
        </button>
      </header>

      {/* Group Info Banner */}
      <div className="bg-[#E31E25]/10 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-[#E31E25]">Ajax vs PSV</h2>
            <p className="text-gray-600">Sun, 24 Mar • 14:30</p>
          </div>
          <Button 
            variant="outline"
            className="border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white"
            asChild
          >
            <Link href="/transport">View Transport Options</Link>
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 ${
                message.sender === 'user'
                  ? 'bg-[#E31E25] text-white'
                  : message.sender === 'admin'
                  ? 'bg-[#E31E25]/10 text-[#E31E25]'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.sender !== 'user' && (
                <p className="text-xs font-bold mb-1">{message.name}</p>
              )}
              <p className="mb-1">{message.text}</p>
              <p className={`text-xs ${
                message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t p-4 flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-full border outline-none"
        />
        <Button 
          onClick={handleSendMessage}
          className="bg-[#E31E25] hover:bg-[#cc1b21] text-white rounded-full w-12 h-12 flex items-center justify-center p-0"
        >
          <Send size={20} />
        </Button>
      </div>

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
          <span className="text-xs text-gray-600">Meetups</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center mb-1">
            <span className="text-2xl">💬</span>
          </div>
          <span className="text-xs text-[#E31E25]">Chat</span>
        </Link>
      </nav>
    </div>
  )
} 