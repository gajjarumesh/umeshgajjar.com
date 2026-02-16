'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  FiHome,
  FiFileText,
  FiPlus,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiMessageSquare,
} from 'react-icons/fi';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const sidebarItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: FiHome },
  { href: '/admin/blogs', label: 'All Blogs', icon: FiFileText },
  { href: '/admin/blogs/new', label: 'New Blog', icon: FiPlus },
  { href: '/admin/comments', label: 'Comments', icon: FiMessageSquare },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/auth');
      if (response.ok) {
        const data = await response.json();
        setAdmin(data.admin);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      router.push('/admin/login');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!admin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-fontColor/70">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-secondary/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out lg:static lg:inset-0`}>
        <div className="flex items-center justify-between p-6 border-b border-secondary/20">
          <div>
            <h2 className="text-xl font-bold text-fontColor">Admin Panel</h2>
            <p className="text-sm text-fontColor/60">Blog Management</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 text-fontColor/60 hover:text-fontColor hover:bg-background rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-fontColor/70 hover:text-fontColor hover:bg-background'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Info & Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-secondary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold">
                {admin.username?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-semibold text-fontColor">{admin.username}</p>
              <p className="text-sm text-fontColor/60">{admin.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-2 text-fontColor/70 hover:text-fontColor hover:bg-background rounded-xl transition-colors"
          >
            <FiLogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-secondary/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-fontColor/60 hover:text-fontColor hover:bg-background rounded-lg transition-colors"
              >
                <FiMenu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-fontColor">
                  {pathname === '/admin/dashboard' && 'Dashboard'}
                  {pathname === '/admin/blogs' && 'All Blogs'}
                  {pathname === '/admin/blogs/new' && 'New Blog'}
                  {pathname === '/admin/comments' && 'Comments'}
                  {pathname.includes('/admin/blogs/edit/') && 'Edit Blog'}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="text-fontColor/70 hover:text-fontColor transition-colors"
              >
                View Site
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}