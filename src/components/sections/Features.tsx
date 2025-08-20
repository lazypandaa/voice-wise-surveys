import { Shield, Globe, Zap, Brain, Mic, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Native WhatsApp surveys with voice message and text support for online users",
      gradient: "from-whatsapp to-whatsapp-glow",
      color: "text-whatsapp"
    },
    {
      icon: Mic,
      title: "AI Voice Calls",
      description: "Intelligent voice avatars conduct surveys via automated phone calls for offline users",
      gradient: "from-voice-call to-voice-call-glow",
      color: "text-voice-call"
    },
    {
      icon: Brain,
      title: "Real-time AI Analysis",
      description: "Advanced AI checks data quality, consistency, and provides adaptive questioning",
      gradient: "from-primary to-primary-glow",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Instant Sync",
      description: "Real-time data synchronization with offline capability and auto-sync when connected",
      gradient: "from-sync to-sync-glow",
      color: "text-sync"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Comprehensive language support for global survey deployment and accessibility",
      gradient: "from-dashboard to-dashboard-glow",
      color: "text-dashboard"
    },
    {
      icon: Shield,
      title: "Secure & Encrypted",
      description: "Enterprise-grade security with end-to-end encryption and secure data storage",
      gradient: "from-central to-central-glow",
      color: "text-central"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-foreground">for Modern Surveys</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary technology stack designed for maximum response rates, 
            data quality, and user accessibility across all connectivity scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="glass-card hover-glow group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-card rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">5x</div>
              <div className="text-muted-foreground">Higher Response Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">80%</div>
              <div className="text-muted-foreground">Faster Data Collection</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-muted-foreground">Data Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Automated Collection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};