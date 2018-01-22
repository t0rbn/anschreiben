let addItem = {
    bindButton: function() {
        $("#add").on("click", function(event) {
            event.preventDefault();
            addItem.addLine(this.closest('form'));
        });

        $("body").on("click", ".increment-button", function(event) {
            event.preventDefault();
            $(this).closest("div").clone().insertAfter($(this).closest('div'));
            calculateSum.updatePrice();
        });
    },
    addLine: function(line) {
        var newLine = $(".template-form").clone();
        var name = $(line).find("#name").val();
        var price = $(line).find("#price").val();
        $(line).find("#name").val(null);
        $(line).find("#price").val(null);
        if (name && price) {
            newLine.find(".price").addClass("visible-price").html(price);
            newLine.find(".name").addClass("visible-name").html(name);
            newLine.removeClass("d-none template-form");
            $(newLine).insertAfter($(line));

            calculateSum.updatePrice();
        }
    }
};

let removeItem = {
    bindButton: function() {
        $("body").on("click", ".remove-button", function(event) {
            event.preventDefault();
            $(this).closest('div').remove();
            calculateSum.updatePrice();
        });
    }
};

let calculateSum = {
    updatePrice: function() {
        var sum = 0;
        var items = 0;
        $('.visible-price').each(function (){
            sum += parseFloat($(this).html());
        });
        $('.visible-name').each(function (){
            items++; 
        });
        $('#sum').html(sum.toFixed(2));
        $('#number-of-items').html(items);
    }
}

let calculateTip = {
    bindButton: function() {
        $('.tip-button').on("click", function() {
            var tip = parseFloat($(this).find('input').data("tip"));
            var sum = parseFloat($("#sum").html());
            var tippedPrice = sum * tip;
            var priceToPay = Math.round(tippedPrice).toFixed(2);
            var actualTip = (((priceToPay/sum)-1)*100).toFixed(2);
            if (tip && sum) {
                $("#price-to-pay").html(priceToPay);
                $("#rounded-tip").html(actualTip);
                $(".payment-info").removeClass("d-none");
            }
        });
    }
}
$(document).ready(function() {
    addItem.bindButton();
    removeItem.bindButton();
    calculateTip.bindButton();
});
