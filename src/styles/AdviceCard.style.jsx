import { styled } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const Container = styled.div`
  background-color: var(--color-secondary-2);
  box-shadow: var(--box-shadow-2);
  padding: var(--space-base) var(--space-s) var(--space-l);
  max-width: 21.4375rem; /* 343px */
  border-radius: var(--border-radius-soft-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
  position: relative;
  justify-content: space-between;
  height: 25rem; /* 400px */

  @media (min-width: ${DesktopWidth}) {
    border-radius: var(--border-radius-soft-2);
    padding: var(--space-m) var(--space-m) var(--space-xl) var(--space-m);
    max-width: 33.75rem; /* 540px */
  }
`;

export const RibbonText = styled.p`
  text-transform: uppercase;
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-3);
  color: var(--color-primary-1);

  @media (min-width: ${DesktopWidth}) {
    font-size: var(--font-size-s);
    letter-spacing: var(--letter-spacing-4);
  }
`;

export const Quote = styled.q`
  font-size: var(--font-size-m);
  letter-spacing: var(--letter-spacing-2);
  text-align: center;

  @media (min-width: ${DesktopWidth}) {
    font-size: var(--font-size-l);
    letter-spacing: var(--letter-spacing-1);
    margin-bottom: var(--space-xxs);
  }
`;

export const Button = styled.button`
  background-color: var(--color-primary-1);
  padding: var(--space-xs);
  border-radius: var(--border-radius-round);
  position: absolute;
  bottom: -2rem;
  border: var(--border-radius-none);

  &:hover {
    box-shadow: var(--box-shadow-1);
    cursor: pointer;
  }

  &:focus-visible {
    outline: var(--color-primary-2) solid var(--border-width-s);
  }
`;
