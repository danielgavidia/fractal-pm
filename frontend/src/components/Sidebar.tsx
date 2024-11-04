import Link from "next/link";

const Sidebar = () => {
  return (
    <nav>
      <Link href="/backlog">Backlog</Link>
      <Link href="/kanban">Kanban</Link>
    </nav>
  );
};

export default Sidebar;
