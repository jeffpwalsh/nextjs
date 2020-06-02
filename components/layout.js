import Navbar from './navbar';
import Head from 'next/head';
import { initGA, logPageView } from '../utils/googleAnalytics';

export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      //COMPONENT WRAPS LAYOUT OVER PAGES

      <div>
        <Head>
          <title>portfolio</title>

          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossOrigin='anonymous'
          ></link>
        </Head>
        <Navbar />
        {/* PASSES STYLING DOWN TO CHILDREN */}
        {this.props.children}
        {/* LOCAL STYLED JSX */}
        <style global jsx>{`
      body {
        background: url("../static/images/Image1.jpg") no-repeat;
        background-attachment: fixed;
        background-size: cover;
      }, 
      
    `}</style>
      </div>
    );
  }
}
