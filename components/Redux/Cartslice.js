"use client"
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "Cart",
        initialState: [],
        reducers: {
            add(state, action) {
                state.push(action.payload)
            }

            
        }
    }
)