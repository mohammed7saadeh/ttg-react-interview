/** @format */

import { useCallback, useState } from 'react';

export const useModalActions = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        openModal,
        closeModal,
        isOpen,
    };
};
