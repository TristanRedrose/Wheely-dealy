import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../../Context/StoresContext";


const Modal: React.FC<PropsWithChildren> = observer(() => {

    const {deleteListingStore, modalStore, authStore} = useRootStore();
    const {isActive, closeModal, modalText, buttonText, listingId} = modalStore;
    const {logOut} = authStore;
    const{deleteListing} = deleteListingStore;

    return ReactDOM.createPortal(
        <div className={!isActive ? "modal" : "modal-on"}>
            <div className="modal-overlay" onClick={() => closeModal()}/>
            <div className="modal-box">
            <h4>{modalText}</h4>
                <div className="modal-button-box">
                    <div className="modal-button" onClick={()=> closeModal()}>
                        Return
                    </div>
                    {buttonText === "Logout" &&
                        <div className="modal-button" onClick={()=> {logOut(); closeModal()}}>
                            {buttonText}
                        </div>
                    }
                    {buttonText === "Delete" &&
                        <div className="modal-button" onClick={()=> {deleteListing(listingId); closeModal()}}>
                            {buttonText}
                        </div>
                    }
                </div>
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    )
})

export default Modal;