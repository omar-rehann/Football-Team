    let section = document.querySelector(".continer");
    let oneinput = document.querySelector(".info .name");
    let twoinput = document.querySelector(".info .number");
    let createbtn = document.querySelector(".create");
    let mssg = document.querySelector(".message");
    let attac = ["Marwan Hamdy", "Frank Itoja", "Elroj", "Salah Mohsen", "Elsahim", "Fekeri", "Mido Gaber"];
    let mid = ["Hamada", "Amdo BA", "Motaz Zediam", "Hassan ALi", "Sadwi", "Fesl", "farid Shawki", "Elarmoty"];
    let def = ["Amr Mousa", "Baher", "Hessuin Elsayed", "Eleraiq", "Dabsh", "Sobhi", "Eid"];
    let goal = ["Gad", "Maria"];
    let allname = ["Marwan Hamdy", "Frank Itoja", "Elsahmi", "Eid", "Elarmoty", "Farid Shawki", "Fesl", "salah Mohsen", "Fekri", "mido Gaber", "Elroj", "Amdo Ba", "Hamada", "Dodo", "Hassan Ali", "Motaz Zidam", "Baher Elmohamdi", "Amr Mousa", "Sadwi", "Hussen Elsayed", "Eleraki", "Gad", "Mohsen", "Marie"];

    createbtn.onclick = function() {
        if (oneinput.value === "" || twoinput.value === "" || isNaN(twoinput.value) || twoinput.value < 16) {
            let el = document.createElement("h3");
            let txt = document.createTextNode("Please Try Again");
            el.appendChild(txt);
            el.style.cssText = `
            background-color: red;
            width: 90%;
            margin: 10px 10px;
            padding: 10px;
            color: white;
            border-radius: 3px;
            text-align: center;
        `;
            mssg.appendChild(el);
            setTimeout(() => {
                el.remove();
            }, 2000);
        } else {
            let textcontent = `
            <table>
                <thead>
                    <tr><td colspan="6">${oneinput.value}</td></tr>
                    <tr>
                        <td>id</td>
                        <td>All Player</td>
                        <td>Attacher</td>
                        <td>Midle Field</td>
                        <td>Definder</td>
                        <td>GoalKeeper</td>
                    </tr>
                </thead>
                <tbody>
        `;

            for (let i = 0; i < twoinput.value; i++) {
                textcontent += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${allname[i % allname.length]}</td>
                    <td>${attac[(i+1) % allname.length] || "_"}</td>
                    <td>${mid[(i+1) % allname.length] || "_"}</td>
                    <td>${def[(i+1) % allname.length] || "_"}</td>
                    <td>${goal[(i+1) % allname.length] || "_"}</td>
                </tr>
            `;
            }

            textcontent += `</tbody></table>`;
            section.innerHTML = textcontent;
        }
    };