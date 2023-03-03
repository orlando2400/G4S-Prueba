$(document).ready(function() {
    $.ajax({
     //URL del json a consumir para mostrarlo en la tabla
      url: "https://jsonplaceholder.typicode.com/users",
      dataType: "json",
      success: function(data) {
        $.each(data, function(index, element) {
          $("#usuarios").append("<tr>" +
            "<td>" + element.id + "</td>" +
            "<td>" + element.name + "</td>" +
            "<td>" + element.username + "</td>" +
            "<td>" + element.email + "</td>" +
            "<td>" + element.address.street + "</td>" +
            "<td>" + element.address.suite + "</td>" +
            "<td>" + element.address.city + "</td>" +
            "<td>" + element.address.zipcode + "</td>" +
            "<td>" + element.address.geo.lat + "</td>" +
            "<td>" + element.address.geo.lng + "</td>" +
            "<td>" + element.phone + "</td>" +
            "<td>" + element.website + "</td>" +
            "<td>" + element.company.name + "</td>" +
            "<td>" + element.company.catchPhrase + "</td>" +
            "<td>" + element.company.bs + "</td>" +
            "</tr>");
            
        });
        //Uso del DataTable 
        $("#listUsers").DataTable();
      }
      
    });
    
  });