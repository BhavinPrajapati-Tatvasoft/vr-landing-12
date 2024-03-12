$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  var bar = new ProgressBar.Circle(container1, {
    color: "#ffffff",
    strokeWidth: 4,
    trailWidth: 0.1,
    easing: "easeInOut",
    duration: 1400,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#49E1BD", width: 2 },
    to: { color: "#49E1BD", width: 2 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("" + "%");
      } else {
        circle.setText(value + "%");
      }
    },
  });
  bar.animate(0.65);

  var bar = new ProgressBar.Circle(container2, {
    color: "#ffffff",
    strokeWidth: 4,
    trailWidth: 0.1,
    easing: "easeInOut",
    duration: 1400,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#49E1BD", width: 2 },
    to: { color: "#49E1BD", width: 2 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("" + "%");
      } else {
        circle.setText(value + "%");
      }
    },
  });
  bar.animate(0.7);

  var bar = new ProgressBar.Circle(container3, {
    color: "#ffffff",
    strokeWidth: 4,
    trailWidth: 0.1,
    easing: "easeInOut",
    duration: 1400,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#49E1BD", width: 2 },
    to: { color: "#49E1BD", width: 2 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("" + "%");
      } else {
        circle.setText(value + "%");
      }
    },
  });
  bar.animate(0.89);

  var bar = new ProgressBar.Circle(container4, {
    color: "#ffffff",
    strokeWidth: 4,
    trailWidth: 0.1,
    easing: "easeInOut",
    duration: 1400,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#49E1BD", width: 2 },
    to: { color: "#49E1BD", width: 2 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("" + "%");
      } else {
        circle.setText(value + "%");
      }
    },
  });
  bar.animate(0.9);

  // Popover
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  // Theme Settings
  if (!localStorage.getItem("myAdminTheme"))
    localStorage.setItem("myAdminTheme", "theme-default");
  $("html").addClass(localStorage.getItem("myAdminTheme"));
  function getSecondPart(str) {
    return str.split("-")[1];
  }
  var $themeName = getSecondPart(localStorage.getItem("myAdminTheme"));
  function addActiveClasstoThemeBtn() {
    $(".themes-listing li a.active").removeClass("active");
    $(".themes-listing li a[data-theme=" + $themeName + "]").addClass("active");
  }
  if (localStorage.getItem("myAdminTheme")) {
    addActiveClasstoThemeBtn();
  }
  $(".themes-listing li a").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("active")) {
      localStorage.setItem("myAdminTheme", "theme-" + $this.attr("data-theme"));
      $("html").removeClass().addClass(localStorage.getItem("myAdminTheme"));
      $themeName = getSecondPart(localStorage.getItem("myAdminTheme"));
      addActiveClasstoThemeBtn();
    }
  });

  // Slider
  $(".slider").slick({
    infinite: true,
    dots: true,
    arrows: false,
  });

  $(".testimonial-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow:
      "<button type='button' class='btn slick-prev pull-left'><img src='images/chevron-left-black-icon.svg' alt='Prev'></button>",
    nextArrow:
      "<button type='button' class='btn slick-next pull-right'><img src='images/chevron-right-black-icon.svg' alt='Next'></button>",
  });

  // Scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 60) {
      $("body").addClass("change-header-bg");
    } else {
      $("body").removeClass("change-header-bg");
    }
  });
  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
