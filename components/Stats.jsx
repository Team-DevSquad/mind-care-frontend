import React from "react";

const Stats = () => {
  return (
    <div className="m-10 grid gap-5 sm:grid-cols-3  mx-auto max-w-screen-lg">
      <div className="px-4 bg-white rounded-md py-6 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 rounded-xl bg-blue-400 p-4 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mt-4 font-medium">Sessions</p>
        <p className="mt-2 text-xl font-medium">
          54
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </p>
        <span className="text-xs text-gray-400">+4.9%</span>
      </div>
      <div className="px-4 bg-white rounded-md py-6 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 rounded-xl bg-rose-400 p-4 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mt-4 font-medium">Users</p>
        <p className="mt-2 text-xl font-medium">
          36
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </p>
        <span className="text-xs text-gray-400">+4.9%</span>
      </div>
      <div className="px-4 bg-white rounded-md py-6 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 rounded-xl bg-green-400 p-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="mt-4 font-medium">Revenue</p>
        <p className="mt-2 text-xl font-medium">
          $120
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </p>
        <span className="text-xs text-gray-400">+4.9%</span>
      </div>
    </div>
  );
};

export default Stats;
