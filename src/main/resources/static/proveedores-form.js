

var tablaProveedor = localStorage.getItem("tablaProvedorStorage");
tablaProveedor = JSON.parse(tablaProveedor);
if(tablaProveedor == null) {
    var tablaProveedor = [];
}


var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if(idForm == null) {
    var idForm = 0;
}

cargarPagina();

function guardar() {
    console.log("PRESIONO GUARDAR...")
    var objProvedor = JSON.stringify({
        idProveedor: (idForm>0)? idForm: (tablaProveedor.length +1),
        ruc: document.getElementById("txtRuc").value,
        nombres: document.getElementById("txtNomb").value,
        telefono: document.getElementById("txtTelefono").value,
        direccion: document.getElementById("txtDireccion").value
    });
    console.log(objProvedor);
    //EDITAR
    if(idForm > 0){
        for(const i in tablaProveedor){
            var varProveedor = JSON.parse(tablaProveedor[i]);
            if(varProveedor.idProveedor == idForm){
                tablaProveedor[i] = objProvedor;
                break;
            }
        }
    }else{
        tablaProveedor.push(objProvedor);
    }
    //NUEVOS PACIENTES

    localStorage.setItem("tablaProvedorStorage", JSON.stringify(tablaProveedor));
    window.location.replace("proveedores.html");
}

function cargarPagina() {
    if(idForm > 0){
        // SACAR DATOS DE LA FILA DE LA TABLA Y PONERLOS EN EL FORMULARIO 
        for(const i in tablaProveedor){
            var varProveedor = JSON.parse(tablaProveedor[i]);
            if(varProveedor.idProveedor == idForm){
                document.getElementById("txtIdProveedor").value = varProveedor.idProveedor;
                document.getElementById("txtRuc").value = varProveedor.ruc;
                document.getElementById("txtNomb").value = varProveedor.nombres;
                document.getElementById("txtTelefono").value = varProveedor.telefono;
                document.getElementById("txtDireccion").value = varProveedor.direccion;
            }
        }
    }
}