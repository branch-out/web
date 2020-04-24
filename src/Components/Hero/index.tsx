import React from 'react';
import styled from 'styled-components';
import { BaseGrid } from '../Basegrid';
import { only } from 'styled-breakpoints';
import { Title } from '../Title';

const HeroBase = styled(BaseGrid)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  grid-column: 1/ -1;
  padding: 2rem 0;

  ${only('phone')} {
    padding: 0.5rem 1rem;
  }
`;

const SubTitle = styled(Title)`
  grid-row: 1;
`;

const Contents = styled.article`
  margin: 2rem 0;
  grid-column: 4 / 10;
  font-size: 1.125rem;
  line-height: 1.25rem;

  ${only('phone')} {
    grid-column: 1 / -1;
    margin: 1rem 0;
  }
`;

const EventDetails = styled.h3`
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  ${only('phone')} {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

const Description = styled.p`
  margin: 2rem 0;

  ${only('phone')} {
    margin: 1rem 0;
  }
`;

const KeywordList = styled.ul`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  padding: 0;
  padding-left: 1.25rem;
  list-style-type: square;
`;

export const Hero: React.FC = () => (
  <HeroBase>
    <Title>
      Branch<span>Out</span>
    </Title>
    <SubTitle as="h2">First Edition</SubTitle>
    <Contents>
      <EventDetails>Saturday ... September 2020</EventDetails>
      <EventDetails>High Tech Campus 33, Eindhoven</EventDetails>
      <Description>
        Normally, both your asses would be dead as fucking fried chicken, but you happen to pull
        this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.
        But I can't give you this case, it don't belong to me. Besides, I've already been through
        too much shit this morning over this case to hand it over to your dumb ass.
      </Description>

      <KeywordList>
        <li>Multi-track</li>
        <li>One Day</li>
        <li>Free</li>
        <li>Web, Cloud, AI, DevOps</li>
      </KeywordList>
    </Contents>
  </HeroBase>
);
