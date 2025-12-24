const Header = () => {
  return (
    <header className="py-6 flex flex-col items-center">
      {/* Top row: Logo + Brand */}
      <div className="flex items-center gap-3">
        <img
          src="../src/assets/images/logo.png"
          alt="Starbucks Logo"
          className="w-10 h-10 sm:w-12 sm:h-12"
        />

        <h1 className="text-2xl sm:text-3xl font-bold text-[#050100]">
          Starbucks
        </h1>
      </div>

      {/* Subtitle */}
      <p className="mt-2 text-sm sm:text-base font-medium text-[#244b4d]">
        Starbucks Online Coffee Order
      </p>
    </header>
  );
};

export default Header;

