const FormBtn = document.querySelector("#form-btn");
const form = document.querySelector(".form-body");
const h1 = document.querySelector("h1")
const sub = document.querySelector("#sub")
const formContent = document.querySelector(".form");

FormBtn.addEventListener("click", function () {
    form.style.display = "block";
    FormBtn.style.display = "none";
    h1.style.display = "none";
})

function allValues() {
    let imie = document.querySelector("#imie");
    let nazwisko = document.querySelector("#nazwisko");
    let wiek = document.querySelector("#wiek");
    let email = document.querySelector("#email");
    let numer = document.querySelector("#numer");
    console.log(imie.value, nazwisko.value, wiek.value, email.value, numer.value);

    formContent.innerHTML = `
    <h1>Twoje Dane</h1>
        <table>
            <tr>
                <th>Imie</th>
                <td>${imie.value}</td>
            </tr>
            <tr>
                <th>Nazwisko</th>
                <td>${nazwisko.value}</td>
            </tr>
            <tr>
                <th>Wiek</th>
                <td>${wiek.value}</td>
            </tr>
            <tr>
                <th>Dane kontaktowe</th>
                <td>Eamil: ${email.value}
                    Telefon: ${numer.value}
                </td>
            </tr>
        </table>
    `;


}

sub.addEventListener("click", allValues);

