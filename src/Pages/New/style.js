import styled from "styled-components";

export  const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 105px auto;
   grid-template-areas: 
   "header"
   "content";



   > main {
      grid-area: content;
      overflow-y: auto;
   }

   .rating {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      margin-bottom: 40px;
   }

   .tags {
      display: flex;
      gap: 24px;
      align-items: center;
      flex-wrap: wrap;
      padding: 16px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border-radius: 8px;
   }
`;

export const Form = styled.form`
   max-width: 1490px;
   margin: 40px auto;

   > h1 {
      margin-block: 45px 40px;
      font-weight: 500;
   }

   a {
         font-size: 20px;
         color : ${({ theme }) => theme.COLORS.PINK_200};
         font-weight: 200;
   }

`;