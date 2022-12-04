import { getBabers } from "../reducers/actions/actions";
import Button from "react-bootstrap/Button";

const GetBarbers = () => {
    return ( 
        <Button variant="primary" type="submit" onClick={getBabers}>
          Lista de barberos
        </Button>
     );
}
 
export default GetBarbers;