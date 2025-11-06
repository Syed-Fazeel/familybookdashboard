import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ThemeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";
import { useState } from "react";

export function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold text-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-logo">
              FamilyConnect
            </a>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/browse">
              <a className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-browse">
                Browse Activities
              </a>
            </Link>
            <Link href="/how-it-works">
              <a className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-how-it-works">
                How It Works
              </a>
            </Link>
            <Link href="/for-businesses">
              <a className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-for-businesses">
                For Businesses
              </a>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Link href="/admin">
                <Button variant="ghost" data-testid="button-admin-login">Admin Login</Button>
              </Link>
              <Link href="/signup">
                <Button data-testid="button-signup">Sign Up</Button>
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-2">
          <Link href="/browse">
            <a className="block px-3 py-2 rounded-md hover-elevate">Browse Activities</a>
          </Link>
          <Link href="/how-it-works">
            <a className="block px-3 py-2 rounded-md hover-elevate">How It Works</a>
          </Link>
          <Link href="/for-businesses">
            <a className="block px-3 py-2 rounded-md hover-elevate">For Businesses</a>
          </Link>
          <Link href="/admin">
            <Button variant="ghost" className="w-full justify-start">Admin Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="w-full">Sign Up</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
