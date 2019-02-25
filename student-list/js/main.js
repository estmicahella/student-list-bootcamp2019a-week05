var names = [];
$(document).ready(function(){

 $('#add').on('click', function(){

   var student = $('input').val();
   names.push(student);
   console.log(names);
 });

 $('#display').on('click', function(e){
   names.forEach(function(list){
     $('#studentList').append('<li>'+list+'</li>');
   });
 });
});
