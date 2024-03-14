"use client";
import { useState } from "react";

const AppointmentPage = () => {
  const [state, setState] = useState(false);

  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      date: "2022-01-01",
      time: "10:00 AM",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      date: "2022-01-01",
      time: "10:00 AM",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      date: "2022-01-01",
      time: "10:00 AM",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      date: "2022-01-01",
      time: "10:00 AM",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      date: "2022-01-01",
      time: "10:00 AM",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-base-content text-xl font-bold sm:text-2xl">
            Your Appointments
          </h3>
          <p className="text-base-content mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        {/* <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-neutral-content duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add member
          </a>
        </div> */}
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-base-100 text-base-content font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="bg-base-100 text-base-content divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img src={item.avatar} className="w-10 h-10 rounded-full" />
                  <div>
                    <span className="block text-base-content text-sm font-medium">
                      {item.name}
                    </span>
                    {/* <span className="block text-base-content text-xs">
                      {item.email}
                    </span> */}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href=""
                    className="py-2 px-2 font-medium text-primary bg-blue-100 mr-2 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Accept
                  </a>
                  <button
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      setState(true);
                    }}
                    className="py-2 leading-none px-2 font-medium text-red-500 bg-red-200 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {state ? (
            <div className="fixed inset-0 z-10 ">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setState(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h4 className="text-lg font-medium text-gray-800">
                      Issue Certificate
                    </h4>
                    <button
                      className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                      onClick={() => setState(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mx-auto"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center text-lg items-center my-4 ">
                    Are you sure want to reject ?
                  </div>
                  <div className="flex gap-3 mb-5 ml-40">
                    <button
                      onClick={() => setState(false)}
                      className="btn bg-green-500 hover:bg-green-600 px-6 text-white "
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setState(false)}
                      className="btn bg-red-500 px-6 hover:bg-red-600 text-white "
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </table>
      </div>
    </div>
  );
};

export default AppointmentPage;
