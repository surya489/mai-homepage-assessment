"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";

interface Particle {
  ox: number;
  oy: number;
  dx: number;
  dy: number;
  dist: number;
  speed: number;
  maxDist: number;
  tail: number;
  r: number;
  g: number;
  b: number;
}

const companyLinks = [
  { label: "About Us", href: "/" },
  { label: "Careers", href: "/" },
  { label: "CSR", href: "/" },
  { label: "FAQ", href: "/" },
];

const platformLinks = [
  { label: "Contact Us", href: "/" },
  { label: "Terms & Conditions", href: "/" },
  { label: "Privacy Policy", href: "/" },
  { label: "NDA", href: "/" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "/",
    bg: "#1877F2",
    icon: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
    viewBox: "0 0 320 512",
  },
  {
    label: "X / Twitter",
    href: "/",
    bg: "#000000",
    icon: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
    viewBox: "0 0 512 512",
  },
  {
    label: "YouTube",
    href: "/",
    bg: "#FF0000",
    icon: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM264.153 288.085V176.085l105.545 56-105.545 56z",
    viewBox: "0 0 576 512",
  },
  {
    label: "Instagram",
    href: "/",
    bg: "linear-gradient(45deg, rgb(240, 148, 51), rgb(230, 104, 60), rgb(220, 39, 67), rgb(204, 35, 102), rgb(188, 24, 136))",
    icon: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    viewBox: "0 0 448 512",
  },
  {
    label: "LinkedIn",
    href: "/",
    bg: "#0A66C2",
    icon: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
    viewBox: "0 0 448 512",
  },
  {
    label: "WhatsApp",
    href: "/",
    bg: "rgb(37, 211, 102)",
    icon: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
    viewBox: "0 0 448 512",
  }
];

function spawnParticles(x: number, y: number, particles: Particle[]) {
  if (particles.length >= 120) return;

  const snapY = 60 * Math.round(y / 60);
  const snapX = 60 * Math.round(x / 60);
  const maxDist = 200 + 80 * Math.random();

  particles.push(
    { ox: x, oy: snapY, dx: 1, dy: 0, dist: 0, speed: 4 + 2 * Math.random(), maxDist, tail: 55, r: 0, g: 212, b: 255 },
    { ox: x, oy: snapY, dx: -1, dy: 0, dist: 0, speed: 4 + 2 * Math.random(), maxDist, tail: 55, r: 0, g: 212, b: 255 },
    { ox: snapX, oy: y, dx: 0, dy: 1, dist: 0, speed: 4 + 2 * Math.random(), maxDist, tail: 55, r: 77, g: 184, b: 255 },
    { ox: snapX, oy: y, dx: 0, dy: -1, dist: 0, speed: 4 + 2 * Math.random(), maxDist, tail: 55, r: 77, g: 184, b: 255 }
  );

  if (Math.random() > 0.35) return;

  const snapYLarge = 240 * Math.round(y / 240);
  const snapXLarge = 240 * Math.round(x / 240);
  const maxDistLarge = 320 + 100 * Math.random();

  particles.push(
    { ox: x, oy: snapYLarge, dx: 1, dy: 0, dist: 0, speed: 5, maxDist: maxDistLarge, tail: 80, r: 120, g: 220, b: 255 },
    { ox: x, oy: snapYLarge, dx: -1, dy: 0, dist: 0, speed: 5, maxDist: maxDistLarge, tail: 80, r: 120, g: 220, b: 255 },
    { ox: snapXLarge, oy: y, dx: 0, dy: 1, dist: 0, speed: 5, maxDist: maxDistLarge, tail: 80, r: 120, g: 220, b: 255 },
    { ox: snapXLarge, oy: y, dx: 0, dy: -1, dist: 0, speed: 5, maxDist: maxDistLarge, tail: 80, r: 120, g: 220, b: 255 }
  );
}

