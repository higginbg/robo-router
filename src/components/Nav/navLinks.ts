import { NavLinkProps } from 'react-router-dom';

import { Role } from '../../models/roles';

type Label = 'Dashboard' | 'Robots' | 'Destroy';

interface Link extends NavLinkProps{
  label: Label;
  icon: string;
  roles?: Role[];
}

export const navLinks: Link[] = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: 'fas fa-tachometer-alt',
    exact: true,
    roles: ['User', 'Supreme ruler'],
  },
  {
    label: 'Robots',
    to: '/robots',
    icon: 'fas fa-robot',
    roles: ['User', 'Supreme ruler'],
  },
  {
    label: 'Destroy',
    to: '/destruction',
    icon: 'fas fa-bomb',
    roles: ['Supreme ruler'],
  },
];
