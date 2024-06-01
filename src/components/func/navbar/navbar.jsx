import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"

library.add(fas)


function Navbar() {

  const [menu, setMenu] = useState(true);

const changeClass = () => {
  setMenu(!menu);
}

    return (
      <div>
        <nav className={menu ? "navbar-container":"navbar-container-active"}>
          <div className='show'>
            <li><a href="./">Home</a></li>
            <li><a href="./">About Project</a></li>
            <li><a href="./">How to use</a></li>
            <li><a href="./">All files</a></li>
          </div>
        </nav>
        
        <figure><FontAwesomeIcon className='btn-change' onClick={changeClass} icon="fa-solid fa-bars" /></figure>
      </div>
    );
  }
  
export default Navbar;