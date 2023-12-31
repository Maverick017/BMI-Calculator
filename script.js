const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height == '' || weight == '') {
        alert('Please fill out the input fields!');
        return;
    }

    height = height / 100;
    let BMI = (weight / (height * height));
    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let str = " ";

    if (BMI < 18.5) {
        str = "You Are Underweight";
    }

    if (BMI >= 18.5 && BMI < 25) {

        str = "You Are Healthy";
    }
    if (BMI >= 25 && BMI < 30) {
        str = "You Are Overweight";
    }

    if (BMI >= 30) {
        str = "You Are Obese";
    }

    document.querySelector('.comment').innerHTML = `<span id="comment">${str}</span> `;

});