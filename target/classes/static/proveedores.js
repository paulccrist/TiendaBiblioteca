
var tablaProveedor = localStorage.getItem("tablaProvedorStorage");
tablaProveedor = JSON.parse(tablaProveedor);
if(tablaProveedor == null) {
    var tablaProveedor = [];
}

function listar(){
    console.log("LISTANDO DATOS...")

    var dataFila = '';

    if(tablaProveedor.length > 0){
        for(const i in tablaProveedor){
            var varProveedor = JSON.parse(tablaProveedor[i]);
            dataFila +="<tr>";
            dataFila +="<td>"+varProveedor.idProveedor+"</td>";
            dataFila +="<td>"+varProveedor.ruc+"</td>";
            dataFila +="<td>"+varProveedor.nombres+"</td>";
            dataFila +="<td>"+varProveedor.telefono+"</td>";
            dataFila +="<td>"+varProveedor.direccion+"</td>";
            dataFila +="<td>"+
                        "<button type='button' class='btn btn-warning' onclick='abrirForm("+varProveedor.idProveedor+")'>EDITAR</button>"+"</td>";
            dataFila +="</tr>"
        }
        document.getElementById("dataProveedor").innerHTML = dataFila;
    }
}



function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("proveedores-form.html")
}