"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/admin/session");
      const data = await response.json();

      if (data.authenticated) {
        setUser(data.user);
      } else {
        if (pathname !== "/admin/login") {
          router.push("/admin/login");
        }
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      if (pathname !== "/admin/login") {
        router.push("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/admin/dashboard" className="text-2xl font-bold text-indigo-600">
                Paravix Admin
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/admin/dashboard"
                  className={`text-sm font-medium ${
                    pathname === "/admin/dashboard"
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/blogs"
                  className={`text-sm font-medium ${
                    pathname.startsWith("/admin/blogs")
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Blogs
                </Link>
                <Link
                  href="/admin/comments"
                  className={`text-sm font-medium ${
                    pathname === "/admin/comments"
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  Comments
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-indigo-600"
                target="_blank"
              >
                View Site
              </Link>
              <span className="text-sm text-gray-600">
                {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
