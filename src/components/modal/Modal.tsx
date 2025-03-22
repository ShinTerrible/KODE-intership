import { SyntheticEvent, useEffect } from "react"
import { ModalUI } from "../UI/modal/ModalUI"
import { useSelector, useDispatch } from '../../store/store'
import { getIsModalOpen, userAction } from "../../slices/users"

export const Modal = () => {
const modalActive = useSelector(getIsModalOpen)
const dispatch = useDispatch()

    const onCloseModal = () => {
         dispatch(userAction.setModal(false))
    }

    const onSort = (e: SyntheticEvent) => {
        dispatch(userAction.onSort(e.currentTarget.getAttribute('value') as string))
        onCloseModal()
    }

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
          e.key === 'Escape' && onCloseModal();
        };
    
        document.addEventListener('keydown', handleEsc);
        return () => {
          document.removeEventListener('keydown', handleEsc);
        };
      }, [onCloseModal]);

 
    return <ModalUI onSort={onSort} display={modalActive} onClose={onCloseModal}/>
} 
