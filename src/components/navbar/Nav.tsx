import { useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import ImagePlaceholder from "../placeholder/ImagePlaceholder.tsx";
import type { NavLink } from "../../types";
import "./Nav.css";

const CONTACT_EMAIL = "Jaspe02@gmail.com";

const links: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
];

export default function Nav() {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    const lastY = useRef(0);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (y) => {
        if (window.innerWidth <= 1024) {
            setCollapsed(true);
            return;
        }

        const diff = y - lastY.current;

        if (Math.abs(diff) > 4) {
            if (diff > 0 && y > 60) {
                setCollapsed(true);
                setShowEmail(false);
            } else if (diff < 0) {
                setCollapsed(false);
            }
            lastY.current = y;
        }
    });

    const cubeVariants = {
        initial: (isEmail: boolean) => ({
            rotateX: isEmail ? -90 : 90,
            y: isEmail ? 20 : -20,
            opacity: 0,
        }),
        animate: {
            rotateX: 0,
            y: 0,
            opacity: 1,
            transition: { duration: 0.10, ease: [0.4, 0, 0.2, 1] },
        },
        exit: (isEmail: boolean) => ({
            rotateX: isEmail ? 90 : -90,
            y: isEmail ? -20 : 20,
            opacity: 0,
            transition: { duration: 0.10, ease: [0.4, 0, 0.2, 1] },
        }),
    };

    return (
        <div className="nav-fixed-wrap">
            <motion.nav
                layout
                className="nav-pill"
                onClick={() => {
                    if (window.innerWidth > 1024 && collapsed) {
                        setCollapsed(false);
                    }
                }}
                style={{
                    cursor: window.innerWidth > 1024 && collapsed ? "pointer" : "default",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
            >
                <motion.div
                    layout
                    className="nav-avatar"
                    onClick={(e) => {
                        if (window.innerWidth <= 1024) {
                            e.stopPropagation();
                        }
                    }}
                >
                    <ImagePlaceholder src="/images/img.png" alt="Your profile photo" shape="circle" />
                </motion.div>

                <AnimatePresence mode="popLayout" initial={false}>
                    {collapsed ? (
                        <motion.div
                            key="status"
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="nav-status"
                        >
                            <span>Available for work</span>
                            <span className="nav-dot-wrap">
                                <span className="nav-dot-ping" />
                                <span className="nav-dot" />
                            </span>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="links-container"
                            layout
                            className="nav-middle-container"
                        >
                            <AnimatePresence mode="wait" custom={showEmail}>
                                {!showEmail ? (
                                    <motion.div
                                        key="nav-links-list"
                                        custom={false}
                                        variants={cubeVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="nav-links-row"
                                    >
                                        {links.map((link) => (
                                            <a key={link.href} href={link.href}>
                                                {link.label}
                                            </a>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        key="nav-email-text"
                                        custom={true}
                                        variants={cubeVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="nav-email-link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {CONTACT_EMAIL}
                                    </motion.a>
                                )}
                            </AnimatePresence>

                            <button
                                className="nav-contact"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowEmail((prev) => !prev);
                                }}
                            >
                                {showEmail ? "Menu" : "Contact"}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    type="button"
                    className="nav-hamburger"
                    aria-label="Open menu"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMobileMenuOpen(true);
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M2 5H14M2 11H14"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    >
                        <div className="mobile-menu-header">
                            <div className="nav-avatar">
                                <ImagePlaceholder src="/images/img.png" alt="Your profile photo" shape="circle" />
                            </div>
                            <button
                                type="button"
                                className="mobile-menu-close"
                                aria-label="Close menu"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setShowEmail(false);
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path
                                        d="M1 1L13 13M13 1L1 13"
                                        stroke="white"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <nav className="mobile-menu-links">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setShowEmail(false);
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {!showEmail ? (
                            <button
                                className="mobile-menu-contact"
                                onClick={() => setShowEmail(true)}
                            >
                                Contact
                            </button>
                        ) : (
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="mobile-menu-email"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setShowEmail(false);
                                }}
                            >
                                {CONTACT_EMAIL}
                            </a>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}