import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction('login');
const logout = createAction('logout');
const addtocart = createAction('addtocart');
const Increment = createAction('Increment');
const decrement = createAction('decrement');
const deleteitem = createAction('deleteitem');
const emptycart = createAction('emptycart');
const Calculate = createAction('Calculate');

export const arshebreducer = createReducer({
  User_id: localStorage.getItem("ArshebUser") ? localStorage.getItem("ArshebUser") : "",
  Cart: localStorage.getItem("Arshebcart") ? JSON.parse(localStorage.getItem("Arshebcart")) : [],
  Total: localStorage.getItem("ArshebTotal") ? localStorage.getItem("ArshebTotal") : 0,
  TotalPrice: localStorage.getItem("ArshebPrice") ? localStorage.getItem("ArshebPrice") : 0,
  Shipping: 100,

}, (builder) => {

    builder.addCase(login, (state,payload) => {
      console.log(payload)
      state.User_id = payload.id;
      localStorage.setItem("ArshebUser", state.User_id);
    });

    builder.addCase(logout, (state) => {
      state.User_id = "";
      localStorage.setItem("ArshebUser", state.User_id);
    });

    builder.addCase(addtocart, (state,payload) => {
      const newItem = payload.payload;
      console.log(newItem);
      const existingItem = state.Cart.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.qty += newItem.qty;
      } else {
        state.Cart.push(newItem);
      }
      localStorage.setItem("Arshebcart", JSON.stringify(state.Cart));
    });

    builder.addCase(Calculate, (state) => {
      let totalPrice = 0;
      state.Cart.forEach(item => {
        totalPrice += item.price * item.qty;
      });
      
      state.TotalPrice = totalPrice;
      
      if (state.Cart.length === 0) {
        // If cart is empty, no shipping cost
        state.Total = 0;
      } else {
        // Add shipping only if there are items in the cart
        state.Total = parseInt(state.TotalPrice) + parseInt(state.Shipping);
      }
      
      localStorage.setItem("ArshebPrice", state.TotalPrice);
      localStorage.setItem("ArshebTotal", state.Total);
    });

    // Increment item quantity in the cart
    builder.addCase(Increment, (state, action) => {
      const itemId = action.payload; // Assuming payload contains the item's id
      const item = state.Cart.find(item => item.id === itemId);
      if (item) {
        item.qty += 1; // Increment the quantity
        localStorage.setItem("Arshebcart", JSON.stringify(state.Cart)); // Update localStorage
      }
    });
  
    // Decrement item quantity in the cart
    builder.addCase(decrement, (state, action) => {
      const itemId = action.payload; // Assuming payload contains the item's id
      const item = state.Cart.find(item => item.id === itemId);
      if (item && item.qty > 1) {
        item.qty -= 1; // Decrement the quantity
        localStorage.setItem("Arshebcart", JSON.stringify(state.Cart)); // Update localStorage
      }
    });
  
    // Delete item from the cart
    builder.addCase(deleteitem, (state, action) => {
      const itemId = action.payload; // Assuming payload contains the item's id
      state.Cart = state.Cart.filter(item => item.id !== itemId); // Remove item
      localStorage.setItem("Arshebcart", JSON.stringify(state.Cart)); // Update localStorage
    });

    builder.addCase(emptycart,(state, action) => {
      state.Cart=[];
      localStorage.setItem("TinyClocart", JSON.stringify(state.Cart));
  })
});
