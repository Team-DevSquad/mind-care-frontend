import Stats from "@/components/Stats";
import React from "react";

const DashBoard = () => {
  return (
    <div>
      <Stats />
      <div className="grid grid-cols-1 gap-5 bg-gray-100 p-2 sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
        <div className="max-w-md rounded-md border shadow-lg bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Insights</p>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Your views are up 400% since last month</p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Your blog got featured on awwwards.com</p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam deserunt cupiditate ipsa.
            </p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="max-w-md rounded-md shadow-lg border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Activity</p>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/women/93.jpg"
              alt="Simon Lewis"
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Albert Mcalister</strong>
              <span className="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/men/94.jpg"
              alt=""
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Samantha Ribbon</strong>
              <span className="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/women/95.jpg"
              alt=""
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Dr. Kayla</strong>
              <span className="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-md rounded-md shadow-lg border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Traffic Sources</p>
          <div className="mt-4">
            <p className="float-left mb-2">Direct</p>
            <span className="float-right mb-2">20,00</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-10/12 overflow-hidden rounded-full bg-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Referral</p>
            <span className="float-right mb-2">2,000</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-4/12 overflow-hidden rounded-full bg-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Google</p>
            <span className="float-right mb-2">1,500</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-3/12 overflow-hidden rounded-full bg-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Facebook</p>
            <span className="float-right mb-2">260</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-1/12 overflow-hidden rounded-full bg-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
