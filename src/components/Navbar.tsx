import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import { Menu } from '@headlessui/react';
import { Bars3Icon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">{t('appTitle')}</Link>
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.home')}</Link>
        <Link to="/how-to-use" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.how')}</Link>
        <Link to="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.pricing')}</Link>
        <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.about')}</Link>
        <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.contact')}</Link>
        {!user ? (
          <>
            <Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.login')}</Link>
            <Link to="/signup" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.signup')}</Link>
          </>
        ) : (
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <span>{user.name}</span>
              <Bars3Icon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded py-2 z-10">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/profile" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.profile')}</Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/dashboard" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.dashboard')}</Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button onClick={() => { logout(); navigate('/'); }} className={`w-full text-left px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.logout')}</button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        )}
        <Button variant="outline" onClick={toggleTheme} className="ml-2">
          {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </Button>
        <select
          value={i18n.language}
          onChange={e => handleLanguageChange(e.target.value)}
          className="ml-2 px-2 py-1 rounded border dark:bg-gray-700 dark:text-white"
        >
          <option value="en">EN</option>
          <option value="ar">العربية</option>
        </select>
      </div>
      <div className="md:hidden flex items-center">
        {/* Mobile menu button */}
        <Menu as="div" className="relative">
          <Menu.Button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bars3Icon className="w-6 h-6" />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded py-2 z-10">
            <Menu.Item>
              {({ active }) => (
                <Link to="/" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.home')}</Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="#how" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.how')}</Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="#pricing" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.pricing')}</Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="#about" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.about')}</Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="#contact" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.contact')}</Link>
              )}
            </Menu.Item>
            {!user ? (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/login" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.login')}</Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/signup" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.signup')}</Link>
                  )}
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/profile" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.profile')}</Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/dashboard" className={`block px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.dashboard')}</Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={() => { logout(); navigate('/'); }} className={`w-full text-left px-4 py-2 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>{t('nav.logout')}</button>
                  )}
                </Menu.Item>
              </>
            )}
            <Menu.Item>
              {({ active }) => (
                <Button variant="outline" onClick={toggleTheme} className="w-full flex justify-start px-4 py-2">
                  {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                </Button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <select
                  value={i18n.language}
                  onChange={e => handleLanguageChange(e.target.value)}
                  className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white"
                >
                  <option value="en">EN</option>
                  <option value="ar">العربية</option>
                </select>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;

