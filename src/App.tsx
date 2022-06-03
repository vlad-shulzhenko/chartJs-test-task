import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import backgroundImg from 'img/background.png';
import MainChart from 'components/MainChart/MainChart';

function App() {
  return (
    <Box
      pt="40px"
      sx={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }}
      minHeight="100vh"
    >
      <Container fixed>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="50px"
        >
          <Typography
            variant="h2"
            color="#ab28ed"
            fontWeight="700"
            lineHeight="1.6"
            textTransform="capitalize"
            letterSpacing="-2.5px"
          >
            Chart.js test task
          </Typography>
          <MainChart />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
