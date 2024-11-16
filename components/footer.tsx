import { LogoIcon } from "@/components/logo-icon";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <LogoIcon className="h-8 w-8" />
              <span className="font-playfair text-xl font-bold">Negus Legal Tech</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Leading legal technology consultancy specializing in data protection,
              cybersecurity, and AI & robotics law.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/80 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-white/80 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-white/80 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-white/80 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Negus Legal Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}