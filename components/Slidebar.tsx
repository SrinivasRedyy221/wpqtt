import {TbLayoutDashboard} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import{FaReact} from 'react-icons/fa'
import {TbSeo} from 'react-icons/tb'
import {RxDiscordLogo} from 'react-icons/rx'
const Slidebar = () => {
    return(
     <div className="top-0 left-0 h-screen w-16 m-0 flex flex-col dark:bg-primary text-white shadow-lg">
        <SlidebarIcon icon={<RxDiscordLogo size='28'/>}/>
        <SlidebarIcon icon={<TbLayoutDashboard size='28'/>}/>
        <SlidebarIcon icon={<AiOutlinePlus size='28'/>}/>
        <SlidebarIcon icon={<FaReact size='28'/>}/>
        <SlidebarIcon icon={<TbSeo size='28'/>}/>



     </div>)
}
const SlidebarIcon = ({icon=<AiOutlinePlus/>,text="hello there!"}) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-text group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default Slidebar