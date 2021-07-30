import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  to: string;
  className: string;
}

const Link: FC<Props> = ({ to, className, children }) => (
  <RouterLink className={className} to={to} >
    {children}
  </RouterLink>
);

export default Link;
