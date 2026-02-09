import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/gallery">Gallery</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: #f0f0f0;
  padding: 1rem 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #007bff;
    text-decoration: underline;
  }
`;
