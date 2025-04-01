
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  ClipboardList, 
  LineChart, 
  Settings, 
  LogOut,
  Menu,
  X,
  CalendarClock,
  MessageSquare,
  ShoppingBag
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, to, isActive, onClick }: SidebarItemProps) => {
  return (
    <Link to={to} onClick={onClick}>
      <div
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
          isActive
            ? "bg-brand-yellow text-brand-blue font-medium"
            : "text-gray-300 hover:bg-white/10"
        )}
      >
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      to: "/dashboard",
    },
    {
      icon: <ClipboardList size={20} />,
      label: "My AI Plan",
      to: "/plan",
    },
    {
      icon: <LineChart size={20} />,
      label: "Progress",
      to: "/progress",
    },
    {
      icon: <CalendarClock size={20} />,
      label: "Schedule",
      to: "/schedule",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "Coaching",
      to: "/coaching",
    },
    {
      icon: <ShoppingBag size={20} />,
      label: "Shop",
      to: "/shop",
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      to: "/settings",
    },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-brand-blue border-white/10 text-white hover:bg-brand-blue/80"
        >
          <Menu size={20} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-brand-blue border-r border-white/10 z-50 transition-transform duration-300 transform",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo and close button for mobile */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link to="/" className="flex items-center">
              <img
                src="/public/lovable-uploads/be2d12f5-5419-455a-ab5a-cc238f759369.png"
                alt="ShapeCoach Logo"
                className="h-10"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeSidebar}
              className="md:hidden text-white hover:bg-white/10"
            >
              <X size={20} />
              <span className="sr-only">Close Menu</span>
            </Button>
          </div>

          {/* Profile summary */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                <span className="text-brand-yellow font-bold">T</span>
              </div>
              <div>
                <div className="text-white font-medium">Tarun</div>
                <div className="text-xs text-gray-400">Software Engineer</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isActive={location.pathname === item.to}
                onClick={closeSidebar}
              />
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-white/10 hover:text-white"
              onClick={() => {
                // Logout logic here
                window.location.href = "/login";
              }}
            >
              <LogOut size={20} className="mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
