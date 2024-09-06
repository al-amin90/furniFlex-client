import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/Product";

const Products = () => {
  const [category, setCategory] = useState("Rocking chair");
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("/Product.json") 
    .then((res) => setProducts(res.data))
 
  }, [])


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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            {
                products.slice(0,6)?.map(p => <Product key={p.id} p={p} />)
            }
        
        </div>
      </div>
    </div>
  );
};

export default Products;
