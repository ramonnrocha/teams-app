import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;
    background: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family:  ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color:  ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GREEN_700
}))`
    margin-right: 24px;
`