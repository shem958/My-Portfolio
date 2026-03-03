"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import Container from "@/components/layout/Container";

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
          <Typography variant="h1">Shem Gikunda</Typography>

          {/* Title */}
          <Typography variant="h4" color="primary">
            Full-Stack Software Engineer
          </Typography>

          {/* Summary */}
          <Typography variant="body1" color="text.secondary">
            Building scalable, secure, and high-performance applications using
            Golang, NestJS, and modern React ecosystems.
          </Typography>

          {/* Buttons */}
          <Stack direction="row" spacing={2}>
            <Button variant="contained" href="#projects">
              View Projects
            </Button>

            <Button variant="outlined" href="#contact">
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
