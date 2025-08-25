import styled from "styled-components";

export const CommandSenderStyled = styled.div`
  .commandSenderWrapper {
    display: flex;
    flex-direction: column;
    width: 84vw;
    border-radius: 8px;
    background: white;
    padding: 20px;
    color: black;
    .command-sender-header {
      font-size: 18px;
      font-weight: 600;
    }
    .tabs-wrapper {
      display: flex;
      flex-direction: row;
      gap: 15px;
      margin: 15px 0;
    }
    .tab {
      font-size: 15px;
      color: gray;
      font-weight: 500;
      cursor: pointer;
    }
    .active {
      color: #ff0252;
      border-bottom: 2px solid #ff0252;
      padding-top: 7px;
      padding-bottom: 5px;
    }
    .vertical {
      border: 0.1px solid gray;
      width: 0.1px;
      height: 80vh;
      margin: 10px;
    }
    .command-sender-bottom {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;
