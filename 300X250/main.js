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
  tl.set(["#h2", "#sugar_container"], { autoAlpha: 0, y: "100%", force3D: true });
  // tl.set(["#logo-cross"], { scale:(0.6,0.8), force3D: true });
  // tl.set(["#logo-circles"], { scale: 0.8, force3D: true });

  tl.addLabel('frame_1', 0)
    .to(['#h1'], 0.5, { autoAlpha: 1, scale: 1, ease: Power2.easeOut }, "frame_1")
    .to(['#logo'], 0.5, { autoAlpha: 1, scale: 1, ease: Power2.easeOut }, "frame_1")
    .to(['.l-circle', '.l-cross'], 0.25, { backgroundColor: '#fff', ease: Power2.easeOut }, "frame_1+=0.25")
    .to(['#logo-circles'], 0.25, { width: 'calc(100% + 30px)', height: 'calc(100% + 20px)', x: -15, y: -10, ease: Power2.ease }, "frame_1+=0.25")
    .to(['#logo-circles'], 0.25, { width: 'calc(100% - 20px)', height: 'calc(100% - 15px)', x: 10, y: 7.5, ease: Power2.ease }, "frame_1+=0.5")
    .to(['#logo-circles'], 0.25, { width: '100%', height: '100%', x: 0, y: 0, ease: Power2.ease }, "frame_1+=0.75")

  tl.addLabel('frame_2', 3)

    .to(['#h1'], 0.5, { autoAlpha: 0, ease: Power2.easeOut }, "frame_2+=0")
    .to(['#logo-cross'], 0.5, { scale: 0, autoAlpha: 0, ease: Power2.easeOut }, "frame_2+=0")
    .to(['.l-cross'], 0.5, { backgroundColor: '#2ab3d5', autoAlpha: 0, ease: Power2.easeOut }, "frame_2+=0")
    .to(['#logo-circles'], 0.15, { width: 'calc(100% - 50px)', x: 25, ease: Power2.ease }, "frame_2+=0")
    .to(['#logo-circles'], 1.5, { rotationZ: 540, ease: Power2.easeNone }, "frame_2+=0")


    .to(['#circle-two'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=0.13")
    .to(['#dcircle-two'], 0, { autoAlpha: 1, ease: Power2.easeNone }, "frame_2+=0.13")
    .to("#dcircle-two", {
      left: -14, top: -4,
      duration: 1, yoyo: false, ease: 'linear', motionPath: { path: "#path", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_2+=0.13")

    .to(['#circle-one'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=0.27")
    .to(['#dcircle-one'], 0, { autoAlpha: 1, ease: Power2.easeNone }, "frame_2+=0.27")
    .to("#dcircle-one", {
      left: -14, top: -4,
      duration: 1, yoyo: false, ease: 'linear', motionPath: { path: "#path", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_2+=0.27")

    .to(['#circle-four'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=0.43")
    .to(['#dcircle-four'], 0, { autoAlpha: 1, ease: Power2.easeNone }, "frame_2+=0.43")
    .to("#dcircle-four", {
      left: -14, top: -4,
      duration: 1, yoyo: false, ease: 'linear', motionPath: { path: "#path", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_2+=0.43")

    .to(['#circle-three'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=0.63")
    .to(['#dcircle-three'], 0, { autoAlpha: 1, ease: Power2.easeNone }, "frame_2+=0.63")
    .to("#dcircle-three", {
      left: -14, top: -4,
      duration: 1, yoyo: false, ease: 'linear', motionPath: { path: "#path", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_2+=0.63")

    .to(['#h2', '#sugar_container'], 0.4, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, "frame_2+=0.65")

    .to(['#dcircle-two'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.13")
    .to(['#dcircle-one'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.27")
    .to(['#dcircle-four'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.43")
    .to(['#dcircle-three'], 0, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.63")

    .to(['#ripple1'], 0.75, { autoAlpha: 1, width: '60px', height: '60px', ease: Power2.easeOut }, "frame_2+=1.03")
    .to(['#ripple1'], 0.2, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.78")
    .to(['#ripple2'], 0.75, { autoAlpha: 1, width: '70px', height: '70px', ease: Power2.easeOut }, "frame_2+=1.17")
    .to(['#ripple2'], 0.2, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=1.92")
    .to(['#ripple3'], 0.75, { autoAlpha: 1, width: '75px', height: '75px', ease: Power2.easeOut }, "frame_2+=1.33")
    .to(['#ripple3'], 0.2, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=2.08")
    .to(['#ripple4'], 0.75, { autoAlpha: 1, width: '80px', height: '80px', ease: Power2.easeOut }, "frame_2+=1.53")
    .to(['#ripple4'], 0.2, { autoAlpha: 0, ease: Power2.easeNone }, "frame_2+=2.28")


  tl.addLabel('frame_3', 6.5)
    .to(['#h2', '#sugar_container'], 1, { autoAlpha: 0, y: "100%", ease: Power2.easeOut }, "frame_3")
    .to(['#h3', '#combine_container'], 0.5, { autoAlpha: 1, ease: Power2.easeOut }, "frame_3+=0.5")
    .to(['.white_dot_wrpr', '.cyan_dot_wrpr'], 1, { width: '100%', height: '100%', x: 0, y: 0, ease: Power2.easeNone }, "frame_3+=0.5")
    .to(['#combine_container'], 2, { rotationZ: 400, ease: 'linear' }, "frame_3+=0.5")
    .to(['#combine_container'], 1.5, { rotationZ: 800, ease: 'linear' }, "frame_3+=2.5")
    .staggerTo(['#cdot4', '#wdot4', '#cdot3', '#wdot3', '#cdot2', '#wdot2', '#cdot1', '#wdot1',], 0.17, { scale: 0.5, ease: 'linear' }, 0.17, 'frame_3+=2.48')

    .to(['#cdot4'], 0, { autoAlpha: 0, ease: 'linear' }, "frame_3+=2.65")
    .to(['#dcdot4'], 0, { autoAlpha: 1, ease: 'linear' }, "frame_3+=2.65")
    .to('#dcdot4', {
      scale: 0.1, left: -8, top: -14, backgroundColor: '#fff',
      duration: 1.5, yoyo: false, ease: Power2.easeOut, motionPath: { path: "#path2", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_3+=2.65")

    .to(['#wdot4'], 0, { autoAlpha: 0, ease: 'linear' }, "frame_3+=2.82")
    .to(['#dwdot4'], 0, { autoAlpha: 1, ease: 'linear' }, "frame_3+=2.82")
    .to('#dwdot4', {
      scale: 0.1, left: -8, top: -14, backgroundColor: '#fff',
      duration: 1.33, yoyo: false, ease: Power2.easeOut, motionPath: { path: "#path2", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_3+=2.82")

    .to(['#cdot3'], 0, { autoAlpha: 0, ease: 'linear' }, "frame_3+=2.99")
    .to(['#dcdot3'], 0, { autoAlpha: 1, ease: 'linear' }, "frame_3+=2.99")
    .to('#dcdot3', {
      scale: 0.1, left: -8, top: -14, backgroundColor: '#fff',
      duration: 1.16, yoyo: false, ease: Power2.easeOut, motionPath: { path: "#path2", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_3+=2.99")

    .to(['#wdot3'], 0, { autoAlpha: 0, ease: 'linear' }, "frame_3+=3.15")
    .to(['#dwdot3'], 0, { autoAlpha: 1, ease: 'linear' }, "frame_3+=3.15")
    .to('#dwdot3', {
      scale: 0.1, left: -8, top: -14, backgroundColor: '#fff',
      duration: 1, yoyo: false, ease: Power2.easeOut, motionPath: { path: "#path2", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_3+=3.15")

    .to(['#cdot2'], 0, { autoAlpha: 0, ease: 'linear' }, "frame_3+=3.32")
    .to(['#dcdot2'], 0, { autoAlpha: 1, ease: 'linear' }, "frame_3+=3.32")
    .to('#dcdot2', {
      scale: 0.1, left: -8, top: -14, backgroundColor: '#fff',
      duration: 0.83, yoyo: false, ease: Power2.easeOut, motionPath: { path: "#path2", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_3+=3.32")

    .to(['#wdot2'], 0, { autoAlpha: 0, ease: 'linear' }, "frame_3+=3.49")
    .to(['#dwdot2'], 0, { autoAlpha: 1, ease: 'linear' }, "frame_3+=3.49")
    .to('#dwdot2', {
      scale: 0.1, left: -8, top: -14, backgroundColor: '#fff',
      duration: 0.66, yoyo: false, ease: Power2.easeOut, motionPath: { path: "#path2", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_3+=3.49")

    .to(['#cdot1'], 0, { autoAlpha: 0, ease: 'linear' }, "frame_3+=3.66")
    .to(['#dcdot1'], 0, { autoAlpha: 1, ease: 'linear' }, "frame_3+=3.66")
    .to('#dcdot1', {
      scale: 0.1, left: -8, top: -14, backgroundColor: '#fff',
      duration: 0.49, yoyo: false, ease: Power2.easeOut, motionPath: { path: "#path2", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_3+=3.66")

    .to(['#wdot1'], 0, { autoAlpha: 0, ease: 'linear' }, "frame_3+=3.83")
    .to(['#dwdot1'], 0, { autoAlpha: 1, ease: 'linear' }, "frame_3+=3.83")
    .to('#dwdot1', {
      scale: 0.1, left: -8, top: -14, backgroundColor: '#fff',
      duration: 0.32, yoyo: false, ease: Power2.easeOut, motionPath: { path: "#path2", autoRotate: true, alignOrigin: [0, 0] }
    }, "frame_3+=3.83")

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


