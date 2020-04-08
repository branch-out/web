import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import { BaseGrid } from '../Basegrid';
import { only } from 'styled-breakpoints';

const HeaderImage = styled.img`
  grid-column: 1 / 3;
  height: 90px;
  margin: 1rem 0 1rem 1rem;

  ${only('phone')} {
    height: 40px;
  }
`;

const NavigationBase = styled(BaseGrid)`
  grid-column: 1 / -1;
`;

const HamburgerMenu = styled.label`
  display: none;
  ${only('phone')} {
    margin-right: 1rem;
    display: block;
    grid-column-end: -1;
    font-size: 2.25rem;
    text-align: right;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  ${only('phone')} {
    display: block;
    padding: 0.5rem 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};

    ${only('phone')} {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Menu = styled.ul`
  grid-column: -4 / -1;
  text-align: right;

  ${only('phone')} {
    text-align: left;
    background: ${({ theme }) => theme.colors.tertiary};
    padding: 0;
    margin: 0;
    list-style-type: none;
    grid-column: 1 / -1;
    display: none;
  }
`;

const HamburgerToggle = styled.input`
  display: none;
  &:checked ~ ${Menu} {
    display: block;
  }
`;

export const Navigation: React.FC = () => (
  <NavigationBase as="nav">
    <HeaderImage src={Logo} alt="Branch Out" />

    <HamburgerMenu htmlFor="hamburger">&#9776;</HamburgerMenu>
    <HamburgerToggle type="checkbox" id="hamburger" />
    <Menu>
      <MenuItem>
        <a href="index.html">Call for speakers</a>
      </MenuItem>
      <MenuItem>
        <a href="about.html">Speakers</a>
      </MenuItem>
      <MenuItem>
        <a href="tech.html">Program</a>
      </MenuItem>
    </Menu>
  </NavigationBase>
);
