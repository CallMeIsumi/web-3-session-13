const navigationLinks = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "About",
    href: "#",
  },
  {
    text: "Services",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
];
const nav = document.querySelector('nav');
navigationLinks.forEach(link => {
  const anchor = document.createElement('a');
  anchor.href = link.href;
  anchor.textContent = link.text;
  anchor.className = 'text-gray-600 hover:text-gray-900';
  nav?.appendChild(anchor);
});

