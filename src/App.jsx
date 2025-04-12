
import { useState, useMemo } from 'react';
import { CssBaseline, ThemeProvider, createTheme, IconButton, AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Home from './components/pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: '#ff0000', // Red theme
        },
        background: {
          default: darkMode ? '#121212' : '#f5f5f5',
          paper: darkMode ? '#1e1e1e' : '#ffffff',
        },
      },
    }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Car Finder
          </Typography>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Motion div for slow fade-in animation of the entire container */}
      <motion.div
        initial={{ opacity: 0 }} // Start from invisible
        animate={{ opacity: 1 }} // Fade in to fully visible
        transition={{ duration: 1 }} // Duration of the fade-in (1 second)
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {/* Animated Box with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} // Start with a small scale and invisible
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale up
            exit={{ opacity: 0, scale: 1.05 }} // Slight scale increase when exiting
            transition={{
              duration: 0.8, // Duration of the fade-in
              ease: "easeOut", // Smooth easing effect
            }}
          >
            <Box
              sx={{
                backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                padding: 4,
                borderRadius: 3,
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Add transition for smooth hover effect
                '&:hover': {
                  transform: 'scale(1)', // Scale up on hover
                  boxShadow: 10, // Add shadow on hover
                },
              }}
            >
              <Home />
            </Box>
          </motion.div>
        </Container>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
