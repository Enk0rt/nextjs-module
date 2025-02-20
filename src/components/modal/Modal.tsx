import {Dispatch, FC, ReactNode, SetStateAction} from "react";
import './Modal.scss'

type ModalProps = {
    children: ReactNode,
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({children, isActive, setIsActive}) => {
    const clickToCloseAndReset = () => {
        setIsActive(false)
    }
    return (
        <div className={isActive ? "modal active" : "modal"}>
            <div className="modal__wrapper" onClick={clickToCloseAndReset}>
                <div className={"modal__content"} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;