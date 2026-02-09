import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledNav>
      <StyledLink href="/" $isActive={router.pathname === "/"}>
        Spotlight
      </StyledLink>
      <StyledLink href="/gallery" $isActive={router.pathname === "/gallery"}>
        Gallery
      </StyledLink>
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
  color: ${(props) => (props.$isActive ? "#007bff" : "#333")};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #007bff;
    text-decoration: underline;
  }
`;
