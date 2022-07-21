// Object
// Array
// Looping
// HTML ELement Manipulation

// 1. Get data form ✅
// 2. Grouping by Object ✅
// 3. Store to Array ✅
// 4. Display to HTML page  ✅

let blogs = [] // Variable Global

function addBlog() {
    // Get data form
    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image').files[0];

    image = URL.createObjectURL(image)

    // Validation value
    // ....

    // Grouping by Object
    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'Jody Septiawan',
        postAt: new Date()
    }

    // Store to Array
    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogWrapper = document.getElementById('contents');

    blogWrapper.innerHTML = ''


    for (let i = 0; i < blogs.length; i++) {

        blogWrapper.innerHTML += ` 
        <div class="blog-list-item">
            <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            <h1>
                <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
                >
            </h1>
            <div class="detail-blog-content">
            ${blogs[i].postAt} | ${blogs[i].author}
            </div>
            <p>${blogs[i].content}</p>
            </div>
        </div>`
        
    }

}

