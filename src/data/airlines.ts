/**
 * Airline data structures — supports multi-airline architecture.
 * Launch with Delta; add other airlines later.
 */

import type { AirlineData } from "@/types";

export const airlines: Record<string, AirlineData> = {
  delta: {
    id: "delta",
    name: "Delta",
    fullName: "Delta Air Lines",
    iata: "DL",
    website: "https://www.delta.com",
    description:
      "Delta Air Lines is one of the largest airlines in the world, operating a vast domestic and international network from hub airports across the United States.",
    hubs: [
      "Atlanta (ATL)",
      "Detroit (DTW)",
      "Los Angeles (LAX)",
      "Minneapolis/St. Paul (MSP)",
      "New York–JFK (JFK)",
      "New York–LaGuardia (LGA)",
      "Salt Lake City (SLC)",
      "Seattle (SEA)",
      "Boston (BOS)",
    ],
    alliance: "SkyTeam",
  },
  american: {
    id: "american",
    name: "American",
    fullName: "American Airlines",
    iata: "AA",
    website: "https://www.aa.com",
    description: "American Airlines is one of the world's largest airlines by fleet size and passenger volume.",
    hubs: ["Charlotte (CLT)", "Chicago O'Hare (ORD)", "Dallas/Fort Worth (DFW)", "Los Angeles (LAX)", "Miami (MIA)", "New York–JFK (JFK)", "Philadelphia (PHL)", "Phoenix (PHX)", "Washington D.C. (DCA)"],
    alliance: "oneworld",
  },
  united: {
    id: "united",
    name: "United",
    fullName: "United Airlines",
    iata: "UA",
    website: "https://www.united.com",
    description: "United Airlines operates an extensive global route network from major U.S. hub airports.",
    hubs: ["Chicago O'Hare (ORD)", "Denver (DEN)", "Houston (IAH)", "Los Angeles (LAX)", "Newark (EWR)", "San Francisco (SFO)", "Washington Dulles (IAD)"],
    alliance: "Star Alliance",
  },
  jetblue: {
    id: "jetblue",
    name: "JetBlue",
    fullName: "JetBlue Airways",
    iata: "B6",
    website: "https://www.jetblue.com",
    description: "JetBlue Airways is a major low-cost carrier serving destinations across the United States, Caribbean, and Latin America.",
    hubs: ["New York–JFK (JFK)", "Boston (BOS)", "Fort Lauderdale (FLL)", "Orlando (MCO)"],
  },
  alaska: {
    id: "alaska",
    name: "Alaska",
    fullName: "Alaska Airlines",
    iata: "AS",
    website: "https://www.alaskaair.com",
    description: "Alaska Airlines provides service primarily along the West Coast of North America.",
    hubs: ["Seattle (SEA)", "Portland (PDX)", "San Francisco (SFO)", "Los Angeles (LAX)"],
    alliance: "oneworld",
  },
};

export function getAirline(id: string): AirlineData | undefined {
  return airlines[id];
}
