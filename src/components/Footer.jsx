import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex bg-base-200 mt-4 h-[50px] bottom-0 z-10 w-full">
      <p className="pl-3 self-center">&copy; MIAOutlet 2025 🌍 by </p>
      <Link
        to="https://www.linkedin.com/in/giadabellan/"
        className="pl-2 self-center font-bold underline hover:text-blue-400"
      >
        Giada Bellan
      </Link>
    </footer>
  );
};

export default Footer;
