"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

const open = Boolean(anchorEl);

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};
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
       <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
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
      </Toolbar>
    </AppBar>
  );
}