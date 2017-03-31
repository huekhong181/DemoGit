function validateForm(frm){
	var x = frm.docName.value;
	
	
	if(x==""){
		document.getElementById("checkName").innerHTML = "Tên bài viết ko được để trống";
		return false;
	}
	return true;
}

function validateMail(frm1){	
	var x1 = frm1.email.value;	
	atpos = x1.indexOf("@");
	dotpos = x1.lastIndexOf(".");
	if (atpos < 1||(dotpos-atpos) <2)
	{
		document.getElementById("checkMail").innerHTML = "Mail không đúng định dạng";
		return false;
	}
	return true;
}

