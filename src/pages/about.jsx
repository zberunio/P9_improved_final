import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Section with a dark background and orange text */}
      <section className="bg-dark text-warning text-center py-4">
        <div className="container">
          <h1 className="display-4">About Me</h1>
          <p className="lead">Get to know more about who I am and my journey.</p>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Card with dark background and orange text */}
            <div className="card shadow p-4" style={{ backgroundColor: '#333' }}>
              <h2 className="card-title text-warning">Zachary Yuri Berunio</h2>
              <p className="card-text text-warning">
                My name is Zachary Yuri Berunio, and I am currently studying BS Computer Science at Naga College Foundation. I have an interest in technology and its potential to use my skills in the near future.
              </p>
              <p className="card-text text-warning">
                I'm also a working student balancing my studies with a full-time job as a call center agent. It’s been a challenging situation, but a rewarding experience as I get to develop both my technical skills in school and my communication skills at work.
              </p>
              <p className="card-text text-warning">
                My ultimate career goal, aside from finishing my studies, is to have a profession/job that fits my basic skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button with green background */}
      <div className="text-center mt-5">
        <a href="/contact" className="btn btn-success btn-lg">Get in Touch</a>
      </div>
    </Layout>
  );
};

export default About;
