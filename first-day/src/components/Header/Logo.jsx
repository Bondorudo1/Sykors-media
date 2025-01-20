import companyName from "/icons/companyName.png";
import logoImage from "/icons/logo.png";

function Logo() {
  return (
    <div className="logo d-flex align-items-center">
      <img
        src={logoImage}
        alt="Logo"
        className="img-fluid"
        style={{ height: "50px" }}
      />
      <img
        src={companyName}
        alt="Company"
        className="img-fluid ms-2" // Adds margin to the left for spacing
        style={{ height: "25px" }}
      />
    </div>
  );
}

export default Logo;
