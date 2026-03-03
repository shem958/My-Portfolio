"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={3} maxWidth="700px">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1">Shem Gikunda</Typography>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="h4" color="primary">
              Full-Stack Software Engineer
            </Typography>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="body1" color="text.secondary">
              Building scalable, secure, and high-performance applications using
              Golang, NestJS, and modern React ecosystems.
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Stack direction="row" spacing={2}>
              <Button variant="contained" href="#projects">
                View Projects
              </Button>
              <Button variant="outlined" href="#contact">
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Box>
    </Container>
  );
}
