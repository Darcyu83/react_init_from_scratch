import styled from "@emotion/styled";
import React from "react";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-rows: auto 1fr auto;
  grid-auto-flow: column;
  overflow: hidden;
  /* place-items: center; */
  border: 2px solid teal;
  ::-webkit-scrollbar {
    display: none;
  }

  & * {
    /* margin: 5px; */
    box-sizing: border-box;
    border: 1px solid teal;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TableContainer = styled.div`
  display: grid;

  grid-template-rows: auto 1fr;
  overflow: hidden;
`;
const TableBodyContainer = styled.div`
  overflow: scroll;
`;

function SearchResult() {
  return (
    <Container style={{}}>
      <h1>Title</h1>
      <TableContainer>
        <h1>SearchResult header</h1>

        <TableBodyContainer>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body10</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body20</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body</h2>
          <h2>SearchResult body30</h2>
        </TableBodyContainer>
      </TableContainer>
      <h3> -SearchResult footer</h3>
    </Container>
  );
}

export default SearchResult;
