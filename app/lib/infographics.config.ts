// Infographics configuration
// This file maps infographic IDs to their respective components

type InfographicType =
  | "pricing"
  | "timeline"
  | "comparison"
  | "cost-comparison"
  | "speed-impact"
  | "vendor-lock-in"
  | "template-comparison"
  | "custom";

interface InfographicConfig {
  id: string;
  type: InfographicType;
  title: string;
  data?: any;
}

const infographicConfigs: Record<string, InfographicConfig> = {
  "website-builder-pricing": {
    id: "website-builder-pricing",
    type: "pricing",
    title: "Website Builder Pricing Tiers",
  },
  "hidden-costs-timeline": {
    id: "hidden-costs-timeline",
    type: "timeline",
    title: "Hidden Costs Over Time",
  },
  "diy-vs-professional": {
    id: "diy-vs-professional",
    type: "comparison",
    title: "DIY vs Professional Comparison",
  },
  "vendor-lock-in": {
    id: "vendor-lock-in",
    type: "vendor-lock-in",
    title: "Platform Lock-In Illustration",
  },
  "template-comparison": {
    id: "template-comparison",
    type: "template-comparison",
    title: "Template vs Custom Design",
  },
  "speed-impact": {
    id: "speed-impact",
    type: "speed-impact",
    title: "Page Speed Impact",
  },
};

export function getInfographic(id: string): InfographicConfig | null {
  return infographicConfigs[id] || null;
}

export function getAllInfographics(): InfographicConfig[] {
  return Object.values(infographicConfigs);
}
