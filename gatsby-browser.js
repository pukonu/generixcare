import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let cqcWrapper;

const addScript = (url) => {
  cqcWrapper = document.createElement('div');
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  cqcWrapper.appendChild(script);
  document.body.appendChild(cqcWrapper);
};

export const onClientEntry = () => {
  window.onload = () => {
    addScript(
      '//www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-2155383702&data-host=www.cqc.org.uk&type=location'
    );
  };
};

// export const onPostPrefetchPathname = ({ pathname }) => {
//   const cqcElem = document.getElementById('cqc-widget-elem');
//
//   if (cqcElem && cqcWrapper && pathname === '/') {
//     try {
//       cqcElem.appendChild(cqcWrapper);
//     } catch (e) {}
//   }
// };
