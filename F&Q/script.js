let items = document.querySelectorAll('.item');
let answers = document.querySelectorAll('.ans');


items.forEach((item, index) => {
  item.addEventListener('click', () => {
   
 if (  answers[index].style.display === "block") {
    answers[index].style.display = "none"
 } else {
    answers.forEach(element => {
        element.style.display = "none"
    });
    answers[index].style.display = "block"
 }
  });
});


