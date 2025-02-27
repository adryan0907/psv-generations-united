import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Calendar } from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Get Involved</h1>

      <p className="text-lg mb-8">
        Join us in making a difference in the lives of our elderly supporters. There are many ways you can contribute to
        PSV Generations United:
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <InvolvementCard
          title="Become a Buddy"
          description="Partner with an elderly supporter to attend matches and events together."
          icon={<Users className="h-8 w-8 text-red-600" />}
        />
        <InvolvementCard
          title="Volunteer"
          description="Help organize and run our community events and workshops."
          icon={<Calendar className="h-8 w-8 text-red-600" />}
        />
        <InvolvementCard
          title="Donate"
          description="Support our initiatives financially to help us reach more elderly supporters."
          icon={<Heart className="h-8 w-8 text-red-600" />}
        />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Get Started</h2>
        <ol className="list-decimal pl-6 text-lg space-y-4">
          <li>Choose how you'd like to contribute: as a buddy, volunteer, or donor.</li>
          <li>Fill out our online application form with your details and areas of interest.</li>
          <li>Attend an orientation session to learn more about our programs and expectations.</li>
          <li>Complete any necessary training (e.g., for buddies or specific volunteer roles).</li>
          <li>Start making a difference in the lives of our elderly supporters!</li>
        </ol>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
        <Button size="lg" className="bg-red-600 hover:bg-red-700">
          Apply Now
        </Button>
      </section>
    </div>
  )
}

function InvolvementCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

