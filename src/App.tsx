// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';

const RevLabWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(null);
  const [showBlogModal, setShowBlogModal] = useState(null);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isGlobeVisible, setIsGlobeVisible] = useState(true);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  const words = ['Innovate.', 'Transform.', 'Scale.', 'Succeed.'];

  // ============================================
  // REVLAB MAIN LOGO - Diamond Dots Pattern
  // ============================================
  const RevLabMainLogo = ({ color = 'white', showText = true, size = 1 }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: `${10 * size}px` }}>
      {/* Diamond dots icon */}
      <svg width={36 * size} height={36 * size} viewBox="0 0 100 100" fill="none">
        {/* Row 1 - 1 dot */}
        <circle cx="50" cy="8" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        {/* Row 2 - 3 dots */}
        <circle cx="38" cy="20" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="50" cy="20" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="62" cy="20" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        {/* Row 3 - 5 dots */}
        <circle cx="26" cy="32" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="38" cy="32" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="50" cy="32" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="62" cy="32" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="74" cy="32" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        {/* Row 4 - 7 dots (widest) */}
        <circle cx="14" cy="44" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="26" cy="44" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="38" cy="44" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="50" cy="44" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="62" cy="44" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="74" cy="44" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="86" cy="44" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        {/* Row 5 - 5 dots */}
        <circle cx="26" cy="56" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="38" cy="56" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="50" cy="56" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="62" cy="56" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="74" cy="56" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        {/* Row 6 - 3 dots */}
        <circle cx="38" cy="68" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="50" cy="68" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        <circle cx="62" cy="68" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
        {/* Row 7 - 1 dot */}
        <circle cx="50" cy="80" r="5" fill={color === 'white' ? '#FFFFFF' : '#F08367'}/>
      </svg>
      {showText && (
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 800, fontSize: `${15 * size}px`, letterSpacing: '1px', color: color === 'white' ? '#FFFFFF' : '#333' }}>REVLAB</div>
          <div style={{ fontSize: `${9 * size}px`, color: color === 'white' ? '#888' : '#666', letterSpacing: '2px', fontWeight: 500 }}>CONSULTING</div>
        </div>
      )}
    </div>
  );

  // ============================================
  // REFINED VENTURE LOGOS
  // ============================================
  
  // Leben Logo - Interlocking flower/cross with thick rounded links
  const LebenLogo = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Four interlocking curved petals */}
      {/* Top - Orange */}
      <ellipse cx="50" cy="30" rx="12" ry="20" fill="#F08367"/>
      <circle cx="50" cy="18" r="8" fill="#F08367"/>
      {/* Right - Purple */}
      <ellipse cx="70" cy="50" rx="20" ry="12" fill="#A78BFA"/>
      <circle cx="82" cy="50" r="8" fill="#A78BFA"/>
      {/* Bottom - Blue */}
      <ellipse cx="50" cy="70" rx="12" ry="20" fill="#5D9CEC"/>
      <circle cx="50" cy="82" r="8" fill="#5D9CEC"/>
      {/* Left - Teal */}
      <ellipse cx="30" cy="50" rx="20" ry="12" fill="#4ECDC4"/>
      <circle cx="18" cy="50" r="8" fill="#4ECDC4"/>
      {/* Center connector dots */}
      <circle cx="50" cy="50" r="10" fill="#3D3D47"/>
      <circle cx="50" cy="38" r="5" fill="#F08367"/>
      <circle cx="62" cy="50" r="5" fill="#A78BFA"/>
      <circle cx="50" cy="62" r="5" fill="#5D9CEC"/>
      <circle cx="38" cy="50" r="5" fill="#4ECDC4"/>
    </svg>
  );

  // HausBuddy Logo - Teal circle with white house and orange smile
  const HausBuddyLogo = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" fill="#4ECDC4"/>
      {/* House roof */}
      <path d="M50 18 L78 40 L22 40 Z" fill="white"/>
      {/* House body */}
      <rect x="28" y="40" width="44" height="32" fill="white"/>
      {/* Windows - Orange */}
      <rect x="35" y="46" width="12" height="10" rx="2" fill="#FBBF24"/>
      <rect x="53" y="46" width="12" height="10" rx="2" fill="#FBBF24"/>
      {/* Smile arc under house */}
      <path d="M32 76 Q50 88 68 76" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round" fill="none"/>
    </svg>
  );

  // MyCondo Logo - Circle outline with two building silhouettes
  const ResidovoLogo = ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Three horizontal bars - gold/yellow color matching Residovo brand */}
      <rect x="15" y="28" width="35" height="10" rx="2" fill="#C9A227"/>
      <rect x="15" y="45" width="28" height="10" rx="2" fill="#C9A227"/>
      <rect x="15" y="62" width="21" height="10" rx="2" fill="#C9A227"/>
    </svg>
  );

  // ============================================
  // ARTICLE PATTERN - Code-Generated SVG Art
  // ============================================
  const ArticlePattern = ({ category }) => {
    if (category === 'Web Presence') {
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0A0A0D"/><stop offset="100%" stopColor="#0E1525"/></linearGradient></defs>
          <rect width="200" height="140" fill="url(#webGrad)"/>
          {[...Array(10)].map((_, i) => <line key={`v${i}`} x1={20 + i * 18} y1="10" x2={20 + i * 18} y2="130" stroke="#4A90E2" strokeWidth="0.5" opacity="0.3"/>)}
          {[...Array(7)].map((_, i) => <line key={`h${i}`} x1="10" y1={20 + i * 18} x2="190" y2={20 + i * 18} stroke="#4A90E2" strokeWidth="0.5" opacity="0.3"/>)}
          <circle cx="56" cy="56" r="8" fill="#4ECDC4" opacity="0.8"/><circle cx="56" cy="56" r="12" fill="#4ECDC4" opacity="0.2"/>
          <circle cx="110" cy="38" r="6" fill="#4A90E2" opacity="0.9"/><circle cx="110" cy="38" r="10" fill="#4A90E2" opacity="0.2"/>
          <circle cx="146" cy="92" r="7" fill="#4ECDC4" opacity="0.7"/><circle cx="146" cy="92" r="11" fill="#4ECDC4" opacity="0.2"/>
          <line x1="56" y1="56" x2="110" y2="38" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.5"/>
          <line x1="110" y1="38" x2="146" y2="92" stroke="#4A90E2" strokeWidth="1.5" opacity="0.5"/>
          <rect x="40" y="25" width="120" height="90" rx="4" stroke="#4ECDC4" strokeWidth="1.5" fill="none" opacity="0.4"/>
          <circle cx="52" cy="35" r="3" fill="#F08367" opacity="0.8"/><circle cx="62" cy="35" r="3" fill="#FBBF24" opacity="0.8"/><circle cx="72" cy="35" r="3" fill="#4ADE80" opacity="0.8"/>
        </svg>
      );
    }
    if (category === 'Strategy') {
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="stratGrad" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0A0A0D"/><stop offset="100%" stopColor="#1A0E25"/></linearGradient><linearGradient id="barGrad" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#A78BFA"/><stop offset="100%" stopColor="#F472B6"/></linearGradient></defs>
          <rect width="200" height="140" fill="url(#stratGrad)"/>
          <rect x="30" y="95" width="18" height="30" rx="2" fill="url(#barGrad)" opacity="0.6"/>
          <rect x="55" y="75" width="18" height="50" rx="2" fill="url(#barGrad)" opacity="0.7"/>
          <rect x="80" y="60" width="18" height="65" rx="2" fill="url(#barGrad)" opacity="0.8"/>
          <rect x="105" y="45" width="18" height="80" rx="2" fill="url(#barGrad)" opacity="0.85"/>
          <rect x="130" y="25" width="18" height="100" rx="2" fill="url(#barGrad)" opacity="0.9"/>
          <rect x="155" y="15" width="18" height="110" rx="2" fill="url(#barGrad)" opacity="1"/>
          <path d="M39 95 Q70 70, 89 60 T139 25 T164 15" stroke="#F472B6" strokeWidth="2" fill="none" opacity="0.8"/>
          <polygon points="175,35 185,50 165,50" fill="#A78BFA" opacity="0.5"/>
        </svg>
      );
    }
    if (category === 'Mobile Apps') {
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0A0A0D"/><stop offset="100%" stopColor="#0A1A18"/></linearGradient></defs>
          <rect width="200" height="140" fill="url(#mobileGrad)"/>
          <rect x="75" y="20" width="50" height="100" rx="8" stroke="#4ECDC4" strokeWidth="2" fill="none" opacity="0.7"/>
          <rect x="85" y="30" width="30" height="60" rx="2" fill="#4ECDC4" opacity="0.15"/>
          <circle cx="100" cy="105" r="5" stroke="#4ECDC4" strokeWidth="1.5" fill="none" opacity="0.6"/>
          {[0,1,2].map(row => [0,1,2].map(col => <circle key={`dot${row}${col}`} cx={88 + col * 12} cy={38 + row * 16} r="3" fill="#4ADE80" opacity={0.5 + (row + col) * 0.1}/>))}
          <circle cx="35" cy="40" r="6" fill="#4ECDC4" opacity="0.8"/><circle cx="35" cy="40" r="10" fill="#4ECDC4" opacity="0.2"/>
          <circle cx="165" cy="55" r="5" fill="#4ADE80" opacity="0.7"/><circle cx="165" cy="55" r="9" fill="#4ADE80" opacity="0.2"/>
          <circle cx="160" cy="110" r="7" fill="#4ADE80" opacity="0.5"/><circle cx="160" cy="110" r="11" fill="#4ADE80" opacity="0.15"/>
        </svg>
      );
    }
    if (category === 'Innovation') {
      return (
        <svg width="100%" height="100%" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="innovGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0A0A0D"/><stop offset="100%" stopColor="#1A0F0A"/></linearGradient></defs>
          <rect width="200" height="140" fill="url(#innovGrad)"/>
          <line x1="100" y1="70" x2="45" y2="35" stroke="#F08367" strokeWidth="1.5" opacity="0.4"/>
          <line x1="100" y1="70" x2="155" y2="40" stroke="#F08367" strokeWidth="1.5" opacity="0.4"/>
          <line x1="100" y1="70" x2="40" y2="105" stroke="#E85D4A" strokeWidth="1.5" opacity="0.4"/>
          <line x1="100" y1="70" x2="160" y2="110" stroke="#E85D4A" strokeWidth="1.5" opacity="0.4"/>
          <circle cx="100" cy="70" r="20" fill="#F08367" opacity="0.15"/><circle cx="100" cy="70" r="12" fill="#F08367" opacity="0.3"/><circle cx="100" cy="70" r="6" fill="#F08367" opacity="0.9"/>
          <circle cx="45" cy="35" r="10" fill="#E85D4A" opacity="0.2"/><circle cx="45" cy="35" r="5" fill="#E85D4A" opacity="0.8"/>
          <circle cx="155" cy="40" r="12" fill="#F08367" opacity="0.2"/><circle cx="155" cy="40" r="6" fill="#F08367" opacity="0.8"/>
          <circle cx="40" cy="105" r="9" fill="#F08367" opacity="0.2"/><circle cx="40" cy="105" r="4" fill="#F08367" opacity="0.8"/>
          <circle cx="160" cy="110" r="11" fill="#E85D4A" opacity="0.2"/><circle cx="160" cy="110" r="5" fill="#E85D4A" opacity="0.8"/>
          <circle cx="75" cy="45" r="3" fill="#FBBF24" opacity="0.6"/><circle cx="130" cy="50" r="2.5" fill="#FBBF24" opacity="0.5"/>
        </svg>
      );
    }
    return <svg width="100%" height="100%" viewBox="0 0 200 140"><rect width="200" height="140" fill="#0E0E12"/><circle cx="100" cy="70" r="30" fill="#F08367" opacity="0.2"/></svg>;
  };

  // ============================================
  // GLOBE ANIMATION
  // ============================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let rotation = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const getSize = () => {
      const rect = canvas.getBoundingClientRect();
      return { width: rect.width, height: rect.height, centerX: rect.width / 2, centerY: rect.height / 2, radius: Math.min(rect.width, rect.height) * 0.32 };
    };

    const continentPoints = [
      { lng: -100, lat: 45, size: 22 }, { lng: -95, lat: 38, size: 18 }, { lng: -85, lat: 32, size: 16 },
      { lng: -60, lat: -12, size: 18 }, { lng: -55, lat: -22, size: 16 },
      { lng: 10, lat: 52, size: 14 }, { lng: 2, lat: 48, size: 12 }, { lng: 20, lat: 45, size: 11 },
      { lng: 20, lat: 8, size: 20 }, { lng: 15, lat: -5, size: 18 }, { lng: 28, lat: -18, size: 16 },
      { lng: 78, lat: 28, size: 22 }, { lng: 100, lat: 35, size: 20 }, { lng: 118, lat: 32, size: 18 },
      { lng: 135, lat: -25, size: 16 }, { lng: 145, lat: -32, size: 14 },
    ];

    const particles = Array.from({ length: 40 }, () => ({
      angle: Math.random() * Math.PI * 2, speed: 0.003 + Math.random() * 0.004,
      orbitRadius: 1.15 + Math.random() * 0.5, tilt: (Math.random() - 0.5) * 0.7,
      size: 1.5 + Math.random() * 2, color: Math.random() > 0.5 ? '#F08367' : '#4ECDC4'
    }));

    const binaryStreams = Array.from({ length: 12 }, () => ({
      x: Math.random(), y: Math.random(), speed: 0.003 + Math.random() * 0.005,
      chars: Array(6).fill(0).map(() => Math.random() > 0.5 ? '1' : '0'), opacity: 0.08 + Math.random() * 0.1
    }));

    const projectPoint = (lng, lat, rot, size) => {
      const { centerX, centerY, radius } = size;
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + rot) * (Math.PI / 180);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      if (z < -radius * 0.1) return null;
      return { x: centerX + x, y: centerY - y, z, scale: (z + radius) / (2 * radius) };
    };

    const animate = () => {
      if (!isGlobeVisible) { animationId = requestAnimationFrame(animate); return; }
      const size = getSize();
      const { width, height, centerX, centerY, radius } = size;
      ctx.clearRect(0, 0, width, height);

      ctx.font = '10px monospace';
      binaryStreams.forEach(stream => {
        ctx.fillStyle = `rgba(240, 131, 103, ${stream.opacity})`;
        stream.chars.forEach((char, i) => ctx.fillText(char, stream.x * width, (stream.y * height) + i * 14));
        stream.y += stream.speed;
        if (stream.y > 1.2) { stream.y = -0.2; stream.x = Math.random(); }
      });

      const outerGlow = ctx.createRadialGradient(centerX, centerY, radius * 0.5, centerX, centerY, radius * 1.6);
      outerGlow.addColorStop(0, 'rgba(78, 205, 196, 0.08)');
      outerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(78, 205, 196, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.strokeStyle = 'rgba(78, 205, 196, 0.12)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        let started = false;
        for (let lng = -180; lng <= 180; lng += 6) {
          const point = projectPoint(lng, lat, rotation, size);
          if (point && point.scale > 0.3) {
            if (!started) { ctx.moveTo(point.x, point.y); started = true; }
            else ctx.lineTo(point.x, point.y);
          } else started = false;
        }
        ctx.stroke();
      }

      continentPoints.forEach(continent => {
        const point = projectPoint(continent.lng, continent.lat, rotation, size);
        if (point && point.scale > 0.2) {
          const glowSize = continent.size * point.scale * 0.35;
          const dotGlow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, glowSize * 2.5);
          dotGlow.addColorStop(0, `rgba(78, 205, 196, ${0.7 * point.scale})`);
          dotGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = dotGlow;
          ctx.beginPath();
          ctx.arc(point.x, point.y, glowSize * 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = `rgba(78, 205, 196, ${0.9 * point.scale})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, glowSize * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      [{ tilt: 15, mult: 1.2, color: 'rgba(240, 131, 103, 0.25)' },
       { tilt: -30, mult: 1.35, color: 'rgba(78, 205, 196, 0.2)' },
       { tilt: 45, mult: 1.5, color: 'rgba(167, 139, 250, 0.15)' }].forEach(ring => {
        const ringRadius = radius * ring.mult;
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.04) {
          const x = centerX + ringRadius * Math.cos(a + rotation * 0.01);
          const y = centerY + ringRadius * Math.sin(a + rotation * 0.01) * Math.cos(ring.tilt * Math.PI / 180);
          a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      particles.forEach(p => {
        p.angle += p.speed;
        const x = centerX + radius * p.orbitRadius * Math.cos(p.angle);
        const y = centerY + radius * p.orbitRadius * Math.sin(p.angle) * Math.cos(p.tilt);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const pulseTime = Date.now() * 0.002;
      for (let i = 0; i < 6; i++) {
        const angle = pulseTime + (i * Math.PI * 2 / 6);
        const px = centerX + radius * Math.cos(angle);
        const py = centerY + radius * Math.sin(angle);
        const pulseGlow = ctx.createRadialGradient(px, py, 0, px, py, 6);
        pulseGlow.addColorStop(0, 'rgba(240, 131, 103, 0.9)');
        pulseGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = pulseGlow;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      rotation += 0.12;
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize); };
  }, [isLoaded, isGlobeVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsGlobeVisible(entry.isIntersecting), { threshold: 0.1 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const word = words[wordIndex];
    let charIndex = 0;
    setTypedText('');
    const typeInterval = setInterval(() => {
      if (charIndex <= word.length) { setTypedText(word.slice(0, charIndex)); charIndex++; }
      else { clearInterval(typeInterval); setTimeout(() => setWordIndex((prev) => (prev + 1) % words.length), 2000); }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [wordIndex]);

  // Document title and cookie consent check
  useEffect(() => {
    document.title = "REVLAB CONSULTING | Digital Venture Builder";
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (entry.target.id) setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-animate, section[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(false);
    try {
      const response = await fetch('https://formspree.io/f/xvzkdvwv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => { setFormSubmitted(false); setShowContactModal(false); setFormData({ firstName: '', lastName: '', email: '', message: '' }); }, 3000);
      } else setFormError(true);
    } catch { setFormError(true); }
    finally { setIsSubmitting(false); }
  };

  // ============================================
  // DATA
  // ============================================
  const projects = [
    { id: 'leben', name: 'Leben', tagline: 'Reconnecting Urban Communities', color: '#4ECDC4', market: 'Southeast Asia', problem: 'Urban isolation is at an all-time high. People live in the same building for years without knowing their neighbors.', solution: 'Leben creates hyper-local digital communities that bring neighbors together through shared interests, local events, and neighborhood marketplaces.', impact: 'Building stronger neighborhoods, one connection at a time.', features: ['Geo-based Communities', 'Local Events', 'Neighborhood Marketplace', 'Interest Groups'], Logo: LebenLogo },
    { id: 'residovo', name: 'Residovo', tagline: 'Property Management, Simplified', color: '#4A90E2', market: 'Global (except Germany)', problem: 'Property managers juggle spreadsheets, emails, and paper documents. Information is scattered, communication is fragmented.', solution: 'A unified command center for property managers to oversee all buildings, tenants, documents, and communications in one powerful dashboard.', impact: 'Managing thousands of units with the ease of managing one.', features: ['Central Dashboard', 'Multi-Property Overview', 'Document Management'], Logo: ResidovoLogo },
    { id: 'hausbuddy', name: 'HausBuddy (Global)', tagline: 'Tenant Experience, Reimagined', color: '#4ECDC4', market: 'Global', problem: 'Tenants struggle with outdated communication methods — paper notices, lost emails, and frustrating phone calls to report issues.', solution: 'A mobile-first platform that gives tenants instant access to building updates, digital documents, and one-tap issue reporting.', impact: 'Making rental living seamless and stress-free.', features: ['Digital Notice Board', 'One-Tap Issue Reporting', 'Document Vault', 'Real-time Notifications'], Logo: HausBuddyLogo }
  ];

  // Full-length professional articles
  const blogPosts = [
    { id: 1, title: 'Why Your Website is Your Best Salesperson', excerpt: 'In 2026, the first interaction a potential client has with your business is rarely a handshake; it is a URL.', readTime: '5 min', category: 'Web Presence', content: `In 2026, the first interaction a potential client has with your business is rarely a handshake; it is a URL. If you do not have a website, in the eyes of the modern consumer, you simply do not exist. For decades, a physical office or a shop window was the primary signal of legitimacy. Today, 81% of consumers conduct online research before making a purchase decision.\n\nThe 24/7 Employee\n\nThink of your website not as a digital brochure, but as your hardest-working employee. It never sleeps, never takes a sick day, and can handle thousands of customer inquiries simultaneously. A well-architected website guides a visitor through a psychological journey: establishing authority, building trust, answering objections, and finally, closing the sale.\n\nOwnership vs. Renting\n\nMany business owners make the mistake of relying solely on social media platforms like Instagram or LinkedIn. While these are powerful tools for discovery, building your business entirely on them is "renting land." Algorithms change, organic reach declines, and accounts can be suspended without warning. A dedicated website gives you full sovereignty over your brand and your customer data.\n\nThe Speed of Trust\n\nIn a competitive digital market, users judge credibility in milliseconds. A slow, outdated, or non-mobile-responsive website immediately signals "risk" to a prospective client. Conversely, a sleek, fast-loading platform signals "professionalism" and "safety."\n\n---\nDISCLAIMER: This article is for informational, educational, and entertainment purposes only and represents the personal opinions of REVLAB CONSULTING. It does not constitute financial, legal, investment, or business advice. Information provided may be outdated, incomplete, or technically inaccurate. Readers are advised to conduct their own independent due diligence and consult with professional advisors. REVLAB CONSULTING - FZCO assumes no liability for any actions taken or losses incurred based on this content.` },
    { id: 2, title: 'Scaling Your Business Through Authority', excerpt: 'The old saying was "Content is King." The new reality for 2026 is "Content is Capital."', readTime: '5 min', category: 'Strategy', content: `The old saying was "Content is King." The new reality for 2026 is "Content is Capital." In the modern economy, your ability to articulate your value through articles, videos, and insights is directly tied to your revenue. We often see businesses with exceptional products fail to scale simply because they remain the "best-kept secret" in their industry.\n\nEducate to Sell\n\nThe era of the "Hard Sell" is over. Today's sophisticated B2B and B2C buyers do not want to be pitched; they want to be educated. By sharing industry trends, "how-to" guides, and strategic insights, you position your brand as a trusted authority rather than just a vendor.\n\nThe Compound Effect of Media\n\nPaid advertising (PPC) is like a faucet: the moment you stop paying, the leads stop flowing. Digital content, however, is an asset. An insightful article or whitepaper you write today can continue to drive organic traffic and generate leads for years to come.\n\nFrom Noise to Signal\n\nThe goal is not to create more noise, but to create a clear signal. In a world of AI-generated generic text, authentic, experience-based content stands out. It humanizes your brand and creates an emotional connection that pricing strategies alone cannot compete with.\n\n---\nDISCLAIMER: This article is for informational, educational, and entertainment purposes only and represents the personal opinions of REVLAB CONSULTING. It does not constitute financial, legal, investment, or business advice. Information provided may be outdated, incomplete, or technically inaccurate. Readers are advised to conduct their own independent due diligence and consult with professional advisors. REVLAB CONSULTING - FZCO assumes no liability for any actions taken or losses incurred based on this content.` },
    { id: 3, title: 'Why Mobile Apps Build Loyalty', excerpt: 'Your customers are living on their phones. A dedicated Mobile App is the ultimate tool for retention.', readTime: '5 min', category: 'Mobile Apps', content: `Global smartphone penetration has exceeded 80%. Your customers are living on their phones. While a mobile-friendly website is essential for acquisition (getting new customers), a dedicated Mobile App is the ultimate tool for retention (keeping them).\n\nReal Estate on the Home Screen\n\nThere is immense psychological value in occupying a permanent spot on your customer's device. A dedicated app icon keeps your brand "top of mind" every time they unlock their phone. Unlike a website, which requires a search or a typed URL, an app is just one tap away.\n\nPush vs. Pull Communication\n\nThe superpower of a mobile app is the Push Notification. Email open rates struggle to hit 20% in many industries, whereas personalized push notifications can see open rates exceeding 90%. An app gives you a direct, unfiltered line of communication to your most loyal customers.\n\nStreamlining Operations\n\nBeyond marketing, apps can revolutionize operations. Whether it's a tenant portal for reporting maintenance issues (like our HausBuddy venture) or a client dashboard for tracking project status, apps can automate low-value administrative tasks.\n\n---\nDISCLAIMER: This article is for informational, educational, and entertainment purposes only and represents the personal opinions of REVLAB CONSULTING. It does not constitute financial, legal, investment, or business advice. Information provided may be outdated, incomplete, or technically inaccurate. Readers are advised to conduct their own independent due diligence and consult with professional advisors. REVLAB CONSULTING - FZCO assumes no liability for any actions taken or losses incurred based on this content.` },
    { id: 4, title: 'The Power of Community-Led Growth', excerpt: 'The only truly defensible "moat" around your business is a loyal Community.', readTime: '5 min', category: 'Innovation', content: `In a saturated digital market, products can be copied, and prices can be undercut. The only truly defensible "moat" around your business is a loyal Community. At REVLAB CONSULTING, we believe the next generation of successful companies will not just sell to customers; they will connect customers to one another.\n\nNetwork Effects\n\nThis is the core philosophy behind our ventures like Leben. When you build a platform that facilitates connection—whether it's neighbors helping neighbors or professionals sharing advice—the value of your product increases with every new user. This "Network Effect" creates organic growth that advertising simply cannot buy.\n\nListening at Scale\n\nA community-first approach changes product development. Instead of guessing what features your market wants, you have a direct feedback loop. Your most engaged users become your product managers, telling you exactly how to improve your service.\n\nLoyalty Beyond Reason\n\nPeople leave products; they rarely leave communities where they feel they belong. By fostering a sense of belonging around your brand, you dramatically reduce churn and increase Customer Lifetime Value (LTV).\n\n---\nDISCLAIMER: This article is for informational, educational, and entertainment purposes only and represents the personal opinions of REVLAB CONSULTING. It does not constitute financial, legal, investment, or business advice. Information provided may be outdated, incomplete, or technically inaccurate. Readers are advised to conduct their own independent due diligence and consult with professional advisors. REVLAB CONSULTING - FZCO assumes no liability for any actions taken or losses incurred based on this content.` }
  ];

  const services = [
    { title: 'Analysis & Research', desc: 'Deep-dive market analysis and digital needs assessment.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { title: 'Project Development', desc: 'End-to-end development of websites and applications.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { title: 'Maintenance & Support', desc: 'Continuous monitoring and technical support.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { title: 'Digital Marketing', desc: 'Data-driven campaigns that maximize engagement.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { title: 'Venture Building', desc: 'Incubating and launching our own proprietary digital startups.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'Strategic Partnerships', desc: 'Technical execution and innovation strategy for enterprise clients.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
  ];

  const tickerItems = [
    "THE WORLD IS DIGITAL. BE PART OF IT.",
    "CONNECTING GLOBAL MARKETS",
    "VENTURE BUILDING & STRATEGY",
    "TAKE YOUR BUSINESS TO NEW HEIGHTS WITH DIGITAL ADVERTISING",
    "INNOVATE • TRANSFORM • SCALE",
    "WEBSITES • MOBILE APPLICATIONS • CONNECTED PLATFORMS"
  ];

  const ServiceIcon = ({ path }) => (
    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(240,131,103,0.15), rgba(240,131,103,0.05))', border: '1px solid rgba(240,131,103,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F08367" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
    </div>
  );

  return (
    <div className="revlab-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .revlab-site { background: #0A0A0D; color: #FFFFFF; font-family: 'Inter', -apple-system, sans-serif; overflow-x: hidden; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .ticker-track { display: flex; animation: ticker 40s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
        .scroll-animate { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
        .scroll-animate.animate-in { opacity: 1; transform: translateY(0); }
        .typing-cursor::after { content: '|'; animation: blink 1s infinite; color: #F08367; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        .hero-visual { position: relative; width: 100%; aspect-ratio: 1; max-width: 450px; max-height: 450px; margin: 0 auto; }
        .hero-visual canvas { position: absolute; inset: 0; width: 100% !important; height: 100% !important; }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-content { align-items: center; }
          .hero-visual { max-width: 350px; max-height: 350px; margin-top: 30px; }
          .hero-cta, .hero-stats { justify-content: center; }
          .about-grid, .ventures-grid { grid-template-columns: 1fr !important; }
          .services-grid, .insights-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 32px !important; }
          .services-grid, .insights-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-stats { flex-direction: column; gap: 12px !important; }
          .hero-cta { flex-direction: column; width: 100%; }
          .hero-cta button { width: 100%; }
        }
        .mobile-menu-btn { display: none; }
        .nav-links { display: flex; }
      `}</style>

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: scrollY > 30 ? 'rgba(10, 10, 13, 0.95)' : 'transparent', backdropFilter: scrollY > 30 ? 'blur(20px)' : 'none', borderBottom: scrollY > 30 ? '1px solid rgba(255,255,255,0.05)' : 'none', transition: 'all 0.3s ease' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => scrollToSection('home')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', background: 'none', border: 'none' }}>
            <RevLabMainLogo color="white" size={1} />
          </button>
          <div className="nav-links" style={{ alignItems: 'center', gap: '32px' }}>
            {['Home', 'About', 'Services', 'Ventures', 'Insights'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item === 'Ventures' ? 'projects' : item === 'Insights' ? 'blog' : item.toLowerCase())} style={{ background: 'none', border: 'none', color: '#909099', fontSize: '13px', fontWeight: 500, cursor: 'pointer', padding: '8px 0' }}>{item}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button onClick={() => setShowContactModal(true)} style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #F08367, #E85D4A)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Let's Talk</button>
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', flexDirection: 'column', gap: '4px' }}>
              <span style={{ width: '18px', height: '2px', background: '#FFF', display: 'block', transform: isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none', transition: 'all 0.3s' }} />
              <span style={{ width: '18px', height: '2px', background: '#FFF', display: 'block', opacity: isMenuOpen ? 0 : 1, transition: 'all 0.3s' }} />
              <span style={{ width: '18px', height: '2px', background: '#FFF', display: 'block', transform: isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none', transition: 'all 0.3s' }} />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(10,10,13,0.98)' }}>
            {['Home', 'About', 'Services', 'Ventures', 'Insights'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item === 'Ventures' ? 'projects' : item === 'Insights' ? 'blog' : item.toLowerCase())} style={{ display: 'block', width: '100%', padding: '12px 0', background: 'none', border: 'none', color: '#909099', fontSize: '14px', textAlign: 'left', cursor: 'pointer' }}>{item}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" ref={heroRef} style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="hero-grid">
            <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', animation: isLoaded ? 'fadeInUp 0.6s ease forwards' : 'none' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(240,131,103,0.1)', border: '1px solid rgba(240,131,103,0.2)', borderRadius: '50px', marginBottom: '20px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }} />
                <span style={{ fontSize: '12px', color: '#B0B0B8' }}>Digital Transformation & Venture Builder</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: '48px', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
                We Build Digital<br />Products That<br />
                <span style={{ color: '#F08367' }} className="typing-cursor">{typedText}</span>
              </h1>
              <p style={{ fontSize: '16px', color: '#909099', marginBottom: '28px', maxWidth: '440px', lineHeight: 1.7 }}>From strategic consulting to full product development — we don't just advise, we create, launch, and scale digital ventures.</p>
              <div className="hero-cta" style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
                <button onClick={() => setShowContactModal(true)} style={{ padding: '14px 28px', background: 'linear-gradient(135deg, #F08367, #E85D4A)', border: 'none', borderRadius: '10px', color: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Start Your Project</button>
                <button onClick={() => scrollToSection('projects')} style={{ padding: '14px 28px', background: 'transparent', border: '1px solid #2A2A35', borderRadius: '10px', color: '#FFF', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>View Ventures</button>
              </div>
              <div className="hero-stats" style={{ display: 'flex', gap: '32px' }}>
                {[{ value: 'Global', label: 'Market Reach' }, { value: 'Full-Stack', label: 'Solutions' }, { value: 'Est. 2024', label: 'Innovation-First' }].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: '16px', fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ fontSize: '11px', color: '#606070' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual"><canvas ref={canvasRef} /></div>
          </div>
        </div>
      </section>

      {/* Digital Pulse Ticker */}
      <section style={{ padding: '20px 0', background: '#0E0E12', borderTop: '1px solid #1A1A1F', borderBottom: '1px solid #1A1A1F', overflow: 'hidden' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, #0E0E12, transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, #0E0E12, transparent)', zIndex: 2 }} />
          <div className="ticker-track" style={{ whiteSpace: 'nowrap' }}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', padding: '0 30px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#909099', textTransform: 'uppercase' }}>{item}</span>
                <span style={{ margin: '0 30px', color: '#F08367', fontSize: '8px' }}>●</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '80px 0', background: '#0A0A0D' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="scroll-animate" style={{ color: '#F08367', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Story</span>
              <h2 className="scroll-animate section-title" style={{ fontSize: '34px', fontWeight: 700, marginTop: '8px', marginBottom: '20px' }}>Born from the Digital Revolution</h2>
              <div className="scroll-animate" style={{ color: '#909099', fontSize: '15px', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '14px' }}>The idea for RevLab Consulting took shape during 2020, when the world recognized how essential digital infrastructure is for commerce, communication, and connection.</p>
                <p style={{ marginBottom: '14px' }}>In 2024, we officially launched with two core pillars: <span style={{ color: '#FFF', fontWeight: 600 }}>Strategic Consulting</span> and <span style={{ color: '#FFF', fontWeight: 600 }}>Venture Building</span>.</p>
                <p style={{ color: '#FFF', fontWeight: 600, fontSize: '17px' }}>We don't just advise. We build alongside you.</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="scroll-animate" style={{ background: 'linear-gradient(135deg, rgba(240,131,103,0.08), rgba(240,131,103,0.02))', border: '1px solid rgba(240,131,103,0.15)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #F08367, #E85D4A)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Mission</h3>
                <p style={{ fontSize: '13px', color: '#909099', lineHeight: 1.6 }}>Empowering businesses through innovative digital solutions.</p>
              </div>
              <div className="scroll-animate" style={{ background: 'linear-gradient(135deg, rgba(78,205,196,0.08), rgba(78,205,196,0.02))', border: '1px solid rgba(78,205,196,0.15)', borderRadius: '16px', padding: '24px', marginTop: '24px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #4ECDC4, #2AB7B0)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Vision</h3>
                <p style={{ fontSize: '13px', color: '#909099', lineHeight: 1.6 }}>Leading catalyst for digital transformation globally.</p>
              </div>
              <div className="scroll-animate" style={{ gridColumn: '1 / -1', background: 'linear-gradient(135deg, rgba(167,139,250,0.08), rgba(167,139,250,0.02))', border: '1px solid rgba(167,139,250,0.15)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700 }}>Dual Excellence</h3>
                    <p style={{ fontSize: '11px', color: '#606070' }}>Consulting × Venture Building</p>
                  </div>
                </div>
                <p style={{ fontSize: '13px', color: '#909099', lineHeight: 1.6 }}>From research to launch — end-to-end solutions with skin in the game.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '80px 0', background: '#0E0E12' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="scroll-animate" style={{ color: '#F08367', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Capabilities</span>
            <h2 className="scroll-animate section-title" style={{ fontSize: '34px', fontWeight: 700, marginTop: '8px' }}>What We Deliver</h2>
          </div>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {services.map((service) => (
              <div key={service.title} className="scroll-animate" style={{ background: '#161619', border: '1px solid #222228', borderRadius: '16px', padding: '28px', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(240,131,103,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222228'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <ServiceIcon path={service.icon} />
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>{service.title}</h3>
                <p style={{ fontSize: '14px', color: '#909099', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="projects" style={{ padding: '80px 0', background: '#0A0A0D' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="scroll-animate" style={{ color: '#F08367', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Ventures</span>
            <h2 className="scroll-animate section-title" style={{ fontSize: '34px', fontWeight: 700, marginTop: '8px', marginBottom: '12px' }}>Products We're Building</h2>
            <p className="scroll-animate" style={{ color: '#909099', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>Real products solving real problems. We invest our own capital and expertise.</p>
          </div>
          <div className="ventures-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {projects.map((project) => (
              <article key={project.id} onClick={() => setShowProjectModal(project)} className="scroll-animate" style={{ background: '#161619', border: '1px solid #222228', borderRadius: '18px', padding: '28px', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.color + '50'; e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222228'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#0A0A0D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <project.Logo size={48} />
                  </div>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>{project.name}</h3>
                <p style={{ fontSize: '14px', color: '#F08367', marginBottom: '10px', fontWeight: 500 }}>{project.tagline}</p>
                <p style={{ fontSize: '13px', color: '#909099', lineHeight: 1.6, marginBottom: '14px' }}>{project.problem}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#606070' }}>{project.market}</span>
                  <span style={{ fontSize: '12px', color: '#F08367', fontWeight: 500 }}>Learn more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="blog" style={{ padding: '80px 0', background: '#0E0E12' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="scroll-animate" style={{ color: '#F08367', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Insights</span>
            <h2 className="scroll-animate section-title" style={{ fontSize: '34px', fontWeight: 700, marginTop: '8px' }}>Latest Thinking</h2>
          </div>
          <div className="insights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {blogPosts.map((post) => (
              <article key={post.id} onClick={() => setShowBlogModal(post)} className="scroll-animate" style={{ background: '#161619', border: '1px solid #222228', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(240,131,103,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222228'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }}>
                  <ArticlePattern category={post.category} />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 12px', borderRadius: '6px', background: 'rgba(0,0,0,0.6)', fontSize: '10px', color: 'white', fontWeight: 500 }}>{post.category}</span>
                </div>
                <div style={{ padding: '18px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ fontSize: '12px', color: '#909099', marginBottom: '10px', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
                  <span style={{ fontSize: '11px', color: '#606070' }}>{post.readTime} read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: '#0A0A0D', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '250px', background: 'radial-gradient(ellipse, rgba(240,131,103,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '650px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <h2 className="scroll-animate section-title" style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>Ready to Build<br /><span style={{ color: '#F08367' }}>Something Great?</span></h2>
          <p className="scroll-animate" style={{ fontSize: '16px', color: '#909099', marginBottom: '28px' }}>Whether you need strategic guidance or full product development — let's make it happen.</p>
          <button onClick={() => setShowContactModal(true)} className="scroll-animate" style={{ padding: '16px 40px', background: 'linear-gradient(135deg, #F08367, #E85D4A)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '16px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 8px 30px rgba(240,131,103,0.3)' }}>Let's Talk</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '56px 0 28px', background: '#0E0E12', borderTop: '1px solid #1A1A1F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '40px' }}>
            <div>
              <div style={{ marginBottom: '16px' }}>
                <RevLabMainLogo color="white" size={1} />
              </div>
              <p style={{ fontSize: '14px', color: '#909099', marginBottom: '16px', maxWidth: '300px', lineHeight: 1.6 }}>We don't just advise — we build, launch, and scale digital products alongside our partners.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '16px', fontSize: '14px' }}>Navigate</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Home', 'About', 'Services', 'Ventures', 'Insights'].map((link) => (
                  <button key={link} onClick={() => scrollToSection(link === 'Ventures' ? 'projects' : link === 'Insights' ? 'blog' : link.toLowerCase())} style={{ background: 'none', border: 'none', color: '#909099', fontSize: '14px', cursor: 'pointer', textAlign: 'left', padding: 0 }}>{link}</button>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '16px', fontSize: '14px' }}>Legal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button onClick={() => setShowPrivacyModal(true)} style={{ background: 'none', border: 'none', color: '#909099', fontSize: '14px', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Privacy Policy</button>
                <button onClick={() => setShowTermsModal(true)} style={{ background: 'none', border: 'none', color: '#909099', fontSize: '14px', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Terms of Service</button>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '16px', fontSize: '14px' }}>Contact</h4>
              <p style={{ fontSize: '13px', color: '#909099', lineHeight: 1.6, marginBottom: '12px' }}>REVLAB CONSULTING - FZCO<br />IFZA Business Park<br />Dubai Silicon Oasis, Dubai, UAE</p>
              <a href="mailto:info@revlabconsulting.com" style={{ fontSize: '13px', color: '#F08367', textDecoration: 'none' }}>info@revlabconsulting.com</a>
            </div>
          </div>
          <div style={{ paddingTop: '24px', borderTop: '1px solid #1A1A1F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ fontSize: '12px', color: '#606070' }}>© 2026 REVLAB CONSULTING - FZCO | Trade License No. 53983 | All rights reserved.</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" aria-label="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#222228', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#F08367'} onMouseLeave={(e) => e.currentTarget.style.background = '#222228'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#222228', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#F08367'} onMouseLeave={(e) => e.currentTarget.style.background = '#222228'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', zIndex: 50 }}>
          <div style={{ maxWidth: '560px', margin: '0 auto', background: '#161619', border: '1px solid #222228', borderRadius: '16px', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '20px' }}>🍪</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '13px', marginBottom: '2px' }}>Privacy First</p>
                <p style={{ fontSize: '12px', color: '#909099' }}>We use cookies to enhance your experience.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => { localStorage.setItem('cookieConsent', 'false'); setShowCookieBanner(false); }} style={{ padding: '10px 16px', background: 'transparent', border: '1px solid #222228', borderRadius: '8px', color: '#909099', fontSize: '12px', cursor: 'pointer' }}>Decline</button>
              <button onClick={() => { localStorage.setItem('cookieConsent', 'true'); setShowCookieBanner(false); }} style={{ padding: '10px 16px', background: 'linear-gradient(135deg, #F08367, #E85D4A)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Accept</button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(0,0,0,0.85)' }}>
          <div style={{ background: '#161619', border: '1px solid #222228', borderRadius: '20px', padding: '32px', maxWidth: '440px', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Get in Touch</h3>
              <button onClick={() => { setShowContactModal(false); setFormError(false); }} style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#222228', border: 'none', color: '#909099', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            </div>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(74,222,128,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>Thank You!</h4>
                <p style={{ color: '#909099', fontSize: '14px' }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {formError && <div style={{ padding: '12px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px' }}><p style={{ color: '#EF4444', fontSize: '13px' }}>Something went wrong. Please try again.</p></div>}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#909099', marginBottom: '6px' }}>First Name</label>
                    <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: '#0A0A0D', border: '1px solid #222228', color: '#FFF', fontSize: '14px', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#909099', marginBottom: '6px' }}>Last Name</label>
                    <input type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: '#0A0A0D', border: '1px solid #222228', color: '#FFF', fontSize: '14px', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#909099', marginBottom: '6px' }}>Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: '#0A0A0D', border: '1px solid #222228', color: '#FFF', fontSize: '14px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#909099', marginBottom: '6px' }}>Message</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: '#0A0A0D', border: '1px solid #222228', color: '#FFF', fontSize: '14px', outline: 'none', resize: 'none' }} />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ padding: '14px', background: isSubmitting ? '#666' : 'linear-gradient(135deg, #F08367, #E85D4A)', border: 'none', borderRadius: '10px', color: 'white', fontSize: '14px', fontWeight: 600, cursor: isSubmitting ? 'not-allowed' : 'pointer', marginTop: '6px' }}>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Project Modal */}
      {showProjectModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(0,0,0,0.85)' }}>
          <div style={{ background: '#161619', border: '1px solid #222228', borderRadius: '20px', padding: '32px', maxWidth: '520px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: '#0A0A0D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <showProjectModal.Logo size={52} />
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700 }}>{showProjectModal.name}</h3>
                  <p style={{ color: '#F08367', fontSize: '13px', fontWeight: 500 }}>{showProjectModal.tagline}</p>
                </div>
              </div>
              <button onClick={() => setShowProjectModal(null)} style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#222228', border: 'none', color: '#909099', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ padding: '14px', background: '#0A0A0D', borderRadius: '12px', display: 'inline-block' }}>
                <p style={{ fontSize: '11px', color: '#606070', marginBottom: '3px' }}>Market</p>
                <p style={{ fontSize: '13px', fontWeight: 600 }}>{showProjectModal.market}</p>
              </div>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: '#F08367' }}>The Problem</h4>
              <p style={{ fontSize: '13px', color: '#909099', lineHeight: 1.7 }}>{showProjectModal.problem}</p>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: '#4ADE80' }}>Our Solution</h4>
              <p style={{ fontSize: '13px', color: '#909099', lineHeight: 1.7 }}>{showProjectModal.solution}</p>
            </div>
            <div style={{ marginBottom: '18px', padding: '14px', background: 'rgba(240,131,103,0.08)', borderRadius: '12px', borderLeft: '3px solid #F08367' }}>
              <p style={{ fontSize: '13px', color: '#FFF', fontStyle: 'italic' }}>{showProjectModal.impact}</p>
            </div>
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px' }}>Key Features</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {showProjectModal.features.map((f) => <span key={f} style={{ padding: '6px 12px', background: '#0A0A0D', borderRadius: '8px', fontSize: '11px', color: '#909099' }}>{f}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Modal */}
      {showBlogModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(0,0,0,0.85)' }}>
          <div style={{ background: '#161619', border: '1px solid #222228', borderRadius: '20px', padding: '0', maxWidth: '640px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ height: '180px', position: 'relative', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
              <ArticlePattern category={showBlogModal.category} />
              <button onClick={() => setShowBlogModal(null)} style={{ position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,0,0,0.6)', border: 'none', color: '#FFF', cursor: 'pointer', fontSize: '16px' }}>✕</button>
              <span style={{ position: 'absolute', bottom: '16px', left: '16px', padding: '6px 14px', background: 'rgba(0,0,0,0.6)', borderRadius: '8px', fontSize: '11px', color: 'white', fontWeight: 500 }}>{showBlogModal.category}</span>
            </div>
            <div style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>{showBlogModal.title}</h3>
              <p style={{ fontSize: '12px', color: '#606070', marginBottom: '24px' }}>{showBlogModal.readTime} read</p>
              <div style={{ fontSize: '14px', color: '#B0B0B8', lineHeight: 1.9 }}>
                {showBlogModal.content.split('\n\n').map((para, i) => {
                  const isHeading = para.startsWith('The ') || para.startsWith('Ownership') || para.startsWith('Educate') || para.startsWith('From ') || para.startsWith('Real ') || para.startsWith('Push ') || para.startsWith('Streamlining') || para.startsWith('Network') || para.startsWith('Listening') || para.startsWith('Loyalty');
                  const isDisclaimer = para.startsWith('---') || para.startsWith('Disclaimer');
                  if (isDisclaimer) return <p key={i} style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #222228', fontSize: '11px', color: '#606070', lineHeight: 1.7 }}>{para.replace('---', '').trim()}</p>;
                  return <p key={i} style={{ marginBottom: '16px', color: isHeading ? '#FFFFFF' : '#B0B0B8', fontWeight: isHeading ? 600 : 400, fontSize: isHeading ? '16px' : '14px' }}>{para}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal - UAE PDPL & GDPR Compliant */}
      {showPrivacyModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(0,0,0,0.85)' }}>
          <div style={{ background: '#161619', border: '1px solid #222228', borderRadius: '20px', padding: '32px', maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Privacy Policy</h3>
              <button onClick={() => setShowPrivacyModal(false)} style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#222228', border: 'none', color: '#909099', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            </div>
            <div style={{ fontSize: '13px', color: '#909099', lineHeight: 1.8 }}>
              <p style={{ color: '#606070', marginBottom: '14px' }}>Effective Date: 4 February 2025 | Last Updated: 30 March 2026</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>1. Introduction & Data Controller</h4>
              <p>REVLAB CONSULTING - FZCO ("Company", "we", "us", "Data Controller"), a company registered in the IFZA Free Zone, Dubai, UAE (Trade License No. 53983), is committed to protecting your personal data. This policy explains how we collect, process, store, and protect your data in full compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (UAE PDPL) and the EU General Data Protection Regulation (GDPR) where applicable.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>2. Lawful Basis for Processing</h4>
              <p>We process personal data only when we have a lawful basis to do so, including: (a) Your explicit consent; (b) Performance of a contract with you; (c) Compliance with legal obligations under UAE law; (d) Legitimate business interests that do not override your fundamental rights. You may withdraw consent at any time by contacting us.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>3. Information We Collect</h4>
              <p><strong style={{ color: '#CCC' }}>Directly Provided:</strong> Name, email address, and message content submitted via our contact forms. <strong style={{ color: '#CCC' }}>Automatically Collected:</strong> IP address, browser type and version, device information, operating system, referring URLs, pages visited, time and date of access, and cookies (with your consent). We do not collect sensitive personal data (e.g., health, biometric, religious, or political data) unless explicitly required and consented to.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>4. Purpose of Data Processing</h4>
              <p>Your data is processed solely for: Responding to inquiries and providing requested services; Improving our website, services, and user experience; Sending relevant communications (only with opt-in consent); Analyzing website performance and security monitoring; Complying with UAE legal and regulatory obligations.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>5. Cookies & Tracking Technologies</h4>
              <p>We use cookies and similar technologies to enhance functionality and analyze usage. By accepting cookies via our banner, you consent to their use. You may manage or withdraw cookie consent at any time through your browser settings. Essential cookies required for website operation do not require consent.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>6. Data Sharing & Third Parties</h4>
              <p>We do not sell, rent, or trade your personal data. We may share data with: Trusted service providers (hosting, email delivery, analytics) bound by data processing agreements; Legal authorities when required by UAE law or court order; Professional advisors under confidentiality obligations. All third parties are contractually required to protect your data to standards equivalent to this policy.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>7. International Data Transfers</h4>
              <p>As a global business, your data may be transferred to and processed in countries outside the UAE. Such transfers are conducted only where: The destination country provides adequate data protection; We have implemented appropriate safeguards (e.g., Standard Contractual Clauses); Or you have provided explicit consent after being informed of potential risks. We ensure all transfers comply with UAE PDPL Article 22 requirements.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>8. Data Retention</h4>
              <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact form data is retained for up to 3 years unless you request earlier deletion. Analytics data is anonymized or deleted after 26 months. When data is no longer needed, it is securely deleted or anonymized.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>9. Data Security</h4>
              <p>We implement appropriate technical and organizational measures to protect your data, including: Encryption of data in transit (SSL/TLS); Secure access controls and authentication; Regular security assessments. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>10. Your Data Subject Rights (UAE PDPL & GDPR)</h4>
              <p>Under UAE PDPL and GDPR, you have the following rights:</p>
              <p style={{ marginLeft: '12px' }}>• <strong style={{ color: '#CCC' }}>Right to Access (Art. 13 PDPL):</strong> Request confirmation of processing and obtain a copy of your data.<br/>
              • <strong style={{ color: '#CCC' }}>Right to Rectification (Art. 15 PDPL):</strong> Request correction of inaccurate or incomplete data.<br/>
              • <strong style={{ color: '#CCC' }}>Right to Erasure (Art. 15 PDPL):</strong> Request deletion of your data ("Right to be Forgotten").<br/>
              • <strong style={{ color: '#CCC' }}>Right to Data Portability (Art. 14 PDPL):</strong> Receive your data in a structured, machine-readable format.<br/>
              • <strong style={{ color: '#CCC' }}>Right to Restrict Processing (Art. 16 PDPL):</strong> Request limitation of how we use your data.<br/>
              • <strong style={{ color: '#CCC' }}>Right to Object (Art. 17 PDPL):</strong> Object to processing, especially for direct marketing.<br/>
              • <strong style={{ color: '#CCC' }}>Right Against Automated Decisions (Art. 18 PDPL):</strong> Not be subject to decisions based solely on automated processing.<br/>
              • <strong style={{ color: '#CCC' }}>Right to Withdraw Consent:</strong> Withdraw consent at any time without affecting prior lawful processing.</p>
              <p>To exercise any of these rights, contact us at info@revlabconsulting.com. We will respond within 30 days.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>11. Data Breach Notification</h4>
              <p>In the event of a personal data breach that poses a risk to your rights and freedoms, we will notify the UAE Data Office and affected individuals without undue delay, in accordance with UAE PDPL requirements, providing details of the breach and remedial actions taken.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>12. Complaints</h4>
              <p>If you believe your data protection rights have been violated, you have the right to lodge a complaint with the UAE Data Office (established under Federal Decree-Law No. 44 of 2021) or, for EU residents, your local Data Protection Authority.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>13. Children's Privacy</h4>
              <p>Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal data from children. If we become aware of such collection, we will delete the data immediately.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>14. Changes to This Policy</h4>
              <p>We may update this policy periodically. Material changes will be communicated via website notice or email. Continued use of our services after changes constitutes acceptance. We encourage you to review this policy regularly.</p>
              
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #222228' }}>
                <p style={{ color: '#FFF', marginBottom: '8px' }}><strong>Data Controller:</strong> REVLAB CONSULTING - FZCO</p>
                <p style={{ color: '#909099' }}>IFZA Business Park, Dubai Silicon Oasis, Dubai, UAE<br/>Trade License No. 53983<br/>Email: info@revlabconsulting.com</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal - UAE Law Compliant */}
      {showTermsModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(0,0,0,0.85)' }}>
          <div style={{ background: '#161619', border: '1px solid #222228', borderRadius: '20px', padding: '32px', maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Terms of Service</h3>
              <button onClick={() => setShowTermsModal(false)} style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#222228', border: 'none', color: '#909099', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            </div>
            <div style={{ fontSize: '13px', color: '#909099', lineHeight: 1.8 }}>
              <p style={{ color: '#606070', marginBottom: '14px' }}>Effective Date: 4 February 2025 | Last Updated: 30 March 2026</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>1. Acceptance of Terms</h4>
              <p>By accessing or using this website (revlabconsulting.com), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations of the United Arab Emirates. If you do not agree to these terms, you must immediately discontinue use of this website.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>2. Company Information</h4>
              <p>This website is owned and operated by REVLAB CONSULTING - FZCO, a Free Zone Company registered in IFZA, Dubai, United Arab Emirates (Trade License No. 53983). Registered Address: IFZA Business Park, Dubai Silicon Oasis, Dubai, UAE. Contact: info@revlabconsulting.com.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>3. Intellectual Property Rights</h4>
              <p>All content, materials, source code, graphics, logos, trademarks, trade names (including but not limited to "REVLAB", "REVLAB CONSULTING", "LEBEN", "HAUSBUDDY", "RESIDOVO"), and proprietary information displayed on this website are the exclusive property of REVLAB CONSULTING - FZCO or its licensors, protected under UAE Federal Law No. 36 of 2021 on Trademarks, UAE Federal Law No. 38 of 2021 on Copyrights, and international intellectual property treaties. Unauthorized reproduction, distribution, modification, public display, scraping, or commercial exploitation is strictly prohibited and may result in civil and criminal penalties.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>4. Permitted Use</h4>
              <p>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use this website for personal, non-commercial informational purposes only. You may not: Use automated systems (bots, scrapers) to access the site; Attempt to gain unauthorized access to any systems or networks; Use the site for any unlawful purpose under UAE law; Interfere with the proper functioning of the website; Copy, reproduce, or distribute content without written permission.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>5. User Conduct</h4>
              <p>You agree to use this website in accordance with UAE Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes. You shall not post, transmit, or share any content that is defamatory, obscene, fraudulent, harmful, threatening, or violates any UAE law. Violations may be reported to relevant UAE authorities.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>6. Disclaimer of Warranties</h4>
              <p>This website and all content are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express, implied, or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. REVLAB CONSULTING - FZCO does not warrant that: The website will be uninterrupted, secure, or error-free; The information is accurate, complete, or current; Any defects will be corrected. Your use of this website is at your sole risk.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>7. Limitation of Liability</h4>
              <p>To the maximum extent permitted by UAE law, REVLAB CONSULTING - FZCO, its directors, officers, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising out of or related to your use or inability to use this website, even if advised of the possibility of such damages. In jurisdictions that do not allow the exclusion of certain warranties or limitation of liability, our liability shall be limited to the maximum extent permitted by law.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>8. Indemnification</h4>
              <p>You agree to defend, indemnify, and hold harmless REVLAB CONSULTING - FZCO and its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from: Your use of the website; Your violation of these Terms; Your violation of any third-party rights; Your violation of any applicable UAE law.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>9. Third-Party Links & Services</h4>
              <p>This website may contain links to third-party websites or services not owned or controlled by REVLAB CONSULTING - FZCO. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. You access third-party links at your own risk and should review their terms and policies.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>10. Modifications to Terms</h4>
              <p>We reserve the right to modify these Terms at any time at our sole discretion. Material changes will be indicated by updating the "Last Updated" date. Your continued use of the website after any modifications constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>11. Severability</h4>
              <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, or if modification is not possible, severed from these Terms. The remaining provisions shall continue in full force and effect.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>12. Entire Agreement</h4>
              <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and REVLAB CONSULTING - FZCO regarding the use of this website, superseding any prior agreements or communications.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>13. Force Majeure</h4>
              <p>REVLAB CONSULTING - FZCO shall not be liable for any failure or delay in performing obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, pandemic, government actions, or failures of third-party services.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>14. Governing Law & Dispute Resolution</h4>
              <p>These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Dubai, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms or the use of this website shall be subject to the exclusive jurisdiction of the Courts of Dubai, UAE. The parties agree to attempt good-faith negotiation before initiating formal proceedings.</p>
              
              <h4 style={{ color: '#FFF', fontWeight: 600, marginTop: '20px', marginBottom: '8px' }}>15. Contact Information</h4>
              <p>For questions or concerns regarding these Terms, please contact us at info@revlabconsulting.com.</p>
              
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #222228' }}>
                <p style={{ color: '#FFF', marginBottom: '8px' }}><strong>REVLAB CONSULTING - FZCO</strong></p>
                <p style={{ color: '#909099' }}>IFZA Business Park, Dubai Silicon Oasis, Dubai, UAE<br/>Trade License No. 53983<br/>Email: info@revlabconsulting.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevLabWebsite;
