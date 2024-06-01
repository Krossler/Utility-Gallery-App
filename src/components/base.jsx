import "./sass/base.scss"
import Navbar from "./func/navbar/navbar";
import Section_About from "./func/section_about/section";

function Base() {
    return (
      <div className="main">
      <header className="header-container">
        <Navbar/>
        <Section_About/>
      </header>
      </div>
    );
  }
  
  export default Base;