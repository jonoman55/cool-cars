import Box from '@mui/material/Box';

/**
 * Flex Box Row
 */
export const FlexBoxRow = ({ children, sx }) => (
    <Box component="div" sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
    }}>
        {children}
    </Box>
);

/**
 * Flex Box Column
 */
export const FlexBoxColumn = ({ children, sx }) => (
    <Box component="div" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
    }}>
        {children}
    </Box>
);