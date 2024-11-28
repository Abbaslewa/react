
const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="bg-green-200 p-7 rounded-lg  w-80  shadow-2xl">
        <h1 className="text-center text-2xl mb-4">Login</h1>
        <form>
         
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 rounded-lg border border-red-300 "
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 rounded-lg border border-red-300 focus:ring-green-600 hover:shadow"
            />
          </div>

          <div>
            <button
              className="bg-blue-500 hover:bg-black text-white py-2 px-4 rounded-lg w-full">
              Submit
            </button>
        
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
