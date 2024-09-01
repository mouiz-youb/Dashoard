import { useState } from 'react'
import { create } from 'zustand'

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
export const UseNavbar = create ((set)=>({
    activeMenu :true,
    setActiveMenu : () => set((state) => ({ activeMenu: !state.activeMenu })),
}))
// for active the component of the navbar 
export const useClickedCart = create ((set)=>({
    isClikedCart :false,
    isClicked :false ,
    setClickedCart : () =>set((state) => ({isClikedCart :!state.isClikedCart})),
    setClicked : () =>set((state) => ({iscliked :!state.iscliked})),
}))
export const useClickedChat = create ((set)=>({
    isClikedChat :false,
    setClickedChat: () =>set((state) => ({isClikedChat :!state.isClikedChat})),
}))
export const useClickedNotification = create ((set)=>({
    isClikedNotification :false,
    setClickedNotification : () =>set((state) => ({isClikedNotification :!state.isClikedNotification})),
}))
export const useClickedUserProfile = create ((set)=>({
    isClikedUserProfile :false,
    setClickedUserProfile : () =>set((state) => ({isClikedUserProfile :!state.isClikedUserProfile})),
}))
const ini = {
    cart :false ,
    chat :false ,
    notification :false ,
    userProfile :false ,
}
export const useClickedX = create((set) => ({
  X: ini,
  setClickedX: (key) => {
    if (ini.hasOwnProperty(key)) {
      const newXState = Object.fromEntries(
        Object.keys(ini).map((k) => [k, k === key])
      );
      set({ X: newXState });
    } else {
      console.warn(`Invalid key: ${key}. Key not found in initial state.`);
    }
  },
}));
// set of the screen in mobile device 
export const useScreenSize = create((set)=>({
    screenSize :undefined,
    setScreenSize :()=>set(()=>({screenSize :window.innerWidth}))
}))
// export const useClickedX = create((set)=>({
//     X :ini,
//     setClickedX :(click) =>set((state)=>({X :{...state.X ,[click]:true} }))
// }))
// export const useClicked = create((set) => ({
//     ...ini,
//     setClickedX: (key) => {
//       set((state) => ({
//         ...ini,
//         [key]: true,
//       }));
//     },
//   }));