function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  const endX = particle.ox + particle.dx * particle.dist;
  const endY = particle.oy + particle.dy * particle.dist;
  const tailDist = Math.max(0, particle.dist - particle.tail);
  const startX = particle.ox + particle.dx * tailDist;
  const startY = particle.oy + particle.dy * tailDist;
  const progress = particle.dist / particle.maxDist;
  const opacity = (1 - progress) * (1 - progress);

  if (opacity < 0.008) return;

  const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
  gradient.addColorStop(0, `rgba(${particle.r},${particle.g},${particle.b},0)`);
  gradient.addColorStop(0.55, `rgba(${particle.r},${particle.g},${particle.b},${(0.45 * opacity).toFixed(3)})`);
  gradient.addColorStop(1, `rgba(${particle.r},${particle.g},${particle.b},${opacity.toFixed(3)})`);

  ctx.save();
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 1;
  ctx.shadowColor = `rgba(${particle.r},${particle.g},${particle.b},0.75)`;
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-2 text-[16px] text-white hover:text-white transition-colors duration-200"
            >
              <span className="h-px w-0 bg-[#4DB8FF] group-hover:w-4 transition-all duration-300 ease-out flex-shrink-0" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: 0, y: 0, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const lastSpawnRef = useRef(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const rect = footerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cursorRef.current = { x, y, active: true };

    const gradient = document.getElementById("ft-cursor-fade");
    gradient?.setAttribute("cx", String(x));
    gradient?.setAttribute("cy", String(y));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const footer = footerRef.current;
    if (!canvas || !footer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = footer.clientWidth;
      canvas.height = footer.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let frameId = 0;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x, y, active } = cursorRef.current;
      if (active && time - lastSpawnRef.current > 65) {
        lastSpawnRef.current = time;
        spawnParticles(x, y, particlesRef.current);
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i -= 1) {
        const particle = particlesRef.current[i];
        particle.dist += particle.speed * (delta / 16.67);

        if (particle.dist >= particle.maxDist) {
          particlesRef.current.splice(i, 1);
        } else {
          drawParticle(ctx, particle);
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovering(true);
        cursorRef.current.active = true;
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        cursorRef.current.active = false;
        particlesRef.current = [];
      }}
      className="relative w-full overflow-hidden bg-[#020D18] text-white font-montserrat"
    >
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-[1]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="ft-grid-sm"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id="ft-grid-lg"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 240 0 L 0 0 0 240"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ft-grid-sm)" />
        <rect width="100%" height="100%" fill="url(#ft-grid-lg)" />
        <line x1="42%" y1="5%" x2="58%" y2="5%" stroke="rgba(77,184,255,0.06)" strokeWidth="0.75" />
        <line x1="35%" y1="95%" x2="55%" y2="95%" stroke="rgba(77,184,255,0.05)" strokeWidth="0.75" />
        <line x1="0" y1="88%" x2="38%" y2="0%" stroke="rgba(77,184,255,0.035)" strokeWidth="0.75" />
        <line x1="62%" y1="100%" x2="100%" y2="28%" stroke="rgba(77,184,255,0.035)" strokeWidth="0.75" />
      </svg>

      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-[2] transition-opacity duration-[400ms] ease-out"
        style={{ opacity: isHovering ? 1 : 0 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="ft-glow-sm"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(0,212,255,0.75)"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id="ft-glow-lg"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 240 0 L 0 0 0 240"
              fill="none"
              stroke="rgba(77,184,255,1)"
              strokeWidth="1.1"
            />
          </pattern>
          <radialGradient
            id="ft-cursor-fade"
            gradientUnits="userSpaceOnUse"
            cx="-9999"
            cy="-9999"
            r="190"
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="28%" stopColor="white" stopOpacity="0.72" />
            <stop offset="52%" stopColor="white" stopOpacity="0.28" />
            <stop offset="72%" stopColor="white" stopOpacity="0.07" />
            <stop offset="82%" stopColor="white" stopOpacity="0.17" />
            <stop offset="92%" stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="ft-cursor-mask">
            <rect width="100%" height="100%" fill="black" />
            <rect width="100%" height="100%" fill="url(#ft-cursor-fade)" />
          </mask>
        </defs>
        <g mask="url(#ft-cursor-mask)">
          <rect width="100%" height="100%" fill="url(#ft-glow-sm)" />
          <rect width="100%" height="100%" fill="url(#ft-glow-lg)" />
        </g>
      </svg>

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[3]"
        aria-hidden="true"
      />

      <div className="relative z-10 border-b border-white/[0.07] px-4 sm:px-10 xl:px-24 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-[#4DB8FF] text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Start Today — It&apos;s Free
            </p>
            <h2 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-white">Let&apos;s </span>
              <span className="bg-gradient-to-r from-[#4DB8FF] via-[#00D4FF] to-[#0077B6] bg-clip-text text-transparent">
                Build
              </span>
              <br />
              <span className="text-white/80 text-3xl md:text-5xl xl:text-6xl font-bold">
                Our Nation Great.
              </span>
            </h2>
            <p className="mt-5 text-white text-[16px] md:text-base max-w-lg leading-relaxed">
              Connect with verified UK tradespeople or find your next project.
              MAI brings the right people together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 bg-[#1F5CAC] hover:bg-[#164a8a] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 text-[14px] shadow-[0_0_30px_rgba(31,92,172,0.4)] hover:shadow-[0_0_40px_rgba(31,92,172,0.6)]"
            >
              Post a Project
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 text-[14px]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-10 xl:px-24 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          <div className="col-span-2 md:col-span-1 space-y-5 pr-4">
            <Image
              src={ASSETS.logo}
              alt="MAI Logo"
              width={2200}
              height={2200}
              className="w-24"
            />
            <p className="text-white text-[16px] leading-relaxed">
              A premier platform connecting homeowners with certified, skilled
              Traders across the UK.
            </p>
            <div className="flex gap-2.5 flex-wrap pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 shadow-md hover:scale-110 hover:shadow-lg"
                  style={{ background: social.bg }}
                >
                  <svg
                    viewBox={social.viewBox}
                    fill="currentColor"
                    className="text-white w-[15px] h-[15px]"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Company" links={companyLinks} />
          <FooterLinkColumn title="Platform" links={platformLinks} />

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-[16px] text-white">
                  <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-[#0077B6]/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3 w-3 text-[#4DB8FF]"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </span>
                  <span className="break-words min-w-0">
                    1 De La Warr Way, Cambourne, Cambridge CB23 6DX
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="/"
                  className="group flex items-start gap-3 text-[16px] text-white hover:text-white transition-colors duration-200"
                >
                  <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-[#0077B6]/20 group-hover:bg-[#0077B6]/40 transition-colors duration-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3 w-3 text-[#4DB8FF]"
                    >
                      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
                    </svg>
                  </span>
                  +44 20 8004 3345
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="group flex items-start gap-3 text-[16px] text-white hover:text-white transition-colors duration-200"
                >
                  <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-[#0077B6]/20 group-hover:bg-[#0077B6]/40 transition-colors duration-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3 w-3 text-[#4DB8FF]"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  <span className="break-words min-w-0">info@myproject.ai</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-4 sm:px-10 xl:px-24 my-4">
          <Image
            src={ASSETS.gdprBadge}
            alt="MAI Copyright"
            width={60}
            height={50}
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
          />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.06] px-4 sm:px-10 xl:px-24 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[12px] text-white/25 text-center">
            © 2023 - {new Date().getFullYear()} MAI Corporation Ltd. MAI
            Corporation Ltd is a UK-based holding company overseeing subsidiaries
            and affiliated operations across the UK, EU, Asia and Africa.
            Incorporated in England &amp; Wales under Company No. 15469340. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
