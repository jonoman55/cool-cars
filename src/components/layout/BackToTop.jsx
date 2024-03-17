import React from 'react';
import { styled, useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { blue } from '@mui/material/colors';

/**
 * Default Zoom Styles
 */
const zoomBoxStyles = {
  position: 'fixed',
  bottom: 25,
  right: 25,
};

/**
 * Scroll To Top Icon Button (FAB)
 */
const UpIconButton = styled(Fab)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.mode === 'light' ? blue[700] : blue[800],
}));

/**
 * Scroll Top Wrapper Component
 */
const ScrollTop = (props) => {
  const { children, window } = props;

  /**
   * Scroll Trigger Options
   */
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 75,
  });

  /**
   * Handle Click Event
   */
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box role="presentation" onClick={handleClick} sx={zoomBoxStyles}>
        {children}
      </Box>
    </Zoom>
  );
};

/**
 * Scroll Back To Top Button
 */
const BackToTop = () => (
  <ScrollTop>
    <UpIconButton color="primary" size="small" aria-label="scroll back to top">
      <UpIcon />
    </UpIconButton>
  </ScrollTop>
);

export default BackToTop;
