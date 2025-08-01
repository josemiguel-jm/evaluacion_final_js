let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
c1.style.display = "block";
c2.style.display = "none";
c3.style.display = "none";
c4.style.display = "none";
c5.style.display = "none";
c6.style.display = "none";
c7.style.display = "none";

let cuentas = [{nombre:"Mali", saldo:200, password:"1234", dni:"44788834"},
                {nombre:"Gera", saldo:150, password:"5678", dni:"10247439"},
                {nombre:"Sabi", saldo:60, password:"9102", dni:"98005362"}];
let cantReg = cuentas.length;
let indUsua = -1;
let saldoUsu = 0;

let dni = document.getElementById("idDni");
let clave = document.getElementById("idClave");
let deposito = document.getElementById("idIngresar");
let retiro = document.getElementById("idRetirar");

let h2Saludo = document.querySelector(".h2Saludo");
let pConsulta = document.querySelector(".pConsulta");
let pConfirmar = document.querySelector(".pConfirmar");

let btnLogueo = document.getElementById("idBtnLogueo");
let btnConsulta = document.getElementById("idBtnConsulta");
let btnIngresar = document.getElementById("idBtnIngresar");
let btnRetirar = document.getElementById("idBtnRetirar");
let btnIngAcep = document.getElementById("idBtnIngAcep");
let btnRetAcep = document.getElementById("idBtnRetAcep");

let btnSalir1 = document.getElementById("idBtnSalir1");
let btnSalir2 = document.getElementById("idBtnSalir2");
let btnSalir3 = document.getElementById("idBtnSalir3");
let btnSalir4 = document.getElementById("idBtnSalir4");
let btnRegMen1 = document.getElementById("idBtnRegMen1");
let btnRegMen2 = document.getElementById("idBtnRegMen2");
let btnRegMen3 = document.getElementById("idBtnRegMen3");
let btnVolver = document.getElementById("idBtnVolver");
let btnContinuar = document.getElementById("idBtnContinuar");

btnLogueo.addEventListener("click",f_logueo);
btnConsulta.addEventListener("click",f_consulta);
btnIngresar.addEventListener("click",f_ingresar);
btnIngAcep.addEventListener("click",f_ingAcep);
btnRetirar.addEventListener("click",f_retirar);
btnRetAcep.addEventListener("click",f_retAcep);

btnSalir1.addEventListener("click",f_salir);
btnSalir2.addEventListener("click",f_salir);
btnSalir3.addEventListener("click",f_salir);
btnSalir4.addEventListener("click",f_salir);
btnRegMen1.addEventListener("click",f_menu);
btnRegMen2.addEventListener("click",f_menu);
btnRegMen3.addEventListener("click",f_menu);
btnVolver.addEventListener("click",f_volver);
btnContinuar.addEventListener("click",f_continuar);

function f_logueo(){
    let valDni = dni.value.trim();
    let valClave = clave.value.trim();

    if(valDni==="" || valClave===""){
        alert("Uno o ambos campos están vacíos, por favor complete los datos");
        return;
    }

    let i=0;
    while(i<cantReg){
        if(cuentas[i].dni===valDni){
            indUsua=i;
            i=cantReg;
            if(cuentas[indUsua].password===valClave){
                c2.style.display = "block";
                c1.style.display = "none";
                saldoUsu = cuentas[indUsua].saldo;
                h2Saludo.textContent = "Bienvenido(a) "+cuentas[indUsua].nombre;
                dni.value="";
                clave.value="";
            }else{
                indUsua=-1;
            }
        } else{
            i++;
        }
    }
    if(indUsua==-1){
        alert("El DNI o clave son incorrectos");
    }
}

function f_ingAcep(){
    let valIng = Number(deposito.value.trim());
    if(valIng>0){
        cuentas[indUsua].saldo = saldoUsu + valIng;
        saldoUsu = cuentas[indUsua].saldo;
        deposito.value = "";
        c6.style.display = "block";
        c4.style.display = "none";
        pConfirmar.textContent = "Estimado cliente, el monto ingresado es de S/."+ valIng + " y su saldo actual es: S/." + cuentas[indUsua].saldo;
    }else{
        alert("Ingrese un monto válido o mayor a cero por favor");
        deposito.value="";
        return;
    }    
}

function f_retAcep(){
    let valRet = Number(retiro.value.trim());
    if(valRet>0){
        if(cuentas[indUsua].saldo >= valRet){
            cuentas[indUsua].saldo = saldoUsu - valRet;
            saldoUsu = cuentas[indUsua].saldo;
            retiro.value = "";
            c6.style.display = "block";
            c5.style.display = "none";
            pConfirmar.textContent = "Estimado cliente, el monto retirado es de S/."+ valRet + " y su saldo actual es: S/." + cuentas[indUsua].saldo;
        }else{
            alert("El monto a retirar es mayor al saldo disponible, ingrese otro monto por favor");
            retiro.value="";
            return;
        }        
    }else{
        alert("Ingrese un monto válido o mayor a cero por favor");
        retiro.value="";
        return;
    }
}

function f_consulta(){
    c3.style.display = "block";
    c2.style.display = "none";
    pConsulta.textContent = "Estimado cliente, su saldo actual es de S/."+saldoUsu;
}

function f_salir(){
    c7.style.display = "block";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";    
    indUsua = -1;
    saldoUsu = 0;
}

function f_menu(){
    c2.style.display = "block";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
    deposito.value = "";
    retiro.value = "";
}

function f_volver(){
    c1.style.display = "block";
    c7.style.display = "none";
    indUsua = -1;
    saldoUsu = 0;
    dni.value = "";
    clave.value = "";
    deposito.value = "";
    retiro.value = "";
}

function f_ingresar(){
    c4.style.display = "block";
    c2.style.display = "none";    
}

function f_retirar(){
    c5.style.display = "block";
    c2.style.display = "none";    
}

function f_continuar(){
    c7.style.display = "block";
    c6.style.display = "none"; 
}

