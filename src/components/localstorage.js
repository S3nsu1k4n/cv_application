export class LocalStorage{
  constructor(){
    this.available = this.storageAvailable("localStorage");
  }

  save_section = (name, data) => localStorage.setItem(name, JSON.stringify(data));
  
  get_section = name => JSON.parse(localStorage.getItem(name));

  get length(){ return localStorage.length }

  print = () => console.log(localStorage);

  storageAvailable = type => {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

}