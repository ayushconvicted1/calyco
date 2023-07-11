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
    Main_element: 'Carbon, Ash, VM, Sulphur, Silicon, Iron, Vanadium, Nickel.',
    sizes_detail: '0-30 mm or as per customer requirement.',
    packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.	',
   
    Graphdata: [
       
      {
        product_category: "High-Sulfur CPC",
        Fixed_carbon: "96%",
        Ash_content: "2%",
        Volatile: "4%",
        Sulfur: "3%",
        Moisture_content: "0.5%"
      },
      {
        product_category: "Medium-Sulfur CPC",
        Fixed_carbon: "97%",
        Ash_content: "1%",
        Volatile: "2%",
        Sulfur: "3%",
        Moisture_content: "0.5%"
      },
      
      {
        product_category: "Low-Sulfur CPC",
        Fixed_carbon: "98%",
        Ash_content: "1%",
        Volatile: "1%",
        Sulfur: "1%",
        Moisture_content: "0.5%"
      },
     
     
    ]
  },
  {
    id: 2,
    product_url:'Calcined-Anthracite',
    title: 'Calcined anthracite',
    image: anthracite,
    paragraph: 'Calcined anthracite is produced by heating anthracite coal to high temperatures in the absence of air to remove volatile components and moisture.',
    Main_element: 'Carbon, hydrogen, oxygen, sulfur, Ash, VM, Silicon, Iron, Vanadium, Nickel.',
    sizes_detail: '0-30 mm or as per customer requirement',
    packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.'
,
Graphdata: [
  {
  product_category: "Gas Calcined Anthracite",
  Fixed_carbon: "92%",
  Ash_content: "6%",
  Volatile: "3%",
  Sulfur: "0.5%",
  Moisture_content: "0.8%"
  },
  {
  product_category: "Electrically Calcined Anthracite",
  Fixed_carbon: "93%",
  Ash_content: "7%",
  Volatile: "2%",
  Sulfur: "0.3%",
  Moisture_content: "0.7%"
  },
  {
  product_category: "Shaft Furnace Calcined Anthracite",
  Fixed_carbon: "94%",
  Ash_content: "5%",
  Volatile: "1.5%",
  Sulfur: "0.2%",
  Moisture_content: "0.5%"
  },
  {
  product_category: "Rotary Kiln Calcined Anthracite",
  Fixed_carbon: "91%",
  Ash_content: "8%",
  Volatile: "4%",
  Sulfur: "0.6%",
  Moisture_content: "0.9%"
  }
  ]
  },
    {
      id: 3,
      product_url:'Carbon-Anode-Paste',
      title: 'Carbon Anode Paste',
      image: anode_paste,
      paragraph: 'Carbon anode paste is typically produced by mixing calcined petroleum coke, coal tar pitch, and other additives in a kneading machine.',
      Main_element: 'Graphite, Binder, Anthracite or Metallurgical Coke, Coal Tar, Additives',
      sizes_detail: '0-30 mm or as per customer requirement',
      packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.',
      Graphdata: [
        {
        product_category: "Prebaked Anode Paste",
        Fixed_carbon: "92%",
        Ash_content: "6%",
        Volatile: "3%",
        Sulfur: "0.5%",
        Moisture_content: "0.8%"
        },
        {
        product_category: "Soderberg Anode Paste",
        Fixed_carbon: "93%",
        Ash_content: "7%",
        Volatile: "2%",
        Sulfur: "0.3%",
        Moisture_content: "0.7%"
        },
        {
        product_category: "Baked Anode Paste",
        Fixed_carbon: "94%",
        Ash_content: "5%",
        Volatile: "1.5%",
        Sulfur: "0.2%",
        Moisture_content: "0.5%"
        }
        ],
    },
    {
      id: 4,
      product_url:'Carbon-Raiser',
      title: 'Carbon Raiser',
      image: Raiser,
      paragraph: 'Carbon Raiser is typically produced by calcining (heating) petroleum coke or other carbonaceous materials at high temperatures to remove impurities and increase its carbon.',
      Main_element: 'carbon, sulfur, ash, moisture, and volatile matter',
      sizes_detail: '0-30 mm or as per customer requirement',
      packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.',
      Graphdata: [
        {
        product_category: "Calcined Petroleum Coke (CPC)",
        Fixed_carbon: "98%",
        Ash_content: "1%",
        Volatile: "1%",
        Sulfur: "1%",
        Moisture_content: "0.5%",
        },
        {
        product_category: "Graphite Petroleum Coke (GPC)",
        Fixed_carbon: "98%",
        Ash_content: "1%",
        Volatile: "1%",
        Sulfur: "1%",
        Moisture_content: "0.5%",
        },
        {
        product_category: "Anthracite Coal",
        Fixed_carbon: "90%",
        Ash_content: "8%",
        Volatile: "5%",
        Sulfur: "",
        Moisture_content: "",
        },
        {
        product_category: "Metallurgical Coke Breeze",
        Fixed_carbon: "92%",
        Ash_content: "10%",
        Volatile: "5%",
        Sulfur: "",
        Moisture_content: "",
        },
        {
        product_category: "Artificial Graphite",
        Fixed_carbon: "98%",
        Ash_content: "1%",
        Volatile: "1%",
        Sulfur: "",
        Moisture_content: "0.5%",
        }
        ],
     
    },
     
      {
        id: 5,
        product_url:'Carbon-Electrode-Paste',
        title: 'Carbon Electode Paste',
        image: Electode,
        paragraph: 'Carbon electrode paste is typically produced by mixing calcined petroleum coke or coal tar pitch with coal tar binder and then adding a small amount of other materials such as carbon black or graphite.',
        Main_element: 'carbon and binders. Some pastes may contain small amounts of metals such as iron, nickel, or cobalt',
        sizes_detail: '0-30 mm or as per customer requirement',
        packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.',
        Graphdata: [
          {
          product_category: "Petroleum Coke-based Carbon Electrode Paste",
          Fixed_carbon: "90%",
          Ash_content: "3%",
          Volatile: "10%",
          Sulfur: "1%",
          Moisture_content: "5%",
          },
          {
          product_category: "High-Density Carbon Electrode Paste",
          Fixed_carbon: "98%",
          Ash_content: "1%",
          Volatile: "2%",
          Sulfur: "0.1%",
          Moisture_content: "1%",
          },
          {
          product_category: "Low Ash Carbon Electrode Paste",
          Fixed_carbon: "98%",
          Ash_content: "0.5%",
          Volatile: "2%",
          Sulfur: "0.1%",
          Moisture_content: "1%",
          }
          ],
        
        },
      
        {
          id: 6,
          product_url:'Carbon-Tamping-Paste',
          title: 'Carbon Tamping Paste',
          image: Tamping,
          paragraph: 'Carbon tamping paste is produced by mixing calcined petroleum coke and coal tar pitch with a small amount of binder material to form a homogenous paste.',
          Main_element: 'The main elements in carbon tamping paste are calcined petroleum coke and coal tar pitch.',
          sizes_detail: '0-30 mm or as per customer requirement',
          packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.',
          Graphdata: [
            {
            product_category: "High-Performance Paste",
            Fixed_carbon: "90%",
            Ash_content: "3%",
            Volatile: "10%",
            Sulfur: "1%",
            Moisture_content: "5%",
          
            },
            {
            product_category: "Low-Ash Paste",
            Fixed_carbon: "90%",
            Ash_content: "3%",
            Volatile: "10%",
            Sulfur: "1%",
            Moisture_content: "5%",
          
            },
            {
            product_category: "Binder-Free Paste",
            Fixed_carbon: "90%",
            Ash_content: "3%",
            Volatile: "10%",
            Sulfur: "1%",
            Moisture_content: "5%",
          
            }
            ],
          },
         
          {
            id: 7,
            product_url:'Graphite-Granules-Fines',
            title: "Graphite Fines",
            image: Granules,
            paragraph: 'Graphite fines are typically produced by crushing and milling natural or synthetic graphite flakes into smaller particles.',
            Main_element: 'Graphite fines are primarily composed of carbon, with small amounts of other elements such as sulfur, ash, and moisture.',
            sizes_detail: '0-30 mm or as per customer requirement',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.',
            Graphdata: [
              {
              product_category: "Natural Graphite Fines",
              Fixed_carbon: "90%",
              Ash_content: "15%",
              Volatile: "5%",
              Sulfur: "Varies",
              Moisture_content: "5%",
              },
              {
              product_category: "Synthetic Graphite Fines",
              Fixed_carbon: "99%",
              Ash_content: "0.5%",
              Volatile: "1%",
              Sulfur: "0.1%",
              Moisture_content: "1%",
              },
              {
              product_category: "Amorphous Graphite Fines",
              Fixed_carbon: "80%",
              Ash_content: "15%",
              Volatile: "20%",
              Sulfur: "Varies",
              Moisture_content: "5%",
              }
              ],
            
          }
          ,
          {
            id: 8,
            product_url:'Coal',
            title: "COAL",
            image: coal,
            paragraph: "Coal mined from underground or surface mines and is used as a fuel for electricity generation, industrial processes, and other applications.",
            Main_element: 'Fixed Carbon, Total Sulphur, Net Calorific Value, Moisture, Ash, Volatile Matter',
            sizes_detail: 'Size from 0 mm to 50 mm. ',
            packing_detail: 'In bulk as per customer requirement.',
            Graphdata: [
              {
              product_category: "Coal from South Africa",
              Fixed_carbon: "65%",
              Ash_content: "20%",
              Volatile: "35%",
              Sulfur: "2%",
              Moisture_content: "10%",
              },
              {
              product_category: "Coal from Indonesia",
              Fixed_carbon: "60%",
              Ash_content: "15%",
              Volatile: "30%",
              Sulfur: "1%",
              Moisture_content: "15%",
              },
              {
              product_category: "Coal from Russia",
              Fixed_carbon: "65%",
              Ash_content: "20%",
              Volatile: "25%",
              Sulfur: "2%",
              Moisture_content: "10%",
              }
              ],
            
          },
          {
            id: 9,
            product_url:'Ferro-Alloys',
            title: "Ferro Alloys",
            image: Ferro_Alloys,
            paragraph: "Ferroalloys are typically produced by carbothermic reduction of oxides in a submerged arc furnace or an electric arc furnace.",
            Main_element: 'The main elements found in ferroalloys can vary depending on the specific type of alloy, but generally include: Iron, Silicon, Manganese, Chromium and Carbon',
            sizes_detail: 'Ferro Alloys derived from the Kiln is in size of 0 mm to 30 mm. The same can be further supplied in any size required by the Customer.',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.',
            Graphdata: [
              {
              product_category: "Ferrosilicon",
              Fixed_carbon: "0.5%",
              Ash_content: "1%",
              Volatile: "1%",
              Sulfur: "0.1%",
              Moisture_content: "0.5%",
              },
              {
              product_category: "Ferromanganese",
              Fixed_carbon: "0.5%",
              Ash_content: "1%",
              Volatile: "1%",
              Sulfur: "0.1%",
              Moisture_content: "0.5%",
              },
              {
              product_category: "Ferrochromium",
              Fixed_carbon: "0.5%",
              Ash_content: "1%",
              Volatile: "1%",
              Sulfur: "0.1%",
              Moisture_content: "0.5%",
              },
              {
              product_category: "Silico Manganese",
              Fixed_carbon: "0.5%",
              Ash_content: "1%",
              Volatile: "1%",
              Sulfur: "0.1%",
              Moisture_content: "0.5%",
              }
              ]              
            
          }
          ,
          {
            id: 10,
            product_url:'Metallurgical-Coke',
            title: "Metallurgical Coke",
            image: Metallurgical_Coke,
            paragraph: "Metallurgical coke is produced by heating a specific grade of coal in the absence of air to drive off volatile compounds and leave behind a porous, carbon-rich material.",
            Main_element: 'carbon, hydrogen, sulfur, nitrogen, oxygen, and ash',
            sizes_detail: '0-30 mm or as per customer requirement',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.',
            Graphdata: [
              {
              product_category: "Blast Furnace Coke",
              Fixed_carbon: "88%",
              Ash_content: "10%",
              Volatile: "2%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              },
              {
              product_category: "Foundry Coke",
              Fixed_carbon: "88%",
              Ash_content: "10%",
              Volatile: "2%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              },
              {
              product_category: "Nut Coke",
              Fixed_carbon: "88%",
              Ash_content: "10%",
              Volatile: "2%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              },
              {
              product_category: "Coke Breeze",
              Fixed_carbon: "88%",
              Ash_content: "10%",
              Volatile: "2%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              }
              ]
            
          },
          {
            id: 11,
            product_url:'Amorphous-Graphite',
            title: "Amorphous Graphite",
            image: Amorphous_Graphite,
            paragraph: "Amorphous graphite is typically produced through the thermal metamorphism of coal or through the crystallization of amorphous carbon in volcanic or sedimentary rocks.",
            Main_element: 'Amorphous graphite typically contains 70-85% carbon and small amounts of other elements such as silicon, sulfur, nitrogen, and iron.',
            sizes_detail: '0-30 mm or as per customer requirement',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.',
            Graphdata: [
              {
              product_category: "Flake Amorphous Graphite",
              Fixed_carbon: "88%",
              Ash_content: "10%",
              Volatile: "2%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              },
              {
              product_category: "Fine Powder Amorphous Graphite",
              Fixed_carbon: "88%",
              Ash_content: "10%",
              Volatile: "2%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              },
              {
              product_category: "Lump Amorphous Graphite",
              Fixed_carbon: "88%",
              Ash_content: "10%",
              Volatile: "2%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              },
              {
              product_category: "Granular Amorphous Graphite",
              Fixed_carbon: "88%",
              Ash_content: "10%",
              Volatile: "2%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              }
              ]
            
          }
          ,
          {
            id: 12,
            product_url:'Pellet-Coke',
            title: "Pellet Coke",
            image: pellet_coke,
            paragraph: "Pellet coke is a type of fuel that is produced by compressing a mixture of pulverized coal and binder into small pellets",
            Main_element: 'carbon, sulfur, ash, moisture, volatile matter and density	',
            sizes_detail: '0-30 mm or as per customer requirement',
            packing_detail: 'In 25/50kg PP bags Or in Jumbo Bags packing as per customer requirement.	',
            Graphdata: [
              {
              product_category: "Pellet Coke",
              Fixed_carbon: "90%",
              Ash_content: "1%",
              Volatile: "3%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              },
              {
              product_category: "Delayed Coke",
              Fixed_carbon: "90%",
              Ash_content: "1%",
              Volatile: "3%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              },
              {
              product_category: "Fluid Coke",
              Fixed_carbon: "90%",
              Ash_content: "1%",
              Volatile: "3%",
              Sulfur: "0.5%",
              Moisture_content: "4%",
              }
              ]
            
          }
          
          
  ];
  
  export default productData;
  