"use client";

import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Jamii Money – Financial Management API",
      description:
        "Engineered a robust financial backend supporting wallet management, transaction processing, and savings goals using NestJS and MongoDB.",
      tech: ["NestJS", "MongoDB", "Swagger", "JWT"],
      github: "https://github.com/shem958/jamii-money",
      live: "",
    },
    {
      title: "CycleSync – Secure Health Tracking",
      description:
        "Developed predictive menstrual cycle algorithms with AES-256 encryption to protect sensitive health data using Golang.",
      tech: ["Golang", "JWT", "AES-256"],
      github: "https://github.com/shem958/cyclesync",
      live: "",
    },
    {
      title: "Magenta – Enterprise Wholesale Management System",
      description:
        "Built a full-stack system for wholesale operations with inventory, financial, and delivery management using Node.js, Express.js, and MongoDB.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
      github: "https://github.com/shem958/magenta",
      live: "",
    },
  ];

  return (
    <Container>
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight="bold">
          Projects
        </Typography>

        <Stack spacing={4}>
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  p: 2,
                  "&:hover": {
                    transform: "scale(1.03)",
                    transition: "0.3s ease",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {proj.description}
                  </Typography>
                  <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    {proj.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions>
                  {proj.github && (
                    <Button size="small" href={proj.github} target="_blank">
                      GitHub
                    </Button>
                  )}
                  {proj.live && (
                    <Button size="small" href={proj.live} target="_blank">
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
