import Typography from '@mui/material/Typography';

/**
 * Card Text Component
 */
export const CardText = ({ text }) => (
    <Typography
    component="p"
    variant="body1"
    sx={{ mt: 1, fontWeight: 600, fontSize: 18 }}
  >
    {text}
  </Typography>
);