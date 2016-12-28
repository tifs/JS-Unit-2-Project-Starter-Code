// GA SF JSD5
// Tif Slama

/*
  Please add all Javascript code to this file.
*/


// while data loads add the "hidden" class to the div with #main and unhide the #popup div
$(document).on({
  ajaxStart: function() { $('#popUp').removeClass('hidden'); $('#main').addClass('hidden'); },
  ajaxStop: function() { $('#popUp').addClass('hidden'); $('#main').removeClass('hidden'); }
});

// click the "x" to close the loader animation
$('.closePopUp').click(function() {
  $(this).parent().addClass("hidden");
});

// search box expands on click
$('#search').on({
  "click": (function() {$(this).toggleClass("active");})//,
  // "mouseover": (function() {$(this).toggleClass("active");})
});



$.getJSON("http://www.reddit.com/r/food.json?jsonp=?", function(redditAPI) {
  var $redditTitle = redditAPI.data.children[2].data.title;
  var $redditThumbnail = redditAPI.data.children[2].data.thumbnail;
  var $redditUrl = redditAPI.data.children[2].data.permalink;
  var $redditScore = redditAPI.data.children[2].data.score;
  var $redditSubreddit = redditAPI.data.children[2].data.subreddit;
  var $redditCategory = redditAPI.data.children[2].data.link_flair_text;
  $('.articleContent h3').append($redditTitle);
  $('.featuredImage img').attr('src', $redditThumbnail);
  $('.articleContent a').attr('href', $redditUrl);
  $('.articleContent h6').append($redditCategory);
  $('.impressions').append($redditScore);
});




// here's how to get info from guardian's api
$.getJSON("http://content.guardianapis.com/search?q=recipe&api-key=af651065-a4d4-4674-bd6e-35e4bc3e20cc", function(guardianAPI) {
  var $guardianTitle = guardianAPI.response.results[0].webTitle;
  var $guardianUrl = guardianAPI.response.results[0].webUrl;
  var $guardianCategory = guardianAPI.response.results[0].sectionName;
  $('.articleContent h3').append($guardianTitle);
  // $('.featuredImage img').attr('src', $redditThumbnail);
  $('.articleContent a').attr('href', $guardianUrl);
  $('.articleContent h6').append($guardianCategory);
  // $('.impressions').append($redditScore);
});



// $.getJSON(
//   "http://www.reddit.com/r/food.json?jsonp=?",
//   function foo(data) {
//     $.each(
//       data.data.children.slice(0, 10),
//       function (i, post) {
//         $(".article").append( '<br>' + post.data.title );
//         $("#reddit-content").append( '<br>' + post.data.url );
//         $("#reddit-content").append( '<br>' + post.data.permalink );
//         $("#reddit-content").append( '<br>' + post.data.ups );
//         $("#reddit-content").append( '<br>' + post.data.downs );
//         $("#reddit-content").append( '<br>' );
//       }
//     );
//   }
// );
// .success(function() { alert("second success"); })
// .error(function() { alert("error"); })
// .complete(function() { alert("complete"); });



