import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-28 bg-gray-900 p-20 mx-72 rounded-2xl">
      <h2 className=" text-red-600 font-medium text-2xl">
        Please Login first to Perform Transactions
      </h2>
      <button
        className="text-white bg-blue-800 px-5 py-2 rounded-xl mt-5"
        onClick={() => {
          navigate("/Login");
        }}
      >
        {" "}
        Login
      </button>
    </div>
  );
}
