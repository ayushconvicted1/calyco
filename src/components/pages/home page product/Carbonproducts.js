import React from 'react'
import Productdetail from './Productdetail'
import Calcined from '../../images/calcined_petroleum_coke.png'
import calcined_anthracite from '../../images/calcined_anthracite.png'
import Carbon_anode_paste from '../../images/Carbon_anode_paste.jpg'
import Carbon_Raiser from '../../images/Carbon_Raiser.jpg'
import Carbon_Electode_Paste from '../../images/Carbon_Electode_Paste.jpg'
import Carbon_Tamping_Paste from '../../images/Carbon_Tamping_Paste.jpg'
import graphite_granules_and_fines from '../../images/graphite_granules_and_fines.png'
import { useNavigate } from 'react-router-dom'


function Carbonproducts() {

    const navigate=useNavigate()
    const handleProductClick = (productId) => {
        // Perform actions based on the clicked product ID
        console.log(`Clicked product ID: ${productId}`);
        // You can perform further logic or update state as needed
       
        navigate(`/products/${productId}`); 
      };
   

  return (
    <div style={{backgroundColor:"#e4e0db",paddingBottom:"60px"}}>
        <h1> Carbon Products </h1>
        <Productdetail
        product_img={Calcined}
        Product_main_heading="CoalCalcined Petroleum Coke"
        Product_sub_heading="Derived from Calcined process of Green Coke, a Residue of distillation of crude oil"
        product_description={<> <p>1. Manufacture of Anode & Cathode in Aluminium Industry.</p>
      <br/>
      <p> 2. Raw Material for Graphite Electrode Paste.</p>
      <br/>
      <p> 3. Carbon Raiser in Steel & Foundry Industry.</p>
      <br/>
      <p> 4. Conductive Backfill in ground Electrode station.</p>
      
       </>}
       onclickbtn={() => handleProductClick(1)}
        />
         <Productdetail
          style={{flexDirection:'row-reverse'}}
        product_img={calcined_anthracite}
        Product_main_heading="Calcined Anthracite "
        Product_sub_heading="Mix of Calcined Petroleum Coke and Binder Pitch "
        product_description={<><p>1. Conductor in submerged Arc Furnace under self Baking Process popularly known as SODERBERG ELECTRODE, used in manufacturing of Ferro alloys, carbide & Metal Cleaning Process.</p>
       <br/><p> 2. Carbon Tamping Paste used as application in Furnace Lining/refurnishing of submerged Furnace.</p></>}
        onclickbtn={() => handleProductClick(2)}
       />
       <Productdetail
        product_img={Carbon_anode_paste}
        Product_main_heading="Carbon Anode Paste"
        Product_sub_heading="(Bulk Products)"
        product_description="
        Obtained from machining of Graphite Electrode
Used in manufacture of high quality steel, friction material, lubricants etc. due to its low content of Sulphur, Nitrogen & Oxygen.
        "
        onclickbtn={() => handleProductClick(3)}
       />
        <Productdetail
         style={{flexDirection:'row-reverse'}}
        product_img={Carbon_Raiser}
        Product_main_heading="Carbon Raiser"
        Product_sub_heading="(Bulk Products)"
        product_description="Obtained from machining of Graphite Electrode
        Used as Carbon Raiser in Foundry applications namely Met Coke etc."
        onclickbtn={() => handleProductClick(4)}
       />
        <Productdetail
        product_img={Carbon_Electode_Paste}
        Product_main_heading="Carbon Electode Paste"
        Product_sub_heading="(Bulk Products)"
        product_description="Obtained from machining of Graphite Electrode
        Used in manufacture of high quality steel, friction material, lubricants etc. due to its low content of Sulphur, Nitrogen & Oxygen."
        onclickbtn={() => handleProductClick(5)}
       />
        <Productdetail
         style={{flexDirection:'row-reverse'}}
        product_img={Carbon_Tamping_Paste}
        Product_main_heading="Carbon Tamping Paste"
        Product_sub_heading="(Bulk Products) "
        product_description="Obtained from machining of Graphite Electrode
        Used as Carbon Raiser in Foundry applications namely Met Coke etc."
        onclickbtn={() => handleProductClick(6)}
      />
        <Productdetail
        product_img={graphite_granules_and_fines}
        Product_main_heading="Graphite Granules & Fines"
        Product_sub_heading="(Bulk Products)"
        product_description="Obtained from machining of Graphite Electrode
        Used in manufacture of high quality steel, friction material, lubricants etc. due to its low content of Sulphur, Nitrogen & Oxygen."
        onclickbtn={() => handleProductClick(7)}
       />
    </div>
  )
}

export default Carbonproducts