import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#6366F1",
        },
        secondary: {
            main: "#22C55E",
        },
        background: {
            default: "#0F172A",
            paper: "#1E293B",
        },
        text: {
            primary: "#E2E8F0",
            secondary: "#94A3B8",
        },
    },

    typography: {
        fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

        h1: {
            fontSize: "3rem",
            fontWeight: 700,
        },

        h2: {
            fontSize: "2.2rem",
            fontWeight: 600,
        },

        h3: {
            fontSize: "1.8rem",
            fontWeight: 600,
        },

        body1: {
            fontSize: "1rem",
        },
    },

    shape: {
        borderRadius: 12,
    },
});