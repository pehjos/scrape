import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'
function Caurosel() {
  return (
    <div className='carosel'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.abiq.io/wp-content/uploads/2021/04/9A4A19EF-E151-4B3E-AC0D-447FD6590D7C-scaled-e1619364435428.jpeg"
          alt="First slide"
          height={500}
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/6l-image-34.jpg"
         
          height={500}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.theafricareport.com/media/2022/01/D8778B57-21CB-43C6-8C3A-5273E2C59E08_4_5005_c-732x285.jpeg"
        
          height={500}
        />
       
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Caurosel;