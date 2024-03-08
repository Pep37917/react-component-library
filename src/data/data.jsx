import React from "react"

// icons
import { FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { FaTimesCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5"
import { BiSolidQuoteAltLeft } from "react-icons/bi"
import { FaTreeCity } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

// header properties
const bars = <FaBars />

// badges
const badgeBgColorArr = ["#F3F4F6", "#FEE2E2", "#FEF3C7", "#D1FAE5", "#DBEAFE", "#E0E7FF", "#EDE9FE", "#FCE7F3"]
const badgeTextColorArr = ["#1F2937", "#991B1B", "#92400E", "#065F46", "#1E40AF", "#3730A3", "#5B21B6", "#9D174D"]

// banners properties
const bannerBg = ["#ECFDF5", "#FFFBEB", "#FEF2F2", "#EFF6FF"]
const bannerIcons = [<FaCheckCircle />, <IoIosWarning />, <FaTimesCircle />, <FaCircleInfo />]
const bannerTitleClr = ["#065F46", "#92400E", "#92400E", "#1E40AF"]
const bannerDescClr = ["#047857", "#B45309", "#B45309", "#1C51B9"]
const bannerTitle = ["Congratulations", "Attention", "There is a problem with your application", "Update available"]

// card properties
const cardIcon = <IoCloudUploadOutline />

// testimonials properties
const testimIcon =  <BiSolidQuoteAltLeft />
const testimCityIcon = <FaTreeCity />

export {
        bars,
        
        badgeBgColorArr, badgeTextColorArr,
        
        bannerBg, bannerIcons, 
        bannerTitleClr, bannerDescClr, 
        bannerTitle,

        cardIcon,

        testimIcon, testimCityIcon
        }