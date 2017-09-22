var result;

function ShowResult()
{
  	$("#result").html("<ul></ul>");
    if (result.hasOwnProperty('query'))
      {
   $.each(result.query.pages,function(i,o){
		var id= o.pageid
		var title = o.title;
		var extract = o.extract;
      var page = 'https://en.wikipedia.org/?curid='+id;
          $("#result").append("<a class='list' href='https://en.wikipedia.org/?curid="+id+" ' target='_blank' ><li> <span class='title display-4'>"+title+"</span><br> <p class='lead'>"+extract+"</p></li><br></a>");

          });

      }
  else
    {
      $("#result").html("<ul class='error'><li>Oups :( No result found!</li></ul>");
    }
}

function search (something)
{
  	var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch="+ something + "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max";
	$.ajax({
		url: url,
		crossDomain: true,
		dataType: "jsonp"
	}).done(function(d){
		result = d;
		ShowResult();

	}).fail(function(){
				$("#result").html("<ul><li>Oups :( </li></ul>");
	});

}


$(".in").on("keyup", function() {
     if (this.value.length > 1) {
       search(this.value);
     }
});
