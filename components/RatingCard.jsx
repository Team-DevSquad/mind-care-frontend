import Image from 'next/image'
const RatingCard = ({ image, name, stars, comment }) => {
  return (
    <div className="w-full md:w-[350px]">
      <ul className="">
        <li className="py-4 text-left bg-white rounded-md shadow-sm px-4 ">
          <div className="flex flex-col items-start">
            <div className="flex gap-2 justify-center items-center">
              <img
                className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                src={image}
                alt=""
              />
              <p className="text-lg font-semibold text-gray-900">{name}</p>
            </div>
            <div className="mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`block h-6 w-6 align-middle ${
                      i < stars ? "text-yellow-500" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className=" text-base text-gray-900">{comment}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RatingCard;
