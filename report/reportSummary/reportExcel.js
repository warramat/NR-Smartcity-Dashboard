$(document).ready(function() {
  $('#example').DataTable( {
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
      ]
  } );
} );

document.getElementById(downloadexcel).addEventListener("click", function(){
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("table"));
})