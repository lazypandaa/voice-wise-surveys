import { Button } from "@/components/ui/button";
import { Mic, MessageSquare, Brain, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--central))_0%,transparent_50%)] opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-whatsapp to-whatsapp-glow opacity-20"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-voice-call to-voice-call-glow opacity-20"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-sync to-sync-glow opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Heading */}
        <div className="animate-slide-up">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI-Powered</span>
            <br />
            <span className="text-foreground">Voice-First</span>
            <br />
            <span className="gradient-text">Smart Surveys</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary dual-mode survey platform combining WhatsApp chat for online users 
            and AI voice calls for offline respondents. Real-time AI validation, multi-language 
            support, and secure data collection.
          </p>
        </div>

        {/* Key Features Icons */}
        <div className="animate-slide-up flex justify-center gap-8 mb-12" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-4 rounded-2xl hover-glow">
            <MessageSquare className="w-8 h-8 text-whatsapp mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">WhatsApp</p>
          </div>
          <div className="glass-card p-4 rounded-2xl hover-glow">
            <Mic className="w-8 h-8 text-voice-call mx-auto mb-2 animate-voice-pulse" />
            <p className="text-sm text-muted-foreground">Voice AI</p>
          </div>
          <div className="glass-card p-4 rounded-2xl hover-glow">
            <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">AI Analysis</p>
          </div>
          <div className="glass-card p-4 rounded-2xl hover-glow">
            <Zap className="w-8 h-8 text-sync mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Real-time</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 text-lg px-8 py-6">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-slide-up mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">99%</div>
            <div className="text-sm text-muted-foreground">Response Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">10+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <div className="text-sm text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};