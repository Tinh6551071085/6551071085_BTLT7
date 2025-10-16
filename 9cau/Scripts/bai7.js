$(document).ready(function () {
    $("#linkForm").submit(function () {
        let result = confirm("Bạn có muốn tiếp tục không?");
        if (result) {
            console.log("OK");
            main();
        } else {
            console.log("Cancel");
        }
        
    })
})

function main(){
    let linkWeb = $("#linkForm input[type=text]").val().trim();
    if(linkWeb === "") {
        alert("Bạn chưa nhập link!");
        return;
    }
    window.open(linkWeb)
}