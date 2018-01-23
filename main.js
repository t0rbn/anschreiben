let state = {
    items: [],
    sum: 0.00,
    tip: 0.00,
    priceToPay: 0.00,
    actualTip: 0.00
}

let stateHandler = {
    addItem: function(name, price) {
        var item = {
            "name": name,
            "price": price
        }
        state.items.push(item);
        stateHandler.saveState();
    },
    removeItem: function(name, price) {
        var deletionIndex = null;
        for (var itemIndex in state.items) {
            item = state.items[itemIndex];
            if (item.name == name && parseFloat(item.price) == price) {
                deletionIndex = itemIndex;
            }
        }
        if (deletionIndex) {
            state.items.splice(deletionIndex, 1);
            stateHandler.saveState();
        }
    },
    loadItems: function() {
        for (var itemIndex in state.items) {
            var item = state.items[itemIndex];
            var newLine = $(".template-form").clone();
            var name = item.name;
            var price = parseFloat(item.price).toFixed(2);
            if (name && price) {
                newLine.find(".price").addClass("visible-price").html(price);
                newLine.find(".name").addClass("visible-name").html(name);
                newLine.removeClass("d-none template-form");
                $(newLine).insertBefore($(".template-form"));
            }
        }
        if (state.sum) {
            $('#sum').html(state.sum.toFixed(2));
            if (state.priceToPay && state.actualTip) {
                $("#price-to-pay").html(state.priceToPay);
                $("#rounded-tip").html(state.actualTip);
                $(".payment-info").removeClass("d-none");
            }
        }
        $('#number-of-items').html(state.items.length);
    },
    saveState: function() {
        localStorage.setItem('state', JSON.stringify(state));
    }
}

let addItem = {
    bindButton: function() {
        $("#add").on("click", function(event) {
            event.preventDefault();
            addItem.addLine(this.closest('form'));
        });

        $("body").on("click", ".increment-button", function(event) {
            event.preventDefault();
            $(this).closest("div").clone().insertAfter($(this).closest('div'));
            var name = $(this).closest("div").find(".name").html();
            var price = parseFloat($(this).closest("div").find(".price").html());
            stateHandler.addItem(name, price);
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
            stateHandler.addItem(name, price);
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
            var name = $(this).closest('div').find('.name').html();
            var price = parseFloat($(this).closest('div').find('.price').html());
            stateHandler.removeItem(name, price);
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
        state.sum = sum;
        stateHandler.saveState();
        calculateTip.updateTip();
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
                state.sum = sum;
                state.tip = tip;
                state.priceToPay = priceToPay;
                state.actualTip = actualTip;
                stateHandler.saveState();
            }
        });
    },
    updateTip: function() {
        var tip = state.tip;
        var sum = parseFloat($("#sum").html());
        var tippedPrice = sum * tip;
        var priceToPay = Math.round(tippedPrice).toFixed(2);
        var actualTip = (((priceToPay/sum)-1)*100).toFixed(2);
        if (tip && sum) {
            $("#price-to-pay").html(priceToPay);
            $("#rounded-tip").html(actualTip);
            $(".payment-info").removeClass("d-none");
            state.sum = sum;
            state.tip = tip;
            state.priceToPay = priceToPay;
            state.actualTip = actualTip;
            stateHandler.saveState();
        }

    }
}
$(document).ready(function() {
    previousState = localStorage.getItem('state');
    if (previousState) {
        state = JSON.parse(previousState);
        stateHandler.loadItems();
    }
    addItem.bindButton();
    removeItem.bindButton();
    calculateTip.bindButton();
});
