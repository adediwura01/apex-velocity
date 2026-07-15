import {
  BrainCircuit,
  ShieldCheck,
  Blocks,
  BellRing,
} from "lucide-react";

export const featuresData = [
  {
    id: 1,
    featured: true,
    icon: BrainCircuit,
    tag: "AI INSIGHTS",
    title: "AI Portfolio Intelligence",
    description:
      "Gain predictive insights powered by machine learning to help optimize portfolio performance.",
    color: "#A855F7",
  },

  {
    id: 2,
    featured: false,
    icon: ShieldCheck,
    tag: "SECURITY",
    title: "Institutional Security",
    description:
      "Enterprise-grade encryption, biometric authentication and multi-layer wallet protection.",
    color: "#22C55E",
  },

  {
    id: 3,
    featured: false,
    icon: Blocks,
    tag: "MULTI-CHAIN",
    title: "Unified Asset Management",
    description:
      "Track Bitcoin, Ethereum, Solana and dozens of digital assets from one beautiful dashboard.",
    color: "#3B82F6",
  },

  {
    id: 4,
    featured: false,
    icon: BellRing,
    tag: "ALERTS",
    title: "Instant Market Alerts",
    description:
      "Receive real-time notifications for portfolio activity and significant market movements.",
    color: "#F59E0B",
  },
];