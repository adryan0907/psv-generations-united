import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Trophy, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About PSV Generations United</h1>

      <section className="mb-12">
        <p className="text-lg mb-4">
          PSV Generations United is a groundbreaking initiative aimed at enhancing the lives of our elderly supporters.
          We believe in the power of football to bring people together, combat loneliness, and create lasting memories.
        </p>
        <p className="text-lg mb-4">
          Through a range of tailored programs and events, we're building a stronger, more connected PSV community that
          spans generations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg">
          To create a vibrant, inclusive community where elderly PSV supporters feel valued, connected, and engaged,
          leveraging the unifying power of football to bridge generational gaps and combat social isolation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Key Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={<Users className="h-8 w-8 text-blue-500" />} title="Target Audience" value="65+ years" />
          <StatCard icon={<Calendar className="h-8 w-8 text-green-500" />} title="Campaign Duration" value="Ongoing" />
          <StatCard icon={<Trophy className="h-8 w-8 text-yellow-500" />} title="Engagement Goal" value="+40%" />
          <StatCard icon={<Heart className="h-8 w-8 text-red-500" />} title="Lives Impacted" value="5,000+" />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <p className="text-lg mb-4">
          PSV Generations United is powered by a dedicated team of staff and volunteers who are passionate about making
          a difference in the lives of our elderly supporters. Our team includes:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>PSV Foundation members</li>
          <li>Social workers and gerontology specialists</li>
          <li>Current and former PSV players</li>
          <li>Enthusiastic volunteers from all age groups</li>
        </ul>
      </section>
    </div>
  )
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

