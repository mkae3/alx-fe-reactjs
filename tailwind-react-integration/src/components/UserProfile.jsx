function UserProfile() {
  return (
    <div className="bg-gray-100 p-2 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center
                    hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-20 sm:w-24 md:w-36 h-20 sm:h-24 md:h-36 mx-auto
                   hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-base sm:text-lg md:text-xl text-blue-800 my-4
                     hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
