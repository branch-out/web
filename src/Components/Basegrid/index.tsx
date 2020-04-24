import styled from 'styled-components';
import { up, only } from 'styled-breakpoints';

type GridProps = {
  hasInitialMargin?: boolean;
};

export const BaseGrid = styled.div<GridProps>`
  display: grid;
  grid-auto-rows: auto;
  align-items: center;

  ${up('phone')} {
    margin: 0 3rem;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1rem;
    margin: ${(props) => (props.hasInitialMargin ? '0 3rem' : null)};
  }

  ${only('phone')} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.25rem;
    margin: 0;
  }
`;
