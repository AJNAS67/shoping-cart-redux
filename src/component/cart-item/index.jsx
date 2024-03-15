import { useDispatch } from "react-redux";
export default function CartItem({cartItem}) {
  const dispatch = useDispatch();
  
  return (
    <div className="md:flex items-center py-8 border-t border-b border-gray-200">
      <div className="h-full w-1/4">
        <img
          src={cartItem.image}
          alt
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4 w-full">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">
            {cartItem?.title}
          </p>
          <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">
          Height: 10 inches
        </p>
        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
        <p className="w-96 text-xs leading-3 text-gray-600">
          Composition: 100% calf leather
        </p>
        <div className="flex items-center justify-between pt-5 pr-6">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
              Add to favorites
            </p>
            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            $ {cartItem?.price}
          </p>
        </div>
      </div>
    </div>
  );
}
