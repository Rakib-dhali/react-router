import { Link } from "react-router"
import icon from "/icons.svg"


const Nav = () => {
  return (
    <div className='flex justify-between'>
        <img src={icon} alt="" />
        <ul className="flex gap-10 flex-row">
           <Link to="/"> <li>home</li></Link>
           <Link to="/about"> <li>about</li></Link>
           <Link to="/contact"> <li>contact</li></Link>
        </ul>
    </div>
  )
}

export default Nav