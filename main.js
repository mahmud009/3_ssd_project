$(function() {
  AOS.init();

  $(".banner-wrapper").on("init", (e, s) => {
    slideCaptionAnimationIn(s, 0);
  });

  $(".blog-post-wrapper").on("mouseover", function() {
    $(this).addClass("blog-post-active");
  });

  $(".blog-post-wrapper").on("mouseleave", function() {
    $(this).removeClass("blog-post-active");
  });

  $(".banner-wrapper").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    onInit: () => {
      console.log("Initialized");
    }
  });

  function slideCaptionAnimationIn(s, c) {
    const animation = new TimelineMax();
    let captionHeading = $(s.$slides[c]).find("h1");
    let captionSubtitle = $(s.$slides[c]).find("p");
    let animationDuration = 0.8;
    animation.fromTo(
      captionHeading,
      animationDuration,
      {
        opacity: 0,
        y: "100",
        visibility: "hidden"
      },
      { opacity: 1, y: 0, visibility: "inherit" }
    );

    animation.fromTo(
      captionSubtitle,
      animationDuration,
      {
        opacity: 0,
        y: "100",
        visibility: "hidden"
      },
      { opacity: 1, y: 0, visibility: "inherit" },
      "-=0.5"
    );
  }

  function slideCaptionAnimationOut(s, c) {
    const animation = new TimelineMax();
    let captionHeading = $(s.$slides[c]).find("h1");
    let captionSubtitle = $(s.$slides[c]).find("p");
    let animationDuration = 0.8;
    animation.fromTo(
      captionHeading,
      animationDuration,
      {
        opacity: 1,
        y: "0",
        visibility: "inherit"
      },
      { opacity: 0, y: 100, visibility: "hidden" }
    );

    animation.fromTo(
      captionSubtitle,
      animationDuration,
      {
        opacity: 1,
        y: "0",
        visibility: "inherit"
      },
      { opacity: 0, y: 100, visibility: "hidden" },
      "-=0.5"
    );
  }

  $(".banner-wrapper").on("afterChange", (e, s, c) => {
    slideCaptionAnimationIn(s, c);
  });

  $(".banner-wrapper").on("beforeChange", (e, s, c, n) => {
    slideCaptionAnimationOut(s, c);
  });

  $(".nav-toggler").click(e => {
    $("header").toggleClass("nav-opened");
  });

  $(".nav-wrapper li a").click(() => {
    $("header").removeClass("nav-opened");
  });
});
