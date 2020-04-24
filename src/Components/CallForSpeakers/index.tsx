import React from 'react';
import styled from 'styled-components';
import { BaseGrid } from '../Basegrid';
import { Title } from '../Title';
import { only } from 'styled-breakpoints';
import callForSpeakersArrowMobile from '../../assets/mobile/arrow-call-for-speakers.svg';

const CallForSpeakersBase = styled(BaseGrid)`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1.125rem;

  ${only('phone')} {
    background-image: url(${callForSpeakersArrowMobile});
    background-repeat: no-repeat;
    padding: 1rem;
    min-height: 430px;

    background-size: 60px 400px;
    background-position: 1rem 3rem;
  }
`;

const ActionButton = styled.button`
  display: inline-block;
  margin-top: 2.5rem;
  font-family: 'JetBrainsMono';
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  border: 0;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1.25rem;
  grid-row: 3;
  grid-column: 1 / -1;
`;

const SpeakerTitle = styled(Title)`
  ${only('phone')} {
    grid-column: 1 / 3;
  }
`;

const Description = styled.p`
  grid-row: 2;
  grid-column: 2 / -1;
  padding-right: 1rem;
  align-self: flex-start;
`;

export const CallForSpeakers: React.FC = () => {
  return (
    <CallForSpeakersBase>
      <SpeakerTitle>Become a speaker</SpeakerTitle>
      <Description>
        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus
        to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks.
        Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the
        motherfucker, know what I'm sayin'?
      </Description>
      <ActionButton>I want to be a Speaker!</ActionButton>
    </CallForSpeakersBase>
  );
};
