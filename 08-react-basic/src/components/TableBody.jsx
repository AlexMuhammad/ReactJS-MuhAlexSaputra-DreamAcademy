import React from "react";

function TableBody(props) {
  return (
    <>
      <div className="container mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                No
              </th>
              <th scope="col" className="py-3 px-6">
                Activity
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {props.todoList.map((val, i) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={i}>
                  <td className="py-4 px-6">{i + 1}</td>
                  <td className="py-4 px-6">{val.activity}</td>
                  <td className="py-4 px-6">{val.isComplete ? <h1 className="bg-green-300 text-center">[DONE]</h1> : <h1 className="bg-red-300 text-center">[Not Started]</h1>}</td>
                  <td className="py-4 flex space-x-5">
                    <div>
                      <button onClick={() => props.deleteHandler(val.id)}>Hapus</button>
                    </div>
                    <div>
                      <button onClick={() => props.editHandler(val.id)}>Edit</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableBody;
