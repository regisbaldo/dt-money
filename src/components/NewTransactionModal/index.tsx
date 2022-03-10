import Modal from 'react-modal';
import { Container } from './styles';
import buttonClose from '../../assets/close.svg'

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

                <button onClick={onRequestClose} className='react-modal-close'>
                    <img src={buttonClose} alt="Fechar modal" /></button>
                <h2>Cadastrar nova transação</h2>
                <input type="text" placeholder='Titulo' />
                <input type="text" placeholder='Valor' />
                <input type="text" placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )

}