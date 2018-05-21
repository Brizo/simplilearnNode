$(document).ready(function(){
    // retrieve items by category
    $('.category').on('click', function() {
        var clickedCat = $(this).text();
        
        $.ajax({
            type : 'GET',
            url : '/items/'+clickedCat,
            success : function(data){
                location.reload(true);
            }
        });
        return false;
    });

    // initiate cart total
    document.getElementById("cartTotal").innerHTML = 0;
});