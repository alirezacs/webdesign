const initialAlbums = [
  { id: 1, title: "طبیعت", description: "منظره‌هایی از آرامش و رنگ", cover: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85", images: [["صبح در کوهستان", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85"], ["جنگل سبز", "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85"], ["دریاچه آرام", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85"]] },
  { id: 2, title: "گل‌ها", description: "ترکیب لطیف رنگ و زندگی", cover: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85", images: [["گل‌های بهاری", "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85"], ["لاله‌ها", "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=85"]] },
  { id: 3, title: "شهرها", description: "روایت خیابان‌ها و معماری", cover: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=900&q=85", images: [["پاریس", "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=900&q=85"], ["کوچه‌های قدیمی", "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85"]] },
  { id: 4, title: "احساسات", description: "رنگ‌هایی از دنیای درون", cover: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85", images: [["رنگ و احساس", "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85"], ["هنر انتزاعی", "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85"]] },
  { id: 5, title: "مجسمه‌ها", description: "زیبایی در فرم و حجم", cover: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85", images: [["تندیس کلاسیک", "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85"]] }
];
let albums = JSON.parse(localStorage.getItem("artGalleryAlbums") || "null") || initialAlbums;
let currentAlbumId = null;
let currentUser = null;
try {
  const savedUser = localStorage.getItem("artGalleryUser");
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      // سازگاری با نسخه قبلی که فقط نام کاربر ذخیره می‌شد
      if (typeof currentUser === "string") {
        currentUser = { firstName: currentUser, lastName: "" };
      }
    } catch {
      currentUser = { firstName: savedUser, lastName: "" };
    }
  }
} catch (error) {
  console.warn("ذخیره‌سازی مرورگر در دسترس نیست.", error);
}
const $ = (selector) => document.querySelector(selector);
const saveAlbums = () => localStorage.setItem("artGalleryAlbums", JSON.stringify(albums));

async function renderUser() {
  await Promise.resolve();
  $("#userBadge").textContent = currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "مهمان";
  $("#authButton").textContent = currentUser ? "خروج" : "ورود";
}

function renderAlbums(filter = "") {
  const grid = $("#albumGrid");
  grid.innerHTML = "";
  const visible = albums.filter(album => album.title.includes(filter));
  $("#emptyState").classList.toggle("hidden", visible.length !== 0);
  visible.forEach(album => {
    const card = document.createElement("article");
    card.className = "album-card";
    card.innerHTML = `<img src="${escapeHTML(album.cover)}" alt="${escapeHTML(album.title)}"><div class="album-info"><h3>${escapeHTML(album.title)}</h3><p>${album.images.length} اثر هنری · ${escapeHTML(album.description)}</p></div><span class="card-arrow">←</span><button class="delete-btn" data-delete-album="${album.id}">حذف آلبوم</button>`;
    card.addEventListener("click", event => {
      if (event.target.closest("[data-delete-album]")) return;
      openAlbum(album.id);
    });
    card.querySelector("[data-delete-album]").addEventListener("click", event => {
      event.stopPropagation();
      if (confirm("این آلبوم حذف شود؟")) {
        albums = albums.filter(item => item.id !== album.id);
        saveAlbums(); renderAlbums($("#searchInput").value);
      }
    });
    grid.appendChild(card);
  });
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function openAlbum(id) {
  currentAlbumId = id;
  const album = albums.find(item => item.id === id);
  if (!album) return;
  $("#galleryTitle").textContent = album.title;
  $("#galleryDescription").textContent = album.description;
  renderArtworks();
  $("#galleryDialog").showModal();
}
function renderArtworks() {
  const album = albums.find(item => item.id === currentAlbumId);
  const grid = $("#artworkGrid");
  grid.innerHTML = "";
  album.images.forEach((art, index) => {
    const item = document.createElement("article");
    item.className = "artwork-card";
    item.innerHTML = `<img src="${escapeHTML(art[1])}" alt="${escapeHTML(art[0])}"><p>${escapeHTML(art[0])}</p><button class="delete-btn">حذف اثر</button>`;
    item.querySelector("button").addEventListener("click", () => {
      if (confirm("این تصویر از آلبوم حذف شود؟")) {
        album.images.splice(index, 1); saveAlbums(); renderArtworks(); renderAlbums($("#searchInput").value);
      }
    });
    grid.appendChild(item);
  });
}
$("#searchInput").addEventListener("input", event => renderAlbums(event.target.value.trim()));
$("#addAlbumBtn").addEventListener("click", () => $("#albumDialog").showModal());
$("#albumForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  albums.unshift({ id: Date.now(), title: data.get("title"), description: data.get("description"), cover: data.get("cover"), images: [] });
  saveAlbums(); renderAlbums($("#searchInput").value); event.currentTarget.reset(); $("#albumDialog").close();
});
$("#addImageBtn").addEventListener("click", () => $("#imageDialog").showModal());
$("#imageForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const album = albums.find(item => item.id === currentAlbumId);
  album.images.push([data.get("title"), data.get("url")]);
  saveAlbums(); renderArtworks(); renderAlbums($("#searchInput").value);
  event.currentTarget.reset(); $("#imageDialog").close();
});
$("#authButton").addEventListener("click", () => {
  if (currentUser) {
    currentUser = null; localStorage.removeItem("artGalleryUser"); renderUser();
  } else $("#authDialog").showModal();
});
$("#authForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  currentUser = {
    firstName: data.get("firstName").trim(),
    lastName: data.get("lastName").trim()
  };
  localStorage.setItem("artGalleryUser", JSON.stringify(currentUser));
  renderUser();
  event.currentTarget.reset();
  $("#authDialog").close();
});
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => $("#" + button.dataset.close).close()));
$("#homeLink").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
async function initGallery() {
  renderAlbums();
  await renderUser();
}
initGallery();
