$(document).ready(() => {
  var apiKey = "2f5bc511";
  $("#searchForm").submit((e) => {
    e.preventDefault();
    let searchText = $("#searchText").val();
    var result = "";
    var url = "http://www.omdbapi.com/?apikey=" + apiKey;
    $.ajax({
      methd: "GET",
      url: url + "&t=" + searchText,
      success: function (data) {
        console.log(data);

        result = `
        

        <div class="col-md-3">
          <div class="well text-center">
              <img style="cursor:pointer" src="${data.Poster}" onclick="movieSelected('${data.imdbID}')">
              <br>
              <br>
              <h3>${data.Title}</h3>
              
          </div>
          </div>

        `;
        $("#result").html(result);
      },
    });
  });
});

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "info.html";
  return false;
}
