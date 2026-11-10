let posts = document.getElementById('posts');
let postsList = [];

const showPosts = () => {
    posts.innerHTML = "";
    postsList.map(post => {
        posts.innerHTML += `
            <article class="post-card">
                <div class="post-image">
                    <!-- <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" alt="Workspace"> -->
                    <span class="category">Technology</span>
                </div>

                <div class="post-content">
                    <div class="post-meta">November 10, 2026 · 5 min read</div>
                    <h2>${post.title}</h2>
                    <p title="${post.body}">${post.body.slice(0, 150)}...</p>

                    <div class="post-footer">
                        <div class="author">
                            <!-- <img src="https://i.pravatar.cc/100?img=12" alt="Author"> -->
                            <span>Alex Morgan</span>
                        </div>
                        <a href="#" class="read-more">Read More →</a>
                    </div>
                </div>
            </article>
        `        
    });
}

const getPosts = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(async (response) => {
            postsList = await response.json();
            showPosts();
        })
}

window.onload = () => {
    getPosts();
}