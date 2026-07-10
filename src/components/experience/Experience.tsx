"use client";

import { Box, Typography, Stack, Card, CardContent, Chip, useTheme } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Fleetsimplify",
    duration: "Jun 2024 – Sep 2024",
    location: "Nairobi, Kenya (Hybrid)",
    responsibilities: [
      "Implemented React Query for robust server-state caching, eliminating redundant API fetch requests and enhancing performance.",
      "Engineered an application theme-switching system (light/dark mode) and resolved critical contrast/accessibility (WCAG) warnings.",
      "Refactored the frontend project structure by modularizing reusable hooks, utilities, and TypeScript types for enhanced maintainability.",
      "Optimized developer workflows and package resolution times by transitioning the repository to pnpm workspaces and Git Flow strategies.",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "React Query", "Prisma", "TypeScript", "pnpm", "Git Flow"],
  },
];

export default function Experience() {
  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Stack spacing={6} alignItems="center">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" fontWeight="700" color="primary" sx={{ textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
              History
            </Typography>
            <Typography variant="h2" gutterBottom>
              Work Experience
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="500px" mx="auto">
              Professional history showing contributions in team environments and systems delivery.
            </Typography>
          </Box>

          {/* Timeline Wrapper */}
          <Box sx={{ width: "100%", maxWidth: 800, position: "relative", pl: { xs: 3, md: 4 } }}>
            {/* Timeline Vertical Axis Line */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: { xs: 15, md: 23 },
                width: "4px",
                background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                borderRadius: "2px",
                opacity: 0.8,
              }}
            />

            <Stack spacing={6}>
              {experiences.map((exp, index) => (
                <Box key={exp.role} sx={{ position: "relative" }}>
                  {/* Timeline Pulse Dot Indicator */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: -24, md: -24 },
                      top: 10,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: theme.palette.mode === "dark" ? "#090D1A" : "#F8FAFC",
                      border: `4px solid ${theme.palette.primary.main}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                      boxShadow: "0 0 10px rgba(99, 102, 241, 0.4)",
                    }}
                  />

                  {/* Experience Entry Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card
                      className="glass-card"
                      sx={{
                        background: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.4)" : "rgba(255, 255, 255, 0.65)",
                        border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)",
                        borderRadius: 4,
                        p: 3.5,
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          boxShadow: theme.palette.mode === "dark"
                            ? "0 15px 30px rgba(0,0,0,0.3), 0 0 15px rgba(99, 102, 241, 0.05)"
                            : "0 15px 30px rgba(15, 23, 42, 0.04)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        {/* Header Role and Duration Info */}
                        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} spacing={1} sx={{ mb: 2 }}>
                          <Box>
                            <Typography variant="h5" fontWeight="800">
                              {exp.role}
                            </Typography>
                            <Typography variant="subtitle2" color="primary" fontWeight="600" sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}>
                              <BusinessCenterIcon sx={{ fontSize: 16 }} />
                              {exp.company} — <span style={{ opacity: 0.8, fontWeight: 500 }}>{exp.location}</span>
                            </Typography>
                          </Box>
                          
                          <Chip
                            icon={<CalendarMonthIcon sx={{ fontSize: "14px !important", color: `${theme.palette.text.secondary} !important` }} />}
                            label={exp.duration}
                            size="small"
                            sx={{
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              color: theme.palette.text.secondary,
                              background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)",
                              border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(15, 23, 42, 0.05)",
                            }}
                          />
                        </Stack>

                        {/* Achievements Bullet List */}
                        <Stack spacing={1.5} sx={{ mb: 3 }}>
                          {exp.responsibilities.map((res, i) => (
                            <Stack direction="row" spacing={1.5} alignItems="flex-start" key={i}>
                              <Typography color="primary" sx={{ fontSize: "1.1rem", lineHeight: 1, mt: -0.2 }}>
                                ▹
                              </Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.92rem", lineHeight: 1.6 }}>
                                {res}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>

                        {/* Tech Tags */}
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                          {exp.tech.map((t) => (
                            <Chip
                              key={t}
                              label={t}
                              size="small"
                              sx={{
                                fontSize: "0.76rem",
                                fontWeight: 600,
                                background: theme.palette.mode === "dark" ? "rgba(99, 102, 241, 0.08)" : "rgba(79, 70, 229, 0.06)",
                                color: theme.palette.primary.main,
                                border: theme.palette.mode === "dark" ? "1px solid rgba(99, 102, 241, 0.15)" : "1px solid rgba(79, 70, 229, 0.15)",
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
