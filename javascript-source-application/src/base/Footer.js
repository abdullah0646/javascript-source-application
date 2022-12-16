import { Navbar, NavbarBrand } from "reactstrap";
import javascript from "../assets/images/javascript.png";

function Footer() {
  return (
    <Navbar className="  text-white bg-dark" >
      <NavbarBrand href="/" className=" my-2 text-white bg-dark">
        <img
          src={javascript}
          alt="logo"
          style={{
            height: 50,
            width: 50,
          }}
        />

      </NavbarBrand>
      <NavbarBrand href="/" className=" my-2 text-white bg-dark">
        JavaScript Source
      </NavbarBrand>


    </Navbar>
  );
}

export default Footer;



