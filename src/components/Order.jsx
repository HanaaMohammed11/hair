// import React, { useState } from "react";

// function Order() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !phone) {
//       setMessage("⚠️ من فضلك املأ البيانات المطلوبة");
//       return;
//     }

//     const ownerPhone = "201126134052";

//     const text = `طلب جديد من الموقع:
// - الاسم: ${name}
// - البريد: ${email}
// - رقم العميل: ${phone}`;

//     const encodedText = encodeURIComponent(text);
//     const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedText}`;
//     window.open(whatsappUrl, "_blank");

//     setMessage("✅ تم إرسال الطلب الى واتساب!");
//   };

//   return (
//     <section
//       dir="rtl"
//       className="p-10 bg-white text-[rgb(13,19,79)] flex flex-col md:flex-row items-center justify-center gap-10"
//       id="order"
//     >
//       {/* النص */}
//       <div className="md:w-1/2 text-center md:text-right mb-20">
//   <h2 className="text-4xl font-bold mb-8 text-[rgb(163,3,165)]">
//     لا تفوّتي العرض الحصري اليوم! 💖
//   </h2>
//   <p className="text-2xl mb-5">
//     احصلي على شعر ناعم، لامع، وخالٍ من التقصف مع <span className="text-[rgb(163,3,165)] font-semibold">Princess Oil</span> ✨
//   </p>
//   <p className="text-lg text-gray-700 leading-relaxed">
//     سجّلي بياناتك الآن لتستفيدي من <span className="font-bold text-[rgb(163,3,165)]">خصم خاص لفترة محدودة</span> 
//     وتوصيل سريع حتى باب البيت 🚚  
//     لا تنتظري حتى ينتهي العرض – الجمال لا ينتظر! 💅
//   </p>
// </div>

//       {/* الفورم */}
//       <div className="md:w-1/2 w-full border-2 border-[rgb(163,3,165)] p-10 rounded-xl shadow-[0_10px_25px_rgba(242,105,244,0.5)] ">
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
//           {/* الاسم */}
//           <div className="flex flex-col text-right">
//             <label className="mb-1 font-semibold">الاسم *</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)]"
//             />
//           </div>

//           {/* البريد الإلكتروني */}
//           <div className="flex flex-col text-right">
//             <label className="mb-1 font-semibold">البريد الإلكتروني *</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)]"
//             />
//           </div>

//           {/* رقم التليفون */}
//           <div className="flex flex-col text-right">
//             <label className="mb-1 font-semibold">رقم التليفون *</label>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//               className="p-3 rounded-md border border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)]"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-[rgb(13,19,79)] text-white rounded-md hover:bg-[rgb(163,3,165)] transition-colors"
//           >
//             اطلب الآن
//           </button>
//         </form>

//         {message && (
//           <p className="text-green-500 font-bold mt-4 text-center">{message}</p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Order;
import React, { useState } from "react";
// Note: Removed the import for the photo since public assets are referenced directly.
// If the image is in the public folder, use the path "/media/unnamed.jpg" directly.

function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      setMessage("⚠️ من فضلك املأ البيانات المطلوبة");
      return;
    }

    const ownerPhone = "201126134052";

    const text = `طلب جديد من الموقع:
- الاسم: ${name}
- البريد: ${email}
- رقم العميل: ${phone}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");

    setMessage("✅ تم إرسال الطلب الى واتساب!");
  };

  return (
    <section
      dir="rtl"
      className="relative p-4 sm:p-6 md:p-10 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 text-[rgb(13,19,79)] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 min-h-screen overflow-hidden"
      id="order"
      style={{
        backgroundImage: "url('/media/unnamed.jpg')", // Corrected: Direct path to public asset
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional: for parallax effect on desktop
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>

      {/* النص */}
      <div className="md:w-1/2 text-center md:text-right mb-10 md:mb-20 relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-[rgb(163,3,165)] drop-shadow-lg animate-fade-in">
          لا تفوّتي العرض الحصري اليوم! 💖
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-5 font-light leading-relaxed">
          احصلي على شعر ناعم، لامع، وخالٍ من التقصف مع <span className="text-[rgb(163,3,165)] font-bold underline decoration-wavy">Princess Oil</span> ✨
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed bg-white bg-opacity-80 p-3 md:p-4 rounded-lg shadow-md">
          سجّلي بياناتك الآن لتستفيدي من <span className="font-bold text-[rgb(163,3,165)] bg-yellow-200 px-2 py-1 rounded">خصم خاص لفترة محدودة</span> 
          وتوصيل سريع حتى باب البيت 🚚  
          لا تنتظري حتى ينتهي العرض – الجمال لا ينتظر! 💅
        </p>
      </div>

      {/* الفورم */}
      <div className="md:w-1/2 w-full max-w-md md:max-w-lg border-2 border-[rgb(163,3,165)] p-6 md:p-10 rounded-2xl shadow-2xl bg-white bg-opacity-95 backdrop-blur-sm relative z-10 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-[rgb(163,3,165)]">اطلبي الآن واستمتعي بالجمال!</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6 w-full">
          {/* الاسم */}
          <div className="flex flex-col text-right relative">
            <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">الاسم *</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-3 md:p-4 pl-10 md:pl-12 rounded-lg border-2 border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)] focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-sm md:text-base"
                placeholder="أدخلي اسمك"
              />
              <span className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-[rgb(163,3,165)] text-lg">👤</span>
            </div>
          </div>

          {/* البريد الإلكتروني */}
          <div className="flex flex-col text-right relative">
            <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">البريد الإلكتروني</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 md:p-4 pl-10 md:pl-12 rounded-lg border-2 border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)] focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-sm md:text-base"
                placeholder="أدخلي بريدك الإلكتروني"
              />
              <span className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-[rgb(163,3,165)] text-lg">📧</span>
            </div>
          </div>

          {/* رقم التليفون */}
          <div className="flex flex-col text-right relative">
            <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">رقم التليفون *</label>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="p-3 md:p-4 pl-10 md:pl-12 rounded-lg border-2 border-gray-300 text-[rgb(13,19,79)] focus:outline-none focus:border-[rgb(163,3,165)] focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-sm md:text-base"
                placeholder="أدخلي رقم هاتفك"
              />
              <span className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-[rgb(163,3,165)] text-lg">📱</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 md:p-4 bg-gradient-to-r from-[rgb(13,19,79)] to-[rgb(163,3,165)] text-white rounded-lg font-bold text-base md:text-lg hover:from-[rgb(163,3,165)] hover:to-[rgb(13,19,79)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            اطلب الآن ✨
          </button>
        </form>

        {message && (
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-green-100 border border-green-300 rounded-lg text-center animate-bounce">
            <p className="text-green-700 font-bold text-sm md:text-base">{message}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Order;
