import {configureStore} from "@reduxjs/toolkit"
import { arshebreducer } from "./Reducer"
export const store= configureStore({
    reducer:{
        arshebdeatil : arshebreducer
    }
})
  