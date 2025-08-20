import { BarChart3, TrendingUp, Users, Zap, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Dashboard = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/5 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Central Dashboard</span>
            <br />
            <span className="text-foreground">Real-time Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dashboard providing instant insights, real-time monitoring, 
            and advanced analytics for all your survey campaigns.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="glass-card p-8 hover-glow">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Survey Campaign Dashboard</h3>
                <p className="text-muted-foreground">Customer Satisfaction Survey - Q4 2024</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-whatsapp text-whatsapp">
                  <Users className="w-3 h-3 mr-1" />
                  1,247 Online
                </Badge>
                <Badge variant="outline" className="border-voice-call text-voice-call">
                  <Users className="w-3 h-3 mr-1" />
                  892 Offline
                </Badge>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-2xl font-bold text-primary">2,139</div>
                      <div className="text-xs text-muted-foreground">Total Responses</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-dashboard/10 to-dashboard/5 border-dashboard/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-dashboard" />
                    <div>
                      <div className="text-2xl font-bold text-dashboard">94%</div>
                      <div className="text-xs text-muted-foreground">Response Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-sync/10 to-sync/5 border-sync/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-sync" />
                    <div>
                      <div className="text-2xl font-bold text-sync">Real-time</div>
                      <div className="text-xs text-muted-foreground">Live Updates</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-central/10 to-central/5 border-central/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-central" />
                    <div>
                      <div className="text-2xl font-bold text-central">12</div>
                      <div className="text-xs text-muted-foreground">Languages</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-whatsapp" />
                    WhatsApp Responses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Voice Messages</span>
                    <span className="text-whatsapp font-semibold">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                  
                  <div className="flex justify-between text-sm">
                    <span>Text Responses</span>
                    <span className="text-whatsapp font-semibold">32%</span>
                  </div>
                  <Progress value={32} className="h-2" />
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-voice-call" />
                    Voice Call Responses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Completed Calls</span>
                    <span className="text-voice-call font-semibold">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                  
                  <div className="flex justify-between text-sm">
                    <span>Pending Sync</span>
                    <span className="text-voice-call font-semibold">11%</span>
                  </div>
                  <Progress value={11} className="h-2" />
                </CardContent>
              </Card>
            </div>

            {/* Data Quality Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-muted/20">
                <CardContent className="p-4 text-center">
                  <Shield className="w-12 h-12 text-central mx-auto mb-3" />
                  <div className="text-2xl font-bold gradient-text mb-1">99.7%</div>
                  <div className="text-sm text-muted-foreground">Data Quality Score</div>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardContent className="p-4 text-center">
                  <Zap className="w-12 h-12 text-sync mx-auto mb-3" />
                  <div className="text-2xl font-bold gradient-text mb-1">2.3s</div>
                  <div className="text-sm text-muted-foreground">Avg Response Time</div>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardContent className="p-4 text-center">
                  <Globe className="w-12 h-12 text-dashboard mx-auto mb-3" />
                  <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Continuous Collection</div>
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>

        {/* Dashboard Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card hover-glow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Live data visualization with instant updates as responses come in from both WhatsApp and voice channels
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-glow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-dashboard to-dashboard-glow mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Advanced Insights</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered trend analysis and predictive insights to help you understand response patterns and quality
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-glow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-central to-central-glow mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Secure Reporting</h3>
              <p className="text-sm text-muted-foreground">
                Encrypted data handling with customizable reports and export options for stakeholder distribution
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};