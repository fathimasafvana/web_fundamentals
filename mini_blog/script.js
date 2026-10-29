// Scroll to blogs

function scrollToBlogs() {

    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });

}


// Read More

function readMore(title) {

    alert("You selected: " + title);

}


// Search blogs

function searchBlogs() {

    let searchInput = document.getElementById("searchInput");

    let searchValue = searchInput.value.toLowerCase();

    let blogs = document.getElementsByClassName("blog-card");

    for (let i = 0; i < blogs.length; i++) {

        let title = blogs[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        if (title.includes(searchValue)) {

            blogs[i].style.display = "block";

        } else {

            blogs[i].style.display = "none";

        }

    }

}