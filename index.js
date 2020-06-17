//kushalbhalaik.xyz

let msgData = {};

let isFormValidated = false;

msgData["sender"] = "kushalbhalaik.xyz";

window.onload = function () {
  changeTheme(localStorage.getItem("darkMode")); //select theme

  if (window.location.pathname === "/") {
    fetch("config.json")
      .then((response) => response.json())

      .then((responseJSON) => {
        config = responseJSON;
      });
  } else {
    $('a[href="' + window.location.pathname + '"]')
      .parents("li") //variations ("li,ul")
      .addClass("active-nav-item");
  }

  $("a[title~='Host']").hide();
};

function handleFormInput(e) {
  msgData[e.id] = e.value;
}

function isvalidated(event) {
  var form = document.getElementById("msg-form");

  if (form.checkValidity() === false) {
    isFormValidated = false;
  } else {
    event.preventDefault();

    isFormValidated = true;

    sendMsg();
  }
}

function sendMsg() {
  $("a[title~='Host']").hide();

  $("#spinner").show();

  let requestBody = msgData;

  fetch("https://downgram-back-end.herokuapp.com/api/contact", {
    method: "POST",

    body: JSON.stringify(requestBody),

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())

    .then((responseJson) => {
      if (responseJson.message === "message was sent") {
        var formParent = document.getElementById("msg-container");

        formParent.innerHTML = "";

        var newElement = document.createElement("p");

        newElement.setAttribute("id", "success-message");

        newElement.innerHTML = `<h4> Thank you! <br> Your message has been sent. <i style='color:limegreen' class='far fa-check-circle'></i></h4><br>

          <a

              href="contact.html"

              target="_self"

              > forgot something to say? <i class="fas fa-comment-dots"></i

            ></a>

          `;

        formParent.appendChild(newElement);
      }
    })

    .catch((err) => {
      console.log("err", err.message);
    })

    .finally(() => {
      $("#spinner").hide();
    });

  $("a[title~='Host']").hide();
}

function themeSelection() {
  let isSelected = document.getElementById("theme-toggle").checked;

  localStorage.setItem("darkMode", !isSelected);
  changeTheme(localStorage.getItem("darkMode"));
}

function changeTheme(userPref) {
  var deviceWidth = Math.max(window.screen.width, window.innerWidth);
  console.log("deviceWidth :", deviceWidth);
  $(document).ready(function () {
    if (userPref === "true") {
      $(".dark-th").css("color", "#ffffff");
      $("#theme-toggle").prop("checked", true);
      if (deviceWidth < 575) {
        $("body").css("background-color", "#12253c");
        $("html").css("background-color", "#12253c");
        $("nav").css("background-color", "#12253c");
      } else {
        $("body").css("background-color", "#12253c");
        $("html").css("background-color", "#12253c");
        $("nav").css("background-color", "#12253c");
      }
    } else {
      $(".dark-th").css("color", "rgba(0,0,0,.5)");
      $("#theme-toggle").prop("checked", false);
      if (deviceWidth < 575) {
        $("body").css("background-color", "#ecf0f3");
        $("html").css("background-color", "#ecf0f3");
        $("nav").css("background-color", "#ecf0f3");
      } else {
        $("body").css("background-color", "#ecf0f3");
        $("html").css("background-color", "#ecf0f3");
        $("nav").css("background-color", "#ecf0f3");
      }
    }
  });
}
