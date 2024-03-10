import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Code from './Code';
import Palette from './Palette';
import Result from './Result';
import Header from './Header';
import Footer from './Footer';

const steps = ['Code', 'Palette', 'Result'];

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [colors, setColors] = useState([]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleUpdateCode = (newCode) => {
    setCode(newCode);
  };

  const handleUpdateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleUpdateColors = (newColors) => {
    setColors(newColors);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Syntax Highlighter
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === 0 && <Code onUpdateCode={handleUpdateCode} onUpdateLanguage={handleUpdateLanguage} />}
            {activeStep === 1 && <Palette onUpdateColors={handleUpdateColors}/>}
            {activeStep === 2 && <Result code={code} colors={colors} language={language}/>}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              {activeStep !== steps.length - 1 && (
                <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                  Next
                </Button>
              )}
            </Box>
          </React.Fragment>
        </Paper>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Home;
