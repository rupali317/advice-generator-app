import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary-1: hsl(150, 100%, 66%); /* #53ffaa */
        --color-primary-2: hsl(156, 66%, 32%); /* ##1c8a5d */
        --color-primary-3: hsl(156, 16%, 43%); /* 5c7f71 */
        --color-secondary-1: hsl(219, 22%, 16%); /* #202733 */
        --color-secondary-2: hsl(217, 19%, 24%); /* #313a48 */
        --color-secondary-3: hsl(217, 19%, 38%); /* #4f5d74 */
        --color-secondary-4: hsl(0, 0%, 0%, 10.02%);
        --color-neutral-1: hsl(193, 38%, 86%); /* #cee3e9 */

        /* Typography */
        --font-size-xs: 0.6875rem; /* 11px */
        --font-size-s: 0.8125rem; /* 13px */
        --font-size-m: 1.5rem; /* 24px */
        --font-size-l: 1.75rem; /* 28px */

        --font-weight-extra-bold: 800;

        --line-height-normal: normal;

        --letter-spacing-1: -0.01875rem; /* -0.3px */
        --letter-spacing-2: -0.01625rem; /* -0.26px */
        --letter-spacing-3: 0.21625rem; /* 3.46px */
        --letter-spacing-4: 0.255625rem; /* 4.09px */

        /* RRC: Paragraph spacing of 1px */

        /* Spacing */
        --space-xxs: 1rem; /* 16px */
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
        --border-width-s: 0.25rem; /* 4px */

        /* Shadows */
        --box-shadow-1: 0rem 0rem 2.5rem 0rem var(--color-primary-1); /* 0px 0px 40px 0px */
        --box-shadow-2: 1.875rem 3.125rem 5rem 0rem var(--color-neutral-2); /* 30px 50px 80px 0px */
        --box-shadow-3: 0rem 0rem 0rem 0.25rem var(--color-primary-2); /* 0px 0px 0px 4px */ 
    }

    @font-face {
        font-family: "Manrope";
        src: url("/fonts/Manrope-ExtraBold.ttf") format("truetype");
        font-style: normal;
        font-weight: 800;
        font-display: swap;
    }
`;

export const ResetStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default spaces */
    * {
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
    }

    /* Avoid text overflows */
    body,
    p {
        overflow-wrap: break-word;
    }

    /* Prevent font size inflation */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* Set shorter line heights on interactive elements like buttons */
    /* Inherit font for buttons */
    button {
        line-height: 1.1;
        font-family: inherit;
        font-size: inherit;
    }

    /* Make images easier to work with */
    img,
    picture,
    svg {
        max-width: 100%;
        display: block;
    }
`;

export const DefaultStyles = createGlobalStyle`
    body {
        font-family: "Manrope";
        font-weight: var(--font-weight-extra-bold);
        line-height: var(--line-height-normal);
        background-color: var(--color-secondary-1);
        color: var(--color-neutral-1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
