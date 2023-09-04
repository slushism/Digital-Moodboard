
document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".block");

    const whiteArray = [
        "./Mood Board Pics/Off-white/Boots.png",
        "./Mood Board Pics/Off-white/Beach couple.png",
        "./Mood Board Pics/Off-white/Bride.png",
        "./Mood Board Pics/Off-white/Building1.png",
        "./Mood Board Pics/Off-white/Car.png",
        "./Mood Board Pics/Off-white/Cat.png",
        "./Mood Board Pics/Off-white/CD.png",
        "./Mood Board Pics/Off-white/Ceiling.png",
        "./Mood Board Pics/Off-white/Chimp.png",
        "./Mood Board Pics/Off-white/Cigs.png",
        "./Mood Board Pics/Off-white/Compute.png",
        "./Mood Board Pics/Off-white/Foam.png",
        "./Mood Board Pics/Off-white/Hands.png",
        "./Mood Board Pics/Off-white/IPhone.png",
        "./Mood Board Pics/Off-white/King.png",
        "./Mood Board Pics/Off-white/Lan 1.png",
        "./Mood Board Pics/Off-white/Lan 2.png",
        "./Mood Board Pics/Off-white/Number.png",
        "./Mood Board Pics/Off-white/Nuns.png",
        "./Mood Board Pics/Off-white/Pidgeons.png",
        "./Mood Board Pics/Off-white/Plane 1.png",
        "./Mood Board Pics/Off-white/Plane 2.png",
        "./Mood Board Pics/Off-white/Ravens.png",
        "./Mood Board Pics/Off-white/Reflection.png",
        "./Mood Board Pics/Off-white/Spider.png",
        "./Mood Board Pics/Off-white/Suits.png",
        "./Mood Board Pics/Off-white/Bride.png",
        "./Mood Board Pics/Off-white/Travis.png",
        "./Mood Board Pics/Off-white/White Glass.png",
        "./Mood Board Pics/Off-white/yeti.png",
        "./Mood Board Pics/Blue/Keith.png",
        "./Mood Board Pics/Blue/WP.png",

        // Add more image paths here
      ];
    const blackArray = [
      "./Mood Board Pics/Black/Abyss.png",
      "./Mood Board Pics/Black/Alien.png",
      "./Mood Board Pics/Black/Batman.png",
      "./Mood Board Pics/Black/boom.png",
      "./Mood Board Pics/Black/BornDied.png",
      "./Mood Board Pics/Black/Drivethru.png",
      "./Mood Board Pics/Black/Firwork.png",
      "./Mood Board Pics/Black/Horizon.png",
      "./Mood Board Pics/Black/Horse.png",
      "./Mood Board Pics/Black/House.png",
      "./Mood Board Pics/Black/Illusion 1.png",
      "./Mood Board Pics/Black/Illusion 2.png",
      "./Mood Board Pics/Black/Illusion 3.png",
      "./Mood Board Pics/Black/Kobain.png",
      "./Mood Board Pics/Black/Nikes.png",
      "./Mood Board Pics/Black/Panther.png",
      "./Mood Board Pics/Black/Rain main.png",
      "./Mood Board Pics/Black/Russian.png",
      "./Mood Board Pics/Black/Smoke.png",
      "./Mood Board Pics/Black/Static.png",
      "./Mood Board Pics/Black/Swan 2.png",
      "./Mood Board Pics/Black/Swan1.png",
      "./Mood Board Pics/Black/Tony.png",
      "./Mood Board Pics/Black/Unicorn.png",
      "./Mood Board Pics/Black/Utopia.png",
      "./Mood Board Pics/Black/BB2.png",
      "./Mood Board Pics/Black/BH.png",
      "./Mood Board Pics/Black/BO.png",
      "./Mood Board Pics/Black/boom.png",
   ];

   const redArray = [
      "./Mood Board Pics/Red/1.png",
      "./Mood Board Pics/Red/2.png",
      "./Mood Board Pics/Red/3.png",
      "./Mood Board Pics/Red/4.png",
      "./Mood Board Pics/Red/5.png",
      "./Mood Board Pics/Red/6.png",
      "./Mood Board Pics/Red/7.png",
      "./Mood Board Pics/Red/8.png",
      "./Mood Board Pics/Red/9.png",
      "./Mood Board Pics/Red/10.png",
      "./Mood Board Pics/Red/11.png",
      "./Mood Board Pics/Red/12.png",
      "./Mood Board Pics/Red/13.png",
      "./Mood Board Pics/Red/14.png",
      "./Mood Board Pics/Red/15.png",
      "./Mood Board Pics/Red/16.png",
      "./Mood Board Pics/Red/17.png",
      "./Mood Board Pics/Red/18.png",
      "./Mood Board Pics/Red/19.png",
      "./Mood Board Pics/Red/20.png",
      "./Mood Board Pics/Red/21.png",
      "./Mood Board Pics/Red/RE.png",
      "./Mood Board Pics/Red/RP.png",
      "./Mood Board Pics/Red/RV.png",
   ];

  const blueArray = [
      "./Mood Board Pics/Blue/1.png",
      "./Mood Board Pics/Blue/2.png",
      "./Mood Board Pics/Blue/3.png",
      "./Mood Board Pics/Blue/4.png",
      "./Mood Board Pics/Blue/5.png",
      "./Mood Board Pics/Blue/6.png",
      "./Mood Board Pics/Blue/7.png",
      "./Mood Board Pics/Blue/8.png",
      "./Mood Board Pics/Blue/9.png",
      "./Mood Board Pics/Blue/10.png",
      "./Mood Board Pics/Blue/beachday.png",
      "./Mood Board Pics/Blue/Birdz.png",
      "./Mood Board Pics/Blue/blueBuild.png",
      "./Mood Board Pics/Blue/Bluecig.png",
      "./Mood Board Pics/Blue/Bluemonk.png",
      "./Mood Board Pics/Blue/Bluemoon.png",
      "./Mood Board Pics/Blue/Cam.png",
      "./Mood Board Pics/Blue/Clouds.png",
      "./Mood Board Pics/Blue/Dr.png",
      "./Mood Board Pics/Blue/NY.png",
      "./Mood Board Pics/Blue/Puff.png",
      "./Mood Board Pics/Blue/Sword.png",
      "./Mood Board Pics/Blue/Wreck.png",
      "./Mood Board Pics/Blue/Wreck2.png",
      "./Mood Board Pics/Blue/B1.png",
      "./Mood Board Pics/Blue/B2.png",
      "./Mood Board Pics/Blue/JB.png",
      "./Mood Board Pics/Blue/SB.png",
      "./Mood Board Pics/Black/BlueSky.png",
   ];

  const yellowArray = [
    "./Mood Board Pics/Yellow/1.png",
    "./Mood Board Pics/Yellow/2.png",
    "./Mood Board Pics/Yellow/3.png",
    "./Mood Board Pics/Yellow/4.png",
    "./Mood Board Pics/Yellow/5.png",
    "./Mood Board Pics/Yellow/6.png",
    "./Mood Board Pics/Yellow/7.png",
    "./Mood Board Pics/Yellow/8.png",
    "./Mood Board Pics/Yellow/9.png",
    "./Mood Board Pics/Yellow/10.png",
    "./Mood Board Pics/Yellow/11.png",
    "./Mood Board Pics/Yellow/12.png",
    "./Mood Board Pics/Yellow/13.png",
    "./Mood Board Pics/Yellow/14.png",
    "./Mood Board Pics/Yellow/Y1.png",
    "./Mood Board Pics/Yellow/Y2.png",
    "./Mood Board Pics/Yellow/Y3.png",
    "./Mood Board Pics/Yellow/Y5.png",
    "./Mood Board Pics/Yellow/Y8.png",
    "./Mood Board Pics/Yellow/YF.png",
    "./Mood Board Pics/Yellow/YG.png",
    "./Mood Board Pics/Yellow/YGB.png",
    "./Mood Board Pics/Yellow/YP.png",
    "./Mood Board Pics/Yellow/YY.png",
];

const imageArrays = [whiteArray, blackArray, redArray, blueArray, yellowArray];
  let currentArrayIndex = 0;
  let currentImageIndex = 0;
  let isFirstClick = true;

function setImagesFromArray(array, index) {
    blocks.forEach((block, i) => {
        block.style.backgroundImage = `url("${array[i]}")`;
    });
    currentImageIndex = index;
}

function handleFirstClick() {
  if (isFirstClick) {
    isFirstClick = false;
    updateImagesWithDelay(900); // Apply delay for the first click
  } else {
    updateImagesWithDelay(900);
  }
}

document.addEventListener("click", handleFirstClick);

function updateImagesWithDelay(delay) {
    setTimeout(() => {
        currentArrayIndex = (currentArrayIndex + 1) % imageArrays.length;
        setImagesFromArray(imageArrays[currentArrayIndex], currentImageIndex);
    }, delay);
  }

    // Initially, set the images from the whiteArray when the page is loaded
setImagesFromArray(imageArrays[currentArrayIndex], currentImageIndex);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

    // Shuffle all arrays in imageArrays
imageArrays.forEach(shuffleArray);
});
