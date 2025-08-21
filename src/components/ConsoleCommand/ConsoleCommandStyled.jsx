import styled from "styled-components";

export const ConsoleCommandStyled = styled.div`
  .console-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 26vw;

    .console-header-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid gray;
      padding-bottom: 10px;
    }
    .console-header {
      font-size: 16px;
      font-weight: 500;
    }
    .console-command-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;
      padding: 15px 0px 20px 0px;
      border-bottom: 1px solid gray;
    }
    .console-footer {
      .edit-button {
        background: #58419c;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 25px;
        cursor: pointer;
        font-size: 15px;
        margin-top: 15px;
      }
      .footer-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
        .text {
          font-size: 15px;
          font-weight: 500;
        }
      }
      td,
      th {
        width: 240px;
        padding: 8px 30px 8px 5px;
        border-bottom: 1px solid #e5e5e5;
      }

      table {
        border-collapse: collapse;
        width: max-content; 
      }

      .footer-table {
        max-height: 30vh;
        max-width: 50vw;
        overflow-y: auto;
        overflow-x: auto;
      }

      thead th {
        position: sticky;
        top: 0;
        background: #fff;
        z-index: 2;
        text-align: left;
      }

      .footer-table::-webkit-scrollbar {
        display: none;
      }
      .footer-table {
        -ms-overflow-style: none;
        scrollbar-width: none; 
      }
    }
  }
`;
