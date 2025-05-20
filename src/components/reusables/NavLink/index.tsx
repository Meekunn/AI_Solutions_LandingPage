import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import type { LinkProps } from "@chakra-ui/react";

interface INavLink extends LinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children, ...chakraProps }: INavLink) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const variant = isActive ? "activeNavlink" : "navlink";

  return (
    <ChakraLink asChild variant={variant} {...chakraProps}>
      <ReactRouterLink to={to}>{children}</ReactRouterLink>
    </ChakraLink>
  );
};

export default NavLink;
