"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";

const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

const open = Boolean(anchorEl);

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const navItems = [
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Experience", link: "#experience" },
  { label: "Contact", link: "#contact" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      sx={{
        background: scrolled
          ? "rgba(15, 23, 42, 0.95)"
          : "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Name */}
        <Typography variant="h6" fontWeight="bold">
          Shem.dev
        </Typography>
        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button key={item.label} href={item.link} color="inherit">
              {item.label}
            </Button>
          ))}

          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/shem958"
            target="_blank"
          >
            GitHub
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {navItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={handleClose}
            component="a"
            href={item.link}
          >
            {item.label}
          </MenuItem>
        ))}

        <MenuItem
          component="a"
          href="https://github.com/shem958"
          target="_blank"
          onClick={handleClose}
        >
          GitHub
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
