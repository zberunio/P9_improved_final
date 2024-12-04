import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow p-4" style={{ backgroundColor: '#333' }}>
              <h2 className="text-center text-warning mb-4">Contact Information</h2>
              <p className="text-center text-warning mb-4">Feel free to get in touch with me through the following links:</p>

              <div className="mb-4">
                <h4 className="text-light">Email</h4>
                <p>
                  Email address: <strong><a href="email:zactzyofficial@gmail.com" className="text-light">zactzyofficial@gmail.com</a></strong>
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-light">Social Media</h4>
                <p className="text-light">Connect with me on the following platforms:</p>
                <ul>
                  <li><strong><a href="https://www.facebook.com/berunio.zacharyyuri" target="_blank" rel="noopener noreferrer" className="text-warning">Facebook</a></strong></li>
                  <li><strong><a href="https://github.com/zberunio" target="_blank" rel="noopener noreferrer" className="text-warning">GitHub</a></strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
