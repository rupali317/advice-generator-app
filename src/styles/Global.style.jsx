import { styled, createGlobalStyle } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary-1: hsl(150, 100%, 66%); /* #53ffaa */
        --color-secondary-1: hsl(219, 22%, 16%); /* #202733 */
        --color-secondary-2: hsl(217, 19%, 24%); /* #313a48 */
        --color-secondary-2: hsl(217, 19%, 24%); /* #313a48 */
        --color-neutral-1: hsl(193, 38%, 86%); /* #cee3e9 */
        --color-neutral-2: hsl(0, 0%, 0%, 10.02%);

        /* Typography */
        --font-size-xs: 0.6875rem; /* 11px */
        --font-size-s: 0.8125rem; /* 13px */
        --font-size-m: 1.5rem; /* 24px */
        --font-size-l: 1.75rem; /* 28px */

        --font-size-extra-bold: 800;

        --line-height-normal: normal;

        --letter-spacing-1: -0.01875rem; /* -0.3px */
        --letter-spacing-2: -0.01625rem; /* -0.26px */
        --letter-spacing-3: 0.21625rem; /* 3.46px */
        --letter-spacing-4: 0.255625rem; /* 4.09px */

        /* Paragraph spacing of 1px */

        /* Spacing */
        --space-xs: 1.25rem; /* 20px */
        --space-s: 1.5rem; /* 24px */
        --space-base: 2.5rem; /* 40px */
        --space-m: 3rem; /* 48px */
        --space-l: 4rem; /* 64px */
        --space-xl: 4.5rem; /* 72px */

        /* Borders */
        --border-radius-none: 0rem;
        --border-radius-soft-1: 0.625rem; /* 10px */
        --border-radius-soft-2: 0.9375rem; /* 15px */
        --border-radius-round: 100%;

        /* Shadows */
        --box-shadow-1: 0rem 0rem 2.5rem 0rem var(--color-primary-1); /* 0px 0px 40px 0px */
        --box-shadow-2: 1.875rem 3.125rem 5rem 0rem var(--color-neutral-2); /* 30px 50px 80px 0px */
    }
`;
