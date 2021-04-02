import styled from "styled-components";

export const NavBarStyled = styled.header`
  display: flex;
  align-items: center;
  background: var(--cultured);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
      cursor: pointer;
      svg {
        transition: all 0.15s linear;
        &:hover {
          fill-opacity: 0.75;
        }
      }
      display: none;
      margin-right: 0.15rem;
    }
    @media only screen and (max-width: 600px) {
      .menu {
        display: block !important;
      }
    }
    .brand {
      svg {
        height: 3rem;
        transform: scale3d(0.8, 0.8, 0.8);
        transform: rotate(-15deg);
        transition: all 0.25s ease;
        &:hover {
          transform: scale3d(1, 1, 1);
        }
      }
      cursor: pointer;
    }
  }
  .buttons {
    margin-left: auto;
  }
`;
