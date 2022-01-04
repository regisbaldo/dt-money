import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img alt="Entradas" src={incomeImg} />
                </header>
                <strong>R$100,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img alt="Saídas" src={outcomeImg} />
                </header>
                <strong>- R$100,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img alt="Total" src={totalImg} />
                </header>
                <strong>R$100,00</strong>
            </div>
        </Container>
    )
}