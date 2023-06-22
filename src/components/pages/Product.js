import React from 'react';
import './Pages.css';
import Card_detail from '../Card_detail';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import petroleum from '../images/calcined_petroleum_coke.png';
import anthracite from '../images/calcined_anthracite.png';
import anode_paste from '../images/Carbon_anode_paste.jpg';
import Raiser from '../images/Carbon_Raiser.jpg';
import Electode from '../images/Carbon_Electode_Paste.jpg';
import Tamping from '../images/Carbon_Tamping_Paste.jpg';
import Granules from '../images/graphite_granules_and_fines.png';
import productData from './productData';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';



function Product() {
  const { productId } = useParams();

  const product = productData.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // partialVisibilityGutter: 30, // Adjust the value as per your requirement
      // slidesToSlide: 3, // Show 3 items at a time
      // vertical: true, // Enable vertical layout
    },
  };
 

  return (


    <div className='product'>
      <h3 className='box-titles'>{product.title}</h3>
      <div className='product-main'>
        <img src={product.image} alt={product.title} />
        <div className='product-info'>
          <h3>{product.title}</h3>
      
          <p className='product-detail'>{product.paragraph}</p>
          <hr />
          <h3>Application</h3>
          {/* <ul className='application'>
            <li>
              <p>
                <strong>{product.application_para_one}:</strong> {product.para_one_detail}
              </p>
            </li>
            <li>
              <p>
                <strong>{product.application_para_two}:</strong> {product.para_two_detail}
              </p>
            </li>
            <li>
              <p>
                <strong>{product.application_para_three}:</strong> {product.para_three_detail}
              </p>
            </li>
            <li>
              <p>
                <strong>{product.application_para_four}:</strong> {product.para_four_detail}
              </p>
            </li>
          </ul> */}
          <p>{product.application_para}</p>
          <h3>Different types of the products</h3>
          <ul className='type-product'>
            <li>-{product.product_type_one}</li>
            <li>-{product.product_type_two}</li>
            <li>-{product.product_type_three}</li>
          </ul>
          <hr />
          <h3>Key specification</h3>
          <FontAwesomeIcon icon={faCirclePlus} style={{color: "#000000",float:"right"}} />
          <p>
            <strong>Main elements:</strong> {product.Main_element}
          </p>
          <hr />
          <h3>Sizes</h3>
          <p>{product.sizes_detail}</p>
          <hr />
          <h3>Packing</h3>
          <p>{product.packing_detail}</p>
        </div>
      </div>
         
<h3 className='box-titles  '>Other Products</h3>
         <Carousel responsive={responsive}>
         <Card_detail
         img={petroleum} 
         para="Calcined petroleum coke"
        />
         <Card_detail
         img={anthracite} 
         para="Calcined anthracite"
        />
         <Card_detail
         img={anode_paste} 
         para="Carbon anode paste"
        />
         <Card_detail
         img={Raiser} 
         para="Carbon Raiser"
        />
         <Card_detail
         img={Electode} 
         para="Carbon Electode Paste"
        />
         <Card_detail
         img={Tamping} 
         para="Carbon Tamping Paste"
        />
         <Card_detail
         img={Granules} 
         para="Graphite Granules and fines"
        />
        </Carousel>

    </div>
  )
}

export default Product