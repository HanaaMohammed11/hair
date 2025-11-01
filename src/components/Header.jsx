function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center md:justify-between">
          {/* شعار - في الموبايل كبير وفي النص */}
          <img
            src="/media/WhatsApp_Image_2025-10-31.jpg.jpg"
            alt="Princesse Logo"
            className="h-20 md:h-16 object-contain rounded-2xl border-2 border-white transition-transform hover:scale-105"
          />

          {/* روابط Navbar - تختفي في الموبايل */}
          <div className="hidden md:flex space-x-6 text-[rgb(13,19,79)] font-semibold">
            <a href="#footer" className="hover:underline">
              تواصل معنا
            </a>
            <a href="#benefits" className="hover:underline">
              فوائد المنتج
            </a>
            <a href="#order" className="hover:underline">
              اطلب المنتج
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer علشان الـ Navbar ثابت */}
      <div className="h-24"></div>

      {/* الهيرو سيكشن */}
      <header
        className="relative flex flex-col items-center justify-center py-20 px-4 sm:px-8 text-center"
        dir="rtl"
      >
        {/* الفيديو الخلفي */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/media/WhatsApp_Video_2025-11-01.mp4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay وردي شفاف */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(242,105,244,0.6)" }}
        ></div>

        {/* النص والزر */}
        <div className="relative z-10 max-w-4xl flex flex-col items-center text-white">
          {/* العنوان الرئيسي */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-relaxed drop-shadow-md mb-6 lg:mb-10">
            استعيدي لمعان شعرك الطبيعي 
             من أول استخدام
          </h1>

          {/* الفقرة الأولى */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md mb-3 sm:mb-4">
            دلّلي شعرك بخلاصة الزيوت الطبيعية التي تمنحه الحيوية،
            القوة، واللمعان الفائق.
          </p>

          {/* الفقرة الثانية */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md mb-8 sm:mb-10">
            <span className="font-extrabold text-[#dba247] lg:text-3xl text-xl drop-shadow-lg">
              مع زيت Princesse
            </span>{" "}
            جمال شعرك يبدأ من الجذور! 💫
          </p>

          {/* الزر */}
          <a
            href="#order"
            className="bg-white text-[rgb(13,19,79)] font-semibold py-3 px-10 rounded-full hover:bg-[rgb(13,19,79)] hover:text-white transition text-base sm:text-lg md:text-xl"
          >
            اطلبي الآن واستمتعي بعرض محدود!
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
