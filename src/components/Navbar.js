import React , {useState} from 'react'
import './Navbar.css'
export default function Navbar() {
    const [currPage, setCurrPage] = useState("Home");
    const setSectionColor = (changedTo)=>{
        setCurrPage(changedTo);
    }
  return (
    <div className="navbar" >
        <div id="navSections">
          <div id={currPage === "Home" ? "currPage" : "Home"  } className="navSection" onClick={()=>setSectionColor("Home")}>Home</div>
          <div id={currPage === "About" ? "currPage" : "About"  } className="navSection" onClick={()=>setSectionColor("About")}>About</div>
          <div id={currPage === "Projects" ? "currPage" : "Projects"  } className="navSection" onClick={()=>setSectionColor("Projects")}>Projects</div>
          <div id={currPage === "Connect" ? "currPage" : "Connect"  } className="navSection" onClick={()=>setSectionColor("Connect")}>Connect</div>
          <div id={currPage === "Dark" ? "currPage" : "Dark"  } className="navSection" onClick={()=>setSectionColor("Dark")}>Dark</div>
        </div>
    </div>
  )
}
