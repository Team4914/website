// NOT A COMPONENT; just some shared data
// IDK where to put this -- move somewhere else?

type Page = {
    name: string,
    href?: string,
    submenus?: { name: string, href: string }[];
  }

const pages: Page[] = [
  { name: "Home", href: "/" },
  { 
    name: "Subteams", 
    submenus: [
      { name: "Design and CAD", href: "/subteams/design" },
      { name: "Build", href: "/subteams/build" },
      { name: "Electronics", href: "/subteams/electronics" },
      { name: "Programming", href: "/subteams/programming" },
      { name: "Media", href: "/subteams/media" },
      { name: "Scouting", href: "/subteams/scouting" },
    ]
  },
  { name: "Build Blog", href: "/build-blog" },
  { name: "Competitions", href: "/competitions" },
  { name: "Community Outreach", href: "/community-outreach" },
  { name: "Resources", href: "/resources" },
]

export default pages;