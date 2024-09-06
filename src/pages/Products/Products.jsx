import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Products = () => {
  const [category, setCategory] = useState("Rocking chair");

  const categorys = ["Rocking chair", "Side chair", "Lounge chair"];
  return (
    <div className="border-t mt-5 mb-24">
      <div className="max-w-[1440px] pt-5 md:pt-16 mx-auto px-6 lg:px-0 lg:w-[85%] flex flex-col lg:flex-row gap-11">
        {/* category part */}
        <div className="text-lg w-80 font-semibold pt-9 pr-7 border-r *:w-full *:cursor-pointer">
          {categorys.map((c, idx) => (
            <div key={idx}>
              <h6
                onClick={(e) => setCategory(e.target.innerText)}
                className={`border py-2 px-4 rounded-lg hover:shadow-lg duration-300  ${
                  category === c
                    ? "bg-black text-white"
                    : "bg-gray-100 text-[#717171]"
                } cursor-pointer hover:border-[#1E99F5] hover:text-[#1E99F5] `}
              >
                {c}
              </h6>

              {c === "Lounge chair" ? (
                ""
              ) : (
                <div className="divider h-1 border-[#F4F4F4] my-2"></div>
              )}
            </div>
          ))}
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-1 rounded-2xl border">
            <CardHeader shadow={false} floated={false} className="h-72">
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="">
              <Typography className="text-[#343434] my-2 font-semibold text-lg">
                Recliner Chair Wood
              </Typography>
              <div className="mb-2 flex items-center justify-between">
                <Typography className="text-[#343434] text-lg font-bold">
                  €299.00
                </Typography>
                <Typography className="text-[#ABABAB] line-through text-lg font-medium">
                  €350.00
                </Typography>
                <Typography className="text-[#B92E2E] text-lg font-semibold">
                  30% OFF
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal my-3 opacity-75"
              >
                It has a backrest that can be tilted back, and often a footrest
                extended
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                fullWidth={true}
                className="bg-[#202020] flex items-center justify-center gap-2 capitalize text-base text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.18982 12.7641L2.28715 7.37937C2.15067 6.56522 2.08243 6.15815 2.30095 5.89133C2.51948 5.62451 2.92111 5.62451 3.72439 5.62451H14.846C15.6492 5.62451 16.0508 5.62451 16.2694 5.89133C16.4879 6.15815 16.4196 6.56522 16.2832 7.37937L15.3805 12.7641C15.0813 14.5488 14.9317 15.4412 14.3209 15.9704C13.7102 16.4995 12.8297 16.4995 11.0688 16.4995H7.50152C5.74063 16.4995 4.86018 16.4995 4.24939 15.9704C3.63861 15.4412 3.48901 14.5488 3.18982 12.7641Z"
                    stroke="white"
                    strokeWidth="1.6875"
                  />
                  <path
                    d="M13.4062 5.62598C13.4062 3.3478 11.5594 1.50098 9.28125 1.50098C7.00307 1.50098 5.15625 3.3478 5.15625 5.62598"
                    stroke="white"
                    strokeWidth="1.6875"
                  />
                </svg>
                <span className="-mb-1">Add to Cart</span>
              </Button>
            </CardFooter>
          </Card>
  
        </div>
      </div>
    </div>
  );
};

export default Products;
