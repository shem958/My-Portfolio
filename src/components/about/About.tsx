"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGoland,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
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
            <Stack direction="row" spacing={2} flexWrap="wrap" mt={2}>
              {[
                { icon: SiReact, label: "React" },
                { icon: SiNextdotjs, label: "Next.js" },
                { icon: SiTypescript, label: "TypeScript" },
                { icon: SiGoland, label: "Golang" },
                { icon: SiNestjs, label: "NestJS" },
                { icon: SiMongodb, label: "MongoDB" },
                { icon: SiPostgresql, label: "PostgreSQL" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 12px",
                    background: "#f3f4f6",
                    borderRadius: "12px",
                    fontWeight: 500,
                    cursor: "default",
                  }}
                >
                  <tech.icon size={20} color="#6366F1" />
                  {tech.label}
                </motion.div>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Box>
    </Container>
  );
}
