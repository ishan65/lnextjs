import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/ticket">Tickets</Link>
    </nav>
  );
};

export default NavBar;
