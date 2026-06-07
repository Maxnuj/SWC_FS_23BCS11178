const feed = document.getElementById("feed");
const loader = document.getElementById("loader");

let page = 1;
let isLoading = false;
const POSTS_PER_PAGE = 10;

/*
    Simulated API Call
*/
function fetchPosts() {

    // Prevent duplicate requests
    if (isLoading) return;

    isLoading = true;
    loader.style.display = "block";

    setTimeout(() => {

        for (let i = 1; i <= POSTS_PER_PAGE; i++) {

            const postNumber =
                (page - 1) * POSTS_PER_PAGE + i;

            const post = document.createElement("div");

            post.classList.add("post");

            post.innerHTML = `
                <h3>Post ${postNumber}</h3>
                <p>
                    This is dynamically loaded content
                    for post ${postNumber}.
                </p>
            `;

            feed.appendChild(post);
        }

        page++;

        isLoading = false;
        loader.style.display = "none";

    }, 1500); // Simulated API delay
}

/*
    Infinite Scroll Detection
*/
window.addEventListener("scroll", () => {

    const scrollPosition =
        window.innerHeight + window.scrollY;

    const triggerPoint =
        document.body.offsetHeight - 200;

    if (scrollPosition >= triggerPoint) {
        fetchPosts();
    }
});

/*
    Initial Data Load
*/
fetchPosts();
