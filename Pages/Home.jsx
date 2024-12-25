import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img 
            src="https://www.newmetrics.net/files/uploads/2023/08/Student-Experience-Cover-2.jpg" 
            alt="First slide" 
            style={{ 
              width: '100%', 
              height: '500px', 
              objectFit: 'cover', // Ensures proper scaling
              objectPosition: 'center' // Centers the image within the container
            }} 
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img 
            src="https://media.gettyimages.com/id/1359662582/photo/group-of-happy-college-student-stock-photo.jpg?s=170667a&w=gi&k=20&c=CpWlBVxMtkfyVV7ZtRURe5jQ4tiHNM4UA9f0t2ZjkdM=" 
            alt="Second slide" 
            style={{ 
              width: '100%', 
              height: '500px', 
              objectFit: 'cover', // Ensures proper scaling
              objectPosition: 'center' // Centers the image within the container
            }} 
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img 
            src="https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/Y0mAruESDwFn4MO5GbYyr/f898df53e63d503d63321d8aea34fdf8/GettyImages-947895170.jpg?fit=thumb" 
            alt="Third slide" 
            style={{ 
              width: '100%', 
              height: '500px', 
              objectFit: 'cover', // Ensures proper scaling
              objectPosition: 'center' // Centers the image within the container
            }} 
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
