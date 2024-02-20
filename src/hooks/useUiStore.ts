import { useAppDispatch, useAppSelector } from "../Redux/Hooks/TypedHooks"
import { onCloseDateModal, onOpenDateModal } from "../Redux/store/ui/uiSlice";


export const useUiStore = () => {

    const dispatch = useAppDispatch();
 
    const {
        isDateModalOpen
    } = useAppSelector(state => state.ui);

  
    const openDateModal = () =>{

        dispatch(onOpenDateModal());
    }

    const closeDateModal = () => {

        dispatch(onCloseDateModal());    
    }


    return { 
        isDateModalOpen,
        openDateModal,
        closeDateModal 
    }

}
