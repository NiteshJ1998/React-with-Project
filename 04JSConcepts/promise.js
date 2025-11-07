const orderPizza = new Promise((res, rej) => {
  console.log("you ordered a pizza....");

  setTimeout(() => {
    let ovenWork = false;

    if (ovenWork) {
      res("pizza is ready enjoy your pizza ");
    } else {
      rej("sorry you pizza is not ready yet please wait for 5 mins");
    }
  }, 5000);
});

orderPizza
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("thanks for visiting us come again");
  });
