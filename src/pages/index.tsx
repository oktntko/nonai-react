import React, { useMemo, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Column, Table } from "~/components/Table";

export function IndexPage() {
  const [data, setData] = useState<any[]>([
    {
      checkbox: false,
      product_name: "product_name",
      color: "color",
      category: "category",
      price: "price",
      edit: "edit",
    },
    {
      checkbox: false,
      product_name: "product_name",
      color: "color",
      category: "category",
      price: "price",
      edit: "edit",
    },
    {
      checkbox: false,
      product_name: "product_name",
      color: "color",
      category: "category",
      price: "price",
      edit: "edit",
    },
  ]);

  const handleChange = (v: React.ChangeEvent<HTMLInputElement>) => {
    console.log(v.target.checked);
    setData([
      ...data.map((row) => {
        row.checkbox = v.target.checked;
        return row;
      }),
    ]);
  };

  const columns = useMemo<Column[]>(() => {
    return [
      {
        accessor: "checkbox",
        HeaderClassName: "p-4",
        Header: () => (
          <div className="flex items-center">
            <input
              id="checkbox-all"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              onChange={handleChange}
            ></input>
            <label htmlFor="checkbox-all" className="sr-only">
              checkbox
            </label>
          </div>
        ),
        CellClassName: "w-4 p-4",
        Cell: (value: boolean) => (
          <div className="flex items-center">
            <input
              id="checkbox-all"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              checked={value}
            ></input>
            <label htmlFor="checkbox-all" className="sr-only">
              checkbox
            </label>
          </div>
        ),
      },
      { accessor: "product_name" },
      { accessor: "color" },
      { accessor: "category" },
      { accessor: "price" },
      {
        accessor: "edit",
        Header: () => <span className="sr-only">Edit</span>,
        CellClassName: "px-6 py-4 text-right flex justify-end",
        Cell: (value: any) => (
          <button
            type="button"
            className="group flex
              rounded-lg border border-blue-700
              px-3 py-2
              text-center text-xs font-medium text-blue-700
              hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
            onClick={() => alert(value)}
          >
            <FiEdit size={"1rem"} />
            <span className="ml-1">編集</span>
          </button>
        ),
      },
    ];
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="container m-2 p-2">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      ></input>
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      ></input>
                      <label htmlFor="checkbox-table-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Sliver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-2"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      ></input>
                      <label htmlFor="checkbox-table-2" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-3"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      ></input>
                      <label htmlFor="checkbox-table-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr></hr>
      <Table columns={columns} rows={data}></Table>
    </>
  );
}
