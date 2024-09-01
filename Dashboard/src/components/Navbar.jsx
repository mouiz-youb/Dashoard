import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "../components";
import {
  UseNavbar,useClickedX,useScreenSize,
  useClickedCart,
  useClickedChat,
  useClickedNotification,
  useClickedUserProfile,
} from "../context/ZustendStore.jsx";
const NavButton = ({ title, customeFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customeFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3  hover:bg-light-gray "
    >
      <span
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
        style={{ backgroundColor: dotColor }}
      />
        {icon}
      {/* </span> */}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const { activeMenu, setActiveMenu } = UseNavbar((state) => ({
    activeMenu: state.activeMenu,
    setActiveMenu: state.setActiveMenu,
  }));
  const {setClickedX ,X}=useClickedX((state)=>({
    setClickedX:state.setClickedX,
    X:state.X
  }))
  const {screenSize,setScreenSize} =useScreenSize((state)=>({
    screenSize :state.screenSize,
    setScreenSize:state.setScreenSize
  }))
  useEffect (()=>{
    const handleResize =() =>setScreenSize()
    window.addEventListener("resize",handleResize)
    setScreenSize()
    return () => window.removeEventListener("resize",handleResize)
  },[])
  useEffect (()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
  },[screenSize])
  // setScreenSize()
  console.log(`the screen size ${screenSize}`)
  console.log(`active menu from navbar component ${activeMenu}`);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative ">
      <NavButton
        title="Menu"
        customeFunc={() => setActiveMenu()}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="cart"
          customeFunc= { () =>setClickedX("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9d7"
          customeFunc= { () =>setClickedX("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          customeFunc= { () =>setClickedX("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => setClickedX("userProfile")}
          >
            <img src={avatar} alt="" className="rounded-full w-8 h-8 " />
            <p>
              <span className="text-gray-400">Hi ,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {X.cart && <Cart/>}
        {X.chat&& <Chat/>}
        {X.notification&& <Notification/>}
        {X.userProfile&& <UserProfile/>}
      </div>
    </div>
  );
};

export default Navbar;
// const { isClikedCart, setClickedCart } = useClickedCart((state) => ({
//   isClikedCart: state.isClikedCart,
//   setClickedCart: state.setClickedCart,
// }));
// const { isClikedChat, setClickedChat } = useClickedChat((state) => ({
//   isClikedChat: state.isClikedChat,
//   setClickedChat: state.setClickedChat,
// }));
// const { isClikedNotification, setClickedNotification } =useClickedNotification((state) => ({
//     isClikedNotification: state.isClikedNotification,
//     setClickedNotification: state.setClickedNotification,
//   }));
// const { isClikedUserProfile, setClickedUserProfile } = useClickedUserProfile(
//   (state) => ({
//     isClikedUserProfile: state.isClikedUserProfile,
//     setClickedUserProfile: state.setClickedUserProfile,
//   })
// );