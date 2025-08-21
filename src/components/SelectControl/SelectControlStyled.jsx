// SelectControlStyled.js
import styled from "styled-components";

export const DropdownStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }

  .dropdown {
    position: relative;
    width: 200px;
  }

  .dropdown-toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    border: 1px solid #58419c;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
    overflow-x: auto;
  }

  .dropdown-toggle:hover {
    background: #f0ecff;
    width: 100%;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 4px;
    background: #ede9f6;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    list-style: none;
    padding: 4px 0;
  }

  .dropdown-menu li {
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .dropdown-menu::-webkit-scrollbar {
    display: none;
  }
  .dropdown-menu {
    -ms-overflow-style: none;
  }
  .dropdown-toggle::-webkit-scrollbar {
    display: none;
  }
  .dropdown-toggle {
    -ms-overflow-style: none;
  }
  .dropdown-menu li:hover {
    background: #58419c;
    color: white;
    max-width: 100%;
  }
`;
