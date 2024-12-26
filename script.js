let i=0,imgArr=new Array();
imgArr[0]="https://u.fmyeah.com/i15s/676d569d12701.png"
imgArr[1]="https://u.fmyeah.com/i15s/676d56beb100f.png"
imgArr[2]="https://u.fmyeah.com/i15s/676d57496a945.png"
imgArr[3]="https://u.fmyeah.com/i15s/676d576a64d64.png"
imgArr[4]="https://u.fmyeah.com/i15s/676d578aaa975.png"
imgArr[5]="https://u.fmyeah.com/i15s/676d57a0866fe.png"
imgArr[6]="https://u.fmyeah.com/i15s/676d57b0a67b0.png"

function showImg(){
  document.getElementById("ico").src=imgArr[i];
  i=(i+1)%7;
}

function show(){
  setInterval(showImg,400);
}
//////////////////////////////////////////////


let cat=document.getElementById("logo");
cat.addEventListener("mouseover",function(){
                    this.src="https://u.fmyeah.com/i15s/676d7794a60c1.png"
                      })
cat.addEventListener("mouseout",function(){
                    this.src="https://u.fmyeah.com/i15s/676d67bcaffb7.png"
                      })


function inform(){
  let A=document.getElementById("iof");
  A.innerHTML="喵喵喵喵喵喵喵喵";
}