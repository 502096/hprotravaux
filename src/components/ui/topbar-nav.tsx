import React, {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import HproLogo from "@/components/ui/HproLogo";

/* ─── Types ──────────────────────────────────────────────────── */

export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface TopbarNavProps {
  items: NavItem[];
  logo?: React.ReactNode;
  cta?: React.ReactNode;
  defaultActiveId?: string;
  onActiveChange?: (id: string) => void;
  className?: string;
}

/* ─── NavButton ──────────────────────────────────────────────── */

interface NavButtonProps {
  item: NavItem;
  isActive: boolean;
  onActivate: () => void;
  reducedMotion: boolean | null;
}

const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ item, isActive, onActivate, reducedMotion }, ref) => {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 280, damping: 28 });
    const sy = useSpring(my, { stiffness: 280, damping: 28 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (reducedMotion) return;
      const r = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - (r.left + r.width / 2)) * 0.22);
      my.set((e.clientY - (r.top + r.height / 2)) * 0.22);
    };

    const handleMouseLeave = () => {
      mx.set(0);
      my.set(0);
    };

    return (
      <motion.button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        aria-current={isActive ? "page" : undefined}
        onClick={onActivate}
        onMouseMove={reducedMotion ? undefined : handleMouseMove}
        onMouseLeave={reducedMotion ? undefined : handleMouseLeave}
        style={{ x: sx, y: sy, border: "none", background: "none" }}
        className={cn(
          "relative px-3.5 py-2 text-[0.78rem] font-medium tracking-[0.03em]",
          "rounded-lg cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-1 focus-visible:ring-offset-black",
          "transition-colors duration-200",
          isActive ? "text-white" : "text-white/50 hover:text-white/80"
        )}
      >
        {/* active background pill — slides via layoutId */}
        {isActive && (
          <motion.span
            layoutId="activePill"
            className="absolute inset-0 rounded-lg border border-white/[0.06]"
            style={{ background: "rgba(255,255,255,0.07)" }}
            transition={{ type: "spring", stiffness: 420, damping: 38 }}
          />
        )}

        <span className="relative z-10 flex items-center gap-1.5">
          {item.icon && <span className="opacity-70">{item.icon}</span>}
          {item.label}
        </span>

        {/* active amber dot — slides via layoutId */}
        {isActive && (
          <motion.span
            layoutId="activeDot"
            className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full"
            style={{ background: "#C97D16" }}
            transition={{ type: "spring", stiffness: 420, damping: 38 }}
          />
        )}
      </motion.button>
    );
  }
);
NavButton.displayName = "NavButton";

/* ─── TopbarNav ──────────────────────────────────────────────── */

