// import { Box, Typography } from "@mui/material";
// import React from "react";
// import item1 from "../../public/item1.svg";
// import item2 from "../../public/item2.svg";
// import item3 from "../../public/item3.svg";
// import item4 from "../../public/item4.svg";
// import item5 from "../../public/item5.svg";
// import item6 from "../../public/item6.svg";
// import item7 from "../../public/item7.svg";
// import item8 from "../../public/item8.svg";
// import item9 from "../../public/item9.svg";
// import item10 from "../../public/item10.svg";
// import item11 from "../../public/item11.svg";
// import item12 from "../../public/item12.svg";

// const IWR = [
//   { id: 1, name: "Appliances", icon: item1 },
//   { id: 2, name: "Laundry", icon: item2 },
//   { id: 3, name: "Cabinets", icon: item3 },
//   { id: 4, name: "Fridge & Freezer", icon: item4 },
//   { id: 5, name: "Cardboard", icon: item5 },
//   { id: 6, name: "Deck Removal", icon: item6 },
//   { id: 7, name: "Pianos", icon: item7 },
//   { id: 8, name: "Hot Tub", icon: item8 },
//   { id: 9, name: "Mattresses", icon: item9 },
//   { id: 10, name: "Office Furniture", icon: item10 },
//   { id: 11, name: "Office Cubicles", icon: item11 },
//   { id: 12, name: "Furniture", icon: item12 },
// ];

// const duplicated = [...IWR, ...IWR]; // Duplicate for infinite effect

// const Sliders = () => {
//   return (
//     <Box sx={{ overflow: "hidden", mt: 6 }}>
//       <Typography
//         sx={{
//           fontWeight: 700,
//           fontSize: { xs: "32px", sm: "45px", md: "60px" },
//           lineHeight: { xs: "42px", sm: "55px", md: "70px" },
//           textAlign: "center",
//           color: "#111111",
//           fontFamily: "Inter",
//         }}
//       >
//         Items We{" "}
//         <span
//           style={{
//             background:
//               "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             textFillColor: "transparent",
//           }}
//         >
//           Remove
//         </span>
//       </Typography>

//       {/* Row 1: Left to Right */}
//       <Box
//         sx={{
//           mt: 4,
//           overflow: "hidden",
//           whiteSpace: "nowrap",
//           height: "250px",
//           width: "100%",
//           display: "flex",
//           animation: "slide-left 30s linear infinite",
//           alignItems: "center",
//         }}
//       >
//         {duplicated.map((item, index) => (
//           <Box
//             key={`${item.id}-${index}`}
//             sx={{
//               minWidth: "200px",
//               mx: 2,
//               height: "170px",
//               flexShrink: 0,
//               borderRadius: "5px",
//               boxShadow: "0px 3px 20px rgba(0,0,0, .15)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               transition: "all 0.3s ease",
//               ":hover": {
//                 transform: "scale(1.1)",
//                 background:
//                   "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/black-silver-stove-with-number-10-it 1.png')",
//                 backgroundSize: "cover",
//                 boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.85)",
//               },
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: "70px",
//                   height: "70px",
//                   background: "#ffbbb37c",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   borderRadius: "70px",
//                   mb: 1,
//                 }}
//               >
//                 <img src={item.icon} alt={item.name} width={40} />
//               </Box>
//               <Typography
//                 sx={{ color: "#000", fontSize: "20px", fontWeight: 600 }}
//               >
//                 {item.name}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>

//       {/* Row 2: Right to Left */}
//       <Box
//         sx={{
//           mt: 4,
//           overflow: "hidden",
//           whiteSpace: "nowrap",
//           height: "250px",
//           width: "100%",
//           display: "flex",
//           animation: "slide-right 30s linear infinite",
//           alignItems: "center",
//         }}
//       >
//         {duplicated.map((item, index) => (
//           <Box
//             key={`${item.id}-rev-${index}`}
//             sx={{
//               minWidth: "200px",
//               mx: 2,
//               height: "170px",
//               flexShrink: 0,
//               borderRadius: "5px",
//               boxShadow: "0px 3px 20px rgba(0,0,0, .15)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               transition: "all 0.3s ease",
//               ":hover": {
//                 transform: "scale(1.1)",
//                 background:
//                   "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/black-silver-stove-with-number-10-it 1.png')",
//                 backgroundSize: "cover",
//                 boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.85)",
//               },
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: "70px",
//                   height: "70px",
//                   background: "#ffbbb37c",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   borderRadius: "70px",
//                   mb: 1,
//                 }}
//               >
//                 <img src={item.icon} alt={item.name} width={40} />
//               </Box>
//               <Typography
//                 sx={{ color: "#000", fontSize: "20px", fontWeight: 600 }}
//               >
//                 {item.name}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>

