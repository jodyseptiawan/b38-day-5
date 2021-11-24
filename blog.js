// initialize empty array to store blog
let blogs = [];

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-image').value;
  let image = document.getElementById('input-blog-content').value;

  if (title == '' || image == '' || content == '') {
    return alert('All input fields must be not empty');
  }
  image = URL.createObjectURL(imageInput.files[0]);

  // create blog item and push to blogs array-----------------------------------------------------------------------------------
  let blog = {
    author: 'Rhoma Irama',
    title: title,
    image: image,
    content: content,
    postedAt: new Date(),
  };

  blogs.push(blog);

  // invoke function to display updated blogs to HTML---------------------------------------------------
  renderBlog();
}

function renderBlog() {
  //display blogs array to console
  console.table(blogs);

  // get blog content container element
  let blogContainer = document.getElementById('contents');

  blogContainer.innerHTML = firstBlogContent();

  // looping through blogs array to access elements
  for (let i = 0; i < blogs.length; i++) {
    // display every blog to console
    console.log(blogs[i]);

    // store data to HTML using DOM innerHTML
    blogContainer.innerHTML += `
    <div id="${i}" class="blog-list-item">
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
          12 Jul 2021 22:30 WIB | ${blogs[i].author}
        </div>
        <p>${blogs[i].content}</p>
      </div>
    </div>
    `;
  }
}

function firstBlogContent() {
  return `<div class="blog-list-item">
                  <div class="blog-image">
                    <img src="assets/blog-img.png" alt="" />
                  </div>
                  <div class="blog-content">
                    <div class="btn-group">
                      <button class="btn-edit">Edit Post</button>
                      <button class="btn-post">Post Blog</button>
                    </div>
                    <h1>
                      <a href="blog-detail.html" target="_blank"
                        >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
                      >
                    </h1>
                    <div class="detail-blog-content">
                      12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
                    </div>
                    <p>
                      Ketimpangan sumber daya manusia (SDM) di sektor digital masih
                      menjadi isu yang belum terpecahkan. Berdasarkan penelitian
                      ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
                      meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
                      dolor sit amet consectetur adipisicing elit. Quam, molestiae
                      numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
                      eligendi debitis?
                    </p>
                  </div>
                </div>`;
}
