import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: flex-start;


  svg {
    color: ${({ theme }) => theme.COLORS.PINK_200};
    width: 20px;
    height: 20px;
  }
`