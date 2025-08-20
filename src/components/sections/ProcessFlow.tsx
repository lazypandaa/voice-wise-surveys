import { ArrowDown, ArrowRight, Send, MessageSquare, Phone, Mic, Brain, Database, RefreshCw, BarChart3, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProcessFlow = () => {
  const flowSteps = [
    {
      icon: Send,
      title: "Survey Invitation Sent",
      description: "Automated invitation delivery via preferred channel",
      color: "text-interaction",
      gradient: "from-interaction to-yellow-400",
      badge: "Start"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Survey",
      description: "Online users receive survey via WhatsApp",
      color: "text-whatsapp",
      gradient: "from-whatsapp to-whatsapp-glow",
      badge: "Online",
      branch: "right"
    },
    {
      icon: Phone,
      title: "Voice Call Survey",
      description: "Offline users receive AI-powered voice call",
      color: "text-voice-call",
      gradient: "from-voice-call to-voice-call-glow",
      badge: "Offline",
      branch: "left"
    },
    {
      icon: Mic,
      title: "User Responds",
      description: "Voice messages, text, or spoken responses",
      color: "text-muted-foreground",
      gradient: "from-muted to-muted-foreground",
      badge: "Input"
    },
    {
      icon: Brain,
      title: "AI Quality Check",
      description: "Real-time validation and consistency analysis",
      color: "text-primary",
      gradient: "from-primary to-primary-glow",
      badge: "AI"
    },
    {
      icon: Database,
      title: "Data Storage",
      description: "Secure local/cloud storage with encryption",
      color: "text-central",
      gradient: "from-central to-central-glow",
      badge: "Store"
    },
    {
      icon: RefreshCw,
      title: "Auto-Sync",
      description: "Automatic synchronization when connectivity restored",
      color: "text-sync",
      gradient: "from-sync to-sync-glow",
      badge: "Sync"
    },
    {
      icon: BarChart3,
      title: "Central Dashboard",
      description: "Real-time analytics and comprehensive reporting",
      color: "text-dashboard",
      gradient: "from-dashboard to-dashboard-glow",
      badge: "Analytics"
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Enterprise-grade encrypted data protection",
      color: "text-foreground",
      gradient: "from-foreground to-muted-foreground",
      badge: "Security"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Survey Process</span>
            <br />
            <span className="gradient-text">Flow Diagram</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From invitation to secure storage - see how our AI-powered system handles every step 
            of the survey lifecycle with precision and intelligence.
          </p>
        </div>

        {/* Flow Visualization */}
        <div className="max-w-4xl mx-auto">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            const isLastStep = index === flowSteps.length - 1;
            const isBranchStep = step.branch;
            
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className={`flex items-center gap-6 mb-8 ${
                  isBranchStep === 'right' ? 'justify-end' : 
                  isBranchStep === 'left' ? 'justify-start pl-12' : 'justify-center'
                }`}>
                  <Card className="glass-card hover-glow group max-w-md w-full transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.gradient} p-3 group-hover:shadow-lg transition-all duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {step.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Connecting Arrows */}
                {!isLastStep && (
                  <div className="flex justify-center mb-4">
                    {index === 0 ? (
                      // Split arrow after first step
                      <div className="relative">
                        <ArrowDown className="w-6 h-6 text-muted-foreground" />
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                          <div className="flex gap-16">
                            <ArrowRight className="w-6 h-6 text-whatsapp transform -rotate-45" />
                            <ArrowRight className="w-6 h-6 text-voice-call transform rotate-45" />
                          </div>
                        </div>
                      </div>
                    ) : index === 2 ? (
                      // Merge arrow after branch
                      <div className="relative">
                        <div className="flex gap-16 mb-2">
                          <ArrowRight className="w-6 h-6 text-whatsapp transform rotate-45" />
                          <ArrowRight className="w-6 h-6 text-voice-call transform -rotate-45" />
                        </div>
                        <ArrowDown className="w-6 h-6 text-muted-foreground" />
                      </div>
                    ) : (
                      <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card text-center p-6 hover-glow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">AI-Powered Intelligence</h3>
            <p className="text-sm text-muted-foreground">Advanced AI ensures data quality and adaptive questioning throughout the entire process</p>
          </Card>
          
          <Card className="glass-card text-center p-6 hover-glow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sync to-sync-glow mx-auto mb-4 flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Seamless Synchronization</h3>
            <p className="text-sm text-muted-foreground">Automatic data sync ensures no response is lost, regardless of connectivity status</p>
          </Card>
          
          <Card className="glass-card text-center p-6 hover-glow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-central to-central-glow mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Enterprise Security</h3>
            <p className="text-sm text-muted-foreground">End-to-end encryption and secure storage protect sensitive survey data at every step</p>
          </Card>
        </div>
      </div>
    </section>
  );
};