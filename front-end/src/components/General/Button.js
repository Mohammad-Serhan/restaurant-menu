function emptyButton(text) {
  return (
    <button className="inline-flex items-center text-indigo-500 rounded border border-white m-2 px-4 py-2 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700">
      {text}
    </button>
  );
}

function primaryButton(text) {
  return (
    <button
      className="inline-flex items-center bg-indigo-500 text-white rounded m-2 px-4 py-2 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
    >
      {text}
    </button>
  );
}

function primaryPlusButton(text) {
  return (
    <button className="inline-flex items-center bg-indigo-500 text-white rounded m-2 px-4 py-2 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
      {text}
    </button>
  );
}

function primaryCloseButton(text) {
  return (
    <button className="inline-flex items-center bg-indigo-500 text-white rounded m-2 px-4 py-2 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700">
      <svg
        className="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="inline-flex"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
}

function secondaryButton(text) {
  return (
    <button className="inline-flex items-center text-indigo-500 border border-indigo-500 rounded m-2 px-4 py-2 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700">
      {text}
    </button>
  );
}

function secondaryPlusButton(text) {
  return (
    <button className="inline-flex items-center text-indigo-500 border border-indigo-500 text-4xl rounded m-2 px-4 py-1 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700">
      +
    </button>
  );
}

function facebookButton(text) {
  return (
    <div className="max-w-prose cursor-pointer bg-white border shadow-lg items-center rounded-full px-4 py-2 mx-4 my-2 text-blue-500 font-bold grid grid-cols-3 hover:bg-blue-500 hover:text-white">
      <div className="border border-white rounded-full bg-white w-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="32px"
          height="32px"
        >
          <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
          <path
            fill="#fff"
            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
          />
        </svg>
      </div>
      <p className="col-span-2">Continue with Facebook</p>
    </div>
  );
}

function googleButton(text) {
  return (
    <div className="max-w-prose cursor-pointer bg-white border items-center shadow-lg rounded-full px-4 py-2 mx-4 my-2 text-blue-500 font-bold grid grid-cols-3 hover:bg-blue-500 hover:text-white">
      <div className="border border-white rounded-full bg-white w-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="32px"
          height="32px"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          />
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          />
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          />
        </svg>
      </div>
      <p className="col-span-2">Continue with Google</p>
    </div>
  );
}

function Button({ text = "Button", type = "primary" }) {
  let typeMapping = {
    empty: emptyButton,
    primary: primaryButton,
    primaryPlus: primaryPlusButton,
    primaryClose: primaryCloseButton,
    secondary: secondaryButton,
    secondaryPlus: secondaryPlusButton,
    facebook: facebookButton,
    google: googleButton,
  };

  if (Object.keys(typeMapping).includes(type)) {
    return typeMapping[type](text);
  }

  return primaryButton(text);
}

export default Button;
