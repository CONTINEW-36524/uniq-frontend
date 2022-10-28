import styles from './QRModal.css';
import QRCODE from "react-qr-code";

const QRModal = (props) => {
    const { setModalOpen, ip} = props
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.qrcontainer}>
            <button className={styles.qrclose} onClick={closeModal}>
                X
            </button>
            <p></p>
            <QRCODE value={ip} />
        </div>
    );
}
export default QRModal;
