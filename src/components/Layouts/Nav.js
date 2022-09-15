import cartImg from "../../assets/img/shopping-bag.png";
const Nav = () => {
  return (
    <nav className="row custom-align pt-4 pb-7">
      <div className="col-4">
        <div className="logo-img">
          Glow <span>.</span>
        </div>
      </div>
      <div className="col-8">
        <ul className="nav-ul">
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Reviews</a>
          </li>
          <li className="imgCart">
            <img src={cartImg} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
