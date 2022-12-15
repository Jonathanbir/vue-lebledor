const animationFrame = () => {
  const numberContainer = document.querySelectorAll(".number");
  const button = document.querySelector("button");
  const numbers = [
    { startNum: 0, currentNum: 100, endNum: locations.seat },
    { startNum: 0, currentNum: 100, endNum: locations.stateroom },
    { startNum: 0, currentNum: 100, endNum: locations.space1 },
    { startNum: 0, currentNum: 100, endNum: locations.space2 },
    { startNum: 0, currentNum: 100, endNum: locations.space3 },
  ];
  const startTime = Date.now();
  const duration = 10;
  let animationStart = false;

  function addUp() {
    animationStart =
      numbers[0].currentNum < numbers[0].endNum ||
      numbers[1].currentNum < numbers[1].endNum
        ? true
        : false;

    let now = Date.now();

    numberContainer.forEach((item, i) => {
      if (
        now >
          startTime +
            duration * (numbers[i].currentNum - numbers[i].startNum) &&
        numbers[i].currentNum < numbers[i].endNum
      ) {
        numbers[i].currentNum++;
        item.innerHTML = numbers[i].currentNum;
      }
    });

    if (animationStart) requestAnimationFrame(() => addUp());
  }

  button.addEventListener("click", () => {
    numbers.forEach((item) => {
      item.currentNum = item.startNum;
    });
    addUp();
  });

  //   setInterval(() => {
  //     numbers.forEach((item) => {
  //       item.currentNum = item.startNum;
  //     });
  //     addUp();
  //   }, 3000);
};

export default animationFrame;
