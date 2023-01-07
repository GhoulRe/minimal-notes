import { createContext, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.utils";

export const globalRender = createContext({
  globalMana: false,
  setGlobalMana: ()=> {}
});

export const globalRenderProvider =({children})=>{
  const [globalMana,setGlobalMana] = useState(false);
  const value = {globalMana,setGlobalMana};

  if(onAuthStateChangedListener) {setGlobalMana(!globalMana)}
  <globalRender.Provider value={value}>{children}</globalRender.Provider>
}