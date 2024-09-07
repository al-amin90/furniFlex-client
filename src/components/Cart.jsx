import { GoPlus } from "react-icons/go";
import { PiMinusLight } from "react-icons/pi";
import useCart from "../Hooks/useCart";

const Cart = ({ c, idx, length }) => {
  const { image, id, discountPrice, chairName, quantity } = c;
  const { deleteCart , updateQuantityOfProduct} = useCart();

  return (
    <div>
      <div className="flex  gap-4 justify-between">
        <div className="flex gap-5">
          <div className=" flex flex-col md:flex-row items-center gap-3">
            <div className="flex gap-1 border py-3 px-2 rounded-lg items-center">
              <button onClick={() => updateQuantityOfProduct(id, false)}>
                <PiMinusLight className="text-3xl ml-auto cursor-pointer text-[#939393]" />
              </button>
              <h5 className="font-semibold text-xl text-black">{quantity}</h5>
              <button onClick={() => updateQuantityOfProduct(id, true)}>
                <GoPlus className="text-3xl ml-auto cursor-pointer text-[#939393]" />
              </button>
            </div>
            <div>
              <img
                src={image}
                className="w-24 h-2w-24 p-2 bg-[#EAEAEA] rounded-md border"
                alt=""
              />
            </div>
          </div>
          <h3 className="text-base justify-start items-start font-bold text-[#434343]">
            {chairName}
          </h3>
        </div>
        <div className=" flex flex-col justify-between">
          <GoPlus
            onClick={() => deleteCart(id)}
            className="rotate-45 text-3xl ml-auto cursor-pointer text-[#939393]"
          />
          <p className="font-semibold text-xl text-black">€{discountPrice}</p>
        </div>
      </div>

      {idx + 1 === length ? (
        ""
      ) : (
        <div className="divider border-none border-[#F4F4F4] my-5"></div>
      )}
    </div>
  );
};

export default Cart;
