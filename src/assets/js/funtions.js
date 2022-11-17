$(function(){

	// Lista de Continentes
	$.post( 'programas.php' ).done( function(respuesta)
	{
		$( '#programas' ).html( respuesta );
	});

	// lista de Paises	
	$('#programas').change(function()
	{
		var los_programas = $(this).val();
		
		// Lista de Paises
		$.post( 'paises.php', { Programa: los_programas} ).done( function( respuesta )
		{
			$( '#paises' ).html( respuesta );
		});
	});
	
	// Lista de Ciudades
	$( '#paises' ).change( function()
	{
		var pais = $(this).children('option:selected').html();
		alert( 'Lista de Ciudades de ' + pais );
	});

})
