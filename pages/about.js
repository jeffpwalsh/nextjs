import Layout from "../components/layout";

//LAYOUT COMPONENT WRAPPING FUNCTION
const About = () => (
  <Layout>
    <div className="body">
      <div className="about">
        <h2>About</h2>
        <img className="icon" src="../static/images/icons8-about-24.png" />
        <p>
          I've been a business owner for most of my working career. I’ve also
          had the opportunity to work abroad. My passion for business and
          entrepreneurship has lead to multiple opportunities within diverse
          industries and operations. This has allowed me to showcase my talents
          under challenging circumstances and within demanding environments.
          I’ve always had a keen interest in the impact of technology on large
          scale development. Throughout my career, my focus has been driven by
          the need to develop and grow my skillsets whilst harnessing past work
          experiences.
        </p>
        <p>
          I'm an organised and hard-working individual looking to join an
          establishment as a web developer. Looking to take advantage of my
          skills in HTML, CSS, JavaScript along with in-demand frameworks like
          React and server-side technologies Node, Express MongoDB.
        </p>

        <p>
          I am committed to providing a valuable contribution as well as an
          enthusiastic touch to all development efforts. I love the interaction,
          challenges and ultimately the winning result. I love solving problems
          and/or being the solution. This has always motivated me to drive new
          ideas and opportunities.
        </p>
      </div>
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

export default About;
