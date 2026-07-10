"use client";

import { Box, Typography, Stack, Card, Grid, useTheme } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import ShieldIcon from "@mui/icons-material/Shield";

const stats = [
  { value: "3+", label: "Years Coding" },
  { value: "10+", label: "Projects Completed" },
  { value: "99.9%", label: "System Uptime Goal" },
];

export default function About() {
  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Visual Profile Column */}
          <Grid size={{ xs: 12, md: 4.5 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card
                className="glass-card"
                sx={{
                  background: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.5)" : "rgba(255, 255, 255, 0.6)",
                  border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)",
                  borderRadius: 5,
                  overflow: "hidden",
                  textAlign: "center",
                  p: 4,
                  position: "relative",
                }}
              >
                {/* Glow behind profile */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-20%",
                    left: "-20%",
                    width: "140%",
                    height: "140%",
                    background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(0,0,0,0) 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #6366F1 0%, #10B981 100%)",
                      margin: "0 auto 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
                    }}
                  >
                    <AccountCircleIcon sx={{ fontSize: 100, color: "#fff" }} />
                  </Box>
                  
                  <Typography variant="h5" fontWeight="700" gutterBottom>
                    Shem Gikunda
                  </Typography>
                  <Typography variant="subtitle2" color="primary" fontWeight="600" sx={{ mb: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Full-Stack Software Engineer
                  </Typography>

                  <Stack spacing={2} sx={{ mt: 2 }}>
                    {stats.map((stat, i) => (
                      <Box
                        key={i}
                        sx={{
                          py: 1.5,
                          px: 2,
                          borderRadius: 3,
                          background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(15, 23, 42, 0.02)",
                          border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(15, 23, 42, 0.04)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary" fontWeight="500">
                          {stat.label}
                        </Typography>
                        <Typography variant="h6" color="primary" fontWeight="700">
                          {stat.value}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Description Biography Column */}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography variant="body2" fontWeight="700" color="primary" sx={{ textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
                    Biography
                  </Typography>
                  <Typography variant="h2" gutterBottom>
                    Architecting Clean & Secure Systems
                  </Typography>
                </Box>

                <Stack spacing={2}>
                  <Typography variant="body1" color="text.secondary">
                    I am a Full-Stack Software Engineer based in Nairobi, Kenya, focused on building highly scalable, concurrent backend architectures and integrating them with polished client interfaces. My engineering philosophy revolves around database efficiency, API reliability, and zero-knowledge data privacy.
                  </Typography>

                  <Typography variant="body1" color="text.secondary">
                    From engineering multi-currency transactional wallets with NestJS (Jamii Money) to designing local predictive medical cycle algorithms in Go encrypted with AES-256 (CycleSync), I love developing projects that solve actual real-world problems.
                  </Typography>
                </Stack>

                {/* Core Focus Area Cards */}
                <Grid container spacing={3}>
                  {[
                    {
                      icon: CodeIcon,
                      title: "APIs & Web Logic",
                      text: "Creating modular APIs using NestJS and Node Express, connected to React/Next.js single-page applications.",
                    },
                    {
                      icon: ShieldIcon,
                      title: "Security & Crypto",
                      text: "Integrating symmetric/asymmetric encryption, hashing workflows, and role-based session authorizations.",
                    },
                    {
                      icon: StorageIcon,
                      title: "Database Engineering",
                      text: "Optimizing relational models in PostgreSQL and modeling flexible aggregations inside MongoDB engines.",
                    },
                  ].map((focus, index) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={index}>
                      <Card
                        className="glass-card"
                        sx={{
                          height: "100%",
                          background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(15, 23, 42, 0.02)",
                          border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(15, 23, 42, 0.04)",
                          p: 2.5,
                          borderRadius: 4,
                          "&:hover": {
                            borderColor: theme.palette.primary.main,
                            transform: "translateY(-4px)",
                          },
                        }}
                      >
                        <Box sx={{ color: theme.palette.primary.main, mb: 1.5 }}>
                          <focus.icon fontSize="medium" />
                        </Box>
                        <Typography variant="subtitle1" fontWeight="700" sx={{ mb: 1 }}>
                          {focus.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
                          {focus.text}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
