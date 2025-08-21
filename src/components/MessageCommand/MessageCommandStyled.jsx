import styled from "styled-components";

export const MessageCommandStyled = styled.div`
  .message-header {
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    .message-title {
      font-size: 16px;
      font-weight: 500;
    }
  }

  td,
  th {
    width: max-content;
    padding: 8px 30px 8px 5px;
    border-bottom: 1px solid #e5e5e5;
  }

  table {
    border-collapse: collapse;
    width: max-content; 
  }

  .message-table-wrapper {
    max-height: 70vh;
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

  .message-table-wrapper::-webkit-scrollbar {
    display: none;
  }
  .message-table-wrapper {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }
`;
