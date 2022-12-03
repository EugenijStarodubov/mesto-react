import { useEffect} from 'react';

export default function useClose(isOpen, handleClose, card) {

useEffect(() => {

	if(!isOpen) return;

	const handleEsc = (e) =>  (e.key === 'Escape') && handleClose(card || null);

	document.addEventListener('keydown', handleEsc);

	return () => document.removeEventListener('keydown', handleEsc);
},[isOpen]);
}
