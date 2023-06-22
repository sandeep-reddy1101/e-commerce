import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="row mt-5 mx-5 empty-cart">
          <div className="col-12">
            <div className="p-5 text-center">
              <h3 className="text-danger">Your payment is failed</h3>
              <Link to={'/'}><p className="btn">Go to Home page</p></Link>
            </div>
          </div>
        </div>
    )
}

export default Error;