import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, SunIcon, MoonIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { to: "/", label: t('nav.home') },
    { to: "/how-to-use", label: t('nav.how') },
    { to: "/pricing", label: t('nav.pricing') },
    { to: "/about", label: t('nav.about') },
    { to: "/contact", label: t('nav.contact') },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg px-4 py-3 sticky top-0 z-50 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 animate-fade-in-down">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform duration-300 animate-slide-in-left"
        >
          {t('appTitle')}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center animate-fade-in-up animate-delay-200">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Auth Section */}
          {!user ? (
            <div className="flex gap-3 animate-slide-in-right animate-delay-400">
              <Link to="/login">
                <Button variant="outline" className="text-sm">
                  {t('nav.login')}
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary" className="text-sm">
                  {t('nav.signup')}
                </Button>
              </Link>
            </div>
          ) : (
            <Menu as="div" className="relative animate-scale-in animate-delay-400">
              <Menu.Button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover-lift">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:block">{user.name}</span>
              </Menu.Button>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-2 z-10 border border-gray-200 dark:border-gray-700">
                  <Menu.Item>
                    {({ active }) => (
                      <Link 
                        to="/profile" 
                        className={`block px-4 py-3 transition-colors duration-200 ${
                          active ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {t('nav.profile')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link 
                        to="/dashboard" 
                        className={`block px-4 py-3 transition-colors duration-200 ${
                          active ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {t('nav.dashboard')}
                      </Link>
                    )}
                  </Menu.Item>
                  <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  <Menu.Item>
                    {({ active }) => (
                      <button 
                        onClick={() => { logout(); navigate('/'); }} 
                        className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                          active ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {t('nav.logout')}
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover-scale animate-bounce-in animate-delay-500"
          >
            {theme === 'light' ? (
              <MoonIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <SunIcon className="w-5 h-5 text-yellow-500" />
            )}
          </button>

          {/* Language Selector */}
          <select
            value={i18n.language}
            onChange={e => handleLanguageChange(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 animate-slide-in-right animate-delay-600"
          >
            <option value="en">EN</option>
            <option value="ar">العربية</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover-scale"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95 -translate-y-2"
        enterTo="transform opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100 translate-y-0"
        leaveTo="transform opacity-0 scale-95 -translate-y-2"
      >
        <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
            
            {!user ? (
              <div className="flex flex-col gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    {t('nav.login')}
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    {t('nav.signup')}
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                >
                  {t('nav.profile')}
                </Link>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                >
                  {t('nav.dashboard')}
                </Link>
                <button
                  onClick={() => { logout(); navigate('/'); setMobileMenuOpen(false); }}
                  className="px-3 py-2 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-300"
                >
                  {t('nav.logout')}
                </button>
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
              >
                {theme === 'light' ? (
                  <>
                    <MoonIcon className="w-5 h-5" />
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <SunIcon className="w-5 h-5" />
                    <span>Light</span>
                  </>
                )}
              </button>
              
              <select
                value={i18n.language}
                onChange={e => handleLanguageChange(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300"
              >
                <option value="en">EN</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
