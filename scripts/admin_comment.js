const noticeBtn = document.getElementById("notice");
const qnaBtn = document.getElementById("qna");
const reviewWrapper = document.querySelector(".review_wrapper");
const qnaWrapper = document.querySelector(".qna_wrapper");

noticeBtn.addEventListener("click", () => {
    noticeBtn.classList.add("active");
    qnaBtn.classList.remove("active");
	reviewWrapper.classList.add("active");
    qnaWrapper.classList.remove("active");
});

qnaBtn.addEventListener("click", () => {
    noticeBtn.classList.remove("active");
    qnaBtn.classList.add("active");
    reviewWrapper.classList.remove("active");
    qnaWrapper.classList.add("active");
});

