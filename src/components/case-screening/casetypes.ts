export interface CaseSubType {
  id: string;
  label: string;
  description?: string;
}

export interface CaseCategory {
  id: string;
  label: string;
  description?: string;
  subTypes?: CaseSubType[];
}

export interface CaseType {
  id: string;
  label: string;
  description?: string;
  categories: CaseCategory[];
}

export const CASE_TYPES: CaseType[] = [
  {
    id: "mva",
    label: "Motor Vehicle Accidents (MVA)",
    description: "The most common case type handled by the firm.",
    categories: [
      {
        id: "standard-collisions",
        label: "Standard Collisions",
        subTypes: [
          { id: "rear-end", label: "Rear-end collisions" },
          { id: "t-bone", label: "T-bone (broadside) crashes" },
          { id: "head-on", label: "Head-on impacts" },
          { id: "sideswipe", label: "Sideswipe accidents" },
        ],
      },
      {
        id: "complex-scenarios",
        label: "Complex Scenarios",
        subTypes: [
          { id: "multi-vehicle", label: "Multi-vehicle pileups" },
          { id: "hit-and-run", label: "Hit-and-run cases" },
          { id: "rollover", label: "Rollover accidents" },
        ],
      },
      {
        id: "commercial-rideshare",
        label: "Commercial and Rideshare",
        subTypes: [
          { id: "commercial-trucks", label: "Commercial trucks (18-wheelers)" },
          { id: "delivery-vehicles", label: "Delivery vehicles (e.g., Amazon, UPS, FedEx)" },
          { id: "rideshare", label: "Rideshare services (Uber, Lyft)" },
        ],
      },
      {
        id: "public-transit",
        label: "Public Transit",
        subTypes: [
          { id: "bus-municipal", label: "Municipal buses" },
          { id: "bus-school", label: "School buses" },
          { id: "bus-charter", label: "Charter buses" },
        ],
      },
      {
        id: "vulnerable-road-users",
        label: "Vulnerable Road Users",
        subTypes: [
          { id: "motorcycle", label: "Motorcycles" },
          { id: "bicycle", label: "Bicycles" },
          { id: "pedestrian", label: "Pedestrians" },
        ],
      },
    ],
  },
  {
    id: "premises-liability",
    label: "Premises Liability",
    description: "Injuries occurring on another party's property due to unsafe conditions.",
    categories: [
      {
        id: "slips-trips-falls",
        label: "Slips, Trips, and Falls",
        subTypes: [
          { id: "wet-floors", label: "Wet floors" },
          { id: "icy-sidewalks", label: "Icy sidewalks" },
          { id: "uneven-pavement", label: "Uneven pavement" },
          { id: "broken-stairs", label: "Broken stairs" },
          { id: "potholes", label: "Potholes" },
        ],
      },
      {
        id: "dangerous-conditions",
        label: "Dangerous Conditions",
        subTypes: [
          { id: "falling-objects", label: "Falling objects" },
          { id: "swimming-pool", label: "Swimming pool accidents" },
          { id: "elevator-escalator", label: "Elevator or escalator malfunctions" },
        ],
      },
      {
        id: "inadequate-security",
        label: "Inadequate Security",
        subTypes: [
          { id: "assault-parking-garage", label: "Assaults/robberies in parking garages" },
          { id: "assault-hotel", label: "Assaults/robberies in hotels" },
          { id: "assault-apartment", label: "Assaults/robberies in apartment complexes" },
        ],
      },
      {
        id: "property-hazards",
        label: "Property Hazards",
        subTypes: [
          { id: "building-code-violations", label: "Building code violations" },
          { id: "structural-failures", label: "Structural failures" },
          { id: "toxic-exposure", label: "Toxic exposure (mold, asbestos)" },
        ],
      },
    ],
  },
  {
    id: "animal-attacks",
    label: "Animal Attacks",
    description: "Dog bites and other animal-related injuries.",
    categories: [
      {
        id: "dog-bites",
        label: "Dog Bites",
        description: "Legal standards vary by state (strict liability vs. one-bite rule).",
      },
      {
        id: "other-animal-injuries",
        label: "Other Animal Injuries",
      },
    ],
  },
  {
    id: "product-liability",
    label: "Product Liability",
    description: "Injuries caused by defective products.",
    categories: [
      {
        id: "claim-basis",
        label: "Basis of Claim",
        subTypes: [
          { id: "design-defects", label: "Design Defects (product is inherently dangerous)" },
          { id: "manufacturing-defects", label: "Manufacturing Defects (production errors)" },
          { id: "failure-to-warn", label: "Failure to Warn (inadequate instructions/warnings)" },
        ],
      },
      {
        id: "common-defective-products",
        label: "Common Products",
        subTypes: [
          { id: "auto-parts", label: "Defective auto parts (tires, brakes, airbags)" },
          { id: "medical-devices", label: "Medical devices" },
          { id: "power-tools", label: "Power tools" },
          { id: "household-appliances", label: "Household appliances" },
        ],
      },
    ],
  },
  {
    id: "specialized-catastrophic",
    label: "Specialized and Catastrophic Claims",
    categories: [
      {
        id: "wrongful-death",
        label: "Wrongful Death",
        description: "Claims filed when a loved one passes away due to negligence.",
      },
      {
        id: "birth-injuries",
        label: "Birth Injuries",
        description: "Legal action regarding injuries sustained during childbirth.",
      },
      {
        id: "workplace-third-party",
        label: "Workplace Third-Party Claims",
        description: "PI claims when a third party (not employer/coworker) caused injury.",
      },
      {
        id: "med-mal-nursing-home",
        label: "Medical Malpractice and Nursing Home Abuse",
        description: "Professional negligence by healthcare providers or facilities.",
      },
      {
        id: "intentional-torts",
        label: "Intentional Torts",
        description: "Harm caused by deliberate acts, such as assault and battery.",
      },
    ],
  },
  {
    id: "additional-legal",
    label: "Additional Legal Situations",
    categories: [
      {
        id: "dram-shop",
        label: "Dram Shop and Alcohol Liability",
        description: "Cases against establishments serving alcohol to minors or intoxicated persons.",
      },
      {
        id: "insurance-bad-faith",
        label: "Insurance Bad Faith",
        description: "Claims for unreasonably delaying, denying, or undervaluing valid claims.",
      },
    ],
  },
];
