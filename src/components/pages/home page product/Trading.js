import React from 'react'
import coal from '../../images/coal.png'
import ferro_alloys from '../../images/Ferro_Alloys.jpg'
import metallurgical_coke from '../../images/Metallurgical_Coke.jpg'
import Amorphous_Graphite from '../../images/Amorphous_Graphite.png'
import pellet_coke from '../../images/pellet_coke.png'
import Productdetail from './Productdetail'


function Trading() {
  return (
    <div style={{backgroundColor:"#e4e0db",paddingBottom:"60px"}}>
        <h2>Trading</h2>
        <Productdetail
        product_img={coal}
        Product_main_heading="Coal"
        product_description={<> <p>1. Manufacture of Anode & Cathode in Aluminium Industry.</p>
      <br/>
      <p> 2. Raw Material for Graphite Electrode Paste.</p>
      <br/>
      <p> 3. Carbon Raiser in Steel & Foundry Industry.</p>
      <br/>
      <p> 4. Conductive Backfill in ground Electrode station.</p>
      
       </>}
        />
         <Productdetail
          style={{flexDirection:'row-reverse'}}
        product_img={ferro_alloys}
        Product_main_heading="Ferro Alloys"
        Product_sub_heading="Mix of Calcined Petroleum Coke and Binder Pitch "
        product_description={<><p>1. Conductor in submerged Arc Furnace under self Baking Process popularly known as SODERBERG ELECTRODE, used in manufacturing of Ferro alloys, carbide & Metal Cleaning Process.</p>
       <br/><p> 2. Carbon Tamping Paste used as application in Furnace Lining/refurnishing of submerged Furnace.</p></>}
        />
       <Productdetail
        product_img={metallurgical_coke}
        Product_main_heading="Metallurgical Coke"
        Product_sub_heading="(Bulk Products)"
        product_description="
        Obtained from machining of Graphite Electrode
Used in manufacture of high quality steel, friction material, lubricants etc. due to its low content of Sulphur, Nitrogen & Oxygen.
        "
        />
        <Productdetail
         style={{flexDirection:'row-reverse'}}
        product_img={Amorphous_Graphite}
        Product_main_heading="Amorphous Graphite"
        Product_sub_heading="(Bulk Products)"
        product_description="Obtained from machining of Graphite Electrode
        Used as Carbon Raiser in Foundry applications namely Met Coke etc."
        />
           <Productdetail
        product_img={pellet_coke}
        Product_main_heading="Pellet Coke"
        Product_sub_heading="(Bulk Products)"
        product_description="Obtained from machining of Graphite Electrode
        Used in manufacture of high quality steel, friction material, lubricants etc. due to its low content of Sulphur, Nitrogen & Oxygen."
        />
    </div>
  )
}

export default Trading