import { useState } from "react";

const Products = () => {
const [category, setCategory] = useState("Rocking chair")

  const categorys = ["Rocking chair", "Side chair", "Lounge chair"];
  return (
    <div className="border-t mt-5">
      <div className="max-w-[1440px] pt-16 mx-auto lg:w-[85%] flex gap-11">
        <div className="text-lg w-56 font-semibold pt-9 pr-7 border-r *:w-full *:cursor-pointer">
          {categorys.map((c, idx) => (
            <div key={idx}>
              <h6
                onClick={(e) => setCategory(e.target.innerText)}
                className={`border py-2 px-4 rounded-lg hover:shadow-lg duration-300  ${
                  category === c ? "bg-black text-white" : "bg-gray-100"
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
        <div>cards</div>
      </div>
    </div>
  );
};

export default Products;
