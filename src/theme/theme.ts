"use client";
import { createTheme, Theme } from "@mui/material/styles";

export const getAppTheme = (mode: "light" | "dark"): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#6366F1" : "#4F46E5", // Indigo
      },
      secondary: {
        main: mode === "dark" ? "#10B981" : "#059669", // Emerald
      },
      background: {
        default: mode === "dark" ? "#090D1A" : "#F8FAFC",
        paper: mode === "dark" ? "rgba(20, 27, 45, 0.65)" : "rgba(255, 255, 255, 0.7)",
      },
      text: {
        primary: mode === "dark" ? "#F8FAFC" : "#0F172A",
        secondary: mode === "dark" ? "#94A3B8" : "#475569",
      },
      divider: mode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)",
    },

    typography: {
      fontFamily: `var(--font-inter), "Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
      h1: {
        fontFamily: `var(--font-outfit), "Outfit", "Inter", sans-serif`,
        fontSize: "3.5rem",
        fontWeight: 800,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: `var(--font-outfit), "Outfit", "Inter", sans-serif`,
        fontSize: "2.5rem",
        fontWeight: 700,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontFamily: `var(--font-outfit), "Outfit", "Inter", sans-serif`,
        fontSize: "2rem",
        fontWeight: 700,
      },
      h4: {
        fontFamily: `var(--font-outfit), "Outfit", "Inter", sans-serif`,
        fontSize: "1.6rem",
        fontWeight: 600,
      },
      h6: {
        fontFamily: `var(--font-outfit), "Outfit", "Inter", sans-serif`,
        fontWeight: 600,
      },
      body1: {
        fontSize: "1.05rem",
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.95rem",
        lineHeight: 1.5,
      },
    },

    shape: {
      borderRadius: 16,
    },

    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            border: mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)",
            boxShadow:
              mode === "dark"
                ? "0 4px 30px rgba(0, 0, 0, 0.4)"
                : "0 4px 30px rgba(15, 23, 42, 0.05)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 12,
            fontWeight: 600,
            padding: "8px 20px",
          },
          containedPrimary: {
            background: mode === "dark" 
              ? "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)" 
              : "linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)",
            boxShadow: mode === "dark"
              ? "0 4px 14px rgba(99, 102, 241, 0.4)"
              : "0 4px 14px rgba(79, 70, 229, 0.3)",
            "&:hover": {
              boxShadow: mode === "dark"
                ? "0 6px 20px rgba(99, 102, 241, 0.6)"
                : "0 6px 20px rgba(79, 70, 229, 0.5)",
            },
          },
          outlined: {
            borderWidth: "1.5px !important",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: 8,
          },
        },
      },
    },
  });
};