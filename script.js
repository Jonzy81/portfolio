document.getElementById("animation-button").addEventListener("click", function () {
    var images = [
        "KebFirstAnimation1.png",
        "KebFirstAnimation2.png",
        "KebFirstAnimation3.png"
    ];
    var animationImages = document.querySelectorAll(".animation-image");
    var buttonImage = document.querySelector(".button-image")

    buttonImage.style.display = "none"

    animationImages.forEach(function (img) {
        img.style.display = "block";
    });
    var currentIndex = 0;

    function changeImage() {
        document.querySelector(".first-image").src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;

        if (currentIndex === 0) {
            clearInterval(intervalId);
            setTimeout(function () {
                document.querySelector(".first-image").src = "imageJonnyKeb.jpg";
                buttonImage.style.display = "block";
            }, 1000)
        }
    }

    var intervalId = setInterval(changeImage, 1000);

});

var passKey = "kärlek";
var currentKeyIndex = 0;

document.addEventListener('keypress', function (event) {
    var typedChar = String.fromCharCode(event.which).toLocaleLowerCase();

    if (typedChar === passKey[currentKeyIndex]) {
        currentKeyIndex++;

        if (currentKeyIndex === passKey.length) {
            console.log("easteregg triggered");
            document.querySelector(".first-image").src = "IMG_0652.jpg";

            currentKeyIndex = 0;
        }

    } else {
        currentKeyIndex = 0;
    }
});