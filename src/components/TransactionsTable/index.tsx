import { Container } from "./styles";

export function TransactionsTable() {
    return <Container>
        <table>
            <thead>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </thead>
            <tbody>
                <tr>
                    <td >Desevolvimento de website</td>
                    <td className="deposit">R$1.000</td>
                    <td>20/10/2022</td>
                </tr>
                <tr>
                    <td >Contas</td>
                    <td className="withdraw">R$2.000</td>
                    <td>20/10/2022</td>
                </tr>

            </tbody>
        </table>
    </Container>
}