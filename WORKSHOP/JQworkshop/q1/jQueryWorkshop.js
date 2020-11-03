$("document").ready(() => {
  $("#orange").click(function () {
    $("svg[class != orange]").hide();
    $(".orange1").show();
  });

  $("#yellow").click(function () {
    $("svg[class != yellow1]").hide();
    $(".yellow1").show();
  });

  $("#red").click(function () {
    $("svg[class != red1]").hide();
    $(".red1").show();
  });

  $("#blue").click(function () {
    $("svg[class != blue1]").hide();
    $(".blue1").show();
  });

  $("#b1").click(function () {
    $("svg").show();
  });
});
