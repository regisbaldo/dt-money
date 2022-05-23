import { FormEvent } from "react";
import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import buttonClose from '../../assets/close.svg'
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState("deposit");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        console.log({
            title, type, amount, category
        });

    }

    Modal.setAppElement('#root');
    return (
        <Modal isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={onRequestClose}>
            <Container onSubmit={handleSubmit}>

                <button onClick={onRequestClose} className='react-modal-close'>
                    <img src={buttonClose} alt="Fechar modal" /></button>
                <h2>Cadastrar nova transação</h2>
                <input type="text" placeholder='Titulo'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input type="number" placeholder='Preço' value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))} />

                <TransactionTypeContainer>
                    <RadioBox activeColor="green" isActive={type === "deposit"} type='button' onClick={() => setType("deposit")} > <img src={incomeSvg} alt="Entrada" /> <span>Entrada</span> </RadioBox>
                    <RadioBox activeColor="red" isActive={type === "withdraw"} type='button' onClick={() => setType("withdraw")} > <img src={outcomeSvg} alt="Saída" /> <span>Saída</span> </RadioBox>

                </TransactionTypeContainer>

                <input type="text" placeholder='Categoria' value={category}
                    onChange={(event) => setCategory(event.target.value)} />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )

}