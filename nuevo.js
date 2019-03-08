
alert("hola")
$("form").on("submit", function(e){
    
    e.preventDefault();

var sup= $("#username").val();
    if(sup===""){ $("#username").parent().addClass("has-error");};
        

var user=$("#password").val();
var car=$("#password").val().length;

    if(user===""||!(car>=6 && car<=40)){ $("#password").parent().addClass("has-error");};
    
    if( !$("#terms").prop('checked') ) { $(".terms-checkbox").addClass("has-error");
    alert('Seleccionado');
}
    
    
});