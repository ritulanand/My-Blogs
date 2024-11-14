const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];
//Create your function here with the name addBlog which takes a blog object as parameter
//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh
blogData.forEach(blog => {
    addBlog(blog);
})
function addBlog(blog) {
  // Step 2: Create a new div element with the class blog-post
  const blogPostDiv = document.createElement('div');
  blogPostDiv.classList.add('blog-post');

  // Step 3: Create a new div element with the class blog-header
  const blogHeaderDiv = document.createElement('div');
  blogHeaderDiv.classList.add('blog-header');

  // Step 4: Create a new h2 element with the class blog-title
  const blogTitle = document.createElement('h2');
  blogTitle.classList.add('blog-title');
  blogTitle.textContent = blog.title; // Step 4: Set the text to the title property

  // Step 5: Create a new p element with the class blog-date
  const blogDate = document.createElement('p');
  blogDate.classList.add('blog-date');
  blogDate.textContent = blog.date; // Step 5: Set the text to the date property

  // Step 6: Create a new p element with the class blog-content
  const blogContent = document.createElement('p');
  blogContent.classList.add('blog-content');
  blogContent.textContent = blog.content; // Step 6: Set the text to the content property

  // Step 7: Append the h2 and p elements as children to the blog-header
  blogHeaderDiv.appendChild(blogTitle);
  blogHeaderDiv.appendChild(blogDate);

  // Step 8: Append the blog-header as a child to the blog-post
  blogPostDiv.appendChild(blogHeaderDiv);

  // Step 9: Append the blog-content as a child to the blog-post
  blogPostDiv.appendChild(blogContent);

  // Step 10: Append the blog-post as a child node to the existing ul with class blog-list
  const blogList = document.querySelector('.blog-list');
  blogList.appendChild(blogPostDiv);
}


