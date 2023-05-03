import Slidebar from "./Slidebar"
import {FaMoon,FaSun} from "react-icons/fa"  
import useDarkmode from "@/hooks/useDarkmode"
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
            <div className="w-screen h-40 dark:bg-blue-200">
                <div className="text-black-300 text-center font-serif font-extrabold">
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