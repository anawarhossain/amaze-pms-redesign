export const COMPANY = {
  name: "Amaze PMS",
  fullName: "Amaze Property Management Solutions Pvt Ltd",
  tagline: "A one stop solutions for all your property management needs",
  phone: "9908538137",
  email: "Info@amazepms.com",
  address: "4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008",
  founded: 2001,
  group: "ACTION GROUP",
  founder: "Mr. Subhani Abdul",
  workforce: 15000,
  clients: 200,
  areaManaged: "20M+ Sq.ft",
  presence: "PAN INDIA",
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Our Strength", href: "/#strength" },
  { label: "Clients", href: "/#clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
] as const

export const SERVICES = [
  { title: "Security Services", description: "Trained security personnel for comprehensive property protection." },
  { title: "House Keeping Services", description: "Professional cleaning and maintenance for pristine environments." },
  { title: "Technical Services", description: "MEP maintenance and technical support for all properties." },
  { title: "Landscaping Services", description: "Expert gardening and landscape design and maintenance." },
  { title: "Pest Control Services", description: "Integrated pest management for safe, healthy premises." },
  { title: "Help Desk Management", description: "24/7 help desk support for residents and tenants." },
  { title: "Parking Management", description: "Efficient parking solutions for commercial and residential spaces." },
] as const

export const WHY_CHOOSE_US = [
  "Managing an area of more than 20 million Sq.ft across different portfolios",
  "All services are Inhouse",
  "Availability of back up staff to take care of emergencies",
  "Yearly training calendar shared and conducted by Training Officer",
  "Risk Assessment of Equipment and its Operations",
  "Site specific SOP's / Checklists for all the services",
  "Internal team audits the site regularly for improvement plans",
  "Coordination and Supervision towards Annual Shutdown Maintenance",
  "Liaison with Government agencies",
  "EHS, Security, Technical, Fire & Safety, Inventory audits",
  "AMC Tracking and Negotiations",
  "Staff Welfare: Diwali Sweets, Gifts on RD/ID, Insurance, Funeral expenses, Ranker students rewards",
] as const

export const STATS = [
  { value: 15000, suffix: "+", label: "Work Force" },
  { value: 200, suffix: "+", label: "Clients" },
  { value: "20M", suffix: "+", label: "Sq.ft Managed" },
  { label: "PAN INDIA Presence" },
] as const

export const FOOTER_LINKS = {
  menu: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Our Strength", href: "/#strength" },
    { label: "Gallery", href: "/gallery" },
  ],
  quickLinks: [
    { label: "Our Clients", href: "/#clients" },
    { label: "Recruitments", href: "/recruitments" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/#contact" },
  ],
  presence: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamilnadu", "Odisha"],
} as const
