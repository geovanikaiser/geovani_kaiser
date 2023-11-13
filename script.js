document.addEventListener("DOMContentLoaded", function () {
    const carSelect = document.getElementById("carSelect");
    const viewDetails = document.getElementById("viewDetails");
    const carDetails = document.getElementById("carDetails");

    const carData = {
        car1: {
            name: "Golf GTI",
            price: "R$150.000",
            description: "2.0 GTI 16V TURBO GASOLINA 4P AUTOMÁTICO - Um carro incrível com ótimo consumo de combustível."
        },
        car2: {
            name: "Ferrari 488",
            price: "R$3.234.848",
            description: "3.9 V8 TURBO GASOLINA F1-DCT - Um carro esportivo com alta velocidade."
        },
        car3: {
            name: "BMW X6",
            price: "R$744.950",
            description: "3.0 TWINPOWER GASOLINA XDRIVE40I M SPORT AUTOMÁTICO - Um carro para quem gosta de velocidade e conforto."
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
