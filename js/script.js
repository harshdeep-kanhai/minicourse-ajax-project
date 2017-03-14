
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var streetStr = $('#street').val();
    var cityStr =  $('#city').val();
    var address = streetStr + ', ' + cityStr;
    $body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?location="'+$street+', '+$city+'>');

    return false;
};

$('#form-container').submit(loadData);
