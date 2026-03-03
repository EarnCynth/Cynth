"use client";

import { useState, useEffect } from "react";

// SVG Logo Component - Terminal icon (>_) with green glow
const Logo = ({ size = 40, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={{ filter: "drop-shadow(0 0 10px rgba(127, 255, 0, 0.5))" }}
  >
    {/* Outer glow ring */}
    <circle cx="50" cy="50" r="46" fill="none" stroke="url(#greenGradient)" strokeWidth="3" />
    {/* Inner fill */}
    <circle cx="50" cy="50" r="43" fill="#0a0a0a" />
    {/* Terminal prompt > */}
    <path
      d="M28 35 L45 50 L28 65"
      fill="none"
      stroke="url(#greenGradient)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Underscore _ */}
    <rect x="50" y="60" width="22" height="5" rx="2" fill="url(#greenGradient)" />
    {/* Gradient definition */}
    <defs>
      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#adff2f" />
        <stop offset="50%" stopColor="#7fff00" />
        <stop offset="100%" stopColor="#32cd32" />
      </linearGradient>
    </defs>
  </svg>
);

// Large Hero Logo with particles
const HeroLogo = ({ size = 200 }: { size?: number }) => (
  <div className="relative">
    {/* Glow effect */}
    <div
      className="absolute inset-0 rounded-full animate-pulse"
      style={{
        background: "radial-gradient(circle, rgba(127,255,0,0.3) 0%, transparent 70%)",
        transform: "scale(1.5)"
      }}
    />
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="relative z-10 animate-pulse-glow-green rounded-[9999px]"
    >
      {/* Outer glow ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="url(#heroGreenGradient)" strokeWidth="2" />
      {/* Inner fill */}
      <circle cx="50" cy="50" r="43" fill="#0a0a0a" />
      {/* Terminal prompt > */}
      <path
        d="M28 35 L45 50 L28 65"
        fill="none"
        stroke="url(#heroGreenGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Underscore _ */}
      <rect x="50" y="58" width="20" height="4" rx="2" fill="url(#heroGreenGradient)" />
      {/* Gradient definition */}
      <defs>
        <linearGradient id="heroGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#adff2f" />
          <stop offset="50%" stopColor="#7fff00" />
          <stop offset="100%" stopColor="#32cd32" />
        </linearGradient>
      </defs>
    </svg>
    {/* Orbiting particles */}
    <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-green rounded-full shadow-lg shadow-neon-green/50" />
    </div>
    <div className="absolute inset-0 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
      <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 bg-neon-lime rounded-full shadow-lg shadow-neon-lime/50" />
    </div>
  </div>
);

// Typing animation hook
function useTypingEffect(text: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
}

const steps = [
  { number: "01", title: "Install", description: "npm install @exec/cli", icon: ">" },
  { number: "02", title: "Connect", description: "exec connect wallet", icon: "$" },
  { number: "03", title: "Execute", description: "exec stake --max", icon: "#" },
  { number: "04", title: "Profit", description: "exec withdraw gains", icon: "!" },
];



export default function Home() {
  const { displayedText, isComplete } = useTypingEffect("sudo exec --stake --amount=max --yolo", 80);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-xl border border-neon-green/20 rounded-full px-8 py-3 flex items-center gap-8">
        <a href="#" className="flex items-center gap-2 group">
          <Logo size={32} />
          <span className="font-mono font-bold text-neon-green">$EXEC</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-400 hover:text-neon-green transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-400 hover:text-neon-green transition-colors">How it Works</a>
          <a href="#tokenomics" className="text-sm text-gray-400 hover:text-neon-green transition-colors">Tokenomics</a>
          <a href="https://x.com/ExecTerminal" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-neon-green transition-colors flex items-center gap-1">
            <span>&#120143;</span> Twitter
          </a>
        </div>
        <a href="https://t.me/+zh86k0TOSj80ODc5" target="_blank" rel="noopener noreferrer" className="bg-neon-green text-black font-mono text-sm font-bold px-4 py-2 rounded-full hover:bg-neon-lime transition-colors">
          Launch
        </a>
      </nav>

      {/* Hero - Full Screen Centered Terminal */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(127,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(127,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-lime/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 text-center max-w-4xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <HeroLogo size={140} />
          </div>

          {/* Tagline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">Execute.</span>{" "}
            <span className="text-glow-green">Earn.</span>{" "}
            <span className="text-glow-lime">Exit.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The command-line interface for DeFi. No GUI, no limits.
          </p>

          {/* Terminal */}
          <div className="bg-black/80 border border-neon-green/30 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-2xl shadow-neon-green/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-gray-500 text-sm font-mono">exec@terminal</span>
            </div>
            <div className="font-mono text-left text-lg md:text-xl">
              <span className="text-neon-green">root@exec</span>
              <span className="text-gray-500">:</span>
              <span className="text-neon-lime">~</span>
              <span className="text-gray-500">$ </span>
              <span className="text-white">{mounted ? displayedText : ""}</span>
              <span className={`${isComplete ? "animate-blink-green" : ""} text-neon-green`}>_</span>
            </div>
            {isComplete && (
              <div className="mt-4 text-left font-mono text-neon-green/70 text-sm">
                <p>{">"} Connecting to mainnet...</p>
                <p>{">"} Wallet authenticated</p>
                <p>{">"} Staking 1,000,000 $EXEC</p>
                <p className="text-neon-lime">{">"} Success! You&apos;re gonna make it, anon.</p>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/+zh86k0TOSj80ODc5" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-neon-green to-neon-lime text-black font-mono font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-neon-green/30">
              Start Executing
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-green/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon-green rounded-full" />
          </div>
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section id="features" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-glow-green">Power</span> at your fingertips
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to dominate DeFi, right from your terminal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 bg-gradient-to-br from-neon-green/10 to-transparent border border-neon-green/20 rounded-3xl p-8 hover:border-neon-green/40 transition-all group">
              <div className="text-neon-green text-5xl font-mono mb-4">{">_"}</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-glow-green transition-all">Lightning Fast Execution</h3>
              <p className="text-gray-400">Execute trades in milliseconds. Our CLI connects directly to the blockchain, bypassing slow web interfaces. Every keystroke counts.</p>
              <div className="mt-6 font-mono text-sm text-neon-green/60">
                <code>exec trade --pair ETH/USDC --amount 10 --slippage 0.5</code>
              </div>
            </div>

            {/* Small card */}
            <div className="bg-gradient-to-br from-neon-lime/10 to-transparent border border-neon-lime/20 rounded-3xl p-8 hover:border-neon-lime/40 transition-all group">
              <div className="text-neon-lime text-4xl mb-4">&#128274;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-glow-lime transition-all">Fort Knox Security</h3>
              <p className="text-gray-400 text-sm">Zero-knowledge proofs. Local key storage. Your funds, your control.</p>
            </div>

            {/* Small card */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-500/40 transition-all group">
              <div className="text-emerald-400 text-4xl mb-4">&#9881;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-all">Auto-Pilot Agents</h3>
              <p className="text-gray-400 text-sm">Deploy bots that execute your strategies 24/7. Set it and forget it.</p>
            </div>

            {/* Medium card */}
            <div className="md:col-span-2 bg-gradient-to-br from-green-600/10 to-transparent border border-green-600/20 rounded-3xl p-8 hover:border-green-600/40 transition-all group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-green-400 text-4xl mb-4">&#128200;</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-all">Yield Optimization</h3>
                  <p className="text-gray-400">Automatically route your funds to the highest-yielding protocols. Our algorithms never sleep.</p>
                </div>
                <div className="hidden md:block font-mono text-right text-sm text-green-400/60">
                  <div>APY: 12%</div>
                  <div>TVL: $2.4M</div>
                  <div>Rewards: +$32/day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Horizontal Steps */}
      <section id="how-it-works" className="py-24 px-4 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-glow-lime">4 Commands</span> to Financial Freedom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-neon-green via-neon-lime to-green-400" />

            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-24 h-24 mx-auto mb-6 bg-black border-2 border-neon-green/50 rounded-2xl flex items-center justify-center text-4xl font-mono text-neon-green group-hover:border-neon-green group-hover:shadow-lg group-hover:shadow-neon-green/30 transition-all">
                  {step.icon}
                </div>
                <div className="text-neon-green/50 text-sm font-mono mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <code className="text-sm text-gray-500 font-mono">{step.description}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics - Split Screen */}
      <section id="tokenomics" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">$EXEC</span><br />
                <span className="text-glow-green">Powers Everything</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Governance. Staking. Gas fees. Revenue sharing. One token to rule them all.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neon-green/5 border border-neon-green/20 rounded-xl">
                  <span className="text-gray-300">Total Supply</span>
                  <span className="font-mono text-neon-green">1,000,000,000</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neon-green/5 border border-neon-green/20 rounded-xl">
                  <span className="text-gray-300">Staking APY</span>
                  <span className="font-mono text-neon-lime">Up to 12%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neon-green/5 border border-neon-green/20 rounded-xl">
                  <span className="text-gray-300">Launch Type</span>
                  <span className="font-mono text-green-400">Fair Launch</span>
                </div>
              </div>

              <a href="https://t.me/+zh86k0TOSj80ODc5" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-gradient-to-r from-neon-green to-neon-lime text-black font-mono font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all">
                Buy $EXEC
              </a>
            </div>

            {/* Right - Visual */}
            <div className="relative flex justify-center items-center py-12">
              <div className="absolute w-80 h-80 bg-neon-green/20 rounded-full blur-[100px]" />
              <HeroLogo size={280} />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-neon-green/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-glow-green">Terminal</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Connect with those who choose the command line.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a href="#" className="group p-6 bg-black border border-neon-green/20 rounded-2xl hover:border-neon-green/50 transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">&#128172;</div>
              <h3 className="font-bold mb-1 group-hover:text-neon-green transition-colors">Discord</h3>
              <p className="text-sm text-gray-500">Coming Soon</p>
            </a>
            <a href="https://t.me/+zh86k0TOSj80ODc5" target="_blank" rel="noopener noreferrer" className="group p-6 bg-black border border-neon-green/20 rounded-2xl hover:border-neon-green/50 transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">&#9992;</div>
              <h3 className="font-bold mb-1 group-hover:text-neon-green transition-colors">Telegram</h3>
              <p className="text-sm text-gray-500">Join the Chat</p>
            </a>
            <a href="https://x.com/ExecTerminal" target="_blank" rel="noopener noreferrer" className="group p-6 bg-black border border-neon-green/20 rounded-2xl hover:border-neon-green/50 transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">&#120143;</div>
              <h3 className="font-bold mb-1 group-hover:text-neon-green transition-colors">Twitter/X</h3>
              <p className="text-sm text-gray-500">@ExecTerminal</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-neon-green/20 to-neon-lime/20 border border-neon-green/30 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(127,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(127,255,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Execute?</h2>
              <p className="text-gray-400 mb-8">The terminal awaits. No more excuses.</p>
              <div className="font-mono bg-black/50 border border-neon-green/30 rounded-xl p-4 inline-block mb-6">
                <span className="text-gray-500">$ </span>
                <span className="text-neon-green">npm install -g @exec/cli</span>
              </div>
              <div>
                <a href="https://t.me/+zh86k0TOSj80ODc5" target="_blank" rel="noopener noreferrer" className="bg-neon-green text-black font-mono font-bold px-8 py-4 rounded-xl text-lg hover:bg-neon-lime transition-all inline-block">
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-neon-green/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <span className="font-mono font-bold text-neon-green">$EXEC</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2026 $EXEC. WAGMI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
