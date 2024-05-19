
function SearchForm() {
    return ( 
      <div className='p-2 pb-2'>
      <form className="max-w-md mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-green-500 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-black border rounded-lg bg-[#6FBD53] focus:ring-orange-300 focus:border-gray-300 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-300 dark:focus:border-gray-300"
            placeholder="Search..."
            required
          />
         <button
            type="submit"
            className="text-center text-white absolute end-2.5 bottom-2.5  hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#6FBD53] dark:hover:bg-green-500 dark:focus:ring-green-800"
          >
            Search
          </button>
        </div>
      </form>
      </div>
    );
  }
  
  export default SearchForm;