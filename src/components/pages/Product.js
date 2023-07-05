import React from 'react';
import './Pages.css';
import productData from './productData';
import { useEffect } from 'react';
import product_page_image1 from "../images/product_page_images (1).png"
import product_page_image2 from "../images/product_page_images (2).png"
import product_page_image3 from "../images/product_page_images (3).png"
import product_page_image4 from "../images/product_page_images (4).png"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import Card from '../Card';
import Productdetail from './home page product/Productdetail';
import Cpc from './Product tables/Cpc';
import Carbon_anode_paste from './Product tables/Carbon_anode_paste';
import Coal from './Product tables/Coal';
import { VscChromeClose } from 'react-icons/vsc';
import CalcinedAnthraciteTable from './Product tables/Calcined_anthracite_table';
import CarbonElectrode from './Product tables/CarbonElectrode';
import CarbonTampingpaste from './Product tables/CarbonTampingpaste';
import GraphiteGranulesFines from './Product tables/GraphiteGranulesFines';
import CarbonRaiser from './Product tables/CarbonRaiser';
import FerroAlloysTable from './Product tables/FerroAlloysTable';
import MetallurgicalCokeTable from './Product tables/MetallurgicalCokeTable.js';
import AmorphousGraphiteTable from './Product tables/AmorphousGraphiteTable';
import PelletCokeTable from './Product tables/PelletCokeTable';
import DetailComponent from './DetailComponent';
import { useRef } from 'react';
import { FiChevronRight,FiChevronLeft } from 'react-icons/fi';


