import styled from 'styled-components';
import { only, up } from 'styled-breakpoints';
export const Title = styled.h1`
  font-weight: 100;
  letter-spacing: -0.93px;
  text-transform: uppercase;
  margin: 0;
  font-size: 3.5rem;
  line-height: 4rem;

  span {
    margin-left: 2rem;
  }

  ${up('phone')} {
    grid-column: 2 / -2;
  }

  ${only('phone')} {
    grid-column: 1 / -1;
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;
