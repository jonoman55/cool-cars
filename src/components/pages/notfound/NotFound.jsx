import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import NotFoundIcon from '@mui/icons-material/SentimentDissatisfied';

/**
 * Not Found
 */
const NotFound = () => {
  const navigate = useNavigate();
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
              <NotFoundIcon sx={{ height: 48, width: 48 }} />
              <Typography
                variant="body1"
                pagargraph
                gutterBottom
                sx={{ mt: 1 }}
              >
                Page Not Found
              </Typography>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => navigate('/')}
                sx={{ mt: 2, color: 'primary.contrastText' }}
              >
                Home
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};

export default NotFound;
