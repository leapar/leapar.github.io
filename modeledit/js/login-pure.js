function checkna1(na){//验证用户名
	
  	if( na.length <6 || na.length >30)  
	{  	
		//divname.innerHTML='<font class="tips_false">长度是6~30个字符</font>';
		return false; 
	}
  	else
  	{  
	    //divname.innerHTML='<font class="tips_true"></font>'; 
	    return true;
	} 
}
//验证密码 
function checkpsd1(psd1){    

	var flagZM=false;
	var flagSZ=false;
 	var flagQT=false;
	if(psd1.length<6 || psd1.length>30){   
		//divpassword1.innerHTML='<font class="tips_false">长度是6~30个字符</font>';
		return false;
	}
	else
	{   
	    for(i=0;i < psd1.length;i++)   
		{    
			if((psd1.charAt(i) >= 'A' && psd1.charAt(i)<='Z') || (psd1.charAt(i)>='a' && psd1.charAt(i)<='z')) 
			{   
				flagZM=true;
			}
			else if(psd1.charAt(i)>='0' && psd1.charAt(i)<='9')    
			{ 
				flagSZ=true;
			}    
			else{ 
				flagQT=true;
			}   
		}   
		if(!flagZM||!flagSZ||flagQT)
		{
			//divpassword1.innerHTML='<font class="tips_false">密码必须是字母数字的组合</font>'; 
			return false;
		}
		else
		{
			//divpassword1.innerHTML='<font class="tips_true"></font>';
			return true;
		} 
	}	
}


function userLogin(){
	var na=loginform.Username.value;
	var flag = checkna1(na);
	if(!flag)
	{
		return flag;
	}
	var psd1=loginform.Password.value; 
	flag = checkpsd1(psd1);
	if(!flag)
	{
		return flag;
	}
	return true;
}
function loginSuccess(data)
{
	if(data==0||data=='0')
	{
		return false;
	}
	else
	{
		//showTopUser(data)//显示用户
		return true;
	}
}
//绑定表单提交事件处理器
$('#loginform').submit(function() {
	var flag = userLogin();
	if(!flag)
	{
		error_login.innerHTML='<font class="tips_false">用户名或密码有误！</font>'; 
		return false;
	}
	// 提交表单
	$(this).ajaxSubmit(function(data){
		try{
			var flag = loginSuccess(data);
			if(!flag)
			{
				error_login.innerHTML='<font class="tips_false">用户名或密码有误！</font>'; 
				return;
			}
			else
			{
				$('.theme-popover-mask-sign').hide();
				$('.theme-popover-mask').hide();
				$('.theme-popover').hide();
				$('.theme-popover-sign').slideUp(200);
			}
			error_login.innerHTML=''; 
		}
		catch(e){
			return;
		}
	}); 
	return false;
});
