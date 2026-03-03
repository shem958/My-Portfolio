"use client";

import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight="bold">
          Contact Me
        </Typography>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Stack spacing={2}>
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button variant="contained" type="submit">
              Send Message
            </Button>
          </Stack>
        </motion.form>

        <Stack direction="row" spacing={2} mt={2}>
          <IconButton
            component="a"
            href="https://github.com/shem958"
            target="_blank"
            color="primary"
          >
            <SiGithub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/shem-gikunda"
            target="_blank"
            color="primary"
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/shem958"
            target="_blank"
            color="primary"
          >
            <FaTwitter />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
}
