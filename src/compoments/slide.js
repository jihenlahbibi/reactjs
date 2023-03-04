import Carousel from 'react-bootstrap/Carousel';

function Slidecountry() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.bovpg.net/fw/back/fr/sale/606f12e7b2d07o.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PARIS</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.travelstore.tn/voyages/1521020779Dubai%20new.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>DUBAI</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IvZTVRn8V1LbtXiMBr1qGdRZ24tQSleAiQ&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>BALI</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidecountry; 