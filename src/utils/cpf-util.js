export function formatarCpf(cpf) {
	cpf = cpf.replace(/\D/g,'');
	if (cpf.length > 11) {
		cpf = cpf.substring(0, 11);
	}

	switch (cpf.length) {
		case 4:
		case 5:
		case 6:
			cpf = cpf.replace(/(\d{3})(.*)/, '$1.$2');
			break;
		case 7:
		case 8:
		case 9:
			cpf = cpf.replace(/(\d{3})(\d{3})(.*)/, '$1.$2.$3');
			break;
		case 10:
		case 11:
			cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(.*)/, '$1.$2.$3-$4');
			break;
		default:
			break;
	}
	return cpf;
}

export function validarCpf(cpf) {	
	if( !cpf ) return false;	
	cpf = cpf.replace(/\D/g,'');	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length !== 11 || 
		cpf === "00000000000" || 
		cpf === "11111111111" || 
		cpf === "22222222222" || 
		cpf === "33333333333" || 
		cpf === "44444444444" || 
		cpf === "55555555555" || 
		cpf === "66666666666" || 
		cpf === "77777777777" || 
		cpf === "88888888888" || 
		cpf === "99999999999")
			return false;		
	// Valida 1o digito	
	let add = 0;	
	let rev;
	for (let i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev === 10 || rev === 11)		
			rev = 0;	
		if (rev !== parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (let i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev === 10 || rev === 11)	
		rev = 0;	
	if (rev !== parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}