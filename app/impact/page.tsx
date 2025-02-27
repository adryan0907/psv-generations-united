import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Impact</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">By the Numbers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ImpactCard title="Elderly Match Attendance" value="30% increase" />
          <ImpactCard title="Buddy Pairings" value="1,000+" />
          <ImpactCard title="Memories Shared" value="5,000+" />
          <ImpactCard title="Community Events" value="100+" />
          <ImpactCard title="Digital Skills Training" value="500 fans" />
          <ImpactCard title="Volunteer Hours" value="10,000+" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Testimonial
            quote="Thanks to PSV Generations United, I've made new friends and rediscovered my love for the game. I feel part of the PSV family again."
            author="Jan, 72"
          />
          <Testimonial
            quote="The buddy system has been amazing. I've learned so much from my elderly companion about PSV's history."
            author="Lisa, 24"
          />
          <Testimonial
            quote="The tech workshops have opened up a new world for me. Now I can watch PSV highlights and chat with other fans online!"
            author="Pieter, 68"
          />
          <Testimonial
            quote="Volunteering with PSV Generations United has been incredibly rewarding. It's wonderful to see the joy on our elderly fans' faces."
            author="Emma, 35"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Long-term Benefits</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Reduced social isolation among elderly supporters</li>
          <li>Increased sense of community and belonging</li>
          <li>Improved mental and physical well-being of participants</li>
          <li>Enhanced intergenerational understanding and respect</li>
          <li>Preservation and sharing of PSV's rich history and traditions</li>
          <li>Stronger, more diverse fan base for PSV Eindhoven</li>
        </ul>
      </section>
    </div>
  )
}

function ImpactCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-red-600">{value}</p>
      </CardContent>
    </Card>
  )
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <blockquote className="text-lg italic mb-4">"{quote}"</blockquote>
        <p className="text-right font-semibold">- {author}</p>
      </CardContent>
    </Card>
  )
}

