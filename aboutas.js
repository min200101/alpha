
<!-- jQuery JS -->
<!-- <script src="static/assets/js/jquery-3.4.1.slim.min.js"></script> -->
<!-- jQuery JS -->
<script src="../js/jquery-1.9.1.min.js"></script>

<!-- Template JavaScript -->

<!-- owl carousel -->
<script src="../js/owl.carousel.js"></script>




<!-- courses for customers -->
<script>
  $(document).ready(function () {
    $('.owl-courses').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })
  })
</script>
<!-- //courses owlcarousel -->

<!-- magnific popup -->
<script src="../js/jquery.magnific-popup.min.js"></script>
<script>
  $(document).ready(function () {
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });
  });
</script>

<!-- responsive tabs -->
<script src="../js/easyResponsiveTabs.js"></script>

<!--Plug-in Initialisation-->
<script type="text/javascript">
  $(document).ready(function () {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
      fit: true, // 100% fit in a container
      tabidentify: 'hor_1', // The tab groups identifier
      activate: function (event) { // Callback function if tab is switched
        var $tab = $(this);
        var $info = $('#nested-tabInfo');
        var $name = $('span', $info);
        $name.text($tab.text());
        $info.show();
      }
    });
  });
</script>

<!-- stats number counter-->
<script src="../js/jquery.waypoints.min.js"></script>
<script src="../js/jquery.countup.js"></script>
<script>
  $('.counter').countUp();
</script>
<!-- //stats number counter -->

<!-- disable body scroll which navbar is in active -->
<script>
  $(function () {
    $('.navbar-toggler').click(function () {
      $('body').toggleClass('noscroll');
    })
  });
</script>
<!-- disable body scroll which navbar is in active -->

<!--/MENU-JS-->
<script>
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
      $("#site-header").addClass("nav-fixed");
    } else {
      $("#site-header").removeClass("nav-fixed");
    }
  });

  //Main navigation Active Class Add Remove
  $(".navbar-toggler").on("click", function () {
    $("header").toggleClass("active");
  });
  $(document).on("ready", function () {
    if ($(window).width() > 991) {
      $("header").removeClass("active");
    }
    $(window).on("resize", function () {
      if ($(window).width() > 991) {
        $("header").removeClass("active");
      }
    });
  });
</script>
<!--//MENU-JS-->


<!--theme switcher dark and light mode script-->
<script>
  const bodyElement = document.querySelector('body');
  const themeToggle = document.querySelector('#themeToggle');
  const darkModeMql = window.matchMedia('(prefers-color-scheme: dark)');

  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : userPreference(darkModeMql);

  if (currentTheme) {
    bodyElement.classList.add(currentTheme);

    if (currentTheme === 'dark') {
      themeToggle.checked = true;
    }
  }

  function userPreference(e) {
    if (e.matches) {
      bodyElement.classList.add("dark");
      return "dark"
    } else {
      bodyElement.classList.remove("dark");
      return ""
    }
  }

  darkModeMql.addListener(userPreference);

  function themeSwitcher(e) {
    if (e.target.checked) {
      bodyElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      bodyElement.classList.remove('dark');
      localStorage.setItem('theme', '');
    }
  }

  themeToggle.addEventListener('change', themeSwitcher);
</script>
<!--//theme switcher dark and light mode script-->


<!-- Bootstrap JS -->
<script src="../js/bootstrap.min.js"></script>