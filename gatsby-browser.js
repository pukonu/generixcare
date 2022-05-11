import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let cqcWrapper;

const addScript = (url, delay) => {
  setTimeout(() => {
    let cqcElem;
    try {
      cqcElem = document.getElementById("cqc-el");
    } catch (e) {
      cqcElem = document.createElement("div");
    }
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    cqcElem.appendChild(script);
    document.body.appendChild(cqcWrapper);
  }, delay);
};

export const onRouteUpdate = ({ location }) => {
  if (location.pathname === "/") {
    addScript(
      "//www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-2155383702&data-host=www.cqc.org.uk&type=location",
      500
    );
  }
};

// export const onPostPrefetchPathname = ({ pathname }) => {
//   const cqcElem = document.getElementById("cqc-el");
//
//   console.log("Pathname", pathname);
//
//   if (cqcElem && cqcWrapper && pathname === "/") {
//     window.onload = () => {
//       addScript(
//         "//www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-2155383702&data-host=www.cqc.org.uk&type=location"
//       );
//     };
//   }
// };
