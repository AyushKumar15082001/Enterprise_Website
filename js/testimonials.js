let review_text = document.getElementsByClassName("first_review");
        let current = 0, len = review_text.length;
        let review;
        function review_update() {
            for (let i = 0; i < len; i++) {
                review_text[i].style.transform = "translateX(" + ((current) * 100) + "%)";
            }
        }
        function Next_text() {
            if (current == -1 * (len - 1)) current = 1;
            current--;
            review_update();
            clearInterval(review);
            intervalReset();
        }
        function previous_text() {
            if (current < 0) current++;
            else current = -1 * (len - 1);
            review_update();
            clearInterval(review);
            intervalReset();
        }
        function intervalReset() {
            review = setInterval(function () {
                if (current == -1 * (len - 1)) current = 1;
                current--;
                review_update();
            }, 10000);
        }
        intervalReset();