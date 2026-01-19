import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import CreateEventModal from "./CreateEventModal";

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                aria-hidden="true"
                className="group-hover:animate-bounce-subtle"
              >
                <path d="M8 32L20 8L32 32H8Z" fill="#2D9F5C" />
                <circle cx="20" cy="18" r="3" fill="#FFD700" />
              </svg>
              <span className="text-xl font-bold text-primary">Hiking Buddies</span>
            </Link>

            {/* Search and Profile */}
            <div className="flex items-center gap-6">
              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.events')}
                </Link>
                <Link
                  to="/routes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.routes')}
                </Link>
                <Link
                  to="/community"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.community')}
                </Link>
                <button
                  onClick={() => setIsCreateEventModalOpen(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.organizeEvent')}
                </button>
              </nav>

              {/* Search */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden sm:inline">
                  {t('common.search')}
                </span>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <Input
                    type="text"
                    placeholder=""
                    aria-label={t('common.search')}
                    className={`pl-8 transition-all duration-200 ${
                      isSearchActive ? "w-48" : "w-32"
                    }`}
                    onFocus={() => setIsSearchActive(true)}
                    onBlur={() => setIsSearchActive(false)}
                  />
                </div>
              </div>

              {/* Theme Switcher */}
              <ThemeSwitcher />

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Avatar */}
              <Avatar className="h-9 w-9">
                <AvatarImage src="" alt="User avatar" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <CreateEventModal
        open={isCreateEventModalOpen}
        onClose={() => setIsCreateEventModalOpen(false)}
      />
    </>
  );
}
