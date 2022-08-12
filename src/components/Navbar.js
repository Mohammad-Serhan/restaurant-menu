
// [1] All React components must act like pure functions(does not change inputs) with respect to their props.

// [2] We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

const Navbar = () => {
    return (
        <div className="container flex juxtify-between bg-yellow">
            <div className="">Restaurant</div>
            <nav className="">
                <a href="/" className="">Home</a>
                <a href="/about" className="">About</a>

            </nav>
        </div>
    )  
};

export default Navbar;