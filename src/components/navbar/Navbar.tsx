"use client";

import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { useThemeMode } from "@/theme/ThemeContext";

const navItems = [
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Experience", link: "#experience" },
  { label: "Certifications", link: "#certifications" },
  { label: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { mode, toggleThemeMode } = useThemeMode();
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: scrolled
          ? mode === "dark"
            ? "rgba(9, 13, 26, 0.8)"
            : "rgba(248, 250, 252, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? mode === "dark"
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid rgba(15, 23, 42, 0.06)"
          : "1px solid transparent",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        color: theme.palette.text.primary,
        top: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: scrolled ? 0.5 : 1.5, transition: "all 0.3s ease" }}>
        {/* Logo / Name */}
        <Typography
          variant="h6"
          fontWeight="bold"
          component="a"
          href="#hero"
          sx={{
            cursor: "pointer",
            background: "linear-gradient(135deg, #6366F1 0%, #10B981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "1.4rem",
            letterSpacing: "-0.01em",
            "&:hover": {
              opacity: 0.85
            }
          }}
        >
          Shem.dev
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1.5,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.link}
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                fontSize: "0.95rem",
                position: "relative",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: theme.palette.text.primary,
                  background: "transparent",
                },
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* Theme Toggle Button */}
          <IconButton onClick={toggleThemeMode} color="inherit" sx={{ ml: 1 }}>
            {mode === "dark" ? <LightModeIcon sx={{ color: "#FBBF24" }} /> : <DarkModeIcon sx={{ color: "#4F46E5" }} />}
          </IconButton>

          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/shem958"
            target="_blank"
            sx={{ ml: 1 }}
          >
            GitHub
          </Button>
        </Box>

        {/* Mobile View Toggle & Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
          <IconButton onClick={toggleThemeMode} color="inherit">
            {mode === "dark" ? <LightModeIcon sx={{ color: "#FBBF24" }} /> : <DarkModeIcon sx={{ color: "#4F46E5" }} />}
          </IconButton>

          <IconButton color="inherit" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            background: mode === "dark" ? "rgba(20, 27, 45, 0.95)" : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(16px)",
            border: mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            width: 200,
          }
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={handleClose}
            component="a"
            href={item.link}
            sx={{
              py: 1.2,
              fontWeight: 500,
              color: theme.palette.text.primary,
            }}
          >
            {item.label}
          </MenuItem>
        ))}

        <MenuItem
          component="a"
          href="https://github.com/shem958"
          target="_blank"
          onClick={handleClose}
          sx={{
            py: 1.2,
            fontWeight: 500,
            color: theme.palette.primary.main,
            gap: 1
          }}
        >
          <GitHubIcon fontSize="small" />
          GitHub
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
