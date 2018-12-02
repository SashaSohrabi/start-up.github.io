// ============ HAMBURGER MENU ============
$(document).ready(function() {
  $(".fa-bars").click(function() {
    $(".header__menu").toggleClass("open");
  });
});

// ============ SLICK ============
$(".about__slide").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".brands__slide").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000
});

// ============ FORM VALIDATION ============
(function() {
  document
    .querySelector("input[type='text']")
    .addEventListener("blur", validateName);
  document
    .querySelector("input[type='email']")
    .addEventListener("blur", validateEmail);
  document
    .getElementById("form-submission")
    .addEventListener("click", validateForm);
  document.querySelector("#sms").addEventListener("blur", validateMessage);
  const name = document.querySelector("input[type='text']");
  const nameErr = document.querySelector(".invalid-name");
  const email = document.querySelector("input[type='email']");
  const emailErr = document.querySelector(".invalid-email");
  const sms = document.getElementById("sms");
  const smsErr = document.querySelector(".invalid-message");
  function sweetSuccess() {
    swal("Thank You!", "Your message has been sent successfully.", "success");
  }

  function validateName() {
    const reg = /^[a-zA-Z]{2,15}$/;

    if (!reg.test(name.value)) {
      name.setAttribute("id", "invalid-input");
      nameErr.style.display = "block";
    } else {
      name.removeAttribute("id");
      nameErr.style.display = "none";
      return true;
    }
    return false;
  }

  function validateEmail() {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
      email.setAttribute("id", "invalid-input");
      emailErr.style.display = "block";
    } else {
      email.removeAttribute("id");
      emailErr.style.display = "none";
      return true;
    }
    return false;
  }

  function validateMessage() {
    const re = /^[^]+$/;

    if (!re.test(sms.value)) {
      sms.setAttribute("id", "invalid-input");
      smsErr.style.display = "block";
    } else {
      sms.removeAttribute("id");
      smsErr.style.display = "none";
      return true;
    }
    return false;
  }

  function validateForm(e) {
    e.preventDefault();
    if (!validateName()) {
      name.setAttribute("id", "invalid-input");
      nameErr.style.display = "block";
    }
    if (!validateEmail()) {
      email.setAttribute("id", "invalid-input");
      emailErr.style.display = "block";
    }
    if (!validateMessage()) {
      sms.setAttribute("id", "invalid-input");
      smsErr.style.display = "block";
    }
    if (validateName() && validateEmail() && validateMessage()) {
      name.value = "";
      email.value = "";
      sms.value = "";
      sweetSuccess();
    }
  }
})();
