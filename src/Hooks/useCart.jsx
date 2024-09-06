import { useContext } from 'react';
import { CartContext } from '../Providers/CartProvider';

const useCart = () => {
    const all = useContext(CartContext)
    return all
};

export default useCart;