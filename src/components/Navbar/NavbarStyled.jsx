import styled from "styled-components";

export const NavbarStyled = styled.div`
  .navbarWrapper {
    background-color: rgb(10, 16, 55);
    border-radius: 8px;
    padding: 10px 15px;
    margin: 15px;
    box-shadow: 0 10px 15px -3px rgb(31 41 55), 0 4px 6px -4px rgb(31 41 55);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    .button-wrapper {
      background: white;
      color: black;
      padding: 8px 10px;
      width: 170px;
    }

    .left-nav {
      display: flex;
      flex-direction: row;
      gap: 15px;
      align-items: center;
      //   justify-content: center;
    }
    .bar-image {
      cursor: pointer;
    }
    .logo-image {
      width: 110px;
      height: 60px;
    }
  }
`;
