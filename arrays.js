
do {
    let = nombre = ""

    nombre = prompt("Cual es su Nombre ")


    if (nombre == "") {
        alert("Esta Vacio favor ingrese un NOMBRE");
    }
}
while (nombre == "");


let info = prompt(+ nombre + " Desea Informacion  sobre Nuestros Servicios? s/n")


if (info == "s" || "S") 
{

    let pre = prompt("Indique el numero  de nuestro productos el cual desea Informacion: \n" +
        "(1). Reparaciones \n" +
        "(2). Mantenimient\n" +
        "(3). Insumos")

    if (pre == "1" || "2" || "3") 
    {
        switch (pre) 
        {
            case "1" || "r" || "R": const re = ["Reparacion  Fase de Carga", "Cambio de Insumos"];
                alert(re);
                break;

            case "2" || "m" || "M": const m = ["Mantenimiento correctivo ", "Manteniento Preventivo"];
                alert(m)
                break;

            case 3: const Insumo = ["Pantallas", "Discos SSD", "Discos HDD", "Memorias"]
                break;
        }
    }
    else if (pre != 1 ) {
        alert("!no es una opcion Valida!")
    }

    
 
   
    
   
} 

if (info != "s" || pre!="S" || pre== "")  
{
    alert("No es una opcion valida")

}