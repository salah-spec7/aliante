import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Founder', href: '/founder' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <Link to="/" className="text-foreground font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
          ALIANTÉ
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-background z-40 pt-20 px-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity mt-4"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}