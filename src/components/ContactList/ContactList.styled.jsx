import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 0px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ListItemText = styled.p`
  width: 120px;
  font-size: 14px;
  color: rgb(72, 76, 122);
  text-align: left;
`;
export const ListItemLink = styled.a`
  width: 170px;
  font-size: 14px;
  color: rgb(72, 76, 122);
  text-decoration: none;
  text-align: left;
`;

export const ButtonDelete = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  color: rgb(72, 76, 122);
  padding: 10px;
  margin-left: 10px;
  border-radius: 50%;
  width: 40px;
  background-image: linear-gradient(180deg, #fff, #f5f5fa);
  box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%),
    0 1px 3px 0 rgb(93 100 148 / 20%);
  transition: all 0.2s ease-out;
  :hover {
    box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%),
      0 4px 6px 0 rgb(93 100 148 / 20%);
  }
`;

export const BtnName = styled.span`
  font-size: 16px;
  color: rgb(72, 76, 122);
`;
