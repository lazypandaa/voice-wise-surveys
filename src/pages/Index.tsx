import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DualModeShowcase } from "@/components/sections/DualModeShowcase";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { Dashboard } from "@/components/sections/Dashboard";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <DualModeShowcase />
      <ProcessFlow />
      <Dashboard />
      <CTA />
    </div>
  );
};

export default Index;
