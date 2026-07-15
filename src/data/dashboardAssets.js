import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { Mountain } from "lucide-react";

export const dashboardAssets = [
  {
    icon: FaBitcoin,
    name: "Bitcoin",
    subtitle: "Primary Holding",
    allocation: "42%",
    color: "#F7931A",
  },
  {
    icon: FaEthereum,
    name: "Ethereum",
    subtitle: "Core Asset",
    allocation: "31%",
    color: "#627EEA",
  },
  {
    icon: SiSolana,
    name: "Solana",
    subtitle: "Growth Asset",
    allocation: "18%",
    color: "#A855F7",
  },
  {
    icon: Mountain,
    name: "Avalanche",
    subtitle: "Emerging Position",
    allocation: "9%",
    color: "#E84142",
  },
];