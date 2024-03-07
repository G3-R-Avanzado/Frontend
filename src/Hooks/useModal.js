import React, { useState } from 'react';

const useModal = () => {
    const [open, setOpen] = useState(false)
    
    const ShowModal = (event) =>{
    setOpen(true)
    }
    const CloseModal =(event)=>{
    setOpen(false)
    }
    return {
        ...open,
        open,
        ShowModal,
        CloseModal
    };
};

export default useModal;