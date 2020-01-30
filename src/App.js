import React from 'react';
import './App.css';
import Parallax from './sections/parallax/parallax';
import ParallaxImg1 from './imagenes/headerImg.jpg';
import CoffeParte2 from './sections/coffeParte2/coffeParte2';
import OurHistoryImage from './imagenes/image-3.jpg';
import OurHistory from './sections/coffeParte3/OurHistory';
import FreshBeans from './sections/freshBeans/freshBeans';
import FreshBeansImage from './imagenes/coffe-fresh.jpg';
import GreatCoffe from './sections/greatCoffe/greatcoffe';
import TheBestCoffe from './sections/theBestCoffe/theBestCoffe';
import GalleryImagenes from './sections/gallery/gallery';
import Blog from './sections/blog/blog';
import Contact from './sections/contact/contact';

// el app puede tener un solo div//
function App() {
  return (
    <div>
      <Parallax headerImg={ParallaxImg1}>
        <h1>Portwell,Inc.</h1>
        <p>Serving only the best since 2019</p>
      </Parallax>
      <CoffeParte2></CoffeParte2>
      <OurHistory image={OurHistoryImage} altimage="Esta es una imagen de café"></OurHistory>
      <FreshBeans image={FreshBeansImage}></FreshBeans>
      <GreatCoffe></GreatCoffe>
      <TheBestCoffe></TheBestCoffe>
      <GalleryImagenes></GalleryImagenes>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;