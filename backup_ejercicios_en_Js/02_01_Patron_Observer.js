class WeatherData {
  constructor() {
    this.temperature = 0;
    this.observers = [];
  }

  addObservers(observer) {
    this.observers.push(observer);
  }

  deleteObserver(observer) {
    const index = this.observers.indexOf(observer);

    if (index !== -1) return;

    return this.observers.splice(index, 1);
  }
  notificateToObservers() {
    this.observers.forEach((obs) => {
      obs.update(this.temperature);
    });
  }
  changeTemperature(temperature) {
    this.temperature = temperature;
    this.notificateToObservers();
  }
}

class Display {
  constructor(city) {
    this.city = city;
  }

  update(temperature) {
    console.log(`the current temperature in ${this.city} is ${temperature}`);
  }
}

const weatherData = new WeatherData();

const display1 = new Display("Medellin");
const display2 = new Display("Bogota");

// display.update(40);

weatherData.addObservers(display1);
weatherData.addObservers(display2);

weatherData.changeTemperature(40);
weatherData.changeTemperature(50);
