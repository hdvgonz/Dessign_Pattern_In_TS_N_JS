/**Interfaz suscriptora */

interface ISuscriptor {
    update(notifier: INotifier): void;
  }
  
  /**Interfaz notificadora */
  interface INotifier {
    subscribe(subscriber: ISuscriptor): void;
    unsubscribe(subscriber: ISuscriptor): void;
  }
  
  /**Clase abstracta notificadora */
  
  abstract class Notifier implements INotifier {
    protected readonly subscribers: Set<ISuscriptor>;
    

    constructor(){
        this.subscribers =  new Set()
    }

    public subscribe(subscriber: ISuscriptor): void {
      this.subscribers.add(subscriber);
    }
  
    public unsubscribe(subscriber: ISuscriptor): void {
      this.subscribers.delete(subscriber);
    }
  
    protected notifiy(event: string) {
      this.subscribers.forEach((subs) => {
        subs.update(this);
      });
    }
  }
  
  /* Clase Notificadora concreta */
  
  class NotifyTemperature extends Notifier {
    constructor(private temperature: number) {
      super();
    }
  
    public get currentTemperature(): number {
      return this.temperature;
    }
    public set currentTemperature(temperature: number) {
      this.temperature = temperature;
      this.notifiy("temperature");
    }
  }
  
  /**Clase suscriptora concreta */
  
  class ThermometerSubscriber implements ISuscriptor {
    constructor() {}
    public update(notifier: INotifier): void {
      if ( notifier instanceof NotifyTemperature ) {
          console.log("Tempertura has changed to", notifier.currentTemperature )
      }
    }
  }
  
  //Ejemplo de uso
  
  const temperatureNotifier = new NotifyTemperature(30);
  const subscriber = new ThermometerSubscriber();
  
  temperatureNotifier.subscribe(subscriber);
  
  temperatureNotifier.currentTemperature = 40;
  
