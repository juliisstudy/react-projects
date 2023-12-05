import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header className ="container py-3 mb-4 ">
        <h1>React Projects</h1>
        <hr className="headerLine" />

    </header>

    <div id = "sidebar" className="  container-fluid col-md-2 ">
      <nav>
        <ul className="list-unstyled ps-0">
          <li >
            <Link to="/"> <h4>Home</h4></Link>
            </li>
            <li >
            <Link to="/render-list"> <h4>Rendering Lists</h4></Link>
            </li>
            
            

            <li>
            <Link to="/check-list"><h4>CheckList</h4></Link>
          </li>

          <li>
            <Link to="/stop-watch"><h4>Stop Watch</h4></Link>
          </li>
          <li>
            <Link to="/quiz"><h4>Quiz</h4></Link>
          </li>
          <li>
            <Link to="/counter"><h4>Counter</h4></Link>
          </li>
          <li>
            <Link to="/accordion"><h4>Accordions</h4></Link>
          </li>

          <li>
            <Link to="/messenger"><h4>Messenger</h4></Link>
          </li>
          <li>
            <Link to="/form"><h4>Form</h4></Link>
          </li>
          <li>
            <Link to="/video-play"><h4>Video Play</h4></Link>
          </li>
         
        </ul>
      </nav>
      </div>
        <div id="outlet" className="container-fluid col-md-6 border"><Outlet /></div>
         
    </>
  )
};

export default Layout;
