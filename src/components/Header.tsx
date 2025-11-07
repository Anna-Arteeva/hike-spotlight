import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8 32L20 8L32 32H8Z" fill="#2D9F5C"/>
                <circle cx="20" cy="18" r="3" fill="#FFD700"/>
              </svg>
              <span className="text-xl font-bold text-primary">Hiking Buddies</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-foreground font-medium">Events</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Routes</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Community</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Create event</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
