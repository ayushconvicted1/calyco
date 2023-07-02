import petroleum from '../images/calcined_petroleum_coke.png';
import anthracite from '../images/calcined_anthracite.png';
import anode_paste from '../images/Carbon_anode_paste.jpg';
import Raiser from '../images/Carbon_Raiser.jpg';
import Electode from '../images/Carbon_Electode_Paste.jpg';
import Tamping from '../images/Carbon_Tamping_Paste.jpg';
import Granules from '../images/graphite_granules_and_fines.png';
import coal from '../images/coal.png';
import Ferro_Alloys from '../images/Ferro_Alloys.jpg';
import Metallurgical_Coke from '../images/Metallurgical_Coke.jpg';
import Amorphous_Graphite from '../images/Amorphous_Graphite.png';
import pellet_coke from '../images/pellet_coke.png';









const productData = [
  {
    id: 1,
    product_url:'Calcined-Petroleum-Coke',
    title: 'Calcined Petroleum Coke',
    image: petroleum,
    paragraph: 'Green Petroleum Coke is produced from crude oil residue by delayed coking, and when calcined, it becomes Calcined Petroleum Coke.',
    Main_element: 'Carbon, Sulphur, Silicon, Iron, Vanadium, Nickel.',
    sizes_detail: 'C.P. Coke derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
    packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s requirement'
  },
  {
    id: 2,
    product_url:'Calcined-Anthracite',
    title: 'Calcined Anthracite',
    image: anthracite,
    paragraph: 'Calcined anthracite is produced by heating anthracite coal to high temperatures in the absence of air to remove volatile components and moisture.',
    Main_element: 'Carbon, hydrogen, oxygen, sulfur',
    sizes_detail: 'Calcined Anthracite derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
    packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s requirement'
    ,
  },
    {
      id: 3,
      product_url:'Carbon-Anode-Paste',
      title: 'Carbon Anode Paste',
      image: anode_paste,
      paragraph: 'Carbon anode paste is typically produced by mixing calcined petroleum coke, coal tar pitch, and other additives in a kneading machine.',
      Main_element: 'Carbon, Hydrogen',
      sizes_detail: 'C.P. Coke derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
      packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s requirement'
    },
    {
      id: 4,
      product_url:'Carbon-Raiser',
      title: 'Carbon Raiser',
      image: Raiser,
      paragraph: 'Carbon Raiser is typically produced by calcining (heating) petroleum coke or other carbonaceous materials at high temperatures to remove impurities and increase its carbon content.',
      Main_element: 'Carbon, Sulphur, Silicon, Iron, Vanadium, Nickel',
      sizes_detail: 'C.P. Coke derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
      packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s'},
     
      {
        id: 5,
        product_url:'Carbon-Electrode-Paste',
        title: 'Carbon Electrode Paste',
        image: Electode,
        paragraph: 'Carbon electrode paste is typically produced by mixing calcined petroleum coke or coal tar pitch with coal tar binder and then adding a small amount of other materials such as carbon black or graphite.',
        Main_element: 'Carbon, binders (may contain small amounts of metals such as iron, nickel, or cobalt)',
        sizes_detail: 'Carbon electrode paste derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
        packing_detail: 'In 25/50kg PP bags or in Jumbo Bags packing as per Customer’s requirement.'
        },
      
        {
          id: 6,
          product_url:'Carbon-Tamping-Paste',
          title: 'Carbon Tamping Paste',
          image: Tamping,
          paragraph: 'Carbon tamping paste is produced by mixing calcined petroleum coke and coal tar pitch with a small amount of binder material to form a homogeneous paste.',
          Main_element: 'Calcined petroleum coke, coal tar pitch',
          sizes_detail: 'Carbon tamping paste derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
          packing_detail: 'In 25/50kg PP bags or in Jumbo Bags packing as per Customer’s requirement.'
          },
         
          {
            id: 7,
            product_url:'Graphite-Granules-Fines',
            title: "Graphite Granules & Fines",
            image: Granules,
            paragraph: "Graphite fines are typically produced by crushing and milling natural or synthetic graphite flakes into smaller particles.",
            Main_element: 'The main element in graphite granules and fines is carbon, which is typically present at a purity level of 99% or higher. Other elements that may be present in smaller amounts include hydrogen, oxygen, nitrogen, and sulfur.',
            sizes_detail: 'Graphite Granules & Fines derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s requirement.'
            
          }
          ,
          {
            id: 8,
            product_url:'Coal',
            title: "Coal",
            image: coal,
            paragraph: "Coal mined from underground or surface mines and is used as a fuel for electricity generation, industrial processes, and other applications.",
            Main_element: 'Fixed Carbon, Total Sulphur, Net Calorific Value, Moisture, Ash, Volatile Matter',
            sizes_detail: 'Size from 0 mm to 50 mm. ',
            packing_detail: 'In bulk as per Customer’s requirement.'
            
          },
          {
            id: 9,
            product_url:'Ferro-Alloys',
            title: "Ferro Alloys",
            image: Ferro_Alloys,
            paragraph: "Ferroalloys are typically produced by carbothermic reduction of oxides in a submerged arc furnace or an electric arc furnace.",
            Main_element: 'The main elements found in ferroalloys can vary depending on the specific type of alloy, but generally include: Iron, Silicon, Manganese, Chromium and Carbon',
            sizes_detail: 'Ferro Alloys derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s requirement.'
            
          }
          ,
          {
            id: 10,
            product_url:'Metallurgical-Coke',
            title: "Metallurgical Coke",
            image: Metallurgical_Coke,
            paragraph: "Metallurgical coke is produced by heating a specific grade of coal in the absence of air to drive off volatile compounds and leave behind a porous, carbon-rich material.",
            Main_element: 'carbon, hydrogen, sulfur, nitrogen, oxygen, and ash',
            sizes_detail: 'Metallurgical Coke derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s requirement.'
            
          },
          {
            id: 11,
            product_url:'Amorphous-Graphite',
            title: "Amorphous Graphite",
            image: Amorphous_Graphite,
            paragraph: "Amorphous graphite is typically produced through the thermal metamorphism of coal or through the crystallization of amorphous carbon in volcanic or sedimentary rocks.",
            Main_element: 'Amorphous graphite typically contains 70-85% carbon and small amounts of other elements such as silicon, sulfur, nitrogen, and iron.',
            sizes_detail: 'Amorphous graphite derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s requirement.'
            
          }
          ,
          {
            id: 12,
            product_url:'Pellet-Coke',
            title: "Pellet Coke",
            image: pellet_coke,
            paragraph: "Pellet coke is a type of fuel that is produced by compressing a mixture of pulverized coal and binder into small pellets",
            Main_element: 'Pellet coke is mainly composed of carbon, but the exact chemical composition can vary depending on the type and source of the raw material used in its production',
            sizes_detail: 'Pellet Coke derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per Customer’s requirement.'
            
          }
          
          
  ];
  
  export default productData;
  