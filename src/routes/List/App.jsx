import Orders from "./Orders";
import DeleteItem from "./DeletItem";
import Insertion from "./Insertion";

export default function App() {
  
  return (
    <><h3>Rendering Lists</h3>
    <p>
    Display multiple components by using JavaScript’s <code>filter() and map()</code>  to filter and transform array of data into an array of components.

    </p>
    <br />
      <Orders />
      <hr />
      <br/>
      <DeleteItem className="Form" />
      <hr />
      <br/>
      <Insertion className="Form" />
      
    </>
  );
}
