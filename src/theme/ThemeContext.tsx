"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { getAppTheme } from "./theme";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleThemeMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return context;
};

export const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("dark"); // Default to dark mode
  const [mounted, setMounted] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    // Check localStorage or system preferences on mount
    const savedMode = localStorage.getItem("portfolio-theme-mode") as ThemeMode;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPreference = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      setMode(systemPreference);
    }
    setMounted(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const toggleThemeMode = () => {
    const nextMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
    localStorage.setItem("portfolio-theme-mode", nextMode);
  };

  const theme = getAppTheme(mode);

  // Avoid hydration mismatch by waiting for client-side mounting
  if (!mounted) {
    // During SSR/initial load, render children in dark mode wrapper without actual hydrations
    return (
      <ThemeContext.Provider value={{ mode: "dark", toggleThemeMode: () => {} }}>
        <MuiThemeProvider theme={getAppTheme("dark")}>
          <CssBaseline />
          <div style={{ visibility: "hidden" }}>{children}</div>
        </MuiThemeProvider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleThemeMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={mode === "dark" ? "dark-mode-bg" : "light-mode-bg"}>
          {/* Ambient Glow Elements */}
          <div className="aurora-bg">
            <div
              className="aurora-glow-1"
              style={{
                background: mode === "dark" ? "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(0,0,0,0) 70%)" : "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(0,0,0,0) 70%)"
              }}
            />
            <div
              className="aurora-glow-2"
              style={{
                background: mode === "dark" ? "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 70%)" : "radial-gradient(circle, rgba(16,185,129,0.08) 0%, rgba(0,0,0,0) 70%)"
              }}
            />
          </div>
          <div
            className="grid-overlay"
            style={{
              backgroundImage: mode === "dark" 
                ? "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)" 
                : "radial-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px)",
            }}
          />
          {children}
        </div>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
