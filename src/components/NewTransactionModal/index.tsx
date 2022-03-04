import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    Modal.setAppElement('#root');
    return (
        <Modal isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={onRequestClose}>
            <Container>
                <h2>Cadastrar nova transação</h2>
                <input type="text" placeholder='Titulo' />
                <input type="text" placeholder='Valor' />
                <input type="text" placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )

}