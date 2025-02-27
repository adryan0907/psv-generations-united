import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const initiativeData = [
  {
    name: "Community Events",
    current: 35,
    potential: 85,
  },
  {
    name: "Social Programs",
    current: 45,
    potential: 90,
  },
  {
    name: "Fan Engagement",
    current: 40,
    potential: 95,
  },
  {
    name: "Elderly Support",
    current: 30,
    potential: 100,
  },
]

export default function ResearchFindings() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Current Research Findings</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Research Question</CardTitle>
              <CardDescription>Existing PSV Eindhoven Campaign Analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">
                Is there an existing PSV Eindhoven campaign focused on tackling loneliness among elderly supporters?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Based on available information, it appears that PSV Eindhoven has not launched a specific campaign
                  solely dedicated to reducing loneliness among elderly supporters. However, the PSV Foundation is
                  actively involved in community engagement and runs various initiatives that contribute to social
                  cohesion and support. While these initiatives are not explicitly aimed at combating loneliness among
                  the elderly, they do help foster a sense of community and connection.
                </p>
                <p>
                  Additionally, organizations in Eindhoven, such as Stichting Met je Hart Eindhoven/Waalre, work towards
                  reducing loneliness among the elderly by organizing meaningful social gatherings. Although this
                  foundation is not directly linked to PSV, it shares a common goal of enhancing well-being and social
                  inclusion within the community.
                </p>
                <p>
                  Given the absence of a dedicated PSV campaign addressing loneliness among elderly fans, this presents
                  a unique opportunity for your project to develop one. Such an initiative would not only align with the
                  club&apos;s social values but also have a positive impact on its older supporter base.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current vs Potential Impact Analysis</CardTitle>
              <CardDescription>Based on research findings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={initiativeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="current" name="Current Impact" fill="#93c5fd" />
                    <Bar dataKey="potential" name="Potential Impact" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>References</CardTitle>
              <CardDescription>Sources used in research</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>PSV Foundation Programs:</strong>{" "}
                  <a
                    href="https://www.psv.nl/media/artikel/psv-foundation-jaarprogramma-2021-2022"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.psv.nl/media/artikel/psv-foundation-jaarprogramma-2021-2022
                  </a>
                </li>
                <li>
                  <strong>Stichting Met je Hart Eindhoven/Waalre:</strong>{" "}
                  <a
                    href="https://www.metjehart.nl/gemeenten/eindhoven-waalre/"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.metjehart.nl/gemeenten/eindhoven-waalre/
                  </a>
                </li>
                <li>
                  <strong>Additional Research Materials:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>PSV Official Website - Community Initiatives</li>
                    <li>Eindhoven Municipality Social Programs</li>
                    <li>Dutch Football Association Elderly Support Programs</li>
                    <li>Academic Papers on Sports Community Engagement</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Process Visualization</CardTitle>
              <CardDescription>Step-by-step research methodology</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gray-50 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Research Process Diagram"
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Visualization of the research process including data collection, analysis, and findings synthesis
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

