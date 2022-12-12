import React from "react";

function Form() {
  return (
    <>
      <div className="w-full mt-5">
        <div className="container mx-auto flex justify-center items-center">
          <form>
            <div className="mb-5 ">
              <label htmlFor=""></label>
              <input type="text" className="border border-blue-300 rounded-md w-96 h-16 px-5 text-xl" />
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="text" className="border border-blue-300 rounded-md w-96 h-16 px-5 text-xl" />
            </div>
            <div className="mt-5">
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Status Check</span>
              </label>
            </div>
            <div className="flex justify-center mt-5 bg-blue-300 p-2 rounded-md">
              <button className="text-xl font-medium text-white" type="submit">
                Add Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
