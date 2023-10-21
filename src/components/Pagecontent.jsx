import Menusection from "./Menusection";
import Aboutsection from "./Aboutsection";
import Contactsection from "./Contactsection";

function Pagecontent() {
  return (
    <>
      <Menusection />
      <Aboutsection />
      <Contactsection />
      <div className="w3-content" style={{ maxWidth: 1100 }}></div>
    </>
  );
}

export default Pagecontent;
