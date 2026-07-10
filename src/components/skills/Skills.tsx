"use client";

import { useState } from "react";
import { Box, Typography, Stack, Grid, Card, LinearProgress, useTheme } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/skills";

const categories = ["All", "Languages", "Frontend", "Backend", "Database & DevOps"] as const;

export default function Skills() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<typeof categories[number]>("All");

  const filteredSkills = skillsData.filter((skill) => {
    if (activeTab === "All") return true;
    return skill.category === activeTab;
  });

  return (
    <Container>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Stack spacing={5} alignItems="center">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" fontWeight="700" color="primary" sx={{ textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
              Tech Stack
            </Typography>
            <Typography variant="h2">
              My Technical Arsenal
            </Typography>
          </Box>

          {/* Glassmorphic Category Selector Tabs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
              width: "100%",
              maxWidth: 700,
              p: 0.8,
              borderRadius: 4,
              background: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.4)" : "rgba(15, 23, 42, 0.03)",
              border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(15, 23, 42, 0.05)",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <Box
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  sx={{
                    px: 3,
                    py: 1.2,
                    borderRadius: 3,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    color: isActive ? "#fff" : theme.palette.text.secondary,
                    background: isActive
                      ? "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)"
                      : "transparent",
                    boxShadow: isActive ? "0 4px 12px rgba(99, 102, 241, 0.25)" : "none",
                    "&:hover": {
                      color: isActive ? "#fff" : theme.palette.text.primary,
                      background: isActive ? "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)" : "rgba(99, 102, 241, 0.04)",
                    },
                  }}
                >
                  {cat}
                </Box>
              );
            })}
          </Box>

          {/* Interactive Skills Grid */}
          <Box sx={{ width: "100%", minHeight: "350px" }}>
            <Grid container spacing={3}>
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={skill.name}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className="glass-card"
                        sx={{
                          height: 190,
                          background: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.4)" : "rgba(255, 255, 255, 0.6)",
                          border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)",
                          borderRadius: 4,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          p: 3,
                          cursor: "default",
                          "&:hover": {
                            borderColor: theme.palette.primary.main,
                            transform: "translateY(-4px)",
                            boxShadow: theme.palette.mode === "dark"
                              ? "0 10px 25px rgba(0,0,0,0.3), 0 0 15px rgba(99, 102, 241, 0.1)"
                              : "0 10px 25px rgba(15, 23, 42, 0.05)",
                          },
                        }}
                      >
                        <Stack spacing={1.5}>
                          {/* Skill Name, Icon and Level Indicator */}
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Stack direction="row" alignItems="center" spacing={1.5}>
                              <Box sx={{ color: theme.palette.primary.main, display: "flex", alignItems: "center" }}>
                                <skill.icon size={26} />
                              </Box>
                              <Typography variant="subtitle1" fontWeight="700">
                                {skill.name}
                              </Typography>
                            </Stack>
                            <Typography variant="caption" fontWeight="700" color="primary" sx={{ background: theme.palette.mode === "dark" ? "rgba(99, 102, 241, 0.12)" : "rgba(79, 70, 229, 0.06)", px: 1, py: 0.3, borderRadius: 1.5 }}>
                              {skill.level}%
                            </Typography>
                          </Stack>

                          {/* Skill Context Description */}
                          <Typography variant="body2" color="text.secondary" sx={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis", fontSize: "0.82rem", minHeight: "50px" }}>
                            {skill.description}
                          </Typography>
                        </Stack>

                        {/* Linear Progress Bar */}
                        <Box sx={{ width: "100%", mt: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(15, 23, 42, 0.06)",
                              "& .MuiLinearProgress-bar": {
                                background: "linear-gradient(90deg, #6366F1 0%, #10B981 100%)",
                                borderRadius: 3,
                              }
                            }}
                          />
                        </Box>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </AnimatePresence>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
