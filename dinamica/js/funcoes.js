/**
 * 
 */

function Adicionar() {
	var valor = $("#cadastroName").val();
	$("#tblCadastro1 tbody").append(
					"<tr>"
							+ "<td>"
							+ valor
							+ "</td>"
							+ "<td><img src='imagens/delete.png' class='btnExcluir' width='25px' title='Excluir'>"
							+ " <img src='imagens/toRight.jpg' class='btnAlterar' width='25px' title='J&aacute aprendi'/></td>"
							+ "</tr>");

	$(".btnExcluir").bind("click", Excluir);
	$(".btnAlterar").bind("click", Alterar2);
};

function Alterar1() {
	var valor = $(this).parent().parent();
	$("#tblCadastro1 tbody").append(valor);	
	$(".btnExcluir").bind("click", Excluir);
	$(".btnAlterar").bind("click", Alterar2);
};

function Alterar2() {
	var valor = $(this).parent().parent();
	valor.(".btnAlterar").attr("src", "imagens/toLeft.jpg");
	$("#tblCadastro2 tbody").append(valor);
	$(".btnExcluir").bind("click", Excluir);
	$(".btnAlterar").bind("click", Alterar1);
};

function Excluir() {
	var par = $(this).parent().parent(); //tr
	par.remove();
};

$(function() {
	//Código das funções Adicionar, Salvar, Editar e Excluir
	//$(".btnAlterar").bind("click", Editar);
	//$(".btnExcluir").bind("click", Excluir);
	$("#btnAdicionar").bind("click", Adicionar);

});
