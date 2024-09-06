import { HiOutlineInformationCircle } from "react-icons/hi2";
import chair from "../../assets/image 146.png";
import { GoPlus } from "react-icons/go";
import { PiMinusLight } from "react-icons/pi";
import { Button } from "@material-tailwind/react";
import Cart from "../../components/Cart";
import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";

const Carts = () => {
  const {cart} = useContext(CartContext)

  return (
    <div className="border-t mt-5 mb-24">
      <div className="max-w-[1440px] pt-9 mx-auto ">
        <div className="lg:w-[85%] w-[90%] flex flex-col lg:flex-row lg:flow-row mx-auto gap-20">
          {/* cards */}
          <div className="flex-1">
            <h3 className="font-semibold text-2xl">
              An overview of your order
            </h3>

            {/* single cards */}
            <div className="mt-9 flex flex-col gap p-6 bg-[#FAFAFA] rounded-xl">
         
              {
                cart?.map((c, idx) => <Cart key={idx} c={c} idx={idx} length={cart.length}/>)
              }
             

             

           
            </div>
          </div>

          {/* order details part */}
          <div>
            <h3 className="font-semibold text-2xl">Oder details</h3>
            <div className="">
              <div className="text-lg w-full md:w-80 mb-4 p-5 font-semibold mt-9  bg-[#FAFAFA] border rounded-xl *:w-full">
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
                    Estimated Tax{" "}
                    <HiOutlineInformationCircle className="text-xl" />
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
              <Button
                fullWidth={true}
                className="bg-black w-full font-medium text-base text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                <span className="-mb-1">Go to Checkout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
