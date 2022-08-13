import React from 'react'

function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>

      <p className="text-xl">
        <b>Logo</b> 
      </p>
    </div>
  );
}

export default Logo