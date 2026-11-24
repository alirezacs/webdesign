const commonSubjects = ["فارسی", "نگارش", "دین و زندگی", "عربی", "زبان انگلیسی", "سلامت و بهداشت", "تربیت بدنی"];
const subjectData = {
  math: {
    title: "درس‌های رشته ریاضی و فیزیک",
    subjects: ["ریاضی ۱", "هندسه ۱", "فیزیک ۱", "شیمی ۱", "ریاضی ۲", "هندسه ۲", "آمار و احتمال", "فیزیک ۲", "شیمی ۲", "حسابان ۱", "هندسه ۳", "گسسته", "فیزیک ۳", "شیمی ۳", "حسابان ۲", ...commonSubjects]
  },
  experimental: {
    title: "درس‌های رشته علوم تجربی",
    subjects: ["زیست‌شناسی ۱", "شیمی ۱", "فیزیک ۱", "ریاضی ۱", "زمین‌شناسی", "زیست‌شناسی ۲", "شیمی ۲", "فیزیک ۲", "ریاضی ۲", "زیست‌شناسی ۳", "شیمی ۳", "فیزیک ۳", "ریاضی ۳", ...commonSubjects]
  },
  humanities: {
    title: "درس‌های رشته علوم انسانی",
    subjects: ["علوم و فنون ادبی ۱", "جامعه‌شناسی ۱", "تاریخ ۱", "جغرافیا ۱", "اقتصاد", "منطق", "ریاضی و آمار ۱", "علوم و فنون ادبی ۲", "جامعه‌شناسی ۲", "تاریخ ۲", "جغرافیا ۲", "روان‌شناسی", "فلسفه ۱", "ریاضی و آمار ۲", "علوم و فنون ادبی ۳", "جامعه‌شناسی ۳", "تاریخ ۳", "جغرافیا ۳", "فلسفه ۲", "ریاضی و آمار ۳", ...commonSubjects]
  }
};
const trackButtons = document.querySelectorAll(".track-card");
const panel = document.getElementById("subjectsPanel");
const title = document.getElementById("subjectsTitle");
const grid = document.getElementById("subjectGrid");
const closeButton = document.getElementById("closeSubjects");

trackButtons.forEach(button => {
  button.addEventListener("click", () => {
    const track = subjectData[button.dataset.track];
    if (!track) return;
    trackButtons.forEach(item => item.classList.toggle("active", item === button));
    title.textContent = track.title;
    grid.innerHTML = track.subjects.map((subject, index) => `
      <article class="subject-card">
        <div><span class="subject-name">${subject}</span><span class="subject-grade">درس تخصصی · ${String(index + 1).padStart(2, "0")}</span></div>
        <a class="subject-view" href="#" data-subject="${subject}">مشاهده نمونه‌سؤال</a>
      </article>
    `).join("");
    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

closeButton.addEventListener("click", () => {
  panel.hidden = true;
  trackButtons.forEach(button => button.classList.remove("active"));
});

grid.addEventListener("click", event => {
  const link = event.target.closest(".subject-view");
  if (!link) return;
  event.preventDefault();
  alert(`نمونه‌سؤال درس «${link.dataset.subject}» هنوز بارگذاری نشده است. فایل PDF این درس را می‌توان بعداً به همین دکمه متصل کرد.`);
});
