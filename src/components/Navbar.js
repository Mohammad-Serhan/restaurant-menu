
// All React components must act like pure functions with respect to their props.


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="name">Restaurant</div>
            <nav className="links">
                <a href="/" className="">Home</a>
                <a href="/about" className="">About</a>

            </nav>
        </div>
    )  
};

export default Navbar;