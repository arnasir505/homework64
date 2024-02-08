import rock1 from '../../assets/rock1.jpg';
import rock2 from '../../assets/rock2.jpg';
import rock3 from '../../assets/rock3.jpg';
import rock4 from '../../assets/rock4.jpg';
import './About.css';

const About = () => {
  return (
    <div className='container'>
      <h1 className='text-center my-5'>About us</h1>
      <p className='text-center fs-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        laudantium voluptate ducimus explicabo quia temporibus distinctio culpa
        officia quidem qui?
      </p>
      <div id='carouselExampleCaptions' className='carousel slide mb-5'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='3'
            aria-label='Slide 4'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={rock1} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Cool Feature</h5>
              <p>
                Donec id elit non mi porta gravida at eget metus. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={rock2} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>More Stuff</h5>
              <p>
                Donec id elit non mi porta gravida at eget metus. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. ioi
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={rock3} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Great Service</h5>
              <p>
                Donec id elit non mi porta gravida at eget metus. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={rock4} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Really Fast</h5>
              <p>
                Donec id elit non mi porta gravida at eget metus. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default About;
