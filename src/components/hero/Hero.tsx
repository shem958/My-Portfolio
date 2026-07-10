"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, Stack, Card, CardContent, InputBase, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import TerminalIcon from "@mui/icons-material/Terminal";

// Role typing strings
const ROLES = [
  "Full-Stack Software Engineer",
  "Backend Systems Architect",
  "Financial Ledger Developer",
];

export default function Hero() {
  const theme = useTheme();
  
  // Role Typing State
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = ROLES[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
      
      const typingSpeed = isDeleting ? 30 : 60;
      timer = setTimeout(tick, typingSpeed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Terminal Console State
  const [history, setHistory] = useState<Array<{ type: "input" | "output" | "error"; text: string }>>([
    { type: "output", text: "Welcome to Shem's developer shell v1.0.0" },
    { type: "output", text: 'Type "help" or click suggestion pills below to begin.' },
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    const newHistory = [...history, { type: "input" as const, text: trimmedCmd }];

    switch (trimmedCmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands:\n  about     - Display executive biography\n  projects  - List primary engineering achievements\n  skills    - Show technical stack categories\n  neofetch  - Render system profile\n  clear     - Clear console log",
        });
        break;
      case "about":
        newHistory.push({
          type: "output",
          text: "Name: Shem Gikunda\nRole: Full-Stack Software Engineer\nLocation: Nairobi, Kenya\nFocus: Building scalable wallets, secure cycle calendars, and wholesales API.",
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text: "Projects:\n  - jamii-money: NestJS multi-currency wallet ledger\n  - cyclesync: Privacy-first Go health calendar (AES-256)\n  - magenta: ERP inventory dashboard\n(Scroll down to view details & Mermaid charts)",
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "Languages: TypeScript, Golang, JavaScript, C++\nFrontend:  React, Next.js, Tailwind, Material UI\nBackend:   NestJS, Express.js\nDatabase:  PostgreSQL, MongoDB, SQLite, Docker, Git",
        });
        break;
      case "neofetch":
        newHistory.push({
          type: "output",
          text: "   /\\_/\\      shem@dev\n  ( o.o )     --------\n   > ^ <      OS: Arch Linux x86_64\n  /     \\     Shell: zsh 5.9\n /       \\    Editor: VS Code & Neovim\n \\_|_|_|_/    Status: Active systems building",
        });
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        newHistory.push({
          type: "error",
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`,
        });
    }

    setHistory(newHistory);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        py: { xs: 8, md: 0 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Headline Column */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="body2"
                fontWeight="700"
                color="primary"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  display: "inline-block",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  background: theme.palette.mode === "dark" ? "rgba(99, 102, 241, 0.1)" : "rgba(79, 70, 229, 0.08)",
                  border: theme.palette.mode === "dark" ? "1px solid rgba(99, 102, 241, 0.2)" : "1px solid rgba(79, 70, 229, 0.15)",
                }}
              >
                Welcome to my portfolio
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", sm: "4rem", md: "4.5rem" },
                  lineHeight: 1.1,
                }}
              >
                Hi, I&apos;m <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #6366F1 0%, #10B981 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Shem Gikunda
                </span>
              </Typography>
            </motion.div>

            {/* Dynamic Typing Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ minHeight: "40px" }}
            >
              <Typography variant="h4" color="text.secondary" fontWeight="500">
                I am a{" "}
                <span style={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                  {displayedText}
                </span>
                <span
                  style={{
                    animation: "blink 1s step-end infinite",
                    borderRight: `2px solid ${theme.palette.primary.main}`,
                  }}
                />
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography variant="body1" color="text.secondary" maxWidth="520px">
                I specialize in building scalable wallets, secure cypher systems, and reliable API services using Golang, NestJS, and modern React ecosystems.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: "100%" }}>
                <Button variant="contained" color="primary" size="large" href="#projects">
                  Explore Work
                </Button>
                <Button variant="outlined" color="primary" size="large" href="#contact">
                  Let&apos;s Connect
                </Button>
              </Stack>
            </motion.div>
          </Stack>
        </Grid>

        {/* Right Terminal Column */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              className="glass-card"
              sx={{
                background: theme.palette.mode === "dark" ? "rgba(10, 15, 30, 0.75)" : "rgba(255, 255, 255, 0.75)",
                border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.08)",
                borderRadius: 4,
                boxShadow: theme.palette.mode === "dark" 
                  ? "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(99, 102, 241, 0.15)"
                  : "0 20px 40px rgba(15, 23, 42, 0.08), 0 0 20px rgba(79, 70, 229, 0.05)",
                overflow: "hidden",
              }}
            >
              {/* Terminal Title Bar */}
              <Box
                sx={{
                  background: theme.palette.mode === "dark" ? "rgba(15, 23, 42, 0.9)" : "rgba(226, 232, 240, 0.9)",
                  px: 2,
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(15, 23, 42, 0.05)",
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <TerminalIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                  <Typography variant="caption" fontFamily="var(--font-mono)" color="text.secondary" fontWeight="700">
                    shem@interactive-shell:~
                  </Typography>
                </Stack>
                {/* Simulated Windows/Mac controls */}
                <Stack direction="row" spacing={1}>
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
                </Stack>
              </Box>

              {/* Terminal Screen Body */}
              <CardContent
                sx={{
                  p: 2.5,
                  height: "280px",
                  overflowY: "auto",
                  background: theme.palette.mode === "dark" ? "rgba(7, 10, 20, 0.9)" : "rgba(248, 250, 252, 0.95)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  "& pre": { margin: 0, whiteSpace: "pre-wrap" },
                }}
              >
                <Stack spacing={1.5}>
                  {history.map((item, index) => (
                    <Box key={index}>
                      {item.type === "input" ? (
                        <Typography fontFamily="var(--font-mono)" sx={{ color: "#10B981" }}>
                          shem@dev:~$ <span style={{ color: theme.palette.text.primary }}>{item.text}</span>
                        </Typography>
                      ) : item.type === "error" ? (
                        <Typography fontFamily="var(--font-mono)" sx={{ color: "#EF4444" }}>
                          {item.text}
                        </Typography>
                      ) : (
                        <Typography component="pre" fontFamily="var(--font-mono)" sx={{ color: theme.palette.text.secondary, margin: 0, whiteSpace: "pre-wrap" }}>
                          {item.text}
                        </Typography>
                      )}
                    </Box>
                  ))}
                  <div ref={terminalEndRef} />
                </Stack>
              </CardContent>

              {/* Terminal Form Input */}
              <Box
                component="form"
                onSubmit={handleInputSubmit}
                sx={{
                  p: 1.5,
                  display: "flex",
                  alignItems: "center",
                  background: theme.palette.mode === "dark" ? "rgba(10, 15, 30, 0.6)" : "rgba(241, 245, 249, 0.6)",
                  borderTop: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(15, 23, 42, 0.05)",
                }}
              >
                <Typography fontFamily="var(--font-mono)" sx={{ mr: 1, color: "#10B981", fontSize: "0.9rem" }}>
                  shem@dev:~$
                </Typography>
                <InputBase
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type help..."
                  fullWidth
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: theme.palette.text.primary,
                  }}
                />
              </Box>

              {/* Suggestions Quick Buttons */}
              <Box sx={{ p: 2, display: "flex", flexWrap: "wrap", gap: 1, background: theme.palette.mode === "dark" ? "rgba(10, 15, 30, 0.9)" : "rgba(255, 255, 255, 0.9)" }}>
                {["help", "about", "projects", "skills", "neofetch", "clear"].map((cmd) => (
                  <Button
                    key={cmd}
                    size="small"
                    variant="outlined"
                    onClick={() => handleCommand(cmd)}
                    sx={{
                      py: 0.4,
                      px: 1.2,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      borderRadius: 10,
                      borderColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(15, 23, 42, 0.15)",
                      color: theme.palette.text.secondary,
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        background: "rgba(99, 102, 241, 0.05)",
                      },
                    }}
                  >
                    {cmd}
                  </Button>
                ))}
              </Box>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
      
      {/* Role typing blinking cursor keyframes */}
      <style jsx global>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: currentColor }
        }
      `}</style>
    </Box>
  );
}
