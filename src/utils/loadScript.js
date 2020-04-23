export default (src) => {
  return new Promise((resolve, reject) => {
    let head = document.getElementsByTagName("head")[0];
    let script = document.createElement("script");

    script.type = "text/javascript";
    script.src = src;
    script.onload = () => {
      resolve();
    };

    head.appendChild(script);
  });
};
