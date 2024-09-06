import { HiOutlineInformationCircle } from "react-icons/hi2";

const Cart = () => {
  return (
    <div className="border-t mt-5">
      <div className="max-w-[1440px] pt-9 mx-auto lg:w-[85%] flex gap-11">
        {/* cards */}
        <div className="flex-1">
          <h3 className="font-semibold text-2xl">An overview of your order</h3>
        </div>

        {/* category part */}
        <div>
          <h3 className="font-semibold text-2xl">Oder details</h3>
          <div className="text-lg w-80  font-semibold mt-9 p-5 bg-[#FAFAFA] border rounded-xl *:w-full">
            <div className="flex justify-between text-[#656565] font-normal text-lg">
              <h5>Subtotal</h5>
              <p>€ 1071.00</p>
            </div>
            <div className="flex mt-2 justify-between text-[#656565] font-normal text-lg">
              <h5>Shipping</h5>
              <p>Free</p>
            </div>
            <div className="flex border-b pb-4 mt-2 justify-between text-[#656565] font-normal text-lg">
              <h5 className="flex items-center gap-2">
                Estimated Tax <HiOutlineInformationCircle className="text-xl" />
              </h5>
              <p>€ -</p>
            </div>
            <div>
            <div className="flex mt-1 pt-4 justify-between text-[#656565] font-semibold text-xl">
              <h5 className="flex text-[#656565] items-center gap-2">
              Total
              </h5>
              <p className="text-black">€ 1071.00</p>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
