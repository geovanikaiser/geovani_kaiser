document.addEventListener("DOMContentLoaded", function () {
    const carSelect = document.getElementById("carSelect");
    const viewDetails = document.getElementById("viewDetails");
    const carDetails = document.getElementById("carDetails");
    const buyCarButton = document.querySelector(".buyCar");


    const carData = {
        car1: {
            name: "Golf GTI",
            price: "R$150.000",
            description: "2.0 GTI 16V TURBO GASOLINA 4P AUTOMÁTICO"
        },
        car2: {
            name: "Ferrari 488",
            price: "R$3.234.848",
            description: "3.9 V8 TURBO GASOLINA F1-DCT"
        },
        car3: {
            name: "BMW X6",
            price: "R$744.950",
            description: "3.0 TWINPOWER GASOLINA XDRIVE40I M SPORT AUTOMÁTICO"
        }
    };

    window.cadastrarEmail = function () {
        const emailInput = document.getElementById("email");
        const addMoreCheckbox = document.getElementById("addMore");

        const emailsCadastrados = [];

        while (addMoreCheckbox.checked || emailsCadastrados.length === 0) {
            if (isValidEmail(emailInput.value)) {
                emailsCadastrados.push(emailInput.value);
                alert(`E-mail cadastrado com sucesso: ${emailInput.value}`);

                emailInput.value = "";

                addMoreCheckbox.checked = confirm("Deseja cadastrar mais algum e-mail?");

                if (!addMoreCheckbox.checked) {
                    window.location.href = "index.html";
                }
            } else {
                alert("Por favor, insira um e-mail válido.");
                break;
            }
        }
    };

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

        buyCarButton.addEventListener("click", function () {
    const selectedCar = carSelect.value;
    if (selectedCar in carData) {
        const carInfo = carData[selectedCar];
        alert(`Pedido de compra para ${carInfo.name} enviado com sucesso!`);
        buyButton.style.display = "none";
    } else {
        carDetails.innerHTML = "Escolha um carro válido";
    }
})

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
        carDetails.innerHTML = "Escolha um carro válido";
    }
});
    });
