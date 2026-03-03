"use client";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGoland,
  SiNestjs,
} from "react-icons/si";
import { Box, Typography, Button, Stack } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

const FloatingIcon = ({
  icon: Icon,
  size = 40,
  x = 0,
  y = 0,
  delay = 0,
}: {
  icon: React.ComponentType<{ size: number }>;
  size?: number;
  x?: number;
  y?: number;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -15, 0] }} // float up and down
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      repeatType: "loop",
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      top: y,
      left: x,
      color: "#6366F1",
    }}
  >
    <Icon size={size} />
  </motion.div>
);

export default function Hero() {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          position: "relative", // important for absolute icons
        }}
      >
        <FloatingIcon icon={SiReact} x={50} y={50} delay={0} />
        <FloatingIcon icon={SiNextdotjs} x={600} y={80} delay={0.5} />
        <FloatingIcon icon={SiTypescript} x={200} y={150} delay={1} />
        <FloatingIcon icon={SiGoland} x={500} y={200} delay={1.5} />
        <FloatingIcon icon={SiNestjs} x={350} y={300} delay={2} />
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
