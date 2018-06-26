
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




//.  *****SLEEPINESS*****

let lightSwitch = 1; 
// turn lightswitch on and off
// all other activities suspended while lightswitch off
$('#lights').on('click', () => {
  if (lightSwitch === 0) {
    lightSwitch = 1;
      $('#feed').prop('disabled', false);
      $('#play').prop('disabled', false);
    console.log('lightswitch on');
  } 
  else if (lightSwitch === 1) {
    lightSwitch = 0;
      $('#feed').prop('disabled', true);
      $('#play').prop('disabled', true);
    console.log('lightswitch off');
  }
})

//when lightswitch on, tiredness increases by 1 every x minutes
const awake = () => {
    if (lightSwitch === 1) {
      pop.sleepiness++ ;
      console.log(`sleepiness level: ${pop.sleepiness}`)
      $('.sleep').text(`Sleepiness: ${pop.sleepiness}`);
    }
  }

  setInterval(awake, 30000)

//when lightswitch off, tiredness decreases by 1 every x minutes
const sleep = () => {   
    if (lightSwitch === 0) {
      pop.sleepiness-- ;
      console.log(`sleepiness level: ${pop.sleepiness}`)
      $('.sleep').text(`Sleepiness: ${pop.sleepiness}`);

    }
  } 

  setInterval(sleep, 30000)




//  *****HUNGER*****

//as time passes, pop gets hungry
const hungerLevel = () => {
    pop.hunger++;
    console.log(`hunger level: ${pop.hunger}`);
    $('.hunger').text(`Hunger: ${pop.hunger}`);
  }

  setInterval(hungerLevel, 20000)

//clicking the feed button will reduce his hunger level
$('#feed').on('click', () => {
    pop.hunger = pop.hunger - 3;
    console.log(`hunger level: ${pop.hunger}`);
    $('.hunger').text(`Hunger: ${pop.hunger}`);
  })





//  *****BOREDOM*****

//as time passes, pop gets bored
const boredomLevel = () => {
    pop.boredom++
    console.log(`boredom level: ${pop.boredom}`);
    $('.boredom').text(`Boredom: ${pop.boredom}`);
}

  setInterval (boredomLevel, 15000)

//clicking the play button reduces the boredom level
$('#play').on('click', () => {
    pop.boredom = pop.boredom - 2;
    console.log(`boredom level: ${pop.boredom}`)
    $('.boredom').text(`Boredom: ${pop.boredom}`);
})





//  *****AGE*****

// after a certain amount of time, age increases by 1

const gettingOld = () => {
    pop.age++
    console.log(`Happy Birthday! Poppinfresh is ${pop.age}`)
    $('.age').text(`Age: ${pop.age}`);
}

    setInterval (gettingOld, 120000)

// after reaching a certain age, avatar image changes








































