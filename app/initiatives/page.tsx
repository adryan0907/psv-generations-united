import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InitiativesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Initiatives</h1>

      <p className="text-lg mb-8">
        PSV Generations United offers a range of programs and activities designed to engage our elderly supporters and
        foster intergenerational connections. Here are our key initiatives:
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InitiativeCard
          title="PSV Buddy System"
          description="Pairing elderly supporters with younger fans for matchday companionship and support."
          imageSrc="/placeholder.svg?height=200&width=300"
        />
        <InitiativeCard
          title="Memories Digital Archive"
          description="An online platform for sharing and reliving cherished PSV moments across generations."
          imageSrc="/placeholder.svg?height=200&width=300"
        />
        <InitiativeCard
          title="Community Events"
          description="Regular gatherings, workshops, and activities to foster connections among our supporters."
          imageSrc="/placeholder.svg?height=200&width=300"
        />
        <InitiativeCard
          title="Enhanced Matchday Experience"
          description="Tailored services and facilities to ensure our elderly fans enjoy every moment at the stadium."
          imageSrc="/placeholder.svg?height=200&width=300"
        />
        <InitiativeCard
          title="Intergenerational Mentorship"
          description="Connecting our experienced supporters with younger fans to share knowledge and passion."
          imageSrc="/placeholder.svg?height=200&width=300"
        />
        <InitiativeCard
          title="Tech Literacy Workshops"
          description="Empowering our elderly supporters with digital skills to stay connected in the modern world."
          imageSrc="/placeholder.svg?height=200&width=300"
        />
      </div>
    </div>
  )
}

function InitiativeCard({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={imageSrc || "/placeholder.svg"}
        width={300}
        height={200}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

