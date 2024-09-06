import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SingInWithSocialMedia = () => {
  const {loginWithGoogle} = useAuth()
  const navigate = useNavigate();

  const loginSocial = () => {
    loginWithGoogle()
    .then(result => {
      console.log(result.user);
      navigate("/products")
    })
  };

  return (
    <div className="min-w-full flex mt-6 items-center flex-wrap md:flex-nowrap gap-4 mb-4">
      <button
        onClick={() => loginSocial("googleWithSingIn")}
        className="w-full font-bold border shadow-sm rounded-lg py-3 bg-white text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >
        <div className="bg-white p-2 rounded-full">
          <svg className="w-4" viewBox="0 0 533.5 544.3">
            <path
              d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
              fill="#4285f4"
            />
            <path
              d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
              fill="#34a853"
            />
            <path
              d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
              fill="#fbbc04"
            />
            <path
              d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
              fill="#ea4335"
            />
          </svg>
        </div>
        <span className="ml-1 text-sm">Sign In with Google</span>
      </button>

      <button
        onClick={() => loginSocial("githubWithSingIn")}
        className="w-full font-bold border shadow-sm rounded-lg py-3 bg-white text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >
        <div className="bg-white p-1 rounded-full">
          <svg
            className="w-5"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_8299)">
              <path
                d="M17.4864 0.32119C16.1252 0.413065 14.6683 1.22307 13.7664 2.31619C12.977 3.27807 12.3152 4.68994 12.5664 6.15619C12.3414 6.08682 12.137 6.07932 11.8914 5.99119C11.222 5.75307 10.457 5.49619 9.5064 5.49619C7.61828 5.49619 5.68515 6.61932 4.4664 8.49619C2.69265 11.2224 3.0489 16.0206 5.7414 20.1212C6.21578 20.8412 6.7689 21.6268 7.4514 22.2512C8.1339 22.8756 8.9589 23.3518 9.9264 23.3612C10.7533 23.3706 11.3289 23.0949 11.8464 22.8662C12.3639 22.6374 12.8458 22.4349 13.7514 22.4312C13.757 22.4312 13.7608 22.4312 13.7664 22.4312C14.6683 22.4237 15.1352 22.6224 15.6414 22.8512C16.1477 23.0799 16.7177 23.3687 17.5464 23.3612C18.5327 23.3537 19.3708 22.8137 20.0664 22.1462C20.762 21.4787 21.3339 20.6593 21.8064 19.9412C22.4833 18.9099 22.7552 18.3474 23.2764 17.1962C23.3308 17.0762 23.3327 16.9374 23.2802 16.8156C23.2295 16.6937 23.1302 16.5981 23.0064 16.5512C21.3002 15.9062 20.327 14.3968 20.1864 12.8012C20.0458 11.2056 20.7208 9.56307 22.4214 8.63119C22.547 8.56369 22.6352 8.44557 22.6652 8.30682C22.6933 8.16807 22.6595 8.02182 22.5714 7.91119C21.3508 6.39432 19.6333 5.49619 17.9514 5.49619C16.8789 5.49619 16.0914 5.74932 15.4464 5.99119C15.3395 6.03244 15.2608 6.02869 15.1614 6.06619C15.8158 5.72119 16.3933 5.24307 16.8264 4.68619C17.6139 3.67557 18.2214 2.23744 17.9964 0.72619C17.9589 0.47869 17.7358 0.30244 17.4864 0.32119ZM16.9764 1.46119C16.9445 2.43057 16.6127 3.37932 16.0614 4.08619C15.4839 4.82869 14.5127 5.34244 13.5714 5.49619C13.5883 4.56432 13.9558 3.59869 14.5164 2.91619C15.1052 2.20369 16.0802 1.68994 16.9764 1.46119ZM9.5064 6.45619C9.9264 6.45619 10.9014 6.65682 11.5614 6.89119C12.2214 7.12557 12.917 7.40119 13.7364 7.40119C14.537 7.40119 15.1708 7.12369 15.7914 6.89119C16.412 6.65869 17.0308 6.45619 17.9514 6.45619C19.1533 6.45619 20.4527 7.08057 21.4764 8.16619C19.8377 9.32307 19.0708 11.1268 19.2264 12.8762C19.382 14.6443 20.447 16.3224 22.1964 17.1962C22.1939 17.2016 22.1914 17.2071 22.1889 17.2125C21.8143 18.0284 21.5646 18.5724 21.0114 19.4162C20.552 20.1156 20.0064 20.8806 19.4064 21.4562C18.8064 22.0318 18.1708 22.3956 17.5314 22.4012C16.9145 22.4068 16.5639 22.2231 16.0314 21.9812C15.4989 21.7393 14.8108 21.4618 13.7514 21.4712C12.6939 21.4768 11.9964 21.7431 11.4564 21.9812C10.9164 22.2193 10.562 22.4068 9.9414 22.4012C9.28515 22.3956 8.67578 22.0768 8.0964 21.5462C7.51703 21.0156 6.9939 20.2918 6.5364 19.5962C4.0164 15.7562 3.8139 11.2449 5.2614 9.02119C6.32265 7.38807 9.0864 6.45619 9.5064 6.45619Z"
                fill="black"
              />
              <path
                d="M9.5064 6.45619C9.9264 6.45619 10.9014 6.65682 11.5614 6.89119C12.2214 7.12557 12.917 7.40119 13.7364 7.40119C14.537 7.40119 15.1708 7.12369 15.7914 6.89119C16.412 6.65869 17.0308 6.45619 17.9514 6.45619C19.1533 6.45619 20.4527 7.08057 21.4764 8.16619C19.8377 9.32307 19.0708 11.1268 19.2264 12.8762C19.382 14.6443 20.447 16.3224 22.1964 17.1962L22.1889 17.2125C21.8143 18.0284 21.5646 18.5724 21.0114 19.4162C20.552 20.1156 20.0064 20.8806 19.4064 21.4562C18.8064 22.0318 18.1708 22.3956 17.5314 22.4012C16.9145 22.4068 16.5639 22.2231 16.0314 21.9812C15.4989 21.7393 14.8108 21.4618 13.7514 21.4712C12.6939 21.4768 11.9964 21.7431 11.4564 21.9812C10.9164 22.2193 10.562 22.4068 9.9414 22.4012C9.28515 22.3956 8.67578 22.0768 8.0964 21.5462C7.51703 21.0156 6.9939 20.2918 6.5364 19.5962C4.0164 15.7562 3.8139 11.2449 5.2614 9.02119C6.32265 7.38807 9.0864 6.45619 9.5064 6.45619Z"
                fill="black"
              />
              <path
                d="M16.9764 1.46119C16.9445 2.43057 16.6127 3.37932 16.0614 4.08619C15.4839 4.82869 14.5127 5.34244 13.5714 5.49619C13.5883 4.56432 13.9558 3.59869 14.5164 2.91619C15.1052 2.20369 16.0802 1.68994 16.9764 1.46119Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_8299">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.320801)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className="ml-1 text-sm">Sign In with GitHub</span>
      </button>
    </div>
  );
};

export default SingInWithSocialMedia;
