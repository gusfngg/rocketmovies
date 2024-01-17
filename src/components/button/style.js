import styled from "styled-components";

export const Container = styled.button`
   width: 100%;
   background-color: ${({theme}) => theme.COLORS.PINK_200};
   color: ${({theme}) => theme.COLORS.BACKGOUND_600};

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;

   height: 48px;
   border: 0;
   padding: 0 16px;
   border-radius: 10px;
   font-weight: 500;

   &:disabled {
      opacity: 0.5;
   }
`