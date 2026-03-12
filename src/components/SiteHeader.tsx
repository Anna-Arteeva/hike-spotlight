import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { CreateEventModal } from "@/components/create-event";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const imgSubtract = "https://www.figma.com/api/mcp/asset/c2d75e29-0afa-4da1-92ba-c33535bfe18b";
const imgVector12 = "https://www.figma.com/api/mcp/asset/1e4c33be-b2a6-4c98-9d74-6132103738d8";
const imgHikingBuddies = "https://www.figma.com/api/mcp/asset/d6635cf3-6ab6-4200-91d7-ef9ad8ce3244";
const imgUserProfile = "https://www.figma.com/api/mcp/asset/6b285404-5272-4113-a995-810b61c37231";

export default function SiteHeader() {
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const location = useLocation();
  const isRoutesPage = location.pathname.startsWith("/routes");

  return (
    <>
      <header className="border-b border-border bg-background [font-family:'Mulish',sans-serif]">
        <div className="mx-auto flex h-[75px] w-full max-w-[1372px] items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center" aria-label="Hiking Buddies home">
            <div className="relative h-[43px] w-[164px]">
              <img src={imgSubtract} alt="" className="absolute left-[6px] top-[2px] h-[26px] w-[25px]" />
              <img src={imgVector12} alt="" className="absolute left-[2px] top-[12px] h-[27px] w-[37px]" />
              <img
                src={imgHikingBuddies}
                alt="Hiking Buddies"
                className="absolute left-[42px] top-[3px] h-[37px] w-[121px]"
              />
            </div>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <nav className="hidden items-center gap-4 text-sm md:flex">
              <Link to="/" className={isRoutesPage ? "text-foreground/90 hover:text-foreground" : "font-bold text-foreground"}>
                Events
              </Link>
              <Link
                to="/routes"
                className={isRoutesPage ? "font-bold text-foreground" : "text-foreground/90 hover:text-foreground"}
              >
                Routes
              </Link>
              <Link to="/" className="text-foreground/90 hover:text-foreground">
                Community
              </Link>
              <Button
                variant="ghost"
                className="h-auto p-0 text-sm font-bold hover:bg-transparent"
                onClick={() => setIsCreateEventModalOpen(true)}
              >
                Create event
              </Button>
            </nav>

            <Button
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-[13px] bg-secondary text-muted-foreground hover:bg-secondary"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Avatar className="h-10 w-10 rounded-[13px]">
              <AvatarImage src={imgUserProfile} alt="User profile" />
              <AvatarFallback>HB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <CreateEventModal open={isCreateEventModalOpen} onClose={() => setIsCreateEventModalOpen(false)} />
    </>
  );
}
