import { Container, Content, Button } from "./styles";
import LogoSvg from '../../assets/logo.svg'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={LogoSvg} alt="Dt Money logo" />
                <Button>Nova transação</Button>
            </Content>
        </Container>
    )
}