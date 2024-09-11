// Banner duration timer start time
var startTime;
// Timeline reference
var tl;
init();
// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();
  gsap.registerPlugin(MotionPathPlugin);
  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  // tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  animate();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, rotationZ: 0.1, force3D: true });
  // tl.set(["#sugar_wrpr"], { x: -10, rotationZ: -70, force3D: true });
  tl.set(["#manageBtn .btn_overlay"], { autoAlpha: 0, scale: 0, force3D: true });
  tl.set(["#logo"], { autoAlpha: 0, scale: 0.25, force3D: true });
  tl.set(["#h2","#sugar_container"], { autoAlpha: 0, y: "100%", force3D: true });
  // tl.set(["#cross"], { scale:(0.6,0.8), force3D: true });
  // tl.set(["#dots"], { scale: 0.8, force3D: true });

  tl.addLabel('frame_1', 0)
    .to(['#h1'], 0.5, { autoAlpha: 1, scale: 1, ease: Power2.easeOut }, "frame_1")
    .to(['#logo'], 0.5, { autoAlpha: 1, scale: 1, ease: Power2.easeOut }, "frame_1")
    .to(['.l-circle', '.l-cross'], 0.25, { backgroundColor: '#fff', ease: Power2.easeOut }, "frame_1+=0.25")
    .to(['#dots'], 0.25, { width: 'calc(100% + 30px)', height: 'calc(100% + 20px)', x: -15, y: -10, ease: Power2.ease }, "frame_1+=0.25")
    .to(['#dots'], 0.25, { width: 'calc(100% - 20px)', height: 'calc(100% - 15px)', x: 10, y: 7.5, ease: Power2.ease }, "frame_1+=0.5")
    .to(['#dots'], 0.25, { width: '100%', height: '100%', x: 0, y: 0, ease: Power2.ease }, "frame_1+=0.75")

  tl.addLabel('frame_2', 3)

    .to(['#h1'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, "frame_2+=0")
    .to(['#cross'], 0.5, { scale: 0, autoAlpha: 0, ease: Power2.easeOut }, "frame_2+=0")
    .to(['.l-cross'], 0.5, { backgroundColor: '#2ab3d5', autoAlpha: 0, ease: Power2.easeOut }, "frame_2+=0")
    .to(['#dots'], 0.25, { width: 'calc(100% - 50px)', x: 25, ease: Power2.ease }, "frame_2+=0")
    .to(['#dots'], 1.5, { rotationZ: 460, ease: Power2.easeNone }, "frame_2+=0")


    .to(['#circle-two'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=0.15")
    .to(['#dcircle-two'], 0, { autoAlpha: 1, ease: Power2.easeNone }, "frame_2+=0.15")
    .to("#dcircle-two", {
      left: -14, top: 7,
      duration: 1, yoyo: false, ease: 'linear', motionPath: { path: "#path", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_2+=0.15")

    .to(['#circle-one'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=0.32")
    .to(['#dcircle-one'], 0, { autoAlpha: 1, ease: Power2.easeNone }, "frame_2+=0.32")
    .to("#dcircle-one", {
      left: -14, top: 7,
      duration: 1, yoyo: false, ease: 'linear', motionPath: { path: "#path", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_2+=0.32")

    .to(['#circle-four'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=0.53")
    .to(['#dcircle-four'], 0, { autoAlpha: 1, ease: Power2.easeNone }, "frame_2+=0.53")
    .to("#dcircle-four", {
      left: -14, top: 7,
      duration: 1, yoyo: false, ease: 'linear', motionPath: { path: "#path", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_2+=0.53")

    .to(['#circle-three'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=0.82")
    .to(['#dcircle-three'], 0, { autoAlpha: 1, ease: Power2.easeNone }, "frame_2+=0.82")
    .to("#dcircle-three", {
      left: -14, top: 7,
      duration: 1, yoyo: false, ease: 'linear', motionPath: { path: "#path", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_2+=0.82")

    .to(['#h2', '#sugar_container'], 0.5, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, "frame_2+=0.9")

    .to(['#dcircle-two'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.15")
    .to(['#dcircle-one'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.32")
    .to(['#dcircle-four'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.53")
    .to(['#dcircle-three'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.82")


  // .to(['#h2', '#cupU', '#cupL', '#sugar_container', '#upper'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, "frame_2+=0.5")
  // .to(['#lower'], 0, { autoAlpha: 1, ease: Power2.easeOut }, "frame_2+=1")
  // .to(['#sugar_wrpr'], 2, { x: 0, rotationZ: 70, ease: Power2.ease }, "frame_2+=1.5")

  // tl.addLabel('frame_3', 5.5)
  //   .to(['#h2', '#sugar_container'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, "frame_3")
  //   .staggerTo(['#wdot1', '#cdot1', '#wdot2', '#cdot2', '#wdot3', '#cdot3', '#wdot4', '#cdot4',], 0.125, { autoAlpha: 1, ease: Power2.easeNone }, 0.125, 'frame_+=0')
  //   .to(['#h3', '#combine_container'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, "frame_3+=0.5")
  //   .to(['#combine_container'], 4, { rotationZ: 45, ease: Power2.easeNone }, "frame_3+=2")

  // tl.addLabel('frame_4', 9.5)
  //   .to(['#h3', '#combine_container'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, "frame_4")
  //   .to(['#h4', '#phn', '#manageBtn','#phn-content', '#phnLogo'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, "frame_4+=0.5")
  //   .to(["#manageBtn .btn_overlay"], 0.1, { autoAlpha: 1, ease: Power2.easeOut }, "frame_4")
  //   .to(["#manageBtn"], 0.25, { scale: 0.95, ease: Power2.easeOut }, "frame_4+=2")
  //   .to(["#manageBtn .btn_overlay"], 0.25, { scale: 1, ease: Power2.easeOut }, "frame_4+=2")
  //   .to(["#manageBtn"], 0, { scale: 1, ease: Power2.easeOut }, "frame_4+=2.25")
  //   .to(["#manageBtn .btn_overlay"], 0, { autoAlpha: 0, ease: Power2.easeOut }, "frame_4+=2.25")
  //   // .fromTo('#manageBtn', .5, { scale: 0.9 }, { scale: 1, ease: Quad.easeOut, force3D: true }, "frame_4+=1")
  //   // .to(['#phn-content', '#phnLogo'], 0, { autoAlpha: 1, ease: Power2.easeOut }, "frame_4+=1.5")

  // tl.addLabel('frame_5', 13)
  //   .to(['#h4', '#phn', '#manageBtn', '#phn-content'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, "frame_5")
  //   .to(['#h5', '#logo', '#cta'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, "frame_5+=0.5")

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();
  setRollover();
  // console.log( "Animation duration: " + (endTime - startTime) / 1000 + " seconds");
}

// CTA grow on hover

function setRollover() {
  var clickArea = document.getElementById("default_exit");
  clickArea.onclick = function () {
    window.open(clickTag, "_blank");
  };
  // clickArea.addEventListener("mouseover", default_over, false);
  // clickArea.addEventListener("mouseout", default_out, false);
}

// function default_over(event) {
//   // TweenMax.to(["#cta span"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0, backgroundColor: "#014732", color: "#fff" });
//   // TweenMax.to(["#cta span svg"], 0.3, { fill: "#fff" }, "<");
// }

// function default_out(event) {
//   // TweenMax.to(["#cta span"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor: "inherit", color: "#000" });
//   // TweenMax.to(["#cta span svg"], 0.3, { fill: "#000" }, "<");
// }


