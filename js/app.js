// GA SF JSD5
// Tif Slama

/*
  Please add all Javascript code to this file.
*/

$.getJSON(
        "http://www.reddit.com/r/food.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".article").append( '<br>' + post.data.title );
              $("#reddit-content").append( '<br>' + post.data.url );
              $("#reddit-content").append( '<br>' + post.data.permalink );
              $("#reddit-content").append( '<br>' + post.data.ups );
              $("#reddit-content").append( '<br>' + post.data.downs );
              $("#reddit-content").append( '<hr>' );
            }
          );
        }
      )
      .success(function() { alert("second success"); })
      .error(function() { alert("error"); })
      .complete(function() { alert("complete"); });

// here's how to get info from reddit's api
$.getJSON("http://www.reddit.com/r/food.json?jsonp=?", function(redditAPI) {
  console.log(redditAPI.data.children);
  console.log(redditAPI.data.children[2].data.title);
  console.log(redditAPI.data.children[2].data.thumbnail);
  console.log(redditAPI.data.children[2].data.permalink);
  console.log(redditAPI.data.children[2].data.score);
  console.log(redditAPI.data.children[2].data.subreddit);
  console.log(redditAPI.data.children[2].data.link_flair_text);
} );

// here's how to get info from guardian's api
$.getJSON("http://content.guardianapis.com/search?q=recipe&api-key=af651065-a4d4-4674-bd6e-35e4bc3e20cc", function(guardianAPI) {
  console.log(guardianAPI.response.results[0]);
  console.log(guardianAPI.response.results[0].webTitle);
  console.log(guardianAPI.response.results[0].webUrl);
  console.log(guardianAPI.response.results[0].sectionName);
});
