// let count = 3;
let unread = document.querySelectorAll(".unread");
let markReadButton = document.querySelector(".markReadButton");
let countNumber = document.getElementById("count");
countNumber.innerHTML = unread.length;
console.log(unread.length);
let heading = document.getElementsByTagName("h1");

// onclick of unread li, remove bg and update unread li length in count
unread.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.classList.remove("unread");
    // Iterated through each unread item to find the span with the class 'dot' and remove each dot of unread
    let dots = document.querySelector("span.dot");
    if (dots) {
      dots.classList.remove("dot");
    }
    // after remove unread again find number of unread which is left to remove nad update thier length in count
    let unread = document.querySelectorAll(".unread");
    countNumber.innerHTML = unread.length;
  });
});

// onclick on Mark All button remove dot and BG
markReadButton.addEventListener("click", () => {
  unread.forEach((item) => {
    countNumber.textContent = 0;
    item.classList.remove("unread");
    // console.log( dots.classList.remove('.dots'));
    // Iterated through each unread item to find the span with the class 'dot' and remove each dot of unread
    let dots = document.querySelector("span.dot");
    if (dots) {
      dots.classList.remove("dot");
    }
  });
});
