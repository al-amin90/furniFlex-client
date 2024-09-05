import bgImg from "../assets/authontication.png";
import logo from "../assets/authLogo.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SingInWithSocialMedia from "../components/SingInWithSocialMedia";

const SingUp = () => {
  const [isShowed, setIsShowed] = useState(true);

  const handleSignUp = () => {};

  return (
    <div className="flex md:flex-row flex-col">
      {/* sing in from */}
      <div className="flex-1 my-auto">
        <div className="max-w-[1920px] mx-auto  md:w-[85%] pb-10">
          <div className=" rounded-xl lg:shadow mt-10 w-full md:w-[80%] bg-[#FAFAFA] mx-auto">
            <div className="w-full flex-col-reverse lg:flex-row flex">
              <div className="w-full p-5 rounded-md">
                <div>
                  <div className="py-4 mt-3 text-center">
                    <h3 className="text-2xl font-semibold text-black">
                      Welcome To
                    </h3>
                    <h2 className="text-4xl font-semibold text-black">
                      Furni <span className="text-[#1C97F7]">Flex</span>
                    </h2>
                    <p className="text-gray-600 text-base mt-2 font-medium">
                      Signup for purchase your desire products
                    </p>
                  </div>

                  <form
                    onSubmit={handleSignUp}
                    className="space-y-3 mt-4 w-full "
                  >
                    <div className="flex justify-between gap-3">
                      <div className="w-full">
                        <fieldset className="border bg-white border-solid border-gray-300 p-2 w-full rounded">
                          <p className="text-sm md:text-base text-gray-500">
                          First name (optional)
                          </p>
                          <input
                            type="firstName"
                            name="firstName"
                            id=""
                            placeholder="Your First Name"
                            className="text-base pt-1 w-full placeholder:text-black text-black focus:outline-0"
                          />
                        </fieldset>
                      </div>
                      <div className="w-full">
                        <fieldset className="border bg-white border-solid border-gray-300 p-2 w-full rounded">
                          <p className="text-sm md:text-base text-gray-500">
                          First name (optional)
                          </p>
                          <input
                            type="secondName"
                            name="secondName"
                            id=""
                            placeholder="Your Last Name"
                            className="text-sm md:text-base pt-1 w-full placeholder:text-black text-black focus:outline-0"
                          />
                        </fieldset>
                      </div>
                    </div>

                    <div>
                      <fieldset className="border bg-white border-solid border-gray-300 p-2 w-full rounded">
                        <p className="text-sm md:text-base text-gray-500">Email address</p>
                        <input
                          type="email"
                          name="email"
                          id=""
                          placeholder="Enter your email"
                          className="text-sm md:text-base pt-1 w-full placeholder:text-black text-black focus:outline-0"
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset className="border relative border-solid border-gray-300 p-2 w-full rounded">
                        <p className="text-sm md:text-base text-gray-500">Password</p>
                        <input
                          type={isShowed ? "password" : "text"}
                          name="password"
                          id=""
                          placeholder="Enter your password"
                          className="text-sm md:text-base pt-1 w-full placeholder:text-black text-black focus:outline-0"
                        />
                        <div
                          onClick={() => setIsShowed(!isShowed)}
                          className="absolute right-4 text-xl top-1/2 -translate-y-1/2"
                        >
                          {isShowed ? (
                            <FaEyeSlash className="text-gray-500 text-2xl"></FaEyeSlash>
                          ) : (
                            <FaEye className="text-gray-500 text-2xl" />
                          )}
                        </div>
                      </fieldset>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-[#1E99F5] cursor-pointer text-sm md:text-base">
                        Forgot Password
                      </p>
                    </div>

                    <div className="flex gap-3 -mt-2 text-black">
                      <input
                        type="checkbox"
                        className="input-accent"
                        name="check"
                        id="check"
                      />
                      <label htmlFor="check" className="text-sm md:text-base">
                        I agree to the{" "}
                        <span className="underline">Terms & Policy</span>
                      </label>
                    </div>

                    <button className="py-4 w-full hover:shadow-xl px-5 text-lg text-white bg-black rounded-md">
                      Signup
                    </button>

                    <div className="  border-b text-center">
                      <div className="leading-none text-black px-2 inline-block text-sm md:text-base bg-white tracking-wide font-medium  transform translate-y-3/4">
                        or
                      </div>
                    </div>
                  </form>
                  <SingInWithSocialMedia></SingInWithSocialMedia>

                  <div className="text-black/90 text-center font-semibold text-sm md:text-base">
                    Have an account?
                    <Link
                      to="/singIn"
                      className=" font-medium ml-1 text-[#0F3DDE]"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right img part */}
      <div className="flex-1 bg-[#020306] relative h-fit">
        <img className=" object-cover w-full" src={bgImg} alt="" />
        <div className="absolute  text-xs w-full top-1/2 left-1/2 -translate-y-1/2 text-center -translate-x-1/2 text-white">
          <img className="mx-auto w-[25%] mb-1 " src={logo} alt="" />
          <p className="font-thin w-[90%] md:w-1/2 mx-auto">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
