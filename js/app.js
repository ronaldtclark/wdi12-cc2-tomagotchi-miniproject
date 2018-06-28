
class Tomagotchi {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
  }
  
};

const pop = new Tomagotchi ('Poppinfresh');

const wizName = prompt("What is your wizard's name?", "enter name")
const $name = $('<h1>')
$name.text(wizName)
$('body').prepend($name)




//.  *****SLEEPINESS*****

let lightSwitch = 1; 
// turn lightswitch on and off
// all other activities suspended while lightswitch off
$('#lights').on('click', () => {
  if (lightSwitch === 0) {
    lightSwitch = 1;
    $('body').css('background-color', '#FAFBD2');
    $('.metrics').css('color', '#000000')
    $('h1').css('color', '#000000')
      $('#feed').prop('disabled', false);
      $('#play').prop('disabled', false);
    console.log('lightswitch on');
  } 
  else if (lightSwitch === 1) {
    lightSwitch = 0;
    $('body').css('background-color', '#404756');
    $('.metrics').css('color', '#ffffff')
    $('h1').css('color', '#ffffff')
      $('#feed').prop('disabled', true);
      $('#play').prop('disabled', true);
    console.log('lightswitch off');
  }
})

//when lightswitch on, tiredness increases by 1 every x minutes
const awake = () => {
    if (lightSwitch === 1) {
      pop.sleepiness++ ;
        if (pop.sleepiness === 10) {
        alert(`${wizName} has died of exhaustion.`)
            document.location.reload(); 
        }
      console.log(`sleepiness level: ${pop.sleepiness}`)
      $('.sleep').text(`Sleepiness: ${pop.sleepiness}`);
    }
  }

  setInterval(awake, 6000)

//when lightswitch off, tiredness decreases by 1 every x minutes
const sleep = () => {   
    if (lightSwitch === 0) {
      pop.sleepiness-- ;
      if (pop.sleepiness < 1) {
      pop.sleepiness = 1
      }
      console.log(`sleepiness level: ${pop.sleepiness}`)
      $('.sleep').text(`Sleepiness: ${pop.sleepiness}`);

    }
  } 

  setInterval(sleep, 4000)




//  *****HUNGER*****

//as time passes, pop gets hungry
const hungerLevel = () => {
    pop.hunger++;
      if (pop.hunger === 10) {
      alert(`${wizName} has starved to death.`)
        document.location.reload(); 
      }
    console.log(`hunger level: ${pop.hunger}`);
    $('.hunger').text(`Hunger: ${pop.hunger}`);
  }

  setInterval(hungerLevel, 5000)

//clicking the feed button will reduce his hunger level
$('#feed').on('click', () => {
    pop.hunger = pop.hunger - 3;
    if (pop.hunger < 1) {
      pop.hunger = 1
    }
    console.log(`hunger level: ${pop.hunger}`);
    $('.hunger').text(`Hunger: ${pop.hunger}`);
  })





//  *****BOREDOM*****

//as time passes, pop gets bored
const boredomLevel = () => {
    pop.boredom++;
      if (pop.boredom === 10) {
      alert(`${wizName} was bored to death.`)
        document.location.reload(); 
      }
    console.log(`boredom level: ${pop.boredom}`);
    $('.boredom').text(`Boredom: ${pop.boredom}`);
}

  setInterval (boredomLevel, 3000)

//clicking the play button reduces the boredom level
$('#play').on('click', () => {
    pop.boredom = pop.boredom - 2;
    if (pop.boredom < 1) {
      pop.boredom = 1
    }
    console.log(`boredom level: ${pop.boredom}`)
    $('.boredom').text(`Boredom: ${pop.boredom}`);
})





//  *****AGE*****

// after a certain amount of time, age increases by 1

const gettingOld = () => {
    pop.age++
    alert(`Happy Birthday! ${wizName} is ${pop.age}.`)
    $('.age').text(`Age: ${pop.age}`);
// after reaching a certain age, avatar image changes
    if (pop.age >= 4) {
      $('#avatar').attr('src', 'https://i.imgur.com/qtz29lp.png')
    };
      if (pop.age === 4) { 
      alert(`${wizName} has evolved!`)
      }

    if (pop.age >= 8) { 
      $('#avatar').attr('src', 'https://i.imgur.com/5Qz83rw.png')
    } ;  
      if (pop.age === 8) { 
      alert(`${wizName} has evolved!`)
      }
     
   
}
setInterval (gettingOld, 10000);







































