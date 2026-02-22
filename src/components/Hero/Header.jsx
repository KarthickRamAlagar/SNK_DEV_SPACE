import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineFolder,
  HiOutlineTranslate,
} from "react-icons/hi";
import { useTranslation } from "react-i18next";
import {
  navbarTranslations,
  navItems,
} from "../../constants/i18nConstants/navbarTranslations_temp.js";

const Header = ({ canNavigate, onRestrictedClick, sectionRefs }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { i18n } = useTranslation();
  const [lang, setLang] = useState("kn");

  const navLabels =
    navbarTranslations[lang]?.sections || navbarTranslations.en.sections;

  const navLinks = [
    { name: navLabels.about, path: navItems.about },
    { name: navLabels.education, path: navItems.education },
    { name: navLabels.experience, path: navItems.experience },
    { name: navLabels.projects, path: navItems.projects },
    { name: navLabels.contact, path: navItems.contact },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (!canNavigate) {
      onRestrictedClick();
      return;
    }

    const scrollMap = {
      [navItems.about]: sectionRefs.aboutRef,
      [navItems.education]: sectionRefs.eduRef,
      [navItems.experience]: sectionRefs.expRef,
      [navItems.projects]: sectionRefs.projectsRef,
      [navItems.contact]: sectionRefs.contactRef,
    };

    const targetRef = scrollMap[path];
    if (targetRef?.current)
      targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    const newLang = lang === "kn" ? "en" : "kn";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => setShowHeader(window.scrollY <= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-3 left-0 right-0 z-50 px-6 py-4"
          >
            <div className="w-full flex items-center justify-between">
              {/* LOGO */}
              <Link to="/TheTestNinja/" className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center glow text-primary">
                  <span className="text-xl font-bold">SNK</span>
                </div>
              </Link>

              {/* DESKTOP NAV */}
              <SignedIn>
                <nav className="hidden md:flex bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-md">
                  <ul className="flex gap-6 items-center">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={(e) => handleNavClick(e, link.path)}
                          className="text-lg font-medium text-white hover:text-sky-400 transition flex items-center gap-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}

                    <li>
                      <button
                        onClick={toggleLanguage}
                        className="text-white hover:text-sky-400 transition flex items-center gap-1"
                        title="Toggle Language"
                      >
                        <HiOutlineTranslate size={20} />
                        {lang.toUpperCase()}
                      </button>
                    </li>

                    <li>
                      <UserButton
                        afterSignOutUrl="/TheTestNinja/"
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8 border border-white",
                          },
                        }}
                      />
                    </li>
                  </ul>
                </nav>

                <button
                  className="md:hidden bg-white/10 backdrop-blur-md p-2 rounded-full text-white shadow-md"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <HiOutlineMenuAlt3 size={24} />
                </button>
              </SignedIn>

              {/* SIGNED OUT */}
              <SignedOut>
                <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4 shadow-md">
                  <SignInButton mode="modal">
                    <button className="text-sm font-semibold text-white hover:text-sky-400 transition">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="text-sm font-semibold text-white hover:text-sky-400 transition">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-6"
            onClick={(e) =>
              e.target === e.currentTarget && setMobileMenuOpen(false)
            }
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HiOutlineX size={28} />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-xl font-semibold text-white hover:text-sky-400 transition flex items-center gap-1"
              >
                {link.name}
                {link.name === navLabels.projects && <HiOutlineFolder />}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="text-white hover:text-sky-400 transition flex items-center gap-1"
            >
              <HiOutlineTranslate size={20} /> {lang.toUpperCase()}
            </button>

            <UserButton
              afterSignOutUrl="/TheTestNinja/"
              appearance={{
                elements: { avatarBox: "w-10 h-10 border border-white" },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
