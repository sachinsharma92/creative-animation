// Korean Movement
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ../images/ani/male0001.png
     ../images/ani/male0002.png
     ../images/ani/male0003.png
     ../images/ani/male0004.png
     ../images/ani/male0005.png
     ../images/ani/male0006.png
     ../images/ani/male0007.png
     ../images/ani/male0008.png
     ../images/ani/male0009.png
     ../images/ani/male0010.png
     ../images/ani/male0011.png
     ../images/ani/male0012.png
     ../images/ani/male0013.png
     ../images/ani/male0014.png
     ../images/ani/male0015.png
     ../images/ani/male0016.png
     ../images/ani/male0017.png
     ../images/ani/male0018.png
     ../images/ani/male0019.png
     ../images/ani/male0020.png
     ../images/ani/male0021.png
     ../images/ani/male0022.png
     ../images/ani/male0023.png
     ../images/ani/male0024.png
     ../images/ani/male0025.png
     ../images/ani/male0026.png
     ../images/ani/male0027.png
     ../images/ani/male0028.png
     ../images/ani/male0029.png
     ../images/ani/male0030.png
     ../images/ani/male0031.png
     ../images/ani/male0032.png
     ../images/ani/male0033.png
     ../images/ani/male0034.png
     ../images/ani/male0035.png
     ../images/ani/male0036.png
     ../images/ani/male0037.png
     ../images/ani/male0038.png
     ../images/ani/male0039.png
     ../images/ani/male0040.png
     ../images/ani/male0041.png
     ../images/ani/male0042.png
     ../images/ani/male0043.png
     ../images/ani/male0044.png
     ../images/ani/male0045.png
     ../images/ani/male0046.png
     ../images/ani/male0047.png
     ../images/ani/male0048.png
     ../images/ani/male0049.png
     ../images/ani/male0050.png
     ../images/ani/male0051.png
     ../images/ani/male0052.png
     ../images/ani/male0053.png
     ../images/ani/male0054.png
     ../images/ani/male0055.png
     ../images/ani/male0056.png
     ../images/ani/male0057.png
     ../images/ani/male0058.png
     ../images/ani/male0059.png
     ../images/ani/male0060.png
     ../images/ani/male0061.png
     ../images/ani/male0062.png
     ../images/ani/male0063.png
     ../images/ani/male0064.png
     ../images/ani/male0065.png
     ../images/ani/male0066.png
     ../images/ani/male0067.png
     ../images/ani/male0068.png
     ../images/ani/male0069.png
     ../images/ani/male0070.png
     ../images/ani/male0071.png
     ../images/ani/male0072.png
     ../images/ani/male0073.png
     ../images/ani/male0074.png
     ../images/ani/male0075.png
     ../images/ani/male0076.png
     ../images/ani/male0077.png
     ../images/ani/male0078.png
     ../images/ani/male0079.png
     ../images/ani/male0080.png
     ../images/ani/male0081.png
     ../images/ani/male0082.png
     ../images/ani/male0083.png
     ../images/ani/male0084.png
     ../images/ani/male0085.png
     ../images/ani/male0086.png
     ../images/ani/male0087.png
     ../images/ani/male0088.png
     ../images/ani/male0089.png
     ../images/ani/male0090.png
     ../images/ani/male0091.png
     ../images/ani/male0092.png
     ../images/ani/male0093.png
     ../images/ani/male0094.png
     ../images/ani/male0095.png
     ../images/ani/male0096.png
     ../images/ani/male0097.png
     ../images/ani/male0098.png
     ../images/ani/male0099.png
     ../images/ani/male0100.png
     ../images/ani/male0101.png
     ../images/ani/male0102.png
     ../images/ani/male0103.png
     ../images/ani/male0104.png
     ../images/ani/male0105.png
     ../images/ani/male0106.png
     ../images/ani/male0107.png
     ../images/ani/male0108.png
     ../images/ani/male0109.png
     ../images/ani/male0110.png
     ../images/ani/male0111.png
     ../images/ani/male0112.png
     ../images/ani/male0113.png
     ../images/ani/male0114.png
     ../images/ani/male0115.png
     ../images/ani/male0116.png
     ../images/ani/male0117.png
     ../images/ani/male0118.png
     ../images/ani/male0119.png
     ../images/ani/male0120.png
     ../images/ani/male0121.png
     ../images/ani/male0122.png
     ../images/ani/male0123.png
     ../images/ani/male0124.png
     ../images/ani/male0125.png
     ../images/ani/male0126.png
     ../images/ani/male0127.png
     ../images/ani/male0128.png
     ../images/ani/male0129.png
     ../images/ani/male0130.png
     ../images/ani/male0131.png
     ../images/ani/male0132.png
     ../images/ani/male0133.png
     ../images/ani/male0134.png
     ../images/ani/male0135.png
     ../images/ani/male0136.png
     ../images/ani/male0137.png
     ../images/ani/male0138.png
     ../images/ani/male0139.png
     ../images/ani/male0140.png
     ../images/ani/male0141.png
     ../images/ani/male0142.png
     ../images/ani/male0143.png
     ../images/ani/male0144.png
     ../images/ani/male0145.png
     ../images/ani/male0146.png
     ../images/ani/male0147.png
     ../images/ani/male0148.png
     ../images/ani/male0149.png
     ../images/ani/male0150.png
     ../images/ani/male0151.png
     ../images/ani/male0152.png
     ../images/ani/male0153.png
     ../images/ani/male0154.png
     ../images/ani/male0155.png
     ../images/ani/male0156.png
     ../images/ani/male0157.png
     ../images/ani/male0158.png
     ../images/ani/male0159.png
     ../images/ani/male0160.png
     ../images/ani/male0161.png
     ../images/ani/male0162.png
     ../images/ani/male0163.png
     ../images/ani/male0164.png
     ../images/ani/male0165.png
     ../images/ani/male0166.png
     ../images/ani/male0167.png
     ../images/ani/male0168.png
     ../images/ani/male0169.png
     ../images/ani/male0170.png
     ../images/ani/male0171.png
     ../images/ani/male0172.png
     ../images/ani/male0173.png
     ../images/ani/male0174.png
     ../images/ani/male0175.png
     ../images/ani/male0176.png
     ../images/ani/male0177.png
     ../images/ani/male0178.png
     ../images/ani/male0179.png
     ../images/ani/male0180.png
     ../images/ani/male0181.png
     ../images/ani/male0182.png
     ../images/ani/male0183.png
     ../images/ani/male0184.png
     ../images/ani/male0185.png
     ../images/ani/male0186.png
     ../images/ani/male0187.png
     ../images/ani/male0188.png
     ../images/ani/male0189.png
     ../images/ani/male0190.png
     ../images/ani/male0191.png
     ../images/ani/male0192.png
     ../images/ani/male0193.png
     ../images/ani/male0194.png
     ../images/ani/male0195.png
     ../images/ani/male0196.png
     ../images/ani/male0197.png
     ../images/ani/male0198.png
     ../images/ani/male0199.png
     ../images/ani/male0200.png
     ../images/ani/male0201.png
     ../images/ani/male0202.png
     ../images/ani/male0203.png
     ../images/ani/male0204.png
     ../images/ani/male0205.png
     ../images/ani/male0206.png
     ../images/ani/male0207.png
     ../images/ani/male0208.png
     ../images/ani/male0209.png
     ../images/ani/male0210.png
     ../images/ani/male0211.png
     ../images/ani/male0212.png
     ../images/ani/male0213.png
     ../images/ani/male0214.png
     ../images/ani/male0215.png
     ../images/ani/male0216.png
     ../images/ani/male0217.png
     ../images/ani/male0218.png
     ../images/ani/male0219.png
     ../images/ani/male0220.png
     ../images/ani/male0221.png
     ../images/ani/male0222.png
     ../images/ani/male0223.png
     ../images/ani/male0224.png
     ../images/ani/male0225.png
     ../images/ani/male0226.png
     ../images/ani/male0227.png
     ../images/ani/male0228.png
     ../images/ani/male0229.png
     ../images/ani/male0230.png
     ../images/ani/male0231.png
     ../images/ani/male0232.png
     ../images/ani/male0233.png
     ../images/ani/male0234.png
     ../images/ani/male0235.png
     ../images/ani/male0236.png
     ../images/ani/male0237.png
     ../images/ani/male0238.png
     ../images/ani/male0239.png
     ../images/ani/male0240.png
     ../images/ani/male0241.png
     ../images/ani/male0242.png
     ../images/ani/male0243.png
     ../images/ani/male0244.png
     ../images/ani/male0245.png
     ../images/ani/male0246.png
     ../images/ani/male0247.png
     ../images/ani/male0248.png
     ../images/ani/male0249.png
     ../images/ani/male0250.png
     ../images/ani/male0251.png
     ../images/ani/male0252.png
     ../images/ani/male0253.png
     ../images/ani/male0254.png
     ../images/ani/male0255.png
     ../images/ani/male0256.png
     ../images/ani/male0257.png
     ../images/ani/male0258.png
     ../images/ani/male0259.png
     ../images/ani/male0260.png
     ../images/ani/male0261.png
     ../images/ani/male0262.png
     ../images/ani/male0263.png
     ../images/ani/male0264.png
     ../images/ani/male0265.png
     ../images/ani/male0266.png
     ../images/ani/male0267.png
     ../images/ani/male0268.png
     ../images/ani/male0269.png
     ../images/ani/male0270.png
     ../images/ani/male0271.png
     ../images/ani/male0272.png
     ../images/ani/male0273.png
     ../images/ani/male0274.png
     ../images/ani/male0275.png
     ../images/ani/male0276.png
     ../images/ani/male0277.png
     ../images/ani/male0278.png
     ../images/ani/male0279.png
     ../images/ani/male0280.png
     ../images/ani/male0281.png
     ../images/ani/male0282.png
     ../images/ani/male0283.png
     ../images/ani/male0284.png
     ../images/ani/male0285.png
     ../images/ani/male0286.png
     ../images/ani/male0287.png
     ../images/ani/male0288.png
     ../images/ani/male0289.png
     ../images/ani/male0290.png
     ../images/ani/male0291.png
     ../images/ani/male0292.png
     ../images/ani/male0293.png
     ../images/ani/male0294.png
     ../images/ani/male0295.png
     ../images/ani/male0296.png
     ../images/ani/male0297.png
     ../images/ani/male0298.png
     ../images/ani/male0299.png
     ../images/ani/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});

$(".menu__btn-open").on("click", function () {
  const tl = new TimelineMax();
  tl.to(".mask", 0.7, { transform: "scale(1)" })
    .to(".menu", 0.4, { visibility: "visible" })
    .to(".menu__btn", 0.3, { y: 0, opacity: 1 })
    // menu links
    .to(".menu__list .list__link:first-child", 0.3, { y: 0, opacity: 1 })
    .to(".menu__list .list__link:nth-child(2)", 0.3, { y: 0, opacity: 1 })
    .to(".menu__list .list__link:last-child", 0.3, { y: 0, opacity: 1 });
});

$(".menu__btn-close").on("click", function () {
  const tl = new TimelineMax();
  tl.to(".menu__btn", 0.4, { y: 20, opacity: 0 })
    // menu links
    .to(".menu__list .list__link:last-child", 0.3, { y: 20, opacity: 0 })
    .to(".menu__list .list__link:nth-child(2)", 0.3, { y: 20, opacity: 0 })
    .to(".menu__list .list__link:first-child", 0.3, { y: 20, opacity: 0 })
    .to(".menu", 0.4, { visibility: "hidden" })
    .to(".mask", 0.38, { transform: "scale(0)", ease: Power2.easeout });
});
