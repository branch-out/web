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
  user-select: none;
  ${only('phone')} {
    color: ${({ theme }) => theme.colors.primary};
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
  overflow: none;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:last-of-type {
    margin-right: 0;
  }

  ${only('phone')} {
    display: block;
    padding: 0.5rem 1rem;
  }

  a,
  label {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};

    ${only('phone')} {
      user-select: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  a {
    ${only('phone')} {
      display: block;
    }
  }

  label {
    font-size: 1.25rem;
    line-height: 60px;
  }
`;

const CloseHamburger = styled(MenuItem)`
  display: none;
  text-align: right;

  ${only('phone')} {
    display: block;
  }
`;

const Menu = styled.ul`
  grid-column: 3 / -1;
  text-align: right;

  ${only('phone')} {
    position: absolute;
    position: fixed;
    width: 0;
    left: 100vw;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: left;
    background: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

const HamburgerToggle = styled.input`
  display: none;

  &:checked ~ ${Menu} {
    visibility: visible;
    display: block;
    transition: 0.2s ease-out;
    left: 0;
    width: 100vw;
  }
`;

export const Navigation: React.FC = () => (
  <NavigationBase as="nav">
    <HeaderImage src={Logo} alt="Branch Out" />

    <HamburgerMenu htmlFor="hamburger">&#9776;</HamburgerMenu>
    <HamburgerToggle type="checkbox" id="hamburger" />
    <Menu>
      <CloseHamburger>
        <label htmlFor="hamburger">Close</label>
      </CloseHamburger>
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
