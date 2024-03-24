import { El } from "../shared/El/index";

export const Test = () => {
  const text = "extra div";
  return El({
    element: "div",
    className: "text-white bg-black text-xl p-5",
    innerHTML: text,
  });
};

// اگر میخوای کامپوننت بنویسی مثل همین تابع تست حرف اولش رو با حرف بزرگ بنویس
// بخش ها مختلف سایت رو تقسیم میکنیم و هر کدون رو یه کامپوننت میکنیم و تو فایل های مختلف رندر میکنیم ودر نهایت به فایل اصلی اپند میکنم
