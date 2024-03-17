import {
  styled,
  Box,
  Tooltip as MuiTooltip,
  tooltipClasses,
  Zoom,
} from '@mui/material';

/**
 * Styled Tooltip
 */
export const Tooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 12,
    fontWeight: 'bold',
    boxShadow: theme.shadows[2],
    border: 'solid',
    borderWidth: 'thin',
    borderColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
  },
}));

/**
 * Custom ToolTip Component
 */
export const ToolTip = ({ title, placement, component, sx }) => (
  <Tooltip title={title} placement={placement} TransitionComponent={Zoom}>
    <Box component="div" sx={sx}>
      {component}
    </Box>
  </Tooltip>
);
