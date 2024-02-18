export default function UserComponent({ user }) {
  return (
    <div className="flex mx-80 justify-between items-center bg-gray-900 text-white p-5 m-2 rounded-2xl">
      <div>
        <h4>{user.username}</h4>
      </div>
      <div>Balance : {user.UserBalance.Amount}</div>
      <div>
        <button
          className="bg-blue-800 px-5 py-2 rounded-xl"
          onClick={() => {
            alert("Button Clicked");
          }}
        >
          Send Money
        </button>
      </div>
    </div>
  );
}
