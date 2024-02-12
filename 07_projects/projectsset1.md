# Projects related to DOM

## project link 
[Click here] (https://stackblitz.com/edit/web-platform-tpw4hs?file=index.html,styles.css)

# Solution code

## project 1
``` javascript 
console.log("divue")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click', function(chai) {
    console.log(chai)
    console.log(chai.target)
    if(chai.target.id === 'grey') {
    body.style.backgroundColor= chai.target.id
    }
    if(chai.target.id === 'white') {
      body.style.backgroundColor= chai.target.id 
    }
    if(chai.target.id === 'blue') {
      body.style.backgroundColor = chai.target.id 
    }
    if(chai.target.id === 'yellow'){
      body.style.backgroundColor = chai.target.id  
    }
  })
});
```

## project 2
```

```