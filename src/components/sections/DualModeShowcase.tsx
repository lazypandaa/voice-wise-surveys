import { MessageSquare, Phone, Wifi, WifiOff, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const DualModeShowcase = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/5 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Dual-Mode</span>
            <br />
            <span className="gradient-text">Survey Delivery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reach every respondent, regardless of their connectivity status or preferred communication method.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* WhatsApp Mode */}
          <Card className="glass-card hover-glow group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-whatsapp/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-whatsapp to-whatsapp-glow p-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">WhatsApp Survey</CardTitle>
                  <Badge variant="outline" className="border-whatsapp text-whatsapp">
                    <Wifi className="w-3 h-3 mr-1" />
                    Online Users
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-whatsapp"></div>
                  <span className="text-muted-foreground">Survey delivered via WhatsApp chat</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-whatsapp"></div>
                  <span className="text-muted-foreground">Voice messages or text responses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-whatsapp"></div>
                  <span className="text-muted-foreground">Real-time AI quality checks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-whatsapp"></div>
                  <span className="text-muted-foreground">Instant sync to dashboard</span>
                </div>
              </div>
              
              {/* Mock WhatsApp Interface */}
              <div className="mt-8 bg-whatsapp/5 rounded-2xl p-4 border border-whatsapp/20">
                <div className="space-y-3">
                  <div className="bg-whatsapp/10 rounded-xl p-3 max-w-[80%]">
                    <p className="text-sm text-foreground">🤖 Hi! I'm conducting a quick survey. Can you tell me about your experience with our service?</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-3 max-w-[80%] ml-auto">
                    <p className="text-sm text-foreground">🎤 Voice message (0:15)</p>
                  </div>
                  <div className="bg-whatsapp/10 rounded-xl p-3 max-w-[80%]">
                    <p className="text-sm text-foreground">Thanks! That's very helpful. One more question...</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Voice Call Mode */}
          <Card className="glass-card hover-glow group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-voice-call/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-voice-call to-voice-call-glow p-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">Voice Call Survey</CardTitle>
                  <Badge variant="outline" className="border-voice-call text-voice-call">
                    <WifiOff className="w-3 h-3 mr-1" />
                    Offline/Low Connectivity
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-voice-call"></div>
                  <span className="text-muted-foreground">AI avatar conducts phone survey</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-voice-call"></div>
                  <span className="text-muted-foreground">Natural voice conversation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-voice-call"></div>
                  <span className="text-muted-foreground">Local data storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-voice-call"></div>
                  <span className="text-muted-foreground">Auto-sync when connected</span>
                </div>
              </div>
              
              {/* Mock Voice Interface */}
              <div className="mt-8 bg-voice-call/5 rounded-2xl p-4 border border-voice-call/20">
                <div className="flex items-center justify-center py-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-voice-call to-voice-call-glow animate-voice-pulse flex items-center justify-center">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -inset-4 border-2 border-voice-call/30 rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">🎤 AI Avatar Speaking...</p>
                  <p className="text-xs text-muted-foreground italic">"Hello! I'm conducting a brief survey about your recent experience. This should only take 2-3 minutes. Shall we begin?"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card text-center p-6">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">Population Coverage</div>
            <div className="text-xs text-muted-foreground mt-2">Online + Offline Users</div>
          </Card>
          
          <Card className="glass-card text-center p-6">
            <Zap className="w-12 h-12 text-sync mx-auto mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">Real-time</div>
            <div className="text-muted-foreground">Data Collection</div>
            <div className="text-xs text-muted-foreground mt-2">Instant & Offline Sync</div>
          </Card>
          
          <Card className="glass-card text-center p-6">
            <MessageSquare className="w-12 h-12 text-dashboard mx-auto mb-4" />
            <div className="text-3xl font-bold gradient-text mb-2">Multi-modal</div>
            <div className="text-muted-foreground">Response Options</div>
            <div className="text-xs text-muted-foreground mt-2">Voice, Text, & Chat</div>
          </Card>
        </div>
      </div>
    </section>
  );
};