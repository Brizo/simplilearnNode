$(document).ready(function(){
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
        var msg = 'Here is your order';
        document.getElementById("msg").innerHTML = msg;
        var total = 0;
        var paragraph = `<br><table class="table">
                        <tr><th>Item</th><th>Price</th></tr>`;
        for (var i = 0; i < cart.length; i++) {
            total += Number(cart[i].price);
            paragraph += `<tr><td>`+cart[i].name+`</td><td>`+cart[i].price+`</td></tr>`;

            if (i == (cart.length -1)) {
                document.getElementById("cartTotal").innerHTML = total.toFixed(2);
                paragraph += `<tr><th>Total</th><th>`+total.toFixed(2)+`</th></tr>
                                </table>
                                <button  class="btn btn-lg btn-success" id="confirm">Confirm</button>`;
                $('#cartItems').append(paragraph);
            }
        }
    } else {
        var msg = 'No items on cart';
        document.getElementById("msg").innerHTML = msg;
        document.getElementById("cartTotal").innerHTML = 0;
    }

    $('#confirm').on('click', function() {
        alert('Your order is being processed. Thank your for doing business with us');
        localStorage.removeItem("cart");
        window.location = "/";
    });

});