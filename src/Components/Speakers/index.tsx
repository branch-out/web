import React from 'react';
import faker from 'faker';
import { Speaker } from '../Speaker';
import { BaseGrid } from '../Basegrid';
import styled from 'styled-components';

type Person = {
  id: number;
  name: string;
  avatar: string;
  subject: string;
};

const fakeSpeakers: Person[] = [];
for (var i = 0; i < 6; i++) {
  fakeSpeakers.push({
    id: i,
    name: faker.name.findName(),
    subject: faker.company.catchPhrase(),
    avatar: faker.image.avatar(),
  });
}

const SpeakerBase = styled(BaseGrid)`
  grid-column: 1 / -1;
  padding: 1rem;
  margin: 0;
  list-style-type: none;
  align-items: baseline;
`;

export const Speakers: React.FC = () => (
  <SpeakerBase as="ul">
    {fakeSpeakers.map((s) => (
      <Speaker key={s.name} name={s.name} avatar={s.avatar} subject={s.subject} />
    ))}
  </SpeakerBase>
);
