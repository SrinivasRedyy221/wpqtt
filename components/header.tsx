import Slidebar from "./Slidebar"
import {FaMoon,FaSun} from "react-icons/fa"  
import useDarkmode from "@/hooks/useDarkmode"
import Navbar from "./Navbar";
const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkmode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='28' className='sidebar-icon' />
        ) : (
          <FaMoon size='' className='sidebar-icon' />
        )}
      </span>
    );
  };
const Header = () => {
    return (
        <div className="flex flex-row">
            <div>
              <Slidebar/>
            </div>
            <div className="w-screen dark:bg-primary bg-cover object-cover object-center" style={{ backgroundImage: "url('/')"}}>
                <Navbar/>
                <div className=" text-center font-serif font-extrabold">
                   Srinias Reddy
                   <h1 className="text-4xl font-bold">Welcome to My Website</h1>

                </div>
                <div className="absolute bottom-5 left-2">
                    <ThemeIcon/>
                </div>
            </div>
        </div>
    )
}
export default Header