import React from "react";

const Page = () => {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Get More!
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                Feel free to call or email us for more information!
              </p>

              {/* Contact details */}
              <div className="flex flex-col mt-8 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    {/* SVG Path */}
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    Vancouver, Washington, United States
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    {/* SVG Path */}
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    +1 (408) 667-7860
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    {/* SVG Path */}
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    info@lincolnmarkviiparts.com
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
