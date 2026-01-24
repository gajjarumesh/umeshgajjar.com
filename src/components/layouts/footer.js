import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/paravix", label: "Paravix" },
  { href: "/blog", label: "Blog" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Paravix</h3>
            <p className="text-sm text-gray-400">
              Engineering systems that remain reliable, understandable, and maintainable long after launch.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Get in Touch</h4>
            <p className="text-sm text-gray-400 mb-2">
              Have a technical problem or system to improve?
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Start a conversation →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Paravix. Led by Umesh Gajjar.
          </p>
        </div>
      </div>
    </footer>
  );
}
