import Slidebar from "./Slidebar"
import {FaMoon,FaSun} from "react-icons/fa"  
import useDarkmode from "@/hooks/useDarkmode"
import Navbar from "./navbar";
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
            <div className="w-screen h-50 dark:bg-blue-200 bg-cover bg-center" style={{ backgroundImage: "url('/srinivas123.jpeg')"}}>
                <Navbar/>
                <div className=" text-center font-serif font-extrabold">
                   Srinivas Redd
                </div>
                <div>
                    <ThemeIcon/>
                </div>
            </div>
        </div>
    )
}
export default Header