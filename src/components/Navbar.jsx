const Navbar = () => {
  return (
    <header className="w-full py-8 absolute z-10 padding-x bg-white shadow-lg">
      <nav className="flex flex-1 justify-between items-center max-container ">
        <h3 className="font-Nunito font-bold text-3xl">Where in the world?</h3>
        <div className="font-Nunito font-light text-xl ">
          <h3>Dark Mode</h3>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
