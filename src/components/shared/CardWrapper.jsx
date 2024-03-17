import {
    Box,
    Card,
    CardContent,
    Container,
} from '@mui/material';

/**
 * Card Wrapper Component
 */
export const CardWrapper = ({ children }) => (
    <Container maxWidth="xl">
        <Card elevation={2} sx={{ my: 2 }}>
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
                    {children}
                </Box>
            </CardContent>
        </Card>
    </Container>
);
