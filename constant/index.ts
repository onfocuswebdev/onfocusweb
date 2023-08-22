import { brunodev, copacabana } from "../public/assets";

export const NavLinksEng = [
  { href: "/", key: "Home", text: "Home" },
  { href: "#about", key: "About Us", text: "About Us" },
  { href: "#work", key: "Our Work", text: "Our Work" },
  { href: "#contact", key: "Contact", text: "Contact" },
  { href: "/offers", key: "Pricing", text: "Pricing" },
];

export const NavLinksIta = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/", key: "Chi siamo", text: "Chi siamo" },
  { href: "/", key: "Progetti", text: "Progetti" },
  { href: "/", key: "Contatti", text: "Contatti" },
];

export const projects = [
  {
    name: "Copacabana Jewellery",
    description:
      "Web-based E-Commerce platform that allows users to buy jewellery.",
    tags: [
      {
        name: "Python",
        color: "text-blue-800",
      },
      {
        name: "PostgreSQL",
        color: "text-green-800",
      },
      {
        name: "Django",
        color: "text-yellow-800",
      },
    ],
    image: copacabana,
    source_code_link: "https://github.com/Bruno-Diego/copacabana-pp5/",
  },
  {
    name: "BrunoDiegoDev",
    description: "Developer portfolio 3D Website for visibility.",
    tags: [
      {
        name: "Javascrypt",
        color: "text-blue-800",
      },
      {
        name: "PostgreSQL",
        color: "text-green-800",
      },
      {
        name: "React",
        color: "text-yellow-800",
      },
    ],
    image: brunodev,
    source_code_link: "https://github.com/Bruno-Diego/bdcrypto-portfolio4/",
  },
];

export const OffersText = [
  {
    product_name: "Online Presence Pro",
    description:
      "Ready to carve your corner of the digital world? Embrace Your Online Presence Pro today and unlock the power of a personal one-page website, unparalleled SEO management, and seamless email integration. Your story deserves to be told—let's make it unforgettable together. Get started now!",
    price: "€29,99",
    payment_link: process.env.NEXT_PUBLIC_STRIPE_PERSONAL_LINK
  },
  {
    product_name: "Dynamic Business Solution",
    description:
    "More than a product, it's a gateway to success. Embrace UltimateBiz Boost and harness the potency of a multi-page business website, expert SEO management, efficient booking services, real-time chat, and impeccable email integration. Unleash your business's full potential today! Ready to soar? Elevate your business now!",
    price: "€69,99",
    payment_link: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_LINK
  },
  {
    product_name: "All-in-One Online Store",
    description:
    "It's not just a website, it's your entry ticket to the booming world of online retail. Embrace the future with a Complete E-Commerce Website that empowers you to sell, scale, and succeed like never before. Ready to embark on your e-commerce journey? Your dream store is a click away. Start building today!",
    price: "€109,99",
    payment_link: process.env.NEXT_PUBLIC_STRIPE_COMMERCE_LINK
  },
];
