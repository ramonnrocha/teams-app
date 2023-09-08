import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  padding: 24px 16px;
`;

export const Title = styled.Text`
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.GRAY_100}
`

