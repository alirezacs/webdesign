(() => {
  const majors = {math:'ریاضی و فیزیک',experimental:'علوم تجربی',humanities:'علوم انسانی'};
  const params = new URLSearchParams(location.search);
  const type = params.get('type') || 'students';
  const major = params.get('major');
  const isHonors = type === 'honors';
  const panel = document.getElementById('directoryResults');
  const tabs = document.getElementById('gradeTabs');
  const grid = document.getElementById('directoryCards');
  const note = document.getElementById('directoryNote');
  const title = document.getElementById('directoryTitle');
  const description = document.getElementById('directoryDescription');
  if (isHonors) {
    title.textContent = 'رتبه‌های برتر کنکور';
    description.textContent = 'رشته موردنظر را انتخاب کن تا فهرست ده رتبه برتر آن نمایش داده شود.';
    document.querySelectorAll('.directory-track').forEach(a => a.href = a.href.replace('type=students','type=honors'));
  }
  if (!major || !majors[major] || !panel) return;
  panel.hidden = false;
  document.getElementById('resultsTitle').textContent = isHonors ? `۱۰ رتبه برتر کنکور ${majors[major]}` : `دانش‌آموزان برتر ${majors[major]}`;
  document.getElementById('resultsDescription').textContent = isHonors ? 'تصویر و اطلاعات رتبه‌های برتر این رشته در این بخش قرار می‌گیرد.' : 'پایه تحصیلی را انتخاب کن تا ده جایگاه دانش‌آموزان برتر نمایش داده شود.';
  const initials = 'دان';
  const renderCards = (grade = '10') => {
    const count = 10;
    grid.innerHTML = Array.from({length:count}, (_,i) => {
      const n = i + 1;
      const image = isHonors ? `images/konkur/${major}-${n}.jpg` : `images/students/${major}-${grade}-${n}.jpg`;
      const heading = isHonors ? `رتبه ${toFa(n)}` : `دانش‌آموز برتر ${toFa(n)}`;
      const sub = isHonors ? `رتبه کشوری / منطقه‌ای` : `پایه ${toFa(Number(grade))} • ${majors[major]}`;
      return `<article class="person-card"><div class="person-avatar"><img src="${image}" alt="تصویر ${heading}" onerror="this.remove();this.parentElement.textContent='${initials}';"></div><h3>${heading}</h3><p>${sub}</p><p>نام و نام خانوادگی</p><span class="person-badge">اطلاعات قابل تکمیل</span></article>`;
    }).join('');
  };
  function toFa(n){return String(n).replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[Number(d)]);}
  if (isHonors) {
    tabs.hidden = true;
    note.textContent = 'تصاویر و اسامی رتبه‌های واقعی هنوز ارائه نشده‌اند. برای جلوگیری از نمایش اطلاعات ساختگی، کارت‌ها به‌صورت جایگاه‌های آماده و قابل تکمیل نمایش داده می‌شوند.';
    renderCards();
  } else {
    tabs.hidden = false;
    note.textContent = 'برای هر رشته و هر پایه، ۱۰ جایگاه آماده شده است. نام‌ها و تصاویر واقعی دانش‌آموزان را می‌توان در فایل‌های تصویری و داده‌های صفحه جایگزین کرد.';
    renderCards('10');
    tabs.querySelectorAll('.grade-tab').forEach(button => button.addEventListener('click', () => {
      tabs.querySelectorAll('.grade-tab').forEach(b => b.classList.toggle('active', b === button));
      renderCards(button.dataset.grade);
    }));
  }
  panel.scrollIntoView({behavior:'smooth',block:'start'});
})();
