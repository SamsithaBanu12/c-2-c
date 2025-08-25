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

  .message-command-wrapper {
    display: flex;
    flex-direction: column;
    height: 80vh;
    overflow: hidden;
    width: 53vw;
  }
  .message-command-wrapper .message-table-wrapper {
    flex: 1;
    overflow-y: auto;
  }
  .message-command-wrapper.split-view .message-table-wrapper {
    flex: 0 0 50%; 
  }
  .command-details {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    background: #F1F1F1;
    
  }
  .command-details-header {
    flex: 0 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
  }
  .command-details-body {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  .json-content {
    flex: 1;
    overflow-y: auto;
    height: 8%;
    background-color: #fff;
    padding: 10px;
    word-break: break-word;
    max-width: 50%;
    border-right: 1px solid #ccc;
    margin: 0px;
  }
  .close{
    background: none;
    border: none;
    cursor: pointer;
  }
  .json-content::-webkit-scrollbar{
    display: none;
  }
  .json-content{
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .message-table-wrapper::-webkit-scrollbar{
    display: none;
  }
  .message-table-wrapper{ 
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .parameter{
    margin-top: 10px;
    font-size: 16x;
    font-weight: 500;
    max-width: 50%;
  }
`;
