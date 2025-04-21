import { client } from "../js/client.js";

const ul = document.querySelector("ul");

let query = {
  _limit: 10,
  _page: 1,
};

let flag = true;

const render = (data) => {
  data.forEach((blog) => {
    const li = document.createElement("li");
    li.innerText = blog.content;
    ul.append(li);
  });
};

const showBlogs = async (dataShow = []) => {
  if (dataShow.length === 0) {
    const queryString = new URLSearchParams(query).toString();
    const { response, data } = await client.get(`blogs?${queryString}`);

    if (response.ok) {
      render(data);
    }
  } else {
    render(dataShow);
  }
};
showBlogs();

const rate = 0.5;
window.addEventListener("scroll", async function () {
  const y = this.scrollY;
  const height = ul.clientHeight * rate;
  if (y >= height && flag) {
    flag = false;
    query._page = query._page + 1;
    const queryString = new URLSearchParams(query).toString();
    const { response, data } = await client.get(`blogs?${queryString}`);

    if (response.ok) {
      showBlogs(data);
      flag = true;
      rate = 0.7;
    }
  }
});
