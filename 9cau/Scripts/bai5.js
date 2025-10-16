function display_random_image() {
    let random = Math.floor(Math.random() * 2);
    switch (random) {
        case 0:
            $("div img").attr({
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: 240,
                height: 160
            });

            break;
        case 1:
             $("div img").attr({
                src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
                width: 320,
                height: 195
            });
            break;
        case 2:
             $("div img").attr({
                src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
                width: 500,
                height: 343
            });
            break;
    }
}