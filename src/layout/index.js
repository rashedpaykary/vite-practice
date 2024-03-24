import { El } from "@/components/shared/El";
import { footer } from "./footer/footer";

// حالا تو صفحات مختلف میای و تابع رو کالش میکنی
export const mainLayout = (children) => {
  return El({
    element: "div",
    className: "",
    children: [
      // {},header()
      // {},children در جابجایی در صفحات مختلف اینه که تغیرمیکنه و هدر و فوتر ثابت هستند
      // {},footer()
      footer(),
    ],
  });
};
