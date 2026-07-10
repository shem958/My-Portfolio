"use client";

import { useState } from "react";
import { Box, Typography, Stack, TextField, Button, IconButton, Grid, Snackbar, Alert, CircularProgress, useTheme, Card } from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  const theme = useTheme();
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "error">("success");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setToastSeverity("success");
      setToastMsg("Thank you! Your message has been sent successfully.");
      setToastOpen(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleCloseToast = () => {
    setToastOpen(false);
  };

  return (
    <Container>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={6}>
          {/* Contact Details Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography variant="body2" fontWeight="700" color="primary" sx={{ textTransform: "uppercase", letterSpacing: "0.1em", mb: 1 }}>
                    Connect
                  </Typography>
                  <Typography variant="h2" gutterBottom>
                    Let&apos;s Build Together
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Have a systems architecture question, a role opening, or want to collaborate on a financial backend? Send a message and let&apos;s get in touch.
                  </Typography>
                </Box>

                <Stack spacing={3.5}>
                  <Stack direction="row" spacing={2.5} alignItems="center">
                    <Box sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 3,
                      background: theme.palette.mode === "dark" ? "rgba(99, 102, 241, 0.1)" : "rgba(79, 70, 229, 0.06)",
                      border: theme.palette.mode === "dark" ? "1px solid rgba(99, 102, 241, 0.15)" : "1px solid rgba(79, 70, 229, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: theme.palette.primary.main,
                    }}>
                      <EmailIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" fontWeight="600" display="block">
                        EMAIL ME
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight="700"
                        component="a"
                        href="mailto:gikundashem11@gmail.com"
                        sx={{
                          color: theme.palette.text.primary,
                          "&:hover": { color: theme.palette.primary.main }
                        }}
                      >
                        gikundashem11@gmail.com
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2.5} alignItems="center">
                    <Box sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 3,
                      background: theme.palette.mode === "dark" ? "rgba(99, 102, 241, 0.1)" : "rgba(79, 70, 229, 0.06)",
                      border: theme.palette.mode === "dark" ? "1px solid rgba(99, 102, 241, 0.15)" : "1px solid rgba(79, 70, 229, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: theme.palette.primary.main,
                    }}>
                      <LocationOnIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" fontWeight="600" display="block">
                        LOCATION
                      </Typography>
                      <Typography variant="body1" fontWeight="700" color="text.primary">
                        Nairobi, Kenya
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>

                {/* Social Shortcuts */}
                <Box>
                  <Typography variant="caption" color="text.secondary" fontWeight="700" sx={{ display: "block", mb: 1.5, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Follow Socials
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {[
                      { icon: SiGithub, link: "https://github.com/shem958", label: "GitHub" },
                      { icon: FaLinkedin, link: "https://www.linkedin.com/in/shem-gikunda", label: "LinkedIn" },
                      { icon: FaTwitter, link: "https://twitter.com/shem958", label: "Twitter" },
                    ].map((item, i) => (
                      <IconButton
                        key={i}
                        component="a"
                        href={item.link}
                        target="_blank"
                        color="inherit"
                        sx={{
                          border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.08)",
                          background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(15, 23, 42, 0.01)",
                          width: 44,
                          height: 44,
                          transition: "all 0.2s",
                          "&:hover": {
                            color: theme.palette.primary.main,
                            borderColor: theme.palette.primary.main,
                            transform: "translateY(-3px)",
                            background: "rgba(99, 102, 241, 0.04)",
                          }
                        }}
                      >
                        <item.icon size={20} />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          {/* Message Form Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                className="glass-card"
                sx={{
                  p: 4.5,
                  background: theme.palette.mode === "dark" ? "rgba(20, 27, 45, 0.4)" : "rgba(255, 255, 255, 0.65)",
                  border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(15, 23, 42, 0.06)",
                  borderRadius: 5,
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <Typography variant="h5" fontWeight="800">
                      Send a Message
                    </Typography>

                    <TextField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.01)" : "rgba(15, 23, 42, 0.01)",
                        }
                      }}
                    />
                    
                    <TextField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.01)" : "rgba(15, 23, 42, 0.01)",
                        }
                      }}
                    />

                    <TextField
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      multiline
                      rows={5}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.01)" : "rgba(15, 23, 42, 0.01)",
                        }
                      }}
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={loading}
                      endIcon={!loading && <SendIcon />}
                      sx={{ py: 1.6, mt: 1, height: 50 }}
                    >
                      {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Send Message"}
                    </Button>
                  </Stack>
                </form>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Alert toast notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity={toastSeverity}
          variant="filled"
          sx={{
            borderRadius: 3,
            fontWeight: 600,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          {toastMsg}
        </Alert>
      </Snackbar>
    </Container>
  );
}
