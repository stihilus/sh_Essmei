$("span.show-filters").on("click", function () {
  if ($("nav.filters-list").is(":visible")) {
    $("nav.filters-list").slideUp()
    $("span.show-filters").text("Show filters")
  } else {
    $("nav.filters-list").slideDown()
    $("span.show-filters").text("Hide filters")
  }
})

$("nav.filters-list a").on("click", function () {
  var filter = $(this).attr("data-filter")

  $(".product").hide()
  $(filter).show()

  $("nav.filters-list a").removeClass("selected")

  $(this).addClass("selected")

  return false
})
