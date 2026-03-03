import type { Metadata } from "next";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/theme/theme";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Shem Gikunda | Portfolio",
  description: "Full Stack Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}