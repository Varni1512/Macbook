import { footerLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <>
      {/* ===== CSS INSIDE FILE ===== */}
      <style>{`
        .footer-gradient {
          background: linear-gradient(
            180deg,
            #000000 0%,
            #0a0a0a 50%,
            #000000 100%
          );
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-link {
          position: relative;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 1px;
          background: linear-gradient(to right, #ffffff, #7dd3fc);
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-logo {
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.15));
        }
      `}</style>

      {/* ===== FOOTER ===== */}
      <footer className="footer-gradient text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-10">

          {/* TOP INFO */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <p className="max-w-xl leading-relaxed text-center md:text-left">
              More ways to shop: Find an Apple Store or other retailer near you.
              Or call{" "}
              <span className="text-white font-medium">
                000800 040 1966
              </span>
              .
            </p>

            <img
              src="/logo.svg"
              alt="Apple logo"
              className="footer-logo w-8 opacity-90"
            />
          </div>

          <hr className="border-white/10" />

          {/* BOTTOM LINKS */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <p className="text-gray-500 text-center md:text-left">
              Copyright © 2024 Apple Inc. All rights reserved.
            </p>

            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map(({ label, link }) => (
                <li key={label}>
                  <a
                    href={link}
                    className="footer-link text-gray-400 hover:text-white transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
