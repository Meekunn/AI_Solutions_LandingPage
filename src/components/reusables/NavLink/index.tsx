import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import type { LinkProps } from "@chakra-ui/react";

interface INavLink extends LinkProps {
  to: string;
  children: React.ReactNode;
  variant?:
    | "underline"
    | "plain"
    | "navlink"
    | "activeNavlink"
    | "footerNavlink"
    | "activeFooterNavlink";
}

const NavLink = ({ to, variant, children, ...chakraProps }: INavLink) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  let selectedVariant: INavLink["variant"];
  if (variant) {
    if (variant == "navlink") {
      selectedVariant = isActive ? "activeNavlink" : "navlink";
    } else if (variant == "footerNavlink") {
      selectedVariant = isActive ? "activeFooterNavlink" : "footerNavlink";
    }
  }
  // const variant = isActive ? "activeNavlink" : "navlink";

  return (
    <ChakraLink asChild variant={selectedVariant} {...chakraProps}>
      <ReactRouterLink to={to}>{children}</ReactRouterLink>
    </ChakraLink>
  );
};

export default NavLink;
