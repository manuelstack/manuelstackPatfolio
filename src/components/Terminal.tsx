import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  type: "command" | "response" | "comment";
  text: string;
  delay?: number;
}

const terminalLines: TerminalLine[] = [
  { type: "comment", text: "// welcome to my terminal" },
  { type: "command", text: "whoami", delay: 500 },
  { type: "response", text: "fullstack developer • problem solver • builder", delay: 100 },
  { type: "command", text: "cat skills.json", delay: 800 },
  { type: "response", text: '{ "frontend": ["React", "TypeScript", "Next.js"],' },
  { type: "response", text: '  "backend": ["Node.js", "PostgreSQL", "AWS"],' },
  { type: "response", text: '  "tools": ["Docker", "Git", "Linux"] }' },
  { type: "command", text: "echo $STATUS", delay: 600 },
  { type: "response", text: "open for opportunities_", delay: 100 },
];

// Custom hook for typing sound using Web Audio API
const useTypingSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  
  const playKeySound = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Random frequency for variety (mechanical keyboard sound)
      const baseFreq = 800 + Math.random() * 400;
      oscillator.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);
      
      oscillator.type = 'square';
      
      // Quick attack, quick decay for clicky sound
      gainNode.gain.setValueAtTime(0.02, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.04);
    } catch {
      // Silently fail if audio isn't available
    }
  }, []);
  
  return playKeySound;
};

const Terminal = () => {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const playKeySound = useTypingSound();

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];
    const delay = currentLine.delay || 300;

    const startTyping = setTimeout(() => {
      setIsTyping(true);
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.text.length) {
          setCurrentText(currentLine.text.slice(0, charIndex));
          
          // Play sound for non-space characters
          if (charIndex > 0 && currentLine.text[charIndex - 1] !== ' ') {
            playKeySound();
          }
          
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setDisplayedLines(prev => [...prev, currentLine]);
          setCurrentText("");
          setCurrentLineIndex(prev => prev + 1);
        }
      }, currentLine.type === "command" ? 50 : 15);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [currentLineIndex, playKeySound]);

  const getLinePrefix = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command":
        return <span className="text-accent">❯</span>;
      case "comment":
        return <span className="text-muted-foreground">#</span>;
      default:
        return null;
    }
  };

  const getLineClass = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command":
        return "text-foreground";
      case "comment":
        return "text-muted-foreground italic";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="terminal-window w-full max-w-lg"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-xs text-muted-foreground ml-2">~/portfolio</span>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm space-y-1 min-h-[200px]">
        {displayedLines.map((line, index) => (
          <div key={index} className={`flex gap-2 ${getLineClass(line.type)}`}>
            {getLinePrefix(line.type)}
            <span>{line.text}</span>
          </div>
        ))}
        
        {/* Currently typing line */}
        {currentLineIndex < terminalLines.length && (
          <div className={`flex gap-2 ${getLineClass(terminalLines[currentLineIndex].type)}`}>
            {getLinePrefix(terminalLines[currentLineIndex].type)}
            <span>
              {currentText}
              {isTyping && <span className="animate-pulse">▊</span>}
            </span>
          </div>
        )}
        
        {/* Blinking cursor when done */}
        {currentLineIndex >= terminalLines.length && (
          <div className="flex gap-2 text-foreground">
            <span className="text-accent">❯</span>
            <span className="animate-pulse">▊</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;
