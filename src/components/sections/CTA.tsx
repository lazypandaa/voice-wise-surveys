import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        {/* Main CTA */}
        <Card className="glass-card max-w-4xl mx-auto p-12 hover-glow relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-central/5 to-dashboard/5 opacity-50"></div>
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 to-central/10 opacity-20 blur-3xl"></div>
          
          <CardContent className="text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to Transform</span>
              <br />
              <span className="gradient-text">Your Survey Experience?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of organizations already using our AI-powered voice-first survey platform 
              to achieve higher response rates and better data quality.
            </p>

            {/* Features Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-sync" />
                <span className="text-sm text-foreground">5x Higher Response Rate</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-central" />
                <span className="text-sm text-foreground">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 text-dashboard" />
                <span className="text-sm text-foreground">Multi-language Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 text-lg px-8 py-6 group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Setup in under 5 minutes
            </p>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by organizations worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl font-bold gradient-text mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Surveys Completed</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl font-bold gradient-text mb-1">10M+</div>
              <div className="text-sm text-muted-foreground">Responses Collected</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl font-bold gradient-text mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl font-bold gradient-text mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 AI Survey Platform. All rights reserved. • 
            <span className="text-primary hover:text-primary-glow cursor-pointer ml-1">Privacy Policy</span> • 
            <span className="text-primary hover:text-primary-glow cursor-pointer ml-1">Terms of Service</span>
          </p>
        </div>
      </div>
    </section>
  );
};