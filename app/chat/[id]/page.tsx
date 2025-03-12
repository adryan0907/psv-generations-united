"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MoreVertical, Send } from "lucide-react"
import { useState, useEffect, use } from "react"

// Sample messages data
const initialMessages = [
  {
    id: 1,
    text: "Hi Jan! I'd love to hear about classic PSV matches!",
    sender: "user",
    time: "14:30"
  },
  {
    id: 2,
    text: "Welcome! I remember the 1988 European Cup final like it was yesterday. What a match that was against Benfica!",
    sender: "other",
    time: "14:31"
  },
  {
    id: 3,
    text: "That must have been incredible! I've only seen highlights. Would you tell me more about the atmosphere?",
    sender: "user",
    time: "14:32"
  }
]

// Sample user data
const users = {
  'jan': {
    name: 'Jan',
    image: '/44617875_10156802076973953_318062304161693696_n.jpg',
    status: 'Online'
  },
  'henk': {
    name: 'Henk',
    image: '/OldStars-walking-football-Loek-Weimar-web.jpg',
    status: '2h ago'
  }
}

export default function ChatRoom({ params }: { params: Promise<{ id: string }> }) {
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  // Unwrap params using React.use()
  const resolvedParams = use(params)
  const user = users[resolvedParams.id as keyof typeof users]

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
        })
      }
    ])
    setNewMessage("")
  }

  if (!mounted) return null
  if (!user) return <div>User not found</div>

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#E31E25] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/chat" className="text-white">
            <ArrowLeft size={24} />
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src={user.image}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold">{user.name}</h1>
              <p className="text-sm">{user.status}</p>
            </div>
          </div>
        </div>
        <button type="button" className="text-white">
          <MoreVertical size={24} />
        </button>
      </header>

      {/* Match Banner */}
      <div className="bg-pink-50 p-4">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/idfewo20xH_1740486009112.png"
            alt="Your profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="text-center">
            <h2 className="text-[#E31E25] font-bold text-xl">It's a Match!</h2>
            <p className="text-gray-600">You and {user.name} both want to connect. Start chatting about PSV!</p>
          </div>
          <Image
            src={user.image}
            alt={`${user.name}'s profile`}
            width={50}
            height={50}
            className="rounded-full"
          />
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
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
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