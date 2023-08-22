import {
  brunodev,
  copacabana,
} from "../public/assets";

export const NavLinksEng = [
    { href: '/', key: 'Home', text: 'Home' },
    { href: '#about', key: 'About Us', text: 'About Us' },
    { href: '#work', key: 'Our Work', text: 'Our Work' },
    { href: '#contact', key: 'Contact', text: 'Contact' },
  ];

export const NavLinksIta = [
    { href: '/', key: 'Home', text: 'Home' },
    { href: '/', key: 'Chi siamo', text: 'Chi siamo' },
    { href: '/', key: 'Progetti', text: 'Progetti' },
    { href: '/', key: 'Contatti', text: 'Contatti' },
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
    description:
      "Developer portfolio 3D Website for visibility.",
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
  }
];
