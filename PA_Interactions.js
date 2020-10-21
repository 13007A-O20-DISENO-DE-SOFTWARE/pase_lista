function DeleteP(){
	var IDP=prompt("Ingrese el ID del profesor a eliminar");
	if(IDP!=null){
		var c=confirm("¿Está seguro que desea eliminar al profesor?");
	}
}

function DeleteA(){
	var IDA=prompt("Ingrese el ID del alumno a eliminar");
	if(IDA!=null){
		var c=confirm("¿Está seguro que desea eliminar al alumno?");
	}
}

window.onscroll=function() {SNB()};
var NB=document.getElementById('NavBar');
var Sticky=NavBar.offsetTop;
function SNB(){
	if(window.pageYOffset>=Sticky){
		NavBar.classList.add("Sticky");
	}else{
		NavBar.classList.remove("Sticky");
	}
}

function ValidacionAddP(){
	if(document.AddPA.Nombre_Completo.value.length==0){
		alert("Por favor, rellene este campo");
		document.AddPA.Nombre_Completo.focus();
		return 0;
	}

	var E_mail=document.AddPA.Correo.value;
	var Regex=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(!Regex.test(E_mail)){
		alert("¡Formato invalido!");
		document.AddPA.Correo.focus();
		return 0;
	}
	else if(E_mail.length==0){
		alert("Por favor, rellene este campo");
		document.AddPA.Correo.focus();
		return 0;
	}
	else{
		return 0;
	}

	if(document.AddPA.Materias_impartidas.value.length==0){
		alert("Por favor, rellene este campo");
		document.AddPA.Materias_impartidas.focus();
		return 0;
	}
	document.AddPA.submit();
	alert("Acción realizada exitosamente");
}

function ValidacionUpP(){
	var ID_PA=document.AddPA.ID.value;
	if(ID_PA.length==0){
		alert("Por favor, rellene este campo");
		document.AddPA.ID.focus();
		return 0;
	}
	else if(ID_PA.length==6&&Number.isInteger(ID_PA)){
		alert("Verifique si el ID está bien escrito");
		return 0;
	}
	else{
		alert("¡Formato invalido!");
		document.AddPA.ID.focus();
		return 0;
	}
	var E_mail=document.AddPA.Correo.value;
	var Regex=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(!Regex.test(E_mail)){
		alert("¡Formato invalido!");
		document.AddPA.Correo.focus();
		return 0;
	}
}

function ValidacionAddA(){
	if(document.AddPA.Nombre_Completo.value.length==0){
		alert("Por favor, rellene este campo");
		document.AddPA.Nombre_Completo.focus();
		return 0;
	}

	var E_mail=document.AddPA.Correo.value;
	var Regex=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(!Regex.test(E_mail)){
		alert("¡Formato invalido!");
		document.AddPA.Correo.focus();
		return 0;
	}
	else if(E_mail.length==0){
		alert("Por favor, rellene este campo");
		document.AddPA.Correo.focus();
		return 0;
	}
	else{
		return 0;
	}

	if(document.AddPA.Materias_cursadas.value.length==0){
		alert("Por favor, rellene este campo")
		document.AddPA.Materias_cursadas.focus()
		return 0;
	}
	document.AddPA.submit();
	alert("Acción realizada exitosamente");
}

function ValidacionUpA(){
	var ID_PA=document.AddPA.ID.value;
	if(ID_PA.length==0){
		alert("Por favor, rellene este campo");
		document.AddPA.ID.focus();
		return 0;
	}
	else if(ID_PA.length==6&&Number.isInteger(ID_PA)){
		alert("Verifique si el ID está bien escrito");
		return 0;
	}
	else{
		alert("¡Formato invalido!");
		document.AddPA.ID.focus();
		return 0;
	}

	var E_mail=document.AddPA.Correo.value;
	var Regex=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(!Regex.test(E_mail)){
		alert("¡Formato invalido!");
		document.AddPA.Correo.focus();
		return 0;
	}
	document.AddPA.submit();
	alert("Acción realizada exitosamente");
}