let addbtn=document.getElementById('addbtn');
let textin=document.getElementById('textin');
let valid=document.getElementById('validation');
let taskSection=document.getElementById('taskSection');
addbtn.addEventListener('click',()=>{
    let taskvalue=textin.value;
    if(taskvalue==''){
       valid.innerHTML="Write Your Task to Add!";
    }
    else{
        valid.innerHTML=" ";
       textin.value="";
        let time=new Date();
        let taskid=time.getTime()
        createTask(taskvalue,taskid);
        

    }
 


})
function createTask(data,taskid){
   
   
    let div=document.createElement('div');
    div.setAttribute('class','taskdiv')
    let p=document.createElement('p');
    p.setAttribute('id',`${taskid}`);
    p.innerHTML=data;
    let editbtn=document.createElement('button');
    editbtn.setAttribute('class','btns');
    editbtn.innerHTML='<i class="fa-solid fa-pencil"></i>'
    let deletebtn=document.createElement('button');
    deletebtn.setAttribute('class','btns');
    deletebtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    div.appendChild(p);
    div.appendChild(editbtn);
    div.appendChild(deletebtn);
    taskSection.appendChild(div);
    window.localStorage.setItem(`${taskid}`,`${data}`);


    editbtn.addEventListener('click',(e)=>{
        let ptext=p.textContent;
    let editin=document.createElement('input');
    editin.setAttribute('type','text')
    editin.setAttribute('value',`${ptext}`);
    editin.setAttribute('class','editp')
    let sbtn=document.createElement('button');
    sbtn.setAttribute('class','btns');
    sbtn.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    div.appendChild(editin)
    div.appendChild(sbtn)
  div.removeChild(editbtn);
  div.removeChild(deletebtn)
  div.removeChild(p);

 sbtn.addEventListener('click',(e)=>{
    let editedp=editin.value
    localStorage.setItem(`${taskid}`,`${editedp}`);
    p.innerHTML=editedp;
    div.replaceChild(p,editin)
    div.removeChild(sbtn);
    div.appendChild(editbtn);
    div.appendChild(deletebtn);

 })

    })
    deletebtn.addEventListener('click',(e)=>{
        div.remove();
        localStorage.removeItem(`${taskid}`);
    })

}
function loadtasks(){
    let storagelen=localStorage.length;
    for(let i=0;i<storagelen;i++){
        let taskid=localStorage.key(i);
        let taskdata=localStorage.getItem(`${taskid}`);
        createTask(taskdata,taskid);
      

    }
}
loadtasks()
// localStorage.clear()