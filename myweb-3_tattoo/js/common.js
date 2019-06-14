var btn = document.querySelector('button');
var inner = document.querySelector('.leng-page__inner');
var lengInputRu = document.querySelector('.leng-input-ru');


btn.addEventListener('click', function(e){
  e.preventDefault();
  inner.classList.toggle('inner-drop');
  if(lengInputRu.checked) {
    console.log(123);
  }else if(lengInputRu.checked) {
    console.log(123);
  }
})
