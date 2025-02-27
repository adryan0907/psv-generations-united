import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from '@/components/Navigation';

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="min-h-screen bg-[#f8f9fa]">
        {/* Header stays the same */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar stays the same */}

            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              <section id="research-methodology">
                <h2 className="text-3xl font-bold mb-6 text-[#1E3E8F] border-b-2 border-[#E31E24] pb-2">
                  Research Methodology
                </h2>
                <Card className="bg-white border-[#E31E24]/10">
                  <CardHeader>
                    <CardTitle>Data Collection Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Survey Research</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Survey of 15 PSV supporters aged 65 and above</li>
                          <li>Data collection period: January - March 2024</li>
                          <li>Survey distribution: Paper-based (100%)</li>
                          <li>Response rate: 100%</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Qualitative Insights</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Follow-up conversations with survey participants</li>
                          <li>Average discussion duration: 30 minutes</li>
                          <li>Format: Informal conversations</li>
                          <li>Documentation: Written notes with consent</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Research Findings section updated */}
              <section id="research-findings">
                <h2 className="text-3xl font-bold mb-6 text-[#1E3E8F] border-b-2 border-[#E31E24] pb-2">
                  Research Findings
                </h2>
                <Card className="bg-white border-[#E31E24]/10">
                  <CardHeader>
                    <CardTitle>Key Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-4">
                      <li className="text-lg">
                        <span className="font-bold text-[#E31E24]">12 out of 15</span> express interest in social activities
                      </li>
                      <li className="text-lg">
                        <span className="font-bold text-[#E31E24]">7 out of 15</span> regularly attend matches
                      </li>
                      <li className="text-lg">
                        <span className="font-bold text-[#E31E24]">13 out of 15</span> want to share PSV memories
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Rest of the sections remain the same */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 