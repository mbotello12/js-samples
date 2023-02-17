// Carousel of three locations to toggle between

		document.querySelectorAll(".carousel").forEach(carousel => {
			const items = carousel.querySelectorAll('.carousel-item');
			const buttonsHtml = Array.from(items, () => {
				return `<span class="carousel-button"></span>`;
			});	
			
			carousel.insertAdjacentHTML("beforeend", `
				<div class="carousel-nav">
					${buttonsHtml.join("")}
				</div>
			`);
			
			const buttons = carousel.querySelectorAll('.carousel-button');

			buttons.forEach((button, i) => {
				button.addEventListener('click', () => {
					items.forEach(item => item.classList.remove('carousel-item-selected'));
					buttons.forEach(button => button.classList.remove('carousel-button-selected'));

					items[i].classList.add('carousel-item-selected')
					button.classList.add('carousel-button-selected')
				})
			})
			items[0].classList.add('carousel-item-selected')
			buttons[0].classList.add('carousel-button-selected')
		});
    
    //Background picker 
		
		document.querySelector('#fiveByFive').addEventListener('click', show5x5)
		document.querySelector('#fiveByTen').addEventListener('click', show5x10)
		document.querySelector('#tenByTen').addEventListener('click', show10x10)
		document.querySelector('#tenByFifteen').addEventListener('click', show10x15)
		document.querySelector('#tenByTwenty').addEventListener('click', show10x20)
		document.querySelector('#tenByTwentyFive').addEventListener('click', show10x25)
		document.querySelector('#tenByForty').addEventListener('click', show10x40)


	function show5x5() {
    	document.querySelector('.question').style.backgroundImage = "url(images/5x5.jpg)"
	}
	function show5x10(){
		document.querySelector('.question').style.backgroundImage = "url(images/5x10.jpg)"
	}
	function show10x10(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x10.jpg)"
	}
	function show10x15(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x15.jpg)"
	}
	function show10x20(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x20.jpg)"
	}
	function show10x25(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x25.jpg)"
	}
	function show10x40(){
		document.querySelector('.question').style.backgroundImage = "url(images/10x40.jpg)"
	}
  
  //Arrays

//Create and array of numbers. Sum all of the numbers. return the sum.

  function addArrayValues(arr){
    return arr.reduce((sum, curr) => sum + curr, 0) 
  }
  
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
 
  function squareOriginalNums(arr){
    return arr.map(item => item**2)
  }
  
//Create a function that takes string
//return the reverse of that string to the console

  function reverseStr(str){
    return str.split('').reverse().join('')
  }

//Create a function that takes in a string
//Alert if the string is a palindrome or not
  function checkPalindrome(str){
    return (str === reverseStr(str))
  }



