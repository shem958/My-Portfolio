"use client";

import { Box, Typography, Stack, Card, CardContent, Chip } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Fleetsimplify",
      duration: "Jun 2024 – Sep 2024",
      responsibilities: [
        "Implemented React Query for server-state management, reducing redundant API calls.",
        "Enhanced platform accessibility and created a theme-switching system (light/dark mode).",
        "Refactored frontend codebase by modularizing hooks and interfaces for maintainability.",
        "Streamlined version control workflows using pnpm and advanced branching strategies.",
      ],
      tech: ["React.js", "Next.js", "Tailwind CSS", "React Query", "Prisma"],
    },
  ];

  return (
    <Container>
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight="bold">
          Experience
        </Typography>

        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  p: 2,
                  "&:hover": {
                    transform: "scale(1.02)",
                    transition: "0.3s ease",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {exp.role} @ {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.duration}
                  </Typography>

                  <Stack mt={1} spacing={1}>
                    {exp.responsibilities.map((r, i) => (
                      <Typography variant="body2" key={i}>
                        • {r}
                      </Typography>
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    {exp.tech.map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
