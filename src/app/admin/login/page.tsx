'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/auth');
      if (response.ok) {
        router.push('/admin/dashboard');
      }
    } catch (error) {
      // Not authenticated, stay on login page
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-secondary/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <FiLock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-fontColor mb-2">Admin Login</h1>
            <p className="text-fontColor/70">
              Access the blog management dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-fontColor mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="Enter username"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fontColor/40" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-fontColor mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter password"
                  required
                  className="w-full pl-12 pr-12 py-4 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fontColor/40" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-fontColor/40 hover:text-fontColor/60 transition-colors"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-4 text-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-fontColor/60">
            <p>© 2026 Umesh Gajjar. Admin Panel.</p>
          </div>
        </div>
      </div>
    </div>
  );
}