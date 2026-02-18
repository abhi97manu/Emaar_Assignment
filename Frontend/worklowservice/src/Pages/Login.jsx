import React from 'react'

const Login = () => {
  return (
    <>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
    
    <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

    <form class="space-y-4">
      
     
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input 
          type="email" 
          placeholder="Enter your email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

     
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input 
          type="password" 
          placeholder="Enter your password"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      
      <div class="flex items-center justify-between">
        <label class="flex items-center space-x-2 text-sm text-gray-600">
          <input type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
          <span>Remember me</span>
        </label>

        <a href="#" class="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      
      <button 
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>

    </form>

  </div>
</div></>
  )
}

export default Login