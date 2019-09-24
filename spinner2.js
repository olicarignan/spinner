let characters = ['\r|   ', '\r/   ', '\r-   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r|   '];
let time = 100;
setTimeout(() => {
  for (let i = 0; i < characters.length; i++) {
    setTimeout(() => {
      process.stdout.write(characters[i]);
    }, time);
    time += 200;
  }
}, 100);