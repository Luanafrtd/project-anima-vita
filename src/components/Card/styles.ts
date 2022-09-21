import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 400px;
  margin-top: 26px;
  padding-top: 22px;
  padding-left: 26px;
  padding-right: 26px;
  margin-bottom: 26px;
  box-shadow: 0px 8.6px 12.9px -2.15px rgba(0, 0, 0, 0.1),
    0px 4.3px 8.6px -2.15px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
  box-shadow: 0px 8.6px 12.9px -2.15px rgba(0, 0, 0, 0.1),
    0px 4.3px 8.6px -2.15px rgba(0, 0, 0, 0.06);
`;

export const Title = styled.p``;

export const Description = styled.p`
  max-width: 50ch;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #616161;

  display: -webkit-box;
  -webkit-line-clamp: 4; // Quantidade de linhas
  -webkit-box-orient: vertical;
`;
