import Layout from "../components/layout";

//LAYOUT WRAPPED COMPONENT
const Projects = () => (
  <Layout>
    <div className="about">
      <h2>Projects</h2>
      <img
        className="icon"
        src="../static/images/icons8-project-diagram-32.png"
      />
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hangman</td>
            <td>React - Hangman game with "car manufacturers"</td>
            <td>
              <a href="https://jeffpwalsh-hangman.herokuapp.com/">deployed</a>
            </td>
          </tr>
          <tr>
            <td>iTunes Search API</td>
            <td>React, Node, Express - Search iTunes and save favourites</td>
            <td>
              <a href="https://guarded-tor-84227.herokuapp.com/">deployed</a>
            </td>
          </tr>
          <tr>
            <td>Weather API</td>
            <td>React - Check the current weather for different cities.</td>
            <td>
              <a href="https://jeffpwalsh-weather-finder.herokuapp.com/">
                deployed
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* LOCAL STYLED JSX */}
    <style jsx>
      {`
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
        .table {
        }
      `}
    </style>
    {/* GLOBAL STYLED JSX */}
    <style global jsx>
      {`
      .icon {
        padding: 20px 0px;
      },
    `}
    </style>
  </Layout>
);

export default Projects;
