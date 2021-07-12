

// let firstButton = document.querySelectorAll('.card-button')[0];
// let firstAnswer = document.querySelectorAll('.card-answer')[0];
//
// firstButton.addEventListener('click', function(){
//   if(firstButton.innerHTML === 'Show'){
//     firstAnswer.style.display = 'block';
//     firstButton.innerHTML = 'Hide';
//   }
//   else if(firstButton.innerHTML === 'Hide'){
//     firstAnswer.style.display = 'none';
//     firstButton.innerHTML = 'Show';
//   }
//
// });

const clickAction = (button, answer) => {
  if(button.innerHTML==='Show'){
    answer.style.display = 'block';
    button.innerHTML = 'Hide';
  }
  else if(button.innerHTML==='Hide'){
    answer.style.display = 'none';
    button.innerHTML = 'Show';
  }
}

cards = document.querySelectorAll('.card');
for(let i=0; i<cards.length; i++){
  let button = cards[i].querySelector('.card-button');
  let answer = cards[i].querySelector('.card-answer');
  button.addEventListener('click', ()=>{
    clickAction(button, answer);
  });
}
