import { Spinner } from "react-bootstrap";
import "../App.css";

function Loader() {
  return (
    <div className="spinner">
      <Spinner animation="grow" variant="primary" size="lg" />
    </div>
  );
}

export default Loader;
