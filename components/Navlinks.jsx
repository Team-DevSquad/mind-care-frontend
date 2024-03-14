import Link from "next/link";

const links = [
  { href: "/dashboard", label: "DashBoard" },
  { href: "/appointments", label: "Appointments" },
  { href: "/video", label: "Video Call" },
  { href: "/ratings", label: "Ratings" },
  { href: "/upload", label: "Upload Docs" },
  { href: "/profile", label: "profile" },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className="capitalize">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
