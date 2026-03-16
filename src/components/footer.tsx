import { Link } from "react-router-dom";

import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

const Footer = () => {
  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-8 bg-primary border-t border-t-secondary/5"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Copyright */}
        <p className="text-white text-md font-bold flex">
          © Vishnu C R {new Date().getFullYear()} • Built with React + Tailwind
        </p>

        {/* Social Links */}
        <ul className="list-none hidden flex-row sm:flex gap-10">
          {SOCIALS.map((social) => (
            <li
              key={social.name}
              className="text-secondary font-poppins font-medium cursor-pointer text-[16px] opacity-80 hover:opacity-100 transition"
            >
              <Link to={social.link} target="_blank" rel="noreferrer noopener">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-6 w-6 hover:scale-110 transition"
                />
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Footer;