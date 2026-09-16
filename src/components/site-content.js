import { BatteryCharging, Bolt, Search, Wrench } from "lucide-react";

export const phone = "+919767141029";
const whatsappMessage = "Hello Ankush, I need help with my EV scooter.";
export const whatsapp = `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;

export const serviceGroups = {
  ev: [
    [
      "EV Scooter Diagnosis",
      "Complete diagnostic inspection to identify electrical, mechanical, or battery-related issues.",
      "Diagnosis",
      Bolt,
    ],
    [
      "Battery-Related Diagnosis",
      "Troubleshooting battery performance, charging behavior, and connection issues.",
      "Diagnosis",
      BatteryCharging,
    ],
    [
      "Charging Problems",
      "Diagnosis of charging ports, cable problems, and internal charging system faults.",
      "Troubleshooting",
      Search,
    ],
    [
      "Motor & Controller Issues",
      "Inspection and support for motor performance and controller-related problems.",
      "Diagnosis",
      Wrench,
    ],
    [
      "Electrical & Wiring Problems",
      "Troubleshooting wiring faults, short circuits, loose connections, and electrical systems.",
      "Troubleshooting",
      Bolt,
    ],
    [
      "Starting / Power Issues",
      "Step-by-step troubleshooting for scooters that will not start or lose power.",
      "Service support",
      Wrench,
    ],
  ],
  mechanical: [
    [
      "General Servicing",
      "Routine servicing, cleaning, adjustment, lubrication, and condition checks.",
      "Servicing",
      Wrench,
    ],
    [
      "Brake & Suspension Work",
      "Brake adjustment, suspension inspection, and related mechanical work.",
      "Mechanical",
      Wrench,
    ],
    [
      "Mechanical Troubleshooting",
      "Root-cause diagnosis for engine, transmission, and mechanical issues.",
      "Troubleshooting",
      Search,
    ],
    [
      "Electrical Problems",
      "Wiring, lighting, and basic electrical troubleshooting for two-wheelers.",
      "Electrical",
      Bolt,
    ],
  ],
};

export const portfolioItems = [
  [
    "EV Electrical Diagnosis",
    "Identified an electrical fault affecting scooter operation.",
    "EV",
    "https://images.pexels.com/photos/34404241/pexels-photo-34404241.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  [
    "Charging Issue",
    "Inspected charging components and diagnosed the source of the problem.",
    "EV",
    "https://images.pexels.com/photos/37807346/pexels-photo-37807346.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  [
    "Wiring & Electrical Work",
    "Traced and repaired a wiring fault causing intermittent power loss.",
    "Electrical",
    "https://images.pexels.com/photos/8550664/pexels-photo-8550664.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  [
    "Brake Service",
    "Inspected and serviced brake components for safe operation.",
    "Mechanical",
    "https://images.pexels.com/photos/5803351/pexels-photo-5803351.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  [
    "Conventional Bike Repair",
    "Diagnosed and repaired a mechanical issue on a two-wheeler.",
    "Mechanical",
    "https://images.pexels.com/photos/12741656/pexels-photo-12741656.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  [
    "Electrical Troubleshooting",
    "Located a faulty connection causing starting problems.",
    "Electrical",
    "https://images.pexels.com/photos/9606748/pexels-photo-9606748.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  [
    "EV Scooter Service",
    "Full inspection of battery health, motor performance, and connections.",
    "EV",
    "https://images.pexels.com/photos/38451961/pexels-photo-38451961.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  [
    "Engine Work",
    "Inspected and reassembled engine components for a performance issue.",
    "Mechanical",
    "https://images.pexels.com/photos/31139705/pexels-photo-31139705.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
];

export const faqs = [
  [
    "What types of scooters do you work on?",
    "I work on electric scooters and conventional petrol two-wheelers, with a focus on diagnosis and practical repair guidance.",
  ],
  [
    "Do you repair batteries or replace them?",
    "I diagnose battery and charging problems first. After identifying the actual fault, I explain whether repair, service, or replacement is the right path.",
  ],
  [
    "Where is the service available?",
    "I am based in PCMC Pune, Maharashtra and serve nearby areas. Contact me first so we can discuss your scooter and location.",
  ],
  [
    "How do I get started?",
    "Send a WhatsApp message or call with the scooter model and symptoms. I will help you decide the next step.",
  ],
];
