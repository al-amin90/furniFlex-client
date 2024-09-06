import { HiOutlineInformationCircle } from "react-icons/hi2";
import chair from "../../assets/image 146.png";
import { GoPlus } from "react-icons/go";
import { PiMinusLight } from "react-icons/pi";
import { Button } from "@material-tailwind/react";

const Carts = () => {
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
              <div className="flex  gap-4 justify-between">
                <div className="flex gap-5">
                  <div className=" flex flex-col md:flex-row items-center gap-3">
                    <div className="flex gap-1 border py-3 px-2 rounded-lg items-center">
                      <button>
                        <PiMinusLight className="text-3xl ml-auto cursor-pointer text-[#939393]" />
                      </button>
                      <h5 className="font-semibold text-xl text-black">1</h5>
                      <button>
                        <GoPlus className="text-3xl ml-auto cursor-pointer text-[#939393]" />
                      </button>
                    </div>
                    <div>
                      <img
                        src={chair}
                        className="w-24 h-2w-24 p-2 bg-[#EAEAEA] rounded-md border"
                        alt=""
                      />
                    </div>
                  </div>
                  <h3 className="text-base justify-start items-start font-bold text-[#434343]">
                    Recliner Chair Steel
                  </h3>
                </div>
                <div className=" flex flex-col justify-between">
                  <GoPlus className="rotate-45 text-3xl ml-auto cursor-pointer text-[#939393]" />
                  <p className="font-semibold text-xl text-black">€299.00</p>
                </div>
              </div>

              <div className="divider border-none border-[#F4F4F4] my-5"></div>

              {/* 2 card */}
              <div className="flex  gap-4 justify-between">
                <div className="flex gap-5">
                  <div className=" flex flex-col md:flex-row items-center gap-3">
                    <div className="flex gap-1 border py-3 px-2 rounded-lg items-center">
                      <button>
                        <PiMinusLight className="text-3xl ml-auto cursor-pointer text-[#939393]" />
                      </button>
                      <h5 className="font-semibold text-xl text-black">1</h5>
                      <button>
                        <GoPlus className="text-3xl ml-auto cursor-pointer text-[#939393]" />
                      </button>
                    </div>
                    <div>
                      <img
                        src={chair}
                        className="w-24 h-2w-24 p-2 bg-[#EAEAEA] rounded-md border"
                        alt=""
                      />
                    </div>
                  </div>
                  <h3 className="text-base justify-start items-start font-bold text-[#434343]">
                    Recliner Chair Steel
                  </h3>
                </div>
                <div className=" flex flex-col justify-between">
                  <GoPlus className="rotate-45 text-3xl ml-auto cursor-pointer text-[#939393]" />
                  <p className="font-semibold text-xl text-black">€299.00</p>
                </div>
              </div>
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
