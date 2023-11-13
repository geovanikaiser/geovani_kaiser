document.addEventListener("DOMContentLoaded", function () {
    const carSelect = document.getElementById("carSelect");
    const viewDetails = document.getElementById("viewDetails");
    const carDetails = document.getElementById("carDetails");

    const carData = {
        car1: {
            name: "Golf R",
            price: "R$325.000",
            description: "Um carro incrível com ótimo consumo de combustível."
        },
        car2: {
            name: "Ferrari 488 2019 GTB 3.9 V8 670 cv",
            price: "R$3.234.848",
            description: "Um carro esportivo com alta velocidade."
        },
        car3: {
            name: "BMW X6",
            price: "R$744.950",
            description: "Um carro econômico e compacto."
        }
    };

    viewDetails.addEventListener("click", function () {
        const selectedCar = carSelect.value;
        if (selectedCar in carData) {
            const carInfo = carData[selectedCar];
            carDetails.innerHTML = `
                <h3>${carInfo.name}</h3>
                <p>Preço: ${carInfo.price}</p>
                <p>Descrição: ${carInfo.description}</p>
            `;
        } else {
            carDetails.innerHTML = "Escolha um carro válido.";
        }
    });
});
