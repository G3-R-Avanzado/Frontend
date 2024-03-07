import React, { useState } from 'react';

const useModal = () => {
    const [open, setOpen] = useState(false)
    
    const ShowModal = () =>{
    setOpen(true)
    }
    const CloseModal =()=>{
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