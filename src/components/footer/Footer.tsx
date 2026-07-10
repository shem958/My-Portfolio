"use client";

import { Box, Stack, Typography, IconButton, useTheme } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useThemeMode } from "@/theme/ThemeContext";

export default function Footer() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          py: 5,
          borderTop: mode === "dark" 
            ? "1px solid rgba(255, 255, 255, 0.08)" 
            : "1px solid rgba(15, 23, 42, 0.06)",
          background: mode === "dark" ? "rgba(9, 13, 26, 0.5)" : "rgba(248, 250, 252, 0.5)",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease",
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Left Copyright Text */}
            <Typography variant="body2" color="text.secondary" fontWeight="500">
              © {year} Shem Gikunda. Built with Next.js, Material UI, and Framer Motion.
            </Typography>

            {/* Right Social Shortcuts */}
            <Stack direction="row" spacing={1.5}>
              {[
                { icon: SiGithub, link: "https://github.com/shem958" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/shem-gikunda" },
                { icon: FaTwitter, link: "https://twitter.com/shem958" },
              ].map((item, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={item.link}
                  target="_blank"
                  color="inherit"
                  sx={{
                    width: 36,
                    height: 36,
                    border: mode === "dark" ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(15, 23, 42, 0.05)",
                    background: mode === "dark" ? "rgba(255, 255, 255, 0.01)" : "rgba(15, 23, 42, 0.01)",
                    transition: "all 0.2s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-2px)",
                    }
                  }}
                >
                  <item.icon size={16} />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </motion.footer>
  );
}
