import { FaEye, FaPenAlt, FaStar, FaTrashAlt } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ToysRow = ({ toy }) => {
    const {
        photo,
        title,
        subCategoryName,
        price,
        availableQuantity,
        _id,
        sellerName,
    } = toy;
    const { user } = useContext(AuthContext);
    const handleDetailsBtn = () => {
        if (!user) {
            Swal.fire("Please Login and Explore More", "", "info");
        }
    };
    return (
        <tr className="bg-transparent">
            <td className="bg-transparent  border-b border-gray-300">
                <div className="avatar">
                    <Link
                        to={`/toy/${_id}`}
                        className="mask mask-squircle w-12 h-12"
                    >
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </Link>
                </div>
            </td>
            <td className="bg-transparent  border-b border-gray-300">
                {" "}
                <div className="font-bold  max-w-[300px] whitespace-pre-wrap">
                    {title}
                </div>
            </td>
            <td className="bg-transparent  border-b border-gray-300">
                {subCategoryName}
            </td>
            {sellerName && (
                <td className="bg-transparent  border-b border-gray-300">
                    {sellerName}
                </td>
            )}
            <td className="bg-transparent  border-b border-gray-300">
                <p>{availableQuantity}</p>
            </td>
            <td className="bg-transparent  border-b border-gray-300">
                {price}
            </td>

            <th className="bg-transparent  border-b border-gray-300">
                <Link
                    onClick={handleDetailsBtn}
                    to={`/toy/${_id}`}
                    className="flex items-center gap-2 py-1 px-3 bg-info w-fit  rounded-xl text-white hover:text-info hover:bg-transparent hover:outline outline-info"
                >
                    <small>View Details</small>
                    <FaEye></FaEye>
                </Link>
            </th>
        </tr>
    );
};

export default ToysRow;
