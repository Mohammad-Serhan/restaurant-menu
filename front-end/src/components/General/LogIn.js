import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { logInAdmin } from "../../actions/menuItems.action"
import Auth from "../../auth";


function LogIn() {
  const navigate = useNavigate();

    const {
      register,
      formState: { errors },
      setError,
      handleSubmit,
    } = useForm();

    const onSubmit = async (event) => {
        
        // console.log(event);
      try {
        let response = await logInAdmin("login", event);
        console.log(response);
        if (response.data.authenticated) {
          Auth.storeAuthData(response.data.admin, response.data.accessToken);
          // console.log(response);
          navigate(`/admin/menu`);
        } else {
          setError("email", {
            types: {
              required: "set error is required",
            },
          });
          Auth.removeAuthData();
          console.log(response);
        }
      } catch (error) {
         setError("password", {
            types: {
              required: error,
            },
          });
      }
    }


    return (
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Log In
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
           className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
              })}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            {errors.email?.type === "required" && (
            <small className=" text-red-500">{errors.email.message}</small>
          )}
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password", {
                    required: {
                      value : true,
                      message: "password is required"
                    }
                  })
                  }
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {errors.password?.type === "required" && (
            <small className=" text-red-500">{errors.password.message}</small>
          )}
            </div>
            <div className="p-2 w-full">
              <button 
              type="submit"
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Log in
              </button>
            </div>

          </form>
        </div>
      </div>
    );
}

export default LogIn;
