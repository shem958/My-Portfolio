"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ py: 4, borderTop: "1px solid #e0e0e0" }}>
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary">
              © {year} Shem Gikunda. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://github.com/shem958"
                target="_blank"
                color="primary"
              >
                <SiGithub />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/shem-gikunda"
                target="_blank"
                color="primary"
              >
                <FaLinkedin />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/shem958"
                target="_blank"
                color="primary"
              >
                <FaTwitter />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </motion.footer>
  );
}
