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

$(document).ready(function () {
    $(".valentines")
        .mouseenter(function () {
            $(".card").stop().animate({ top: "-380px" }, 500);
        })
        .mouseleave(function () {
            $(".card").stop().animate({ top: "-220px" }, 500);
        });
});

