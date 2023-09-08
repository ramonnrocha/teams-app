import { Container, Title, Icon } from './styles'

type Props = {
    title: string
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container>
            <Icon />
            <Title>{title}</Title>
        </Container>
    )
}