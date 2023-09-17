import "./home.css";
import Form from "./Form/Form";
import Team from "./Team/Team";
import Footer from "../Footer/Footer";

const Home = ({ text }) => {
  console.log("chkkk", text);
  return (
    <div className="home-cont">
      <div className="sectionOne">
        <div className="subSectionOne">
          {/* <img
        // src="https://png.pngtree.com/thumb_back/fw800/background/20230404/pngtree-esoteric-spiritual-meditation-concept-photo-image_2208693.jpg"
        src="https://www.bing.com/images/blob?bcid=r0njwFGbChUGzA"
        alt="Responsive image"
        className="img-fluid" 
      /> */}
        </div>
        <div className="subSectionTwo">
          <h2>Empowerment comes drom within</h2>
          <h4>
            hdjhsdkjfhdjhfjdhj shfkj hdfk dsfhjkd dhkfhjs fsdhfgshghgfrieyr
          </h4>
        </div>
      </div>
      <div className="mobile-img">
        <img
          src="https://www.millersguild.com/wp-content/uploads/2022/03/what-does-a-circle-symbolize-768x432.jpg"
          className="img-fluid"
          alt="Responsive image"
        />
      </div>

      {/*service container below  */}
      <div className="sevices">
        <h2>Our Services</h2>
        <h4>
          Reiki, Sales and marketing sample text messages Flash sales and
          promotions are the top reasons people opt in to text messages from
          businessesrketing sample text messages Flash sales and promotions are
          the top reasons people opt in to text messages from busi
        </h4>
      </div>

      {/* Seven Chakras and two more */}
      <div className="nineChakras">
        <div className="nineChakrasSub">
          <h2>Seven chakras and two more</h2>
          <h5 className="shadow p-2 mb-5 bg-white rounded">{text}</h5>
        </div>
      </div>

      {/* Team */}
      <h2>Our Team</h2>
      <Team />

      {/* // form */}
      {/* <Form /> */}
    </div>
  );
};
export default Home;
