import { Inter } from "next/font/google";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Box>
          <AppBar>
            <Toolbar>
              <DashboardIcon />
              <Typography variant="h6" color="text.primary">
                Next.js Task App
              </Typography>
            </Toolbar>
          </AppBar>
          <Container fixed>
            <Toolbar />
            {children}
          </Container>
        </Box>
      </body>
    </html>
  );
}
