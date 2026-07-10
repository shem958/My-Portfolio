"use client";

import { Box, Typography, Stack, Grid, Card, Button, useTheme } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LaunchIcon from "@mui/icons-material/Launch";

interface Certification {
  title: string;
  issuer: "freeCodeCamp" | "HackerRank";
  type: "Verification" | "Badge" | "Role" | "Skill";
  detail?: string;
  verificationLink: string;
}

const certificationsList: Certification[] = [
  // HackerRank
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    type: "Role",
    detail: "Verified core competencies in full-stack engineering, algorithms, databases, and system patterns.",
    verificationLink: "https://www.hackerrank.com/profile/shemgikunda37"
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    type: "Role",
    detail: "Verified proficiency in state-driven UI structures, performance hooks, component lifecycle, and state query modules.",
    verificationLink: "https://www.hackerrank.com/profile/shemgikunda37"
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    type: "Skill",
    detail: "Validated skills in database relationships, basic joins, filtering predicates, and structured querying.",
    verificationLink: "https://www.hackerrank.com/profile/shemgikunda37"
  },
  // freeCodeCamp
  {
    title: "Back-End Development and APIs V8",
    issuer: "freeCodeCamp",
    type: "Verification",
    detail: "Demonstrated skills in Node.js, Express, MongoDB/Mongoose, building REST services, microservices, and database routing.",
    verificationLink: "https://www.freecodecamp.org/shemgikunda"
  },
  {
    title: "Relational Database V8",
    issuer: "freeCodeCamp",
    type: "Verification",
    detail: "Mastery of PostgreSQL, Bash scripting, SQL command lines, git revision systems, and database migrations.",
    verificationLink: "https://www.freecodecamp.org/shemgikunda"
  },
  {
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    type: "Verification",
    detail: "Skills in TensorFlow, neural networks, predictive algorithms, linear regression, and reinforcement models.",
    verificationLink: "https://www.freecodecamp.org/shemgikunda"
  },
  {
    title: "Front-End Development Libraries V8",
    issuer: "freeCodeCamp",
    type: "Verification",
    detail: "Built interactive web applications using React.js, Redux state management, Sass compiling, jQuery pipelines, and Bootstrap layouts.",
    verificationLink: "https://www.freecodecamp.org/shemgikunda"
  },
  {
    title: "Data Visualization V8",
    issuer: "freeCodeCamp",
    type: "Verification",
    detail: "Built data dashboards using D3.js charting, JSON fetch datasets, heat maps, choropleth maps, and scatterplots.",
    verificationLink: "https://www.freecodecamp.org/shemgikunda"
  },
  {
    title: "JavaScript Algorithms & Data Structures V7",
    issuer: "freeCodeCamp",
    type: "Verification",
    detail: "Mastered JavaScript paradigms, OOP modeling, functional scripting, regular expressions, and algorithmic calculations.",
    verificationLink: "https://www.freecodecamp.org/shemgikunda"
  },
  {
    title: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    type: "Verification",
    detail: "Skills in advanced HTML5 semantic systems, flexbox and grid layouts, typography hierarchies, and mobile responsiveness.",
    verificationLink: "https://www.freecodecamp.org/shemgikunda"
  }
];

export default function Certifications() {
  const theme = useTheme();

  return (
    <Container>
      <Box id="certifications" sx={{ py: { xs: 4, md: 8 } }}>
        <Stack spacing={5}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" fontWeight="700" color="primary" sx={{ textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
              Credentials
            </Typography>
            <Typography variant="h2" gutterBottom>
              Certifications & Badges
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="550px" mx="auto">
              Verified technical credentials proving practical capability in algorithms, database engineering, and full-stack development.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {certificationsList.map((cert, index) => {
              const isHR = cert.issuer === "HackerRank";
              const cardAccent = isHR 
                ? "rgba(16, 185, 129, 0.1)" 
                : theme.palette.mode === "dark" ? "rgba(99, 102, 241, 0.08)" : "rgba(79, 70, 229, 0.06)";
              const borderTheme = isHR
                ? "1px solid rgba(16, 185, 129, 0.3)"
                : theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)";

              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <Card
                      className="glass-card"
                      sx={{
                        height: 200,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        background: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.4)" : "rgba(255, 255, 255, 0.65)",
                        border: borderTheme,
                        borderRadius: 4,
                        p: 3,
                        "&:hover": {
                          borderColor: isHR ? "#10B981" : theme.palette.primary.main,
                          transform: "translateY(-4px)",
                          boxShadow: theme.palette.mode === "dark"
                            ? `0 10px 25px rgba(0,0,0,0.3), 0 0 15px ${isHR ? "rgba(16,185,129,0.15)" : "rgba(99,102,241,0.15)"}`
                            : "0 10px 25px rgba(15, 23, 42, 0.05)",
                        },
                      }}
                    >
                      <Stack spacing={1.5}>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                          <Box>
                            <Typography variant="caption" fontWeight="800" sx={{
                              color: isHR ? "#10B981" : theme.palette.primary.main,
                              textTransform: "uppercase",
                              fontSize: "0.68rem",
                              display: "inline-block",
                              px: 1,
                              py: 0.2,
                              borderRadius: 1,
                              background: cardAccent,
                              mb: 0.5
                            }}>
                              {cert.issuer}
                            </Typography>
                            <Typography variant="subtitle2" fontWeight="700" sx={{ fontSize: "0.95rem", lineHeight: 1.25, color: theme.palette.text.primary }}>
                              {cert.title}
                            </Typography>
                          </Box>
                          <Box sx={{ color: isHR ? "#10B981" : theme.palette.primary.main }}>
                            <WorkspacePremiumIcon fontSize="medium" />
                          </Box>
                        </Stack>

                        <Typography variant="body2" color="text.secondary" sx={{
                          fontSize: "0.8rem",
                          lineHeight: 1.4,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}>
                          {cert.detail}
                        </Typography>
                      </Stack>

                      <Button
                        size="small"
                        component="a"
                        href={cert.verificationLink}
                        target="_blank"
                        endIcon={<LaunchIcon sx={{ fontSize: "12px !important" }} />}
                        sx={{
                          alignSelf: "flex-start",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          p: 0,
                          color: isHR ? "#10B981" : theme.palette.primary.main,
                          "&:hover": {
                            background: "transparent",
                            textDecoration: "underline",
                          }
                        }}
                      >
                        Verify Credential
                      </Button>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
