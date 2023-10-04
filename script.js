let formCreate = document.querySelector("#form-create");
let containerData = document.querySelector("#container-data");
const inputName = document.querySelector("#Nama");
const inputKelas = document.querySelector("#Kelas");
const inputNIS = document.querySelector("#NIS");
console.log(formCreate);
let data = [];

if (localStorage.getItem("dataSiswa")) {
    data = JSON.parse(localStorage.getItem("dataSiswa"));
}

function tampilkanData(){
    containerData.innerHTML = "";
    localStorage.setItem("dataSiswa", JSON.stringify(data));
    data.forEach((siswa,i) => {
        containerData.innerHTML += `
        <tr>
            <th>${i+1}</th>
            <th>${siswa.Nama}</th>
            <th>${siswa.Kelas}</th>
            <th>${siswa.Nis}</th>
            <th><btn id="edit" onclick="editData(${i})" class="btn btn-warning btn-sm edit" href="#">edit</btn></th>
            <th><btn id="delete" onclick="hapusData()" class="btn btn-danger btn-sm delete" href="#">delete</btn></th>
        </tr>
        `
    });
}

tampilkanData();

formCreate.addEventListener("submit", function(event){
    event.preventDefault();
    let obj = {
        Nama : inputName.value,
        Kelas : inputKelas.value,
        Nis : inputNIS.value
    };
    data.push(obj);
    tampilkanData(); 
    formCreate.reset();
});

function hapusData(index){
    data.splice(index, 1);
    tampilkanData();
}

function editData(index){
    let newNama = prompt("Ubah Nama");
    let newKelas = prompt("Ubah Kelas");
    let newNis = prompt("Ubah ");
    data[index] = {
        Nama : newNama,
        Kelas : newKelas,
        Nis : newNis
    }
    tampilkanData();
}