export default function SendMoney() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-8 py-6  mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Transfer Money
          </a>
          <div className="flex flex-col w-full justify-center items-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-10 gap-3 dark:bg-gray-800 dark:border-gray-700">
            <div className="rounded-2xl bg-green-600 p-5">
              <p className="text-white">N</p>
            </div>
            <div>
              <h3 className="text-white">Name</h3>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Amount"
            ></input>
            <div>
              <button className="bg-blue-800 px-5 py-2 rounded-xl text-white">
                Send Money
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
