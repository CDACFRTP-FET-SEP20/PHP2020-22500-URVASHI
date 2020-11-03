$("document").ready(function () {
  /*$("#example").DataTable({
    ajax: "https://jsonplaceholder.typicode.com/users/2",
    method: "GET",
    columns: [
      { x: "id" },
      { x: "name" },
      { x: "username" },
      { x: "email" },
      { x: "website" },
    ],
    success: (x) => {
      console.log("Data=>" + x);

      $("th#id1").append(x.id);
      $("th#name").append(x.name);
      $("th#username").append(x.username);
      $("th#email").append(x.email);
      $("th#website").append(x.website);
    },
  });*/

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: (x) => {
      console.log("Data=>" + x);

      for (var i = 1; i <= x.length; i++) {
        var text1 =
          "<tr><td>" +
          x[i].id +
          "</td>" +
          "<td>" +
          x[i].username +
          "</td>" +
          "<td>" +
          x[i].name +
          "</td>" +
          "<td>" +
          x[i].email +
          "</td>" +
          "<td>" +
          x[i].website +
          "</td>";

        $("#example").append(text1);
      }
    },
    error: (e) => {
      alert("Error:" + e);
    },
  });

  $("#example").DataTable();
});

/* $("#b1").click(() => {
    $.ajax({
      url: "https://reqres.in/api/users",
      method: "POST",
      data: {
        name: "urvashi",
        job: "leader",
      },
      success: (x) => {
        alert(x.name + " posted!!!");

        console.log(x);
      },
      error: (x) => {
        alert("error !!" + x);
      },
    });
  });*/
