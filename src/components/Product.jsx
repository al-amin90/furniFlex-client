import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { CartContext } from "../Providers/CartProvider";

const Product = ({p}) => {
  const {addCart}  = useContext(CartContext)
    const {chairName,description,discountPercent,discountPrice ,image, price} = p;

  return (
    <div>
      <Card className="p-1 rounded-2xl border">
        <CardHeader shadow={false} floated={false} className="h-72">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="">
          <Typography className="text-[#343434] my-2 font-semibold text-lg">
            {chairName}
          </Typography>
          <div className="mb-2 flex items-center justify-between">
            <Typography className="text-[#343434] text-lg font-bold">
              €{discountPrice}
            </Typography>
            <Typography className="text-[#ABABAB] line-through text-lg font-medium">
              €{price}
            </Typography>
            <Typography className="text-[#B92E2E] text-lg font-semibold">
              {discountPercent}% OFF
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal my-3 opacity-75"
          >
            {description.slice(0, 60)}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            fullWidth={true}
            onClick={() => addCart(p)}
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
  );
};

export default Product;

Product.propTypes = {
    p: PropTypes.object,
    price: PropTypes.number,
    discountPrice: PropTypes.number,
    discountPercent: PropTypes.number,
    chairName: PropTypes.number,
}
