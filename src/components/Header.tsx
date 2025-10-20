import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useAppContext } from '../context/AppContext';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { scrollToSection, isScrolled } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { key: 'home', section: 'hero' },
    { key: 'about', section: 'about' },
    { key: 'experience', section: 'experience' },
    { key: 'projects', section: 'projects' },
    { key: 'contact', section: 'contact' },
  ];

  const handleNavigationClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-professional section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigationClick(item.section)}
                className="text-foreground hover:text-primary  font-medium"
              >
                {t(`navigation.${item.key}`)}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigationClick(item.section)}
                  className="text-left text-white hover:text-primary transition-colors font-medium py-2"
                >
                  {t(`navigation.${item.key}`)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};