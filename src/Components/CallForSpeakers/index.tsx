import React from 'react';
import styled from 'styled-components';
import { BaseGrid } from '../Basegrid';
import { Title } from '../Title';
import { only } from 'styled-breakpoints';

const CallForSpeakersBase = styled(BaseGrid)`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.125rem;

  ${only('phone')} {
    padding: 0.5rem 1rem;
  }
`;

const ActionButton = styled.button`
  font-family: 'JetBrainsMono';
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: 0;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1rem;
`;

export const CallForSpeakers: React.FC = () => {
  return (
    <CallForSpeakersBase>
      <Title>Call for Speakers</Title>
      <p>Hello Darkness my old friend, I came to talk to you again. </p>
      <ActionButton>I want to be a Speaker!</ActionButton>
    </CallForSpeakersBase>
  );
};
