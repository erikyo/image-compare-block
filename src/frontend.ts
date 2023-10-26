import 'image-compare-viewer/src/styles/index.scss';

function loadImageCompare() {
  console.log('loaded');
  import("image-compare-viewer").then((ImageCompare) =>{
    const imgCompare = ImageCompare.default;
    const viewers = document.querySelectorAll(".wp-block-codekraft-image-compare-block");

    viewers.forEach((element) => {
      new imgCompare(element).mount();
    });
  })
}

window.addEventListener("load", loadImageCompare );
