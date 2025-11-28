$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-140px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

// Modal
document.getElementById("openModal").onclick = function () {
  document.getElementById("modal").style.display = "flex";
};

document.getElementById("closeModal").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

// ❌ Removido o bloco que fazia referência a .valentines
// Isso estava quebrando a animação da carta

// Neve branca suave tela inteira
function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");

    snow.style.left = Math.random() * 100 + "vw";

    // maior agora
    snow.style.width = snow.style.height =
        (8 + Math.random() * 10) + "px";

    snow.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 15000);
}

setInterval(createSnow, 200);



