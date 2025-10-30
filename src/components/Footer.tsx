import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300 py-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Brand/Copyright */}
          <div className="text-sm">
            <p className="text-white font-semibold">Alisha Jaiswal</p>
            <p className="text-xs">© 2025 All rights reserved</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="mailto:uwidalisha@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">uwidalisha@gmail.com</span>
            </a>
            <a
              href="tel:+919175365952"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">+91 9175365952</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="hidden md:inline">India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/lifecoachalisha"
              target="_blank"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook />
            </a>

            <a
              href="https://www.linkedin.com/in/worklifebalancecoachalisha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
