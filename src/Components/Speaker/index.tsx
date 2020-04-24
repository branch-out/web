import React from 'react';
import styled from 'styled-components';
import { only } from 'styled-breakpoints';

type SpeakerProps = {
  subject?: string;
  name: string;
  avatar: string;
};

const SpeakerBase = styled.li`
  text-align: center;
  ${only('phone')} {
    grid-column: span 2;
  }
`;

type AvatarProps = {
  image: string;
};

const Avatar = styled.figure<AvatarProps>`
  width: 128px;
  height: 128px;
  border-radius: 80px;
  background-size: stretch;
  background-image: url('${({ image }) => image}');
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.tertiary};
  background-blend-mode: multiply;
  border: 1px solid transparent;

  &:hover {
    background-blend-mode: unset;
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

export const Speaker: React.FC<SpeakerProps> = ({ name, avatar, subject }) => (
  <SpeakerBase>
    <Avatar image={avatar}></Avatar>
    <Name>{name}</Name>
    <p>{subject}</p>
  </SpeakerBase>
);
