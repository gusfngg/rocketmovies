import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   
   display: grid;
   grid-template-rows: 116px 1fr;
   grid-template-areas:
   "header"
   "content";

   background-color: ${({ theme}) => theme.COLORS.BACKGOUND_800};
`;

export const Content = styled.div`
   margin-top: 47px;

   grid-area: content;
   padding: 24px 123px;
   overflow-y: auto;

   > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 38px;

      h1 {
         font-size: 32px;
         font-weight: 400;
      }

      button {
         max-width: 207px;
      }
   }
`;