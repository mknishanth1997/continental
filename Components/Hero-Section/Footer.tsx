import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function FooterComp() {
  return (
    <Footer container>
      <FooterCopyright
        href="#"
        by="Continental Energy Enterprises"
        year={2022}
      />
      <FooterLinkGroup>
        <FooterLink href="#about">about</FooterLink>
        <FooterLink href="#solutions">solutions</FooterLink>
        <FooterLink href="#contact">contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
