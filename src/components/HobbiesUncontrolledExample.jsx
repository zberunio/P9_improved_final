import Carousel from 'react-bootstrap/Carousel';
import codingImage from '../assets/coding.jpg';
import gamingImage from '../assets/gaming.jpg';
import audioVideoImage from '../assets/audiovideo.jpg';
import pcrepairImage from '../assets/pcrepair.jpg';

function UncontrolledExample() {
  return (
    <div>
      <section className="text-warning text-center py-4" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <h1 className="display-4">My Hobbies</h1>
          <p className="lead">When I have free time or off duty</p>
        </div>
      </section>

      <Carousel
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          height: '500px',
          backgroundColor: '#000000',
          border: '2px solid #FFA500',
        }}
      >
        <Carousel.Item style={{ height: '100%' }}>
          <img
            className="d-block w-100"
            src={codingImage}
            alt="Coding"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              imageRendering: 'auto',
            }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#FFA500',
              padding: '15px',
              borderRadius: '10px',
              bottom: '40px',
              zIndex: 2,
            }}
          >
            <h3>Coding</h3>
            <p>
              For me, coding is more than just writing lines of code—it’s a way
              to bring ideas to life while also allowing me to be creative.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '100%' }}>
          <img
            className="d-block w-100"
            src={gamingImage}
            alt="Gaming"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              imageRendering: 'auto',
            }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#FFA500',
              padding: '15px',
              borderRadius: '10px',
              bottom: '40px',
              zIndex: 2,
            }}
          >
            <h3>Gaming</h3>
            <p>
              Gaming has always been a passion of mine. Whether it’s exploring vast open worlds, competing in intense multiplayer matches, or immersing myself in gripping storylines.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '100%' }}>
          <img
            className="d-block w-100"
            src={audioVideoImage}
            alt="Audio/Video Editing"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              imageRendering: 'auto',
            }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#FFA500',
              padding: '15px',
              borderRadius: '10px',
              bottom: '40px',
              zIndex: 2,
            }}
          >
            <h3>Audio/Video Editing</h3>
            <p>
              Audio and video editing is a creative outlet where I transform raw footage and sound into something meaningful. I enjoy selecting the best moments, fine-tuning details, and adding effects to tell a story. It's about enhancing the mood through sound design and transitions. The process is rewarding, and each project helps me learn and improve.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '100%' }}>
          <img
            className="d-block w-100"
            src={pcrepairImage}
            alt="Computer Assembly and Repair"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              imageRendering: 'auto',
            }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#FFA500',
              padding: '15px',
              borderRadius: '10px',
              bottom: '40px',
              zIndex: 2,
            }}
          >
            <h3>Computer Assembly and Repair</h3>
            <p>
              Computer assembly and repair became my hobby as I feel satisfied when I do this. From the motherboard to the power supply, watching everything come together. Aside from this hobby, it also serves as my income for my allowance.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <style>
          {`
            .carousel-indicators {
              bottom: 460px !important; /* Move indicator down further */
              background-color: #FFA500 !important; /* Orange indicators */
            }
          `}
        </style>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
