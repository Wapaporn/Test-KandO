function loadtable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8000/getNews", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var trHTML = '';
            const response = JSON.parse(this.responseText);
            const objects = response.data;
            console.log('this.responseText = ',this.responseText);
            console.log('this.responseText = ',);
            

            for (let object of objects) {
            console.log('NewsId = ',object['NewsId']);
                trHTML += '<div scope = "row" onclick="select('+ object['NewsId'] +')" >';
                trHTML += '<td style="text-align: center;" class="form-switch">';
                trHTML += '<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"> ';
                trHTML += '<td style="text-align: center;">' + object['NewsId'] + '</td>';
                trHTML += '<td style="text-align: center;">' + object['NameNews'] + '</td>';
                trHTML += '<td style="text-align: center;">' + object['UpdatedDate'] + '</td>';

                trHTML += '<td style="text-align: center;" ><button type="button" class="btn btn-primary" onclick="ViweNews('+ object['NewsId'] +')">';
                trHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"></path> <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"></path> </svg></button>';

                trHTML +='<button type="button" class="btn btn-secondary" onclick="EditNews('+ object['NewsId'] +')">';
                trHTML +='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">';
                trHTML += '<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path> ';
                trHTML += '<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path> ';
                trHTML += '</svg></button>';

                trHTML += '<button type="button" class="btn btn-outline-danger" onclick="DelNews('+ object['NewsId'] +')">';
                trHTML +='<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"> <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"></path> </svg></td>';

                trHTML += '</tr></div>';
                



            }


            document.getElementById("ID1").innerHTML = trHTML;
        }
    };
    xhttp.send();
}

loadtable();
function AddNews(){
    Swal.fire({
        title : 'รายละเอียดข่าวประชาสัมพันธ์',
        html : 
        'ชื่อเรื่อง <input id = "in1" class = "swal2-input">'+
        'เนื้อหา   <input id = "in2" class = "swal2-input">'+
        'สถานะ <input class = "form-check form-switch" type = "checkbox" id = "status" >',
        focusConfirm : false,
        preConfirm : () => {

            // return[
            //     document.getElementById('in1').value,
            //     document.getElementById('in2').value
            // ]
        }
    })
}
function ViweNews(NewsId){
    console.log('Viwe-NewsId',NewsId);
    NewsId-=1;
    console.log('Viwe-NewsId-1',NewsId);
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8000/getNews", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const object = JSON.parse(this.responseText);
            const IdNews = object.data[NewsId];
            const NameNews = object.data[NewsId];
            const Detail = object.data[NewsId];
            // const NameNews = object.data[NewsId].NameNews;
            // const Detail = object.data[NewsId].Detail;
            console.log('object',object.data[NewsId]);
            Swal.fire({
                title : 'รายละเอียดข่าวประชาสัมพันธ์',
                html : 
                '<input id = "Id" type = "hidden" value="'+ IdNews['NewsId']+'">'+
                'ชื่อเรื่อง <sup>*</sup>'+
                '<input id = "Name" class = "swal2-input" value="'+ NameNews['NameNews']+'">'+
                '<div></div>เนื้อหา <sup>*</sup>'+
                '<input id = "in2" class = "swal2-input" value="'+ Detail['Detail']+'">'+
                '<div></div> สถานะ'+
                '<span class="form-switch"> '+
                '<input class="form-check-input" type="checkbox" id="checkviwe" value="" ></span>',

                focusConfirm : false,
                preConfirm : () => {
                    EditDetail();
                    
                }              
            });
            // this.Name = NameNews['NameNews'];
            // console.log(this.Name);
        }
    }
    xhttp.send();
}
function EditNews(){

}
function EditNews(NewsId){
    console.log('Edit-NewsId',NewsId);
}
function DelNews(NewsId){
    console.log('Del-NewsId',NewsId);


}

function select(ID1){
    console.log('Id = ',ID1);
    

            Swal.fire({
                title : 'รายละเอียดข่าวประชาสัมพันธ์',
                html : 
                'ชื่อเรื่อง <sup>*</sup>'+
                '<input id = "Name" class = "swal2-input">'+
                '<div></div>เนื้อหา <sup>*</sup>'+
                '<input id = "in2" class = "swal2-input">'+
                '<div></div> สถานะ'+
                '<span class="form-check form-switch"> '+
                '<input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" ></span>',
                focusConfirm : false,
                preConfirm : () => {
                    GetDetail(ID1);
                }
            })
    

}
function GetDetail(ID1){
    const in1 = document.getElementById("in1").value;
    confirm.log(in1);
    const xhttp= new XMLHttpRequest();
    xhttp.open("POST","")

}
