function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#Todo"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#Todo" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#Todo", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#Todo").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();
gsap.to(`#page video`, {
  scrollTrigger: {
    trigger: `#page video`,
    start: `2% top`,
    end: `bottom top`,
    // markers: true,
    scroller: `#Todo`,
    onEnter: () => {
      document.querySelector("#page video").play();
    }
  }
});
gsap.to("#page",{
  scrollTrigger: {
    trigger: `#page `,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    scroller: `#Todo`,
    pin:true
   
  }
})

gsap.to("#page",{
  scrollTrigger: {
    trigger: `#page-bottom`,
    start: `50% top`,
    end: `bottom top`,
    // markers: true,
    scroller: `#Todo`,
   },
   
})
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:`#page-son`,
    start:`top top`,
    scrub:1,
    scroller: `#Todo`,
    markers: true,
    pin:true

  }
})

tl.to("#page-son h1",{
  top:`-50%`
})




var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:`#page-papa`,
    start:`top top`,
    scrub:1,
    scroller: `#Todo`,
    markers: true,
    pin:true

  }
})

tl1.to("#page-papa h1",{
  top:`-50%`
})



var tm1 = gsap.timeline({
  scrollTrigger:{
    trigger:`#page-mata`,
    start:`top top`,
    scrub:1,
    scroller: `#Todo`,
    markers: true,
    pin:true

  }
})
tm1.to("#page-mata h1",{
  top:`-50%`
})


var Tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: "#page-chacha #center-div", // Corrected selector
    start: "top top",
    scrub: 1,
    scroller: "#Todo",
    markers: true,
    pin: true
  }
});

Tl2.to("#page-chacha #center-div h1", { // Corrected selector
  top: "-50%"
});


document.addEventListener("DOMContentLoaded", function() {
  canvas(); // Call your canvas function after the DOM has loaded
});




function canvas(){
  const canvas = document.querySelector(" #page7 canvas");
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
  https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/hero_startframe__k6x4mt11vf2u_medium.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/routers/quicklook_placeholder__eu3anwy8icae_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/portrait_base__bwsgtdddcl7m_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/hero_startframe__k6x4mt11vf2u_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/hero_endframe__dz973mndvu82_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/foundation/spatial_computing_startframe__rtxdvqb0m1ei_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/foundation/digital_canvas_startframe__dn0uk8v419km_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/foundation/inputs_startframe__ggmu2xwjf662_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/foundation/entertainment_startframe__o6s8ikcayjum_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_medium.png
  https://www.apple.com/v/apple-vision-pro/c/images/overview/intro/hardware_base__ecl2v43j73o2_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/intro/intro_spin_endframe__dy927flmi3au_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/experiences/apps/apps_startframe__fgskz7opptiu_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/experiences/entertainment/entertainment_startframe__o6s8ikcayjum_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/experiences/photos-videos/photos_videos_startframe__dnwwa2e1qys2_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/experiences/connection/connection_startframe__dk2ju081ayqa_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/design/portrait_right_base__cd0c4xdglcs2_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/design/portrait_front_base__gmqifatci56q_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/design/glass_top__k3b8lzqd1l2m_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/design/glass_side__gm4agomrwl2e_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/design/glass_startframe__fvet9b5mg86e_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/hero_startframe__k6x4mt11vf2u_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/scaling_ui__gosi0305um2y_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/spatial_interaction__br11mf88bzxy_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/environment_mt_hood__bowcnbltk57m_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/environment_white_sand__d9yi9qfevrue_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/environment_moon__cddspuen58eq_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/around_you__bfdlxkwczahe_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/spatial_audio_startframe__dl2iakzba36u_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/features/eye_tracking_off__fx6m2dj3mlqq_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/features/eye_tracking_on__ln11reqs6mi6_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/features/sensors_off__cfzcmow4c3f6_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/features/sensors_video__b8xghearfs76_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/features/sensors_tracking__dssyfpe9tc66_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/features/sensors_mapping__3hn0pwmp7v6e_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/features/sensors_chips__s805s5o3gkii_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/routers/ar_logo__bmtaba6ckk76_large.png
  https://www.apple.com/v/apple-vision-pro/c/images/overview/routers/ar_tile__que64jqs2t2e_large.jpg
  https://www.apple.com/v/apple-vision-pro/c/images/overview/routers/developers__bxrd1uafspsi_large.png
  https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-footer/breadcrumbs/apple/icon_large.svg
  https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-footer/breadcrumbs/separator/icon_large.svg
  https://securemetrics.apple.com/b/ss/applestoreww/1/JS-2.23.0/s75498415783739?AQB=1&ndh=1&pf=1&t=16%2F1%2F2024%2023%3A11%3A33%205%20-330&fid=3A6C881CF004B467-1E95A23375290990&ce=UTF-8&cdp=2&cl=1800&pageName=apple%20vi
 `;
  return data.split("\n")[index];
}



const frameCount = 199;

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
    trigger: `#page7`,
    //   set start end according to preference
    start: `top top`,
    end: `500% top`,
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
  var ratio = Math.min(hRatio, vRatio);
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

  trigger: "#page7",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();

