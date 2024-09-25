const noticeBtn = document.getElementById("notice");
const qnaBtn = document.getElementById("qna");
const boardWrapper = document.querySelector(".board_wrapper");
const qnaWrapper = document.querySelector(".qna_wrapper");

noticeBtn.addEventListener("click", () => {
    noticeBtn.classList.add("active");
    qnaBtn.classList.remove("active");
    boardWrapper.classList.add("active");
    qnaWrapper.classList.remove("active");
});

qnaBtn.addEventListener("click", () => {
    noticeBtn.classList.remove("active");
    qnaBtn.classList.add("active");
    boardWrapper.classList.remove("active");
    qnaWrapper.classList.add("active");
});

