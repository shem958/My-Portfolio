"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

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
      elevation={0}
      sx={{
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Name */}
        <Typography variant="h6" fontWeight="bold">
          Shem.dev
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item.label} href={item.link} color="inherit">
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}