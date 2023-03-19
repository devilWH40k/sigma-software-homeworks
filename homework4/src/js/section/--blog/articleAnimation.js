const articlesElems = document.querySelectorAll(".article");

const itemCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("article--hidden");
    } else {
      entry.target.classList.add("article--hidden");
    }
  });
};

const itemsObserver = new IntersectionObserver(itemCallback, {
  root: null,
  threshold: 0.3,
});

articlesElems.forEach((item) => {
  item.classList.add("article--hidden");
  itemsObserver.observe(item);
});