//       {/* Keyframes */}
//       <style>
//         {`
//           @keyframes slide-left {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }

//           @keyframes slide-right {
//             0% { transform: translateX(-50%); }
//             100% { transform: translateX(0); }
//           }
//         `}
//       </style>
//     </Box>
//   );
// };

// export default Sliders;

import { Box, Typography } from "@mui/material";
import React from "react";
import item1 from "../../public/item1.svg";
import item2 from "../../public/item2.svg";
import item3 from "../../public/item3.svg";
import item4 from "../../public/item4.svg";
import item5 from "../../public/item5.svg";
import item6 from "../../public/item6.svg";
import item7 from "../../public/item7.svg";
import item8 from "../../public/item8.svg";
import item9 from "../../public/item9.svg";
import item10 from "../../public/item10.svg";
import item11 from "../../public/item11.svg";
import item12 from "../../public/item12.svg";

const IWR = [
  { id: 1, name: "Appliances", icon: item1 },
  { id: 2, name: "Laundry", icon: item2 },
  { id: 3, name: "Cabinets", icon: item3 },
  { id: 4, name: "Fridge & Freezer", icon: item4 },
  { id: 5, name: "Cardboard", icon: item5 },
  { id: 6, name: "Deck Removal", icon: item6 },
  { id: 7, name: "Pianos", icon: item7 },
  { id: 8, name: "Hot Tub", icon: item8 },
  { id: 9, name: "Mattresses", icon: item9 },
  { id: 10, name: "Office Furniture", icon: item10 },
  { id: 11, name: "Office Cubicles", icon: item11 },
  { id: 12, name: "Furniture", icon: item12 },
  // { id: 13, name: "Exercise Equipment", icon: item12 },
  // { id: 14, name: "Books & Paper", icon: item12 },
  // { id: 15, name: "Garage Cleanout", icon: item12 },
  // { id: 16, name: "Attic/Basement Cleanout", icon: item12 },
];

const CardItem = ({ icon, name }) => (
  <Box
    sx={{
      width: { xs: "120px", sm: "170px", md: "266px" },
      height: { xs: "140px", sm: "170px", md: "170px" },
      borderRadius: "5px",
      boxShadow: "0px 3px 20px rgba(0,0,0, .15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      transition: "all 0.3s ease",
      ":hover": {
        transform: "scale(1.05)",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/black-silver-stove-with-number-10-it 1.png')",
        backgroundSize: "cover",
        boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.85)",
        color: "#fff",
      },
    }}
  >
    <Box
      sx={{
        width: "70px",
        height: "70px",
        background: "#ffbbb37c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "70px",
        mb: 1,
      }}
    >
      <img src={icon} alt={name} width={40} />
    </Box>
    <Typography
      sx={{
        fontSize: { xs: "12px", sm: "16px", md: "20px" },
        fontWeight: 600,
      }}
    >
      {name}
    </Typography>
  </Box>
);

const Sliders = () => {
  const firstRow = IWR.slice(0, 6);
  const secondRow = IWR.slice(6);

  return (
    <Box sx={{ mt: 12, overflow: "hidden", pb: 4 }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "32px", sm: "45px", md: "60px" },
          lineHeight: { xs: "42px", sm: "55px", md: "70px" },
          textAlign: "center",
          color: "#111111",
          fontFamily: "Inter",
        }}
      >
        Items We{" "}
        <span
          style={{
            background:
              "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Remove
        </span>
      </Typography>

      <Box sx={{ mt: 6 }}>
        {/* Row 1 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: { xs: "wrap", md: "unset" },
            pr: { xs: "0px", md: "85px" },
            gap: 2,
          }}
        >
          {firstRow.map((item) => (
            <CardItem key={item.id} icon={item.icon} name={item.name} />
          ))}
        </Box>

        {/* Row 2 (Offset) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            gap: 2,
            mt: 2,
            flexWrap: { xs: "wrap", md: "unset" },
            pl: { xs: "0px", md: "85px" },
          }}
        >
          {secondRow.map((item) => (
            <CardItem key={item.id} icon={item.icon} name={item.name} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sliders;
