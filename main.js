student=[];
function submit(){
for(var i=1;i<=4;i++){
var temp=document.getElementById("name_of_the_student_"+i).value;
student.push(temp);
}
var display=[];
for(var i=0;i<=3;i++){
display.push("<h4>name-"+student[i]+"</h4>")
}

document.getElementById("display_name_with_commas").innerHTML = display;
 var remove_commas = display.join(" ");
  console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML = remove_commas;
   document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
student.sort();
var display=[];
for(var i=0;i<=3;i++){
display.push("<h4>name-"+student[i]+"</h4>")
}

document.getElementById("display_name_with_commas").innerHTML = display;
 var remove_commas = display.join(" ");
  console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}