import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../services/api";
export function TransactionsTable() {

    useEffect(() => {
        api.get("/transactions")
            .then((response) => {
                console.log(response.data);
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