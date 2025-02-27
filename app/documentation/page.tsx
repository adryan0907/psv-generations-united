import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <div className="bg-[#E31E24] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Project Documentation</h1>
          <p className="mt-4 text-xl">PSV Generations United Campaign</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {['Research Methodology', 'Project Plan', 'Research Findings', 'Fan Voices', 'Implementation'].map((item) => (
                      <a 
                        key={item} 
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="block p-2 hover:bg-[#E31E24]/10 rounded text-[#1E3E8F]"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Research Methodology */}
            <section id="research-methodology">
              <h2 className="text-3xl font-bold mb-6 text-[#1E3E8F] border-b-2 border-[#E31E24] pb-2">
                Research Methodology
              </h2>
              <Card className="bg-white border-[#E31E24]/10">
                <CardHeader className="bg-gradient-to-r from-[#E31E24]/5 to-transparent">
                  <CardTitle className="text-[#1E3E8F]">Data Collection Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Quantitative Research</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Survey of 1,000+ PSV supporters aged 65 and above</li>
                        <li>Data collection period: January - March 2024</li>
                        <li>Survey distribution: Online (30%) and Paper-based (70%)</li>
                        <li>Response rate: 82%</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Qualitative Research</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>8 in-depth interviews with elderly PSV fans</li>
                        <li>Average interview duration: 45 minutes</li>
                        <li>Interview format: Semi-structured</li>
                        <li>Recording method: Audio recordings with written consent</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Project Plan */}
            <section id="project-plan">
              <h2 className="text-3xl font-bold mb-6 text-[#1E3E8F] border-b-2 border-[#E31E24] pb-2">
                Project Plan
              </h2>
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-[#E31E24]/10">
                <CardHeader className="bg-gradient-to-r from-[#E31E24]/5 to-transparent">
                  <CardTitle className="text-[#1E3E8F]">Campaign Strategy: "PSV Generations United"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-lg">
                    Our campaign aims to create a multi-faceted approach to engage elderly supporters, fostering a sense of community and reducing loneliness through shared passion for PSV Eindhoven.
                  </p>
                  <h3 className="font-semibold text-lg mb-2">Key Pillars:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Match Day Experience Enhancement</li>
                    <li>Digital Engagement and Skill Development</li>
                    <li>Community Events and Intergenerational Activities</li>
                    <li>PSV History and Legacy Celebration</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Research Findings */}
            <section id="research-findings">
              <h2 className="text-3xl font-bold mb-6 text-[#1E3E8F] border-b-2 border-[#E31E24] pb-2">
                Research Findings
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-[#E31E24]/10">
                  <CardHeader className="bg-gradient-to-r from-[#E31E24]/5 to-transparent">
                    <CardTitle className="text-[#1E3E8F]">Key Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-4">
                      <li className="text-lg">
                        <span className="font-bold text-[#E31E24]">83%</span> express interest in social activities
                      </li>
                      <li className="text-lg">
                        <span className="font-bold text-[#E31E24]">45%</span> regularly attend matches
                      </li>
                      <li className="text-lg">
                        <span className="font-bold text-[#E31E24]">92%</span> want to share PSV memories
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-[#E31E24]/10">
                  <CardHeader className="bg-gradient-to-r from-[#E31E24]/5 to-transparent">
                    <CardTitle className="text-[#1E3E8F]">Key Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-4">
                      <li>Mobility and transportation issues</li>
                      <li>Digital literacy barriers</li>
                      <li>Social isolation concerns</li>
                      <li>Need for companionship at matches</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Interview Insights */}
            <section id="fan-voices">
              <h2 className="text-3xl font-bold mb-6 text-[#1E3E8F] border-b-2 border-[#E31E24] pb-2">
                Fan Voices
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Jan, 72",
                    quote: "I've been a PSV fan for over 60 years, but lately, I feel disconnected. I wish there were more ways for us older fans to stay involved."
                  },
                  {
                    name: "Maria, 78",
                    quote: "I used to go to every home game, but now it's hard for me to get to the stadium. If there was a way to get help with transportation and have someone to go with, I'd love to attend more often."
                  }
                ].map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-[#E31E24]/10">
                    <CardHeader className="bg-gradient-to-r from-[#E31E24]/5 to-transparent">
                      <CardTitle className="text-[#1E3E8F]">{testimonial.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-gray-600">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Implementation Timeline */}
            <section id="implementation">
              <h2 className="text-3xl font-bold mb-6 text-[#1E3E8F] border-b-2 border-[#E31E24] pb-2">
                Implementation Timeline
              </h2>
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-[#E31E24]/10">
                <CardHeader className="bg-gradient-to-r from-[#E31E24]/5 to-transparent">
                  <CardTitle className="text-[#1E3E8F]">3-Phase Rollout Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      {
                        phase: "Phase 1: Preparation (Weeks 1-4)",
                        items: [
                          "Finalize campaign branding",
                          "Develop digital platform",
                          "Recruit volunteers",
                          "Soft launch with 100 supporters"
                        ]
                      },
                      {
                        phase: "Phase 2: Full Rollout (Weeks 5-8)",
                        items: [
                          "Launch digital archive",
                          "Enhanced match day experiences",
                          "Weekly community events",
                          "Match day activities"
                        ]
                      },
                      {
                        phase: "Phase 3: Optimization (Weeks 9-12)",
                        items: [
                          "Analyze feedback",
                          "Refine initiatives",
                          "Launch mentorship program",
                          "Long-term planning"
                        ]
                      }
                    ].map((phase, index) => (
                      <div key={index} className="border-l-4 border-[#E31E24] pl-4">
                        <h3 className="font-semibold text-lg mb-2">{phase.phase}</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 