//kushalbhalaik.xyz

let msgData = {};

let isFormValidated = false;

msgData["sender"] = "kushalbhalaik.xyz";

window.onload = function() {
  console.log("loc ;", window.location.pathname);

  if (window.location.pathname === "/") {
    fetch("config.json")
      .then(response => response.json())

      .then(responseJSON => {
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
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())

    .then(responseJson => {
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

    .catch(err => {
      console.log("err", err.message);
    })

    .finally(() => {
      $("#spinner").hide();
    });

  $("a[title~='Host']").hide();
}
