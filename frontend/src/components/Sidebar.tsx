import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <nav className="flex flex-col p-4 min-w-36 bg-gray-100 space-y-2 h-screen sticky top-0">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 pr-2 flex">
          <FontAwesomeIcon icon={faJira} />
        </div>
        <div>
          <div className="text-sm font-bold">Gavidia</div>
          <div className="text-xs">Enterprise</div>
        </div>
      </div>

      {/* Links */}
      <div className="text-xs text-gray-600">Platform</div>
      <Link href="/backlog" className="text-sm">
        Backlog
      </Link>
      <Link href="/kanban" className="text-sm">
        Kanban
      </Link>
    </nav>
  );
};

export default Sidebar;
