import { El } from "./components/shared/El/index";
import { Test } from "./components/test";
import { counter } from "./utils/script";
export const App = () => {
  console.log("HelloWorld");
  const amount = counter(10);
  function logData() {
    // @* مهم اگه میخوای فانکشن لاگ دیتا و یا هر تابعی رو که این مدلی نوشتیم اکسپورت کنیم باید به مثل تابع آپ داخل کانست بریزی
    console.log("clicked");
    document.getElementById("h1").style.backgroundColor = "red";
  }
  return El({
    // این El اولی داخل آبجکته نه آرایه چون داریم فانکشن کال می کنیم
    element: "div",
    className: "bg-red-400 flex justify-content justify-between",
    children: [
      El({
        element: "div",
        className: " flex flex-col gap-5",
        children: [
          //  ولی مقدار رو children یا داخل استرینگ برای متنش یا اینر اچ تی ام ال بذار یا ممکنه تگ بذاری که در اون صورت باید داخل آرایه و بعدش آبجکت بذاری
          El({
            element: "input",
            className: "text-black bg-gray-300 text-xl p-3",
            innerHTML: "",
            id: "",
            eventListener: [
              {
                event: "keyup",
                callback: (e) => {
                  console.log(e.target.value);
                },
              },
            ],
          }),

          El({
            element: "h1",
            className: "text-black bg-gray-300 text-2xl p-5",
            innerHTML: "hTag",
            id: "h1",
          }),
          El({
            element: "p",
            className: "text-blue-500 bg-gray-300 text-2xl p-5",
            innerHTML: amount,
            eventListener: [
              {
                event: "click",
                callback: logData,
                //  callback: logData() حواست باشه این جوری بنویسی فقط تابع اجرا میشه و یه لاگ میگیره ولی ایونت کلیک کار نمیکنه باید کالبکش این شکلی باشه,
              },
            ],
          }),
        ],
      }),
      El({
        element: "img",
        className: "w-2/4 h-auto",
        src: "./src/assets/images/pepsi.jpg",
        // "./assets/images/Medicine.jpg" این شکلی خطا داد,
      }),
      Test(),
    ],
  });
};
