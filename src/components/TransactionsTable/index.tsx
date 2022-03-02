import { Container } from "./styles";
import { useEffect } from "react";
export function TransactionsTable() {

    useEffect(() => {
        fetch("http://localhost:3000/api/transactions")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
            })

    }, [])

    return <Container>
        <table>
            <thead>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                </tr>
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