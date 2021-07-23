function partial(func, ...argsBound) {
    return function (...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}

// использование:
let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };
  
  // добавляем частично применённый метод с фиксированным временем
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  
  user.sayNow("Hello");
  // Что-то вроде этого:
  // [10:00] John: Hello!