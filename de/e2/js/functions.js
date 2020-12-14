! function(n) {
    n(document).ready(function() {
        n(".next").on("click", function(e) {
            e.preventDefault(), n(this).closest(".step").hide().next().show()
        })
    })
}(jQuery);