function Product() {

  const { productName } = useParams(); 
  const [showTable, setShowTable] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItemsRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [leftShift, setLeftShift] = useState(0);
  
  

  useEffect(() => {
    const handleScrollPrevious = () => {
      if (carouselItemsRef.current && currentSlide > 0) {
        const scrollDistance = carouselItemsRef.current.offsetWidth * (currentSlide - 1); // Adjusted scroll distance
        carouselItemsRef.current.scrollTo({
          left: scrollDistance,
          behavior: 'smooth',
        });
        setCurrentSlide((prevSlide) => prevSlide - 1);
      }
    };

    const handleScrollNext = () => {
      if (carouselItemsRef.current && currentSlide < totalItems - 1) {
        carouselItemsRef.current.scrollBy({
          left: carouselItemsRef.current.offsetWidth,
          behavior: 'smooth',
        });
        setCurrentSlide((prevSlide) => prevSlide + 1);
      }
    };

    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    prevButton.addEventListener('click', handleScrollPrevious);
    nextButton.addEventListener('click', handleScrollNext);

    return () => {
      prevButton.removeEventListener('click', handleScrollPrevious);
      nextButton.removeEventListener('click', handleScrollNext);
    };
  }, [currentSlide]);

  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const totalItems=12
  

 
const product = productData.find((product) => product.product_url=== productName);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!product) {
    return <div>Product not found</div>;
  }

  let tableComponent;

  switch (product.id) {
    case 1:
      tableComponent = <Cpc />;
      break;
    case 2:
        tableComponent = <CalcinedAnthraciteTable/>;
        break;
    case 3:
      tableComponent = <Carbon_anode_paste />;
      break;
    case 4:
      tableComponent = <CarbonRaiser />;
      break;
    case 5:
      tableComponent = <CarbonElectrode />;
      break;
    case 6:
      tableComponent = <CarbonTampingpaste />;
      break;
    case 7:
      tableComponent = <GraphiteGranulesFines />;
      break;
    case 8:
        tableComponent = <Coal/>;
      break;
    case 9:
        tableComponent = <FerroAlloysTable />;
      break;
    case 10:
      tableComponent = <MetallurgicalCokeTable/>;
      break;
    case 11:
        tableComponent = <AmorphousGraphiteTable/>;
        break;
    case 12:
          tableComponent = <PelletCokeTable/>;
          break;

 
    // Add cases for other product IDs and corresponding table components
    default:
      tableComponent = null;
  }

  const show_slide_table=()=>setShowTable(!showTable)
 

  return (


    <div className='product'>
      <div className='product-main'>
        <img src={product.image} alt={product.title} />
        <div className='product-info'>
          <h1 className='product-heading'>{product.title}</h1>
      
          <p className='product-detail'>{product.paragraph}</p>
          <hr />
          <h3>Key specification</h3>
          <FontAwesomeIcon
            icon={faCirclePlus}
            onClick={() => setShowTable(!showTable)}
            style={{ color: "#000000", float: "right" }}
          />
          <p>
          Main elements: {product.Main_element}
          </p>
          <hr />
          <h3>Sizes</h3>
          <p>{product.sizes_detail}</p>
          <hr />
          <h3>Packing</h3>
          <p>{product.packing_detail}</p>
        </div>  
      </div>

<div className='Graph-page'   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='Graph-flex-box' ref={carouselItemsRef} >
  {product.Graphdata.map((data, index) => (
    <DetailComponent
      key={index}
      product_category={data.product_category}
      Fixed_carbon={data.Fixed_carbon}
      Ash_content={data.Ash_content}
      Volatile={data.Volatile}
      Sulfur={data.Sulfur}
      Moisture_content={data.Moisture_content}
    />
  ))}
</div>
<div className="carousel-buttons">
        <button
          ref={prevButtonRef}
          className="carousel-button-prev"
          disabled={currentSlide === 0}
          style={{ left: `${isHovered ? `${leftShift}px` : '-55px'}` }}
        >
          <FiChevronLeft />
        </button>
        <button
          ref={nextButtonRef}
          className="carousel-button-next"
          disabled={currentSlide === totalItems - 1}
          style={{
            right: `${isHovered ? `${leftShift}px` : '-55px'}`,
          }}
        >
          <FiChevronRight />
          
        
        </button>
      </div>
      </div>

         
<div className='product-images-with-headlines'>

         <Productdetail
         
         style={{backgroundColor:"#F5F9FA"}}
        product_img={product_page_image3}
        content={
          <div className='product-caption'>
          <p className='hidden'>Carbon Source in the</p>
          <p><span className='hightlights'>Production of steel</span> and other metals</p>
          </div>
        }
        
       />
        <Productdetail
          style={{flexDirection:'row-reverse',backgroundColor:"#E5E5E5"}}
        product_img={product_page_image1}
        content={
          <div className='product-caption'>
          <p><span className='hightlights'>Reductant in the smelting</span> </p>
          <p className='hidden'>of iron and other metals</p>
          </div>
        }
        
       />
        <Productdetail
        style={{backgroundColor:"#EBE7E8"}}
        product_img={product_page_image4}
        content={
          <div className='product-caption'>
          <p>Fuel in <span className='hightlights'>Power generation</span></p>
          <p className='hidden'>and cement production</p>
          </div>
        }
        
       />
        <Productdetail
          style={{flexDirection:'row-reverse',
        backgroundColor:"#C6C6C6"}}
        product_img={product_page_image2}
        content={
          <div className='product-caption'>
       <p><span className='hidden'>Raw material in the </span> <span className='hightlights'>Production of anodes</span></p>
       <p className='hidden'>for the aluminum industry</p>
          </div>
        }
        
       />
       </div>
      
      
       <Card customClass="product-card" isProductComponent={true}/>
   
      
          <div className={showTable ? 'product-table-overlay active' : 'product-table-overlay'} onClick={show_slide_table} />
          <div className={showTable ? 'product-table active' : 'product-table'}>
            
              <VscChromeClose className='close-icon'
              onClick={show_slide_table} />

          <div className='table-top-heading'>
            <h1>Key Specifications</h1>
            <hr/>
            </div>  
            {tableComponent}
          </div>
        
    

    </div>
  )
}

export default Product