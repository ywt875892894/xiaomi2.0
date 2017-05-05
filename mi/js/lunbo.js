/*$(function(){
	let banner=$('.banner')[0];
	banner.style.backgroundImage='url(img/2.jpg)';
})*/
$(function(){
	let banner=$('.banner')[0];
	/*let imgBox=$('.imgBox')[0];
	let lis=$('li',imgBox);*/
	let btnBox=$('.btnBox')[0];
	let btn=$('li',btnBox);
	let index=0;
	banner.style.backgroundImage='url(img/2.jpg)';
	btn[0].id='a1';
	var t=setInterval(lunbo,3000);
	let aa3=$('#a3');
	let aa4=$('#a4');
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			for(let i=0;i<btn.length;i++){
				btn[i].id='';
			}
			btn[i].id='a1';
			index=i;
			switch(index){
			case 0:banner.style.backgroundImage='url(img/2.jpg)';
			break;
			case 1:banner.style.backgroundImage='url(img/3.jpg)';
			break;
			case 2:banner.style.backgroundImage='url(img/4.jpg)';
			break;
			case 3:banner.style.backgroundImage='url(img/5.jpg)';
			break;
			case 4:banner.style.backgroundImage='url(img/6.jpg)';
			break;
		}
		clearInterval(t);
		}
		btn[i].onmouseout=function(){
			// setTimeout(lunbo,3000);
			t=setInterval(lunbo,3000);
		}	
	}
	function lunbo(){
		index++;
		if(index>=5){
			index=0;
		}
		switch(index){
			case 0:banner.style.backgroundImage='url(img/2.jpg)';
			break;
			case 1:banner.style.backgroundImage='url(img/3.jpg)';
			break;
			case 2:banner.style.backgroundImage='url(img/4.jpg)';
			break;
			case 3:banner.style.backgroundImage='url(img/5.jpg)';
			break;
			case 4:banner.style.backgroundImage='url(img/6.jpg)';
			break;
		}
		for(let i=0;i<btn.length;i++){
			btn[i].id='';
		}
		btn[index].id='a1';
	}
	function lunbo1(){
		index--;
		if(index<0){
			index=4;
		}
		switch(index){
			case 0:banner.style.backgroundImage='url(img/2.jpg)';
			break;
			case 1:banner.style.backgroundImage='url(img/3.jpg)';
			break;
			case 2:banner.style.backgroundImage='url(img/4.jpg)';
			break;
			case 3:banner.style.backgroundImage='url(img/5.jpg)';
			break;
			case 4:banner.style.backgroundImage='url(img/6.jpg)';
			break;
		}
		for(let i=0;i<btn.length;i++){
			btn[i].id='';
		}
		btn[index].id='a1';
	}
	aa4.onclick=function(){
			lunbo();
			clearInterval(t);
			t=setInterval(lunbo,3000);
	}
	aa3.onclick=function(){
			lunbo1();
			clearInterval(t);
			t=setInterval(lunbo,3000);
	}
	let xia1=$('.xia1');
	let hover=$('.hover');
	let xia2=document.querySelector('em>.xia2');
	for(let i=0;i<7;i++){
		hover[i].onmouseover=function(){
			xia2.style.height='229px';
			xia2.style.boxShadow='0 3px 2px #E0E0E0';
			xia1[i].style.display='block';
		}
		hover[i].onmouseout=function(){
			xia2.style.height='0px';
			xia2.style.boxShadow='';
			xia1[i].style.display='none';
		}
		xia1[i].onmouseover=function(){
			xia2.style.height='229px';
			xia2.style.boxShadow='0 3px 2px #E0E0E0';
			xia1[i].style.display='block';
		}
		xia1[i].onmouseout=function(){
			xia2.style.height='0px';
			xia2.style.boxShadow='';
			xia1[i].style.display='none';
		}
	}
/*	for(let i=7;i<9;i++){
		hover[i].onmouseover=function(){
			xia2.style.height='0px';
		}
	}*/
	let xl=$('.xl');
	let xs=$('.xs');
	for(let i=0;i<xs.length;i++){
		xs[i].onmouseover=function(){
			xl[i].style.display='block';
			xs[i].style.background='#FF6700';
		}
		xs[i].onmouseout=function(){
			xl[i].style.display='none';
			xs[i].style.background='';
		}
	}
	let a7=$('.a7')[0];
	let gouwu=$('.gouwu');
	for(let i=0;i<gouwu.length;i++){
		gouwu[i].onmouseover=function(){
			a7.style.height='99px';
		}
		gouwu[i].onmouseout=function(){
			a7.style.height='0px';
		}
	}
	let shous=$('.shous')[0];
	let a1=$('.aa1')[0];
	let a2=$('.aa2')[0];
	let a3=$('.aa3')[0];
	let a4=$('.aa4')[0];
	shous.onmouseover=function(){
		a1.style.border='1px solid #B0B0B0';
		a2.style.border='1px solid #B0B0B0';
		a2.style.borderLeft='0px';
	}
	shous.onmouseout=function(){
		a1.style.border='1px solid #E0E0E0';
		a2.style.border='1px solid #E0E0E0';
		a2.style.borderLeft='0px';
		a3.style.display='block';
		a4.style.display='block';
	}
	a1.onfocus=function(){
		a1.style.border='1px solid #FE6802';
		a2.style.border='1px solid #FE6802';
		a2.style.borderLeft='0px';
		a3.style.display='none';
		a4.style.display='none';
	}
	let kuai=$('.Kuai');
	console.log(kuai);
	let kuaiWidth=parseInt(getComputedStyle(kuai[0],null).width);
	let Lbtn=document.querySelectorAll('.dan>.a1>.a2');
	let Rbtn=document.querySelectorAll('.dan>.a1>.a3');
	kuai[1].style.left=kuaiWidth+'px';
	kuai[3].style.left=kuaiWidth+'px';
	Rbtn[0].onclick=function(){
		animate(kuai[0],{left:-kuaiWidth});
		animate(kuai[1],{left:0});
		Rbtn[0].style.color='#E0E2E5';
		Lbtn[0].style.color='#B0B0B5';
	}
	Lbtn[0].onclick=function(){
		animate(kuai[0],{left:0});
		animate(kuai[1],{left:kuaiWidth});
		Rbtn[0].style.color='#B0B0B5';
		Lbtn[0].style.color='#E0E2E5';
	}
	Rbtn[1].onclick=function(){
		animate(kuai[2],{left:-kuaiWidth});
		animate(kuai[3],{left:0});
		Rbtn[1].style.color='#E0E2E5';
		Lbtn[1].style.color='#B0B0B5';
	}
	Lbtn[1].onclick=function(){
		animate(kuai[2],{left:0});
		animate(kuai[3],{left:kuaiWidth});
		Rbtn[1].style.color='#B0B0B5';
		Lbtn[1].style.color='#E0E2E5';
	}
	let c1=document.querySelectorAll('.c1>a>img');
	let bofang=document.querySelectorAll('.c1>.bofang');
	for(let i=0;i<c1.length;i++){
		c1[i].onmouseenter=function(){
			bofang[i].style.border='2px solid #FF6700';
			bofang[i].style.background='#FF6700';
		}
		c1[i].onmouseleave=function(){
			bofang[i].style.border='2px solid white';
			bofang[i].style.background='';
		}
	}
	let dap1=document.querySelectorAll('.dap1');
	let dap1A=document.querySelectorAll('.dap1>a');
	let dap2=document.querySelectorAll('.dap2');
	let dap2A=document.querySelectorAll('.dap2>a');
	let dap3=document.querySelectorAll('.dap3');
	let dap3A=document.querySelectorAll('.dap3>a');
	for(let i=0;i<dap1.length;i++){
		dap1[0].style.borderBottom='2px solid #FF6700';
		dap1A[0].style.color='#FF6700';
		dap1[i].onmouseenter=function(){
			for(let i=0;i<dap1.length;i++){
				dap1[i].style.borderBottom='';
				dap1A[i].style.color='black';
			}
			dap1[i].style.borderBottom='2px solid #FF6700';
			dap1A[i].style.color='#FF6700';
		}
	}
	for(let i=0;i<dap2.length;i++){
		dap2[0].style.borderBottom='2px solid #FF6700';
		dap2A[0].style.color='#FF6700';
		dap2[i].onmouseenter=function(){
			for(let i=0;i<dap2.length;i++){
				dap2[i].style.borderBottom='';
				dap2A[i].style.color='black';
			}
			dap2[i].style.borderBottom='2px solid #FF6700';
			dap2A[i].style.color='#FF6700';
		}
	}
	for(let i=0;i<dap3.length;i++){
		dap3[0].style.borderBottom='2px solid #FF6700';
		dap3A[0].style.color='#FF6700';
		dap3[i].onmouseenter=function(){
			for(let i=0;i<dap3.length;i++){
				dap3[i].style.borderBottom='';
				dap3A[i].style.color='black';
			}
			dap3[i].style.borderBottom='2px solid #FF6700';
			dap3A[i].style.color='#FF6700';
		}
	}
})