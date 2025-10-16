$(document).ready(function () {
    $("input[type='reset']").click(function () {
        $("form").find("input:not([type='button']):not([type='submit']):not([type='reset']), select, textarea").val("");
        $("form").find("input[type='checkbox'], input[type='radio']").prop("checked", false);
        $("p").text("");
    });

    $("input[value='Finished']").click(function () {
        let check = true;
        $("input[required], select[required]").each(function () {

            if ($(this).val() == "" || $(this).val() == null) {
                check = false;
                $("p").text("Những dấu * chưa thêm kìa!!");
                return false;
            }

        });
        if (check) {
            let emailInput = $("input[name='email']");
            let email = emailInput.val().trim();
            if (email !== "" && !emailInput[0].checkValidity()) {
                check = false;
                $("p").text("Sai email kia!!");
            }
        }


            if (check) {
                let birthday = $("input[name='birthday']").val().trim();
                let inputDate = new Date(birthday);
                let now = new Date();

                if (isNaN(inputDate.getTime())) {
                    check = false;
                    $("p").text("Sai time r");
                } else if (inputDate.getTime() >= now.getTime()) {
                    check = false;
                    $("p").text("Sai time r");
                }
            }
        });
    
})