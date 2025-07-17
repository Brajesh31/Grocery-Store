import { createSlice } from "@reduxjs/toolkit";

// Import your images from src/assets/
import riceImg from "../assets/rice.png";
import milkImg from "../assets/milk.png";
import breadImg from "../assets/breat.png";
import butterImg from "../assets/butter.png";
import eggsImg from "../assets/eggs.png";
import bananaImg from "../assets/banana.png";
import coffeeImg from "../assets/coffee.png";
import tomatoImg from "../assets/tomato.png";
import potatoImg from "../assets/potato.png";
import onionImg from "../assets/onion.png";
import chilliImg from "../assets/green.png";
import dalImg from "../assets/dal.png";
import sugarImg from "../assets/sugar.png";
import saltImg from "../assets/salt.png";
import oilImg from "../assets/oil.png";
import turmericImg from "../assets/Turmeric Powder.png";


const staticProducts = [
  { id: 1, name: "Rice", price: 50, image: riceImg },
  { id: 2, name: "Milk", price: 30, image: milkImg },
  { id: 3, name: "Bread", price: 25, image: breadImg },
  { id: 4, name: "Butter", price: 60, image: butterImg },
  { id: 5, name: "Eggs", price: 70, image: eggsImg },
  { id: 6, name: "Banana", price: 20, image: bananaImg },
  { id: 7, name: "Coffee", price: 90, image: coffeeImg },
  { id: 8, name: "Tomato", price: 30, image: tomatoImg },
  { id: 9, name: "Potato", price: 20, image: potatoImg },
  { id: 10, name: "Onion", price: 25, image: onionImg },
  { id: 11, name: "Green Chilli", price: 15, image: chilliImg },
  { id: 12, name: "Toor Dal", price: 90, image: dalImg },
  { id: 13, name: "Sugar", price: 45, image: sugarImg },
  { id: 14, name: "Salt", price: 20, image: saltImg },
 { id: 15, name: "Sunflower Oil", price: 130, image: oilImg },
  { id: 16, name: "Turmeric Powder", price: 35, image: turmericImg },
  /*{ id: 17, name: "Chilli Powder", price: 40, image: chilliPowderImg },
  { id: 18, name: "Coffee", price: 120, image: coffeeImg },
  { id: 19, name: "Tea Powder", price: 100, image: teaImg },
  { id: 20, name: "Wheat Flour", price: 40, image: flourImg },*/
];

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: staticProducts,
  },
  reducers: {},
});

export default productSlice.reducer;
