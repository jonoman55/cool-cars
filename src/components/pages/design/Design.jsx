import {
  Box,
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
} from '@mui/material';

/**
 * Design
 */
const Design = () => {
  return (
    <Container maxWidth="xl">
      <Paper elevation={2} sx={{ my: 2 }}>
        <Card elevation={0}>
          <CardContent>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                component="p"
                variant="body1"
                sx={{ mt: 1, fontWeight: 600, fontSize: 18 }}
              >
                Design
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};

export default Design;
