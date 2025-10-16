$(document).ready(function () {
    $(".btn").not("[value='=']").click(function () {
        $(".btn").removeClass("active");
        $(this).addClass("active");
    });

    $(".btn[value='=']").click(function () {
        let a = parseFloat($("input[type='number']").eq(0).val());
        let b = parseFloat($("input[type='number']").eq(1).val());
         let punc = $(".btn.active").val();

        let result = 0;

        switch (punc) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = b !== 0 ? a / b : "Lỗi chia 0";
                break;
            default:
                result = "Chưa chọn phép tính";
        }

     
        $("input[type='text']").val(result);
    })
})

