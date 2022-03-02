import { Container, Content, Button } from "./styles";
import LogoSvg from '../../assets/logo.svg'

interface HeaderProps {
    onOpenModal: () => void
}
export function Header({ onOpenModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={LogoSvg} alt="Dt Money logo" />
                <Button onClick={onOpenModal}>Nova transação</Button>
            </Content>
        </Container>
    )
}