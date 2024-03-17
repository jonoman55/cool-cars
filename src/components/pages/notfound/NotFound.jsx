import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import NotFoundIcon from '@mui/icons-material/SentimentDissatisfied';

import { CardWrapper } from '../../shared';

/**
 * Not Found
 */
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};

export default NotFound;
