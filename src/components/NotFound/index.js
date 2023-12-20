import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="Not-found">
    <img
      src="https://res.cloudinary.com/dpglcx4ft/image/upload/v1701922468/erroring_2_ibtfqw.png"
      alt="page not found"
      className="not-found-image"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-para">
      we are sorry, the page you requested could not be found. Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="not-found-button">
        Home Page
      </button>
    </Link>
  </div>
)
export default NotFound
