(function () {
  var carButtons = document.querySelectorAll('.data-ref');

  function getCarData() {
    const url = './includes/functions.php?carModel=' + this.id;

    fetch(url) // do our ajax call
          .then((resp) => resp.json()) // convert the response to JSON (built-in method)
          .then(({ modelName, pricing, modelDetails, model }) => {
            //const { modelName, pricing, modelDetails } = data;

            let carModel = document.querySelector('.modelName').textContent = modelName;
            let price = document.querySelector('.priceInfo').innerHTML = pricing;
            let desc = document.querySelector('.modelDetails').textContent = modelDetails;

            // refactor this with an arrow function (shorthand function declaration)
            carButtons.forEach(car => car.classList.add('nonActive'));

            document.querySelector(`#${model}`).classList.remove('nonActive');
           }) // then do the process result function
          .catch(function(error) {
            console.log(error); // catch any errors and show them in the console
          });
}
  carButtons.forEach(function(car, index) {
    car.addEventListener('click', getCarData, false);
  });

})();
