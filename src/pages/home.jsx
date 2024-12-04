import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      {/* Updated section with dark background and orange text */}
      <section className="bg-dark text-warning text-center py-5">
        <div className="container">
          <h1 className="display-4">Hello. This is my personal page.</h1>
          <p className="lead">Click buttons to know me haha.</p>
          <Link to="/about" className="btn btn-warning btn-lg mt-3">Click to know Me</Link>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow-lg" style={{ backgroundColor: '#333' }}>
              <div className="card-body">
                <h5 className="card-title text-warning">Hello, I'm Zachary Yuri Berunio</h5>
                <p className="card-text text-warning">
                  Thank you for visiting! This site tells my few experience in technology, my short information, and weird interests. I'm interested about learning and growing in the modern world,
                  and you will know on this pages.
                </p>
                <Link to="/about" className="btn btn-warning">About Me</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card shadow-lg" style={{ backgroundColor: '#333' }}>
              <div className="card-body">
                <h5 className="card-title text-warning">Education & Background</h5>
                <p className="card-text text-warning">
                  I have a basic academic foundation in technology and programming. My education has given me
                  with the skills needed to excel in my career.
                </p>
                <Link to="/education" className="btn btn-warning">Learn About My Education</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <h3 className="mb-4 text-warning">What I Enjoy Doing</h3>
            <p className="lead text-warning">In my free time, I enjoy exploring new hobbies that fuel my creativity and personal growth.</p>
          </div>
           </div>

        <div className="text-center mt-5">
          <Link to="/contact" className="btn btn-success btn-lg">Get in Touch</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
