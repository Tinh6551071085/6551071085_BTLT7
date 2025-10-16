$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        let a=$("form :input[name=fname]").val();
        let b =$("form :input[name=lname]").val();
        $("form p").text( a+ b);
    })
})