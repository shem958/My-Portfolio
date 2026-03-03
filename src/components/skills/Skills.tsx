"use client";

import { Box, Typography, Stack, LinearProgress, Grid } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGoland,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: SiReact, level: 90, category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, level: 85, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, level: 90, category: "Frontend" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 90,
      category: "Frontend",
    },
    { name: "Material UI", icon: SiMui, level: 85, category: "Frontend" },
    { name: "Golang", icon: SiGoland, level: 80, category: "Backend" },
    { name: "NestJS", icon: SiNestjs, level: 85, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, level: 85, category: "Database" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 80, category: "Database" },
  ];

  const categories = ["Frontend", "Backend", "Database"];

  return (
    <Container>
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight="bold">
          My Skills
        </Typography>

        {categories.map((cat) => (
          <Box key={cat}>
            <Typography variant="h6" fontWeight="medium" mb={2}>
              {cat}
            </Typography>
            <Grid container spacing={2}>
              {skills
                .filter((s) => s.category === cat)
                .map((skill, index) => (
                  <Box key={skill.name} sx={{ xs: "100%", sm: "50%", md: "33.333%" }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Stack spacing={1}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <skill.icon size={24} color="#6366F1" />
                          <Typography variant="body1">{skill.name}</Typography>
                        </Stack>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{ height: 10, borderRadius: 5 }}
                        />
                      </Stack>
                    </motion.div>
                  </Box>
                ))}
            </Grid>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
