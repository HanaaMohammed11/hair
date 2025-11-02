// import React from "react";
// import { GiHairStrands, GiScissors } from "react-icons/gi";
// import { MdOutlineHealthAndSafety, MdOutlineWaterDrop } from "react-icons/md";
// import { BiHappyBeaming } from "react-icons/bi";

// function Benefits() {
//   const whatsappNumber = "2000000000";
//   const whatsappMessage = encodeURIComponent(
//     "مرحبا 👋، مهتم بزيت Princesse وأود معرفة المزيد من التفاصيل عن السعر والتوصيل."
//   );
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   const benefitsList1 = [
//     { text: "تحسين طبيعية الشعر", icon: <MdOutlineWaterDrop /> },
//     { text: "إعطاء الشعر المظهر الصحي", icon: <MdOutlineHealthAndSafety /> },
//     { text: "علاج مشاكل الحرق والفرد والصبغات", icon: <GiScissors /> },
//   ];

//   const benefitsList2 = [
//     { text: "علاج التقصف والفراغات",icon: <GiHairStrands />  },
//     { text: "تطويل وزيادة كثافة الشعر", icon: <GiHairStrands /> },
//     { text: "زيادة النعومة واللمعان الطبيعي للشعر", icon: <BiHappyBeaming /> },
//   ];

//   return (
//     <section
//       className="py-16 px-4 md:px-12 bg-white text-[#0d1350]"
//       dir="rtl"
//       id="benefits"
//     >
//       {/* الجملة العلوية */}
//       <p className="text-2xl md:text-3xl font-extrabold leading-snug mb-16 text-center text-[#0d1350] animate-fadeIn">
//         اكتشفي سر الشعر الصحي والناعم بفضل تركيبة{" "}
//         <span className="font-semibold text-[#dba247]">
//           زيت الأميرات المعالج
//         </span>{" "}
//         الغنية بالفيتامينات والزيوت الطبيعية.
//       </p>

//       {/* الفوائد + الصورة */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 flex-wrap md:flex-nowrap">
//         {/* العمود الأول */}
//         <ul className="space-y-6 md:space-y-10 text-lg md:text-xl font-medium flex-1 animate-slideUp">
//           {benefitsList1.map((item, idx) => (
//             <li
//               key={idx}
//               className="flex items-center gap-3 bg-[rgba(242,105,244,0.05)] rounded-full px-4 py-2 shadow-md hover:scale-105 transition-all duration-300"
//             >
//               <span className="text-2xl text-[#dba247] animate-bounce-slow">
//                 {item.icon}
//               </span>
//               <span className="animate-fadeIn">{item.text}</span>
//             </li>
//           ))}
//         </ul>

//         {/* الصورة في المنتصف */}
//         <div className="flex justify-center my-10 md:my-0 animate-wavy">
//           <img
//             src="/media/WhatsApp Image 2025-11-02 at 5.31.51 PM-Copy.jpeg"
//             alt="princesse oil"
//             className="w-60 sm:w-72 md:w-80 lg:w-96 shadow-[0_10px_25px_rgba(242,105,244,0.3)] rounded-2xl transition-transform hover:scale-105"
//           />
//         </div>

//         {/* العمود الثاني */}
//         <ul className="space-y-6 md:space-y-10 text-lg md:text-xl font-medium flex-1 animate-slideUp">
//           {benefitsList2.map((item, idx) => (
//             <li
//               key={idx}
//               className="flex items-center gap-3 bg-[rgba(242,105,244,0.05)] rounded-full px-4 py-2 shadow-md hover:scale-105 transition-all duration-300"
//             >
//               <span className="text-2xl text-[#dba247] animate-bounce-slow">
//                 {item.icon}
//               </span>
//               <span className="animate-fadeIn">{item.text}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* زر واتساب */}
//       <div className="mt-16 flex justify-center animate-fadeIn">
//         <a
//           href={whatsappLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-[rgb(13,19,79)] text-white font-semibold py-3 px-10 rounded-full transition hover:bg-[rgb(163,3,165)]"
//         >
//           للمزيد من التفاصيل
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Benefits;
function Benefits(){
return(
  <>
  <div className="">
      <img
  className="  w-full h-full object-cover"
  src="/media/Hair oil (1).png"
  alt="Background"
/>
</div>
  </>
)
}
export default Benefits;