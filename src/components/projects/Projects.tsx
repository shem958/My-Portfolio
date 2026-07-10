"use client";

import { useState } from "react";
import { Box, Typography, Stack, Grid, Card, CardContent, CardActions, Button, Chip, Dialog, DialogContent, IconButton, useTheme } from "@mui/material";
import Container from "@/components/layout/Container";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projects";

export default function Projects() {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  // Node type styling helpers
  const getNodeColor = (type: string) => {
    switch (type) {
      case "client":
        return { bg: "rgba(59, 130, 246, 0.1)", border: "#3B82F6", label: "Client Layer" };
      case "security":
        return { bg: "rgba(239, 68, 68, 0.1)", border: "#EF4444", label: "Security Layer" };
      case "api":
        return { bg: "rgba(139, 92, 246, 0.1)", border: "#8B5CF6", label: "API Gateway" };
      case "service":
        return { bg: "rgba(245, 158, 11, 0.1)", border: "#F59E0B", label: "Core Service" };
      case "db":
        return { bg: "rgba(16, 185, 129, 0.1)", border: "#10B981", label: "Database Layer" };
      default:
        return { bg: "rgba(156, 163, 175, 0.1)", border: "#9CA3AF", label: "Service" };
    }
  };

  return (
    <Container>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Stack spacing={5}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" fontWeight="700" color="primary" sx={{ textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
              Portfolio
            </Typography>
            <Typography variant="h2" gutterBottom>
              Selected Projects
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="600px" mx="auto">
              A demonstration of system architectures, concurrent execution safeguards, and privacy-first algorithms.
            </Typography>
          </Box>

          {/* Projects Card Grid */}
          <Grid container spacing={4}>
            {projectsData.map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card
                    className="glass-card"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.4)" : "rgba(255, 255, 255, 0.65)",
                      border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)",
                      borderRadius: 4,
                      p: 1.5,
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        transform: "translateY(-6px)",
                        boxShadow: theme.palette.mode === "dark"
                          ? "0 20px 35px rgba(0,0,0,0.4), 0 0 20px rgba(99, 102, 241, 0.1)"
                          : "0 20px 35px rgba(15, 23, 42, 0.06)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Typography variant="h6" fontWeight="700" sx={{ mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="subtitle2" color="primary" fontWeight="600" sx={{ mb: 2, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {project.subtitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: "72px" }}>
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                        {project.tech.slice(0, 4).map((t) => (
                          <Chip
                            key={t}
                            label={t}
                            size="small"
                            sx={{
                              fontSize: "0.75rem",
                              fontWeight: 500,
                              background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)",
                              border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(15, 23, 42, 0.05)",
                            }}
                          />
                        ))}
                        {project.tech.length > 4 && (
                          <Chip
                            label={`+${project.tech.length - 4} more`}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: "0.75rem", fontWeight: 500 }}
                          />
                        )}
                      </Stack>
                    </CardContent>

                    <CardActions sx={{ px: 2.5, pb: 2.5, pt: 0, justifyContent: "space-between" }}>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => handleOpenDetails(project)}
                        sx={{ fontWeight: 700 }}
                      >
                        View Architecture
                      </Button>
                      <IconButton
                        component="a"
                        href={project.github}
                        target="_blank"
                        size="small"
                        color="inherit"
                        sx={{
                          border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(15, 23, 42, 0.1)",
                        }}
                      >
                        <GitHubIcon fontSize="small" />
                      </IconButton>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>

      {/* Interactive Project Architecture & System Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDetails}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            borderRadius: 5,
            background: theme.palette.mode === "dark" ? "rgba(15, 22, 38, 0.95)" : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)",
            overflow: "hidden",
          }
        }}
      >
        <AnimatePresence>
          {selectedProject && (
            <Box>
              {/* Header Title Bar */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 4,
                  py: 3,
                  borderBottom: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(15, 23, 42, 0.05)",
                }}
              >
                <Box>
                  <Typography variant="h5" fontWeight="800">
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="caption" color="primary" fontWeight="600" sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {selectedProject.subtitle}
                  </Typography>
                </Box>
                <IconButton onClick={handleCloseDetails} color="inherit">
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Modal Contents */}
              <DialogContent sx={{ p: 4 }}>
                <Grid container spacing={4}>
                  {/* Text Details & Challenge/Solution */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack spacing={3.5}>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="700" gutterBottom color="text.secondary">
                          Project Description
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {selectedProject.longDescription}
                        </Typography>
                      </Box>

                      {/* Technical Specs List */}
                      <Box>
                        <Typography variant="subtitle2" fontWeight="700" gutterBottom color="text.secondary">
                          Technologies Utilized
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                          {selectedProject.tech.map((t) => (
                            <Chip
                              key={t}
                              label={t}
                              size="small"
                              color="primary"
                              variant="outlined"
                              sx={{ fontWeight: 600, fontSize: "0.78rem" }}
                            />
                          ))}
                        </Stack>
                      </Box>

                      {/* Key Engineering Challenge & Action */}
                      <Stack spacing={2} sx={{ p: 2.5, borderRadius: 4, background: theme.palette.mode === "dark" ? "rgba(99, 102, 241, 0.04)" : "rgba(79, 70, 229, 0.03)", borderLeft: `4px solid ${theme.palette.primary.main}` }}>
                        <Typography variant="subtitle2" fontWeight="800" color="primary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          🚀 Key Systemic Challenge
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                          {selectedProject.challenge}
                        </Typography>
                        
                        <Typography variant="subtitle2" fontWeight="800" color="secondary" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}>
                          🛡️ Solution & Mitigation
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                          {selectedProject.solution}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>

                  {/* Visual Architecture Diagram Drawer */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" fontWeight="700" sx={{ mb: 2 }} color="text.secondary">
                      System Pipeline Architecture
                    </Typography>
                    
                    <Card
                      sx={{
                        p: 3,
                        background: theme.palette.mode === "dark" ? "rgba(7, 10, 20, 0.8)" : "rgba(248, 250, 252, 0.8)",
                        border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(15, 23, 42, 0.04)",
                        borderRadius: 4,
                        minHeight: 380,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Stack spacing={2.5} alignItems="center" sx={{ width: "100%" }}>
                        {selectedProject.architecture.nodes.map((node, nIdx) => {
                          const details = getNodeColor(node.type);
                          return (
                            <Box key={node.id} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                              {/* Connection Arrow */}
                              {nIdx > 0 && (
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 0.5 }}>
                                  <ArrowDownwardIcon sx={{ color: theme.palette.primary.main, fontSize: 18, opacity: 0.7 }} />
                                  {selectedProject.architecture.edges[nIdx - 1]?.label && (
                                    <Typography variant="caption" sx={{ fontSize: "0.68rem", fontFamily: "var(--font-mono)", color: "text.secondary", mt: 0.2 }}>
                                      {selectedProject.architecture.edges[nIdx - 1].label}
                                    </Typography>
                                  )}
                                </Box>
                              )}

                              {/* Node Card */}
                              <Card
                                variant="outlined"
                                sx={{
                                  width: "90%",
                                  maxWidth: 280,
                                  px: 2.5,
                                  py: 1.5,
                                  borderRadius: 3,
                                  borderColor: details.border,
                                  background: details.bg,
                                  textAlign: "center",
                                  transition: "transform 0.2s",
                                  "&:hover": {
                                    transform: "scale(1.03)",
                                  }
                                }}
                              >
                                <Typography variant="caption" fontWeight="700" sx={{ textTransform: "uppercase", fontSize: "0.65rem", display: "block", color: details.border, mb: 0.5 }}>
                                  {details.label}
                                </Typography>
                                <Typography variant="body2" fontWeight="700" sx={{ fontSize: "0.85rem", color: theme.palette.text.primary }}>
                                  {node.label}
                                </Typography>
                              </Card>
                            </Box>
                          );
                        })}
                      </Stack>
                    </Card>
                  </Grid>
                </Grid>
              </DialogContent>

              {/* Footer CTA Buttons */}
              <Box
                sx={{
                  px: 4,
                  py: 3,
                  background: theme.palette.mode === "dark" ? "rgba(10, 15, 28, 0.4)" : "rgba(241, 245, 249, 0.4)",
                  borderTop: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(15, 23, 42, 0.05)",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href={selectedProject.github}
                  target="_blank"
                  color="inherit"
                >
                  GitHub Repository
                </Button>
                {selectedProject.live && (
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={selectedProject.live}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </AnimatePresence>
      </Dialog>
    </Container>
  );
}
