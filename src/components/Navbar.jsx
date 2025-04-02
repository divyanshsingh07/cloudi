import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Home, LayoutDashboard, Users, GraduationCap, Menu, Cloud, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import TeamModal from "./TeamModal";
import FacultyModal from "./FacultyModal";

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isFacultyModalOpen, setIsFacultyModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const navLinks = [
    { 
      name: "Home", 
      icon: <Home className="h-4 w-4" />,
      onClick: () => onNavigate("home")
    },
    { 
      name: "Dashboard", 
      icon: <LayoutDashboard className="h-4 w-4" />,
      onClick: () => onNavigate("dashboard")
    },
    { 
      name: "My Team", 
      icon: <Users className="h-4 w-4" />,
      onClick: () => setIsTeamModalOpen(true)
    },
    { 
      name: "Faculty Coordinator", 
      icon: <GraduationCap className="h-4 w-4" />,
      onClick: () => setIsFacultyModalOpen(true)
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full border-b bg-background z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Cloud className="h-6 w-6 text-white" />
                <Eye className="h-6 w-6 text-[rgb(96,165,250)]" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[rgb(96,165,250)] to-[rgb(96,165,250)]/60 bg-clip-text text-transparent">
                CloudEye
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="hover:bg-accent"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    link.onClick();
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent w-full justify-center"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Team Modal */}
      <TeamModal 
        isOpen={isTeamModalOpen} 
        onClose={() => setIsTeamModalOpen(false)} 
      />

      {/* Faculty Modal */}
      <FacultyModal 
        isOpen={isFacultyModalOpen} 
        onClose={() => setIsFacultyModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
