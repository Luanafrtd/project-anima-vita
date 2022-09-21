import styled from "styled-components";

export const Container = styled.div`
  gap: 8px;
  display: flex;
  margin-top: 26px;
  margin-bottom: 26px;
  justify-content: center;
`;

interface PaginationButtonProps {
  isSelected?: boolean;
  widthoutBorder?: boolean;
}

export const PaginationButton = styled.button<PaginationButtonProps>`
  color: gray;
  height: 30px;
  font-size: 14px;
  min-width: 30px;
  border-radius: 4px;
  border-color: #dcdcdc;
  background-color: transparent;
  border-width: ${({ isSelected }) => (isSelected ? "3px" : "1px")};
  cursor: ${({ widthoutBorder }) => (widthoutBorder ? "default" : "pointer")};
  border-style: ${({ widthoutBorder }) => (widthoutBorder ? "none" : "solid")};
`;
