import { useMediaQuery } from "@mui/material";

/**
 * Screen Size Breakpoints
 * @param key A breakpoint key (xs, sm, md, lg, xl) or a screen width number in px
 * @param on CSS media query (up, down, between, only) based on the screen width
 * @returns CSS Media query match
 */
export const useBreakpoints = (
    key = 'sm',
    on = 'up',
) => {
    return useMediaQuery(key, on, {
        noSsr: true
    });
};