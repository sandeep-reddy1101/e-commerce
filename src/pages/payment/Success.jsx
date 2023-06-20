import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div className="row mt-5 mx-5 empty-cart">
          <div className="col-12">
            <div className="p-5 text-center">
              <h3 className="text-success">Your payment is successful</h3>
              <Link to={'/'}><p>Go to Home page</p></Link>
            </div>
          </div>
        </div>
    )
}

export default Success;