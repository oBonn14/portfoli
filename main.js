function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    
    const item = $(target).parents(".myproject-item")
    const detail = $(item).children(".myproject-item-detail")
    $(detail).slideToggle()
}