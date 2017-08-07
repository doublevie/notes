

var notes = {
  currentColor : '' ,
  SetColor : function(el) {
    this.currentColor = el.getAttribute('theme');
    if (document.querySelector('i[current]')) document.querySelector('i[current]').removeAttribute('current');
    el.setAttribute('current','');
  },

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
   color = this.currentColor,
   id = document.querySelectorAll('.note').length;
   id++,
   z = 999 + id;
document.querySelector('[notetitle]').innerText = 'Titre';
document.querySelector('[name="note"]').value = '';
this.addNote(title,text,color,id);
this.hideForm();
} ,
addNote : function (tt,tx,cl,id) {
var N = '<div class="note '+cl+'" id="nt'+id+'"  style="z-index:'+z+'"  ><i class="close fa fa-close" onclick="this.parentNode.remove()"></i><i class="remove fa fa-trash" onclick="confirmRemove(this.parentNode)"></i><h2>'+tt+'</h2><p>'+tx+'</p></div>';


document.querySelector('.cont').insertAdjacentHTML('beforeend',N);

  element: document.getElementById('nt'+id).style.marginTop = id * 5;
var dnd = new dragNdrop({
  element: document.getElementById('nt'+id) ,
});
dnd.start();


}




}