export function TopbarNav({
  items,
  logo,
  cta,
  defaultActiveId,
  onActiveChange,
  className,
}: TopbarNavProps) {
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId ?? items[0]?.id ?? ""
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const btnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const navRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  /* scroll-awareness */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* limelight glow — CSS transition for GPU-smooth movement */
  const updateGlow = useCallback(() => {
    const btn = btnRefs.current.get(activeId);
    const nav = navRef.current;
    const glow = glowRef.current;
    if (!btn || !nav || !glow) return;
    const br = btn.getBoundingClientRect();
    const nr = nav.getBoundingClientRect();
    glow.style.left = `${br.left - nr.left + br.width / 2}px`;
    glow.style.width = `${br.width * 2.4}px`;
  }, [activeId]);

  useLayoutEffect(() => {
    updateGlow();
  }, [updateGlow]);

  useEffect(() => {
    window.addEventListener("resize", updateGlow);
    return () => window.removeEventListener("resize", updateGlow);
  }, [updateGlow]);

  const activate = (id: string) => {
    setActiveId(id);
    onActiveChange?.(id);
  };

  const navigate = (item: NavItem) => {
    activate(item.id);
    item.onClick?.();
    if (item.href) {
      if (item.href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
      else if (item.href.startsWith("#")) document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      else window.location.href = item.href;
    }
  };

  return (
    <>
      <motion.header
        initial={reducedMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-[background,border-color] duration-300",
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-black/40 backdrop-blur-xl border-b border-transparent",
          className
        )}
      >
        {/* top shimmer */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 38%, rgba(201,125,22,0.32) 58%, transparent 100%)",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between gap-6">

          {/* logo */}
          {logo ?? <DefaultLogo />}

          {/* desktop nav */}
          <LayoutGroup id="topnav">
            <nav
              ref={navRef}
              role="tablist"
              aria-label="Navigation principale"
              className="hidden md:flex items-center gap-0.5 relative"
            >
              {/* limelight amber glow */}
              {!reducedMotion && (
                <div
                  ref={glowRef}
                  aria-hidden
                  className="absolute top-1/2 h-14 rounded-full pointer-events-none"
                  style={{
                    transform: "translateY(-50%) translateX(-50%)",
                    transition:
                      "left 0.38s cubic-bezier(0.16,1,0.3,1), width 0.38s cubic-bezier(0.16,1,0.3,1)",
                    background:
                      "radial-gradient(ellipse at center, rgba(201,125,22,0.20) 0%, rgba(201,125,22,0.05) 52%, transparent 72%)",
                  }}
                />
              )}

              {items.map((item) => (
                <NavButton
                  key={item.id}
                  ref={(el) => {
                    if (el) btnRefs.current.set(item.id, el);
                    else btnRefs.current.delete(item.id);
                  }}
                  item={item}
                  isActive={activeId === item.id}
                  onActivate={() => navigate(item)}
                  reducedMotion={reducedMotion}
                />
              ))}
            </nav>
          </LayoutGroup>

          {/* desktop CTA */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {cta ?? <DefaultCTA />}
          </div>

          {/* hamburger */}
          <button
            className="flex md:hidden items-center justify-center p-1.5 cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            style={{ background: "none", border: "none" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={reducedMotion ? {} : { rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reducedMotion ? {} : { rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  style={{ display: "flex" }}
                >
                  <X size={22} color="#fff" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={reducedMotion ? {} : { rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reducedMotion ? {} : { rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  style={{ display: "flex" }}
                >
                  <Menu size={22} color="rgba(255,255,255,0.7)" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(8,10,6,0.98)",
              }}
            >
              <div className="px-6 pt-3 pb-6 flex flex-col">
                {items.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.22 }}
                    onClick={() => {
                      navigate(item);
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-2.5 text-left text-[1rem] cursor-pointer",
                      "py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                      "transition-colors duration-150",
                      activeId === item.id ? "text-white" : "text-white/60"
                    )}
                    style={{
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {item.icon && (
                      <span className="opacity-60 shrink-0">{item.icon}</span>
                    )}
                    <span className="flex-1">{item.label}</span>
                    {activeId === item.id && (
                      <span
                        className="w-[5px] h-[5px] rounded-full shrink-0"
                        style={{ background: "#C97D16" }}
                      />
                    )}
                  </motion.button>
                ))}

                <motion.button
                  initial={reducedMotion ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: items.length * 0.05 + 0.08 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-6 pr-2 text-sm font-semibold text-black mt-5 self-start cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false);
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{ border: "none" }}
                >
                  Demander un devis
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                    <ChevronRight
                      className="h-4 w-4"
                      style={{ color: "#E1E0CC" }}
                    />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* spacer matching header height */}
      <div className="h-[72px]" aria-hidden />
    </>
  );
}

/* ─── DefaultLogo ────────────────────────────────────────────── */

function DefaultLogo() {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ opacity: 0.85, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-lg"
      style={{ background: "none", border: "none", padding: "2px 0" }}
    >
      <HproLogo height={38} className="lg:!h-[50px]" />
    </motion.button>
  );
}

/* ─── DefaultCTA ─────────────────────────────────────────────── */

function DefaultCTA() {
  return (
    <>
      <motion.a
        href="tel:+33673746670"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.38rem",
          fontSize: "0.76rem",
          color: "rgba(255,255,255,0.48)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 7,
          padding: "0.44rem 0.88rem",
          textDecoration: "none",
        }}
        whileHover={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
      >
        <Phone size={12} />
        06 73 74 66 70
      </motion.a>
      <motion.button
        className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-semibold text-black cursor-pointer"
        onClick={() =>
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        style={{ border: "none" }}
      >
        Devis gratuit
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
          <ChevronRight
            className="h-3.5 w-3.5"
            style={{ color: "#E1E0CC" }}
          />
        </span>
      </motion.button>
    </>
  );
}
