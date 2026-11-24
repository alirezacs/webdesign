(() => {
  const majors = {math:'ریاضی و فیزیک',experimental:'علوم تجربی',humanities:'علوم انسانی'};
  const params = new URLSearchParams(location.search);
  const major = params.get('major');
  const panel = document.getElementById('teacherResults');
  if (!major || !majors[major] || !panel) return;
  document.getElementById('teacherTitle').textContent = `دبیران رشته ${majors[major]}`;
  const grid = document.getElementById('teacherCards');
  const subjects = (window.TEACHER_DATA && TEACHER_DATA[major]) || [];
  grid.innerHTML = subjects.map((subject, i) => {
    const n = i + 1;
    const image = `images/teachers/${major}-${n}.jpg`;
    return `<article class="teacher-card"><div class="person-avatar"><img src="${image}" alt="تصویر دبیر ${subject}" onerror="this.remove();this.parentElement.textContent='دب';"></div><div class="teacher-info"><h3>نام دبیر ${n}</h3><p><b>درس:</b> ${subject}</p><p><b>رشته:</b> ${majors[major]}</p><p><b>سابقه و توضیحات:</b> اطلاعات تکمیلی دبیر</p></div></article>`;
  }).join('');
  panel.hidden = false;
  panel.scrollIntoView({behavior:'smooth',block:'start'});
})();
