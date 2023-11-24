import styled from '@emotion/styled';
export const PhoneBookForm = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding: 30px 20px;
  background-color: #f5f5fa;
  border-radius: 50px;
`;
export const InfoTable = styled.div`
  display: flex;
  gap: 20px;
  align-items: start;
  justify-content: space-between;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  color: rgb(72, 76, 122);
`;

export const Subtitle = styled.h2`
  font-size: 22px;
  color: rgb(72, 76, 122);
`;

export const NewContactForm = styled.div`
  text-align: center;
`;
export const ContactListForm = styled.div`
  text-align: center;
  width: 500px;
`;

export const Loader = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin: 50px auto;
  position: relative;
  background: rgb(72, 76, 122);
  box-shadow: -24px 0 rgb(72, 76, 122), 24px 0 rgb(72, 76, 122);
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;

  @keyframes shadowPulse {
    33% {
      background: rgb(72, 76, 122);
      box-shadow: -24px 0 #ff3d00, 24px 0 rgb(72, 76, 122);
    }
    66% {
      background: #ff3d00;
      box-shadow: -24px 0 rgb(72, 76, 122), 24px 0 rgb(72, 76, 122);
    }
    100% {
      background: rgb(72, 76, 122);
      box-shadow: -24px 0 rgb(72, 76, 122), 24px 0 #ff3d00;
    }
  }
`;
