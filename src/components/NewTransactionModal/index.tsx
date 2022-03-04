import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    Modal.setAppElement('#root');
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}>
            Aberto
        </Modal>
    )

}