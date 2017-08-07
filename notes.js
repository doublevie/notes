

var notes = {
showForm : function(){
// .addForm.showForm
document.querySelector('.addForm').classList.add('showForm');
} ,
hideForm : function(){
// .addForm.showForm
document.querySelector('.addForm').classList.remove('showForm');
} ,
submitAdd : function(){
  var title = document.querySelector('[notetitle]').innerText ,
   text = document.querySelector('[name="note"]').value ,
   color = 'amber';
   id = document.querySelectorAll('.note').length;
   id++;
document.querySelector('[notetitle]').innerText = 'Titre';
document.querySelector('[name="note"]').value = '';
this.addNote(title,text,color,id);
} ,
addNote : function (tt,tx,cl,id) {
var N = '<div class="note " id="nt'+id+'"  style="z-index:1005"  ><i class="close fa fa-close" onclick="confirmRemove(this.parentNode)"></i><h2>'+tt+'</h2><p>'+tx+'</p></div>';


document.querySelector('.cont').insertAdjacentHTML('beforeend',N);

  element: document.getElementById('nt'+id).style.marginTop = id * 5;
var dnd = new dragNdrop({
  element: document.getElementById('nt'+id) ,
});
dnd.start();


}




}
