"use client";

import { Box, Typography, Stack, Card, CardContent } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "center",
        }}
      >
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card sx={{ maxWidth: 300, p: 2, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Shem Gikunda
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full-Stack Software Engineer
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Stack spacing={2}>
            <Typography variant="h4" fontWeight="bold">
              About Me
            </Typography>

            <Typography variant="body1" color="text.secondary">
              I am a Full-Stack Software Engineer focused on building scalable,
              secure, and high-performance applications. Experienced in backend
              architectures using Golang and NestJS, complemented by strong
              frontend skills in React.js and Next.js. Passionate about
              financial engineering, data privacy, and optimizing user
              experiences.
            </Typography>

            <Typography variant="body1" color="text.secondary">
              I enjoy working on projects that challenge me to think critically
              and push the boundaries of modern web development.
            </Typography>
          </Stack>
        </motion.div>
      </Box>
    </Container>
  );
}
