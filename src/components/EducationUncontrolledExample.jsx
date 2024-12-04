import Carousel from 'react-bootstrap/Carousel';
import ncfImage from '../assets/ncf.png';
import wriImage from '../assets/slnhs.png';
import shsImage from '../assets/shs.png';
import elemImage from '../assets/elem.png';

function UncontrolledExample() {
  return (
    <div>
      <section className="text-warning text-center py-2" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <h1 className="display-4 font-weight-bold">My Educational Background</h1>
          <p className="lead">From elementary school to university, my educational path has developed my skills and fueled my passion for growth. Every stage has equipped me to face new challenges, steering me toward a successful future.</p>
        </div>
      </section>

      <Carousel 
        style={{
          backgroundColor: '#000000',
          padding: '20px', 
          borderRadius: '10px',
          border: '2px solid #FFA500',
        }}
      >
        <Carousel.Item>
          <img
            className="d-block mx-auto" 
            src={ncfImage} 
            alt="First slide"
            style={{ 
              width: '90%',   
              height: 'auto', 
              maxWidth: '400px',  
              objectFit: 'cover' 
            }}
          />
          <Carousel.Caption 
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              color: '#FFA500', 
              padding: '10px', 
              borderRadius: '5px',
            }}>
            <h3 className="font-weight-bold">Tertiary Education</h3>
            <p><strong>Institution:</strong> Naga College Foundation, Inc.</p>
            <p><strong>Program:</strong> Bachelor of Science in Computer Science</p>
            <p><strong>Year:</strong> 2023 - Present</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto" 
            src={wriImage}
            alt="Second Slide"
            style={{ 
              width: '90%',  
              height: 'auto', 
              maxWidth: '400px',  
              objectFit: 'cover'  
            }}
          />
          <Carousel.Caption 
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              color: '#FFA500', 
              padding: '10px', 
              borderRadius: '5px',
            }}>
            <h3 className="font-weight-bold">Senior High</h3>
            <p><strong>Institution:</strong> Sta. Lutgarda National High School</p>
            <p><strong>Program:</strong> Computer System Servicing NC II</p>
            <p><strong>Year:</strong> 2018 - 2020</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto" 
            src={shsImage}
            alt="Third Slide"
            style={{ 
              width: '90%',  
              height: 'auto', 
              maxWidth: '400px', 
              objectFit: 'cover' 
            }}
          />
          <Carousel.Caption 
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              color: '#FFA500', 
              padding: '10px', 
              borderRadius: '5px',
            }}>
            <h3 className="font-weight-bold">Secondary Education</h3>
            <h4>High School</h4>
            <p><strong>School:</strong> Sta. Lutgarda National High School</p>
            <p><strong>Year:</strong> 2014 - 2018</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto" 
            src={elemImage}
            alt="Fourth Slide"
            style={{ 
              width: '90%', 
              height: 'auto', 
              maxWidth: '400px', 
              objectFit: 'cover' 
            }}
          />
          <Carousel.Caption 
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              color: '#FFA500', 
              padding: '10px', 
              borderRadius: '5px',
            }}>
            <h3 className="font-weight-bold">Primary Education</h3>
            <h4>Elementary</h4>
            <p><strong>School:</strong> Castillo Elementary School</p>
            <p><strong>Year:</strong> 2008 - 2014</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
