document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");

  // Завдання 1
  function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value + " (затримка " + delay + " мс)");
      }, delay);
    });
  }
  function runTask1() {
    output.textContent += "\n--- Завдання 1: Promise.all ---\n";
    const promises = [
      delayedPromise("Проміс 1", 1000),
      delayedPromise("Проміс 2", 2000),
      delayedPromise("Проміс 3", 1500),
      delayedPromise("Проміс 4", 3000),
      delayedPromise("Проміс 5", 2500),
    ];
    Promise.all(promises)
      .then((results) => {
        results.forEach((result) => {
          output.textContent += result + "\n";
        });
      })
      .catch((error) => {
        output.textContent += "Помилка: " + error + "\n";
      });
  }

  // Завдання 2
  function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value + " (затримка " + delay + " мс)");
      }, delay);
    });
  }
  function runTask2() {
    output.textContent += "\n--- Завдання 2: Promise.race ---\n";

    const promises = [
      randomDelay("Проміс A"),
      randomDelay("Проміс B"),
      randomDelay("Проміс C"),
      randomDelay("Проміс D"),
      randomDelay("Проміс E"),
    ];

    Promise.race(promises)
      .then((result) => {
        output.textContent += "Найшвидший: " + result + "\n";
      })
      .catch((error) => {
        output.textContent += "Помилка: " + error + "\n";
      });
  }
  document.getElementById("task1").addEventListener("click", runTask1);
  document.getElementById("task2").addEventListener("click", runTask2);
});
