const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <div>
          <h1>Ratih Health</h1>
        </div>
      </div>
      <div>
        <ul>
          <li className="mx-2">Home</li>
          <li className="mx-2">About</li>
          <li className="mx-2">Blog</li>
          <li className="mx-2">Services</li>
        </ul>
      </div>
      <div>
        <div className="flex ">
          <div className="mx-1">Login</div>
          <div className="mx-1">Sign Up</div>
        </div>
        <div>Profile</div>
      </div>
      <div className="hidden">=</div>
    </nav>
  );
};
