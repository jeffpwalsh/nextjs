import Layout from "../components/layout";

//LAYOUT WRAPPED COMPONENT
const Contact = () => (
  <Layout>
    <div className="about">
      <h2>Contact</h2>
      <img
        className="icon"
        id="icon"
        src="../static/images/icons8-phone-24.png"
      />
      <br />
      <button type="button" className="btn btn-info">
        Tel <span className="badge badge-light"> 072-157-0009 </span>
      </button>

      <button type="button" className="btn btn-info">
        Email <span className="badge badge-light"> jeffpwalsh@gmail.com </span>
      </button>

      <button type="button" className="btn btn-info">
        Address <span className="badge badge-light"> Blouberg, Cape Town </span>
      </button>

      <button type="button" className="btn btn-info">
        Linkedin{" "}
        <span className="badge badge-light"> jeff-walsh-1445414a </span>
      </button>
    </div>
    {/* LOCAL STYLED JSX */}
    <style jsx>{`
      .about {
        margin: 10% 0%;
        border: 1px solid;
        text-align: center;
        width: 75%;
        background-color: #f3f3f3;
        margin-left: auto;
        margin-right: auto;
        padding: 30px;
      }
      ,
      .btn {
        margin: 10px;
      }
    `}
    </style>
    {/* GLOBAL STYLED JSX */}
    <style global jsx>{`
      .icon {
        padding: 20px 0px;
      }     
    `}
    </style>
  </Layout>
);

export default Contact;
