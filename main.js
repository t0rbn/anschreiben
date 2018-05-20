Vue.component('item-row', {
  props: ['item'],
  template: ''
});
// localStorage persistence
var STORAGE_KEY = 'anschreiben'
var itemStorage = {
  fetch: function () {
    var items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    items.forEach(function (item, index) {
      item.id = index
    })
    itemStorage.uid = items.length
    return items
  },
  save: function (items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}

var app = new Vue({
  el: '#app',
  data: {
    newItem: {
    },
    items: itemStorage.fetch(),
    selectedTip: 0
  },

  watch: {
    items: {
      handler: function (items) {
        itemStorage.save(items)
      },
      deep: true
    }
  },

  computed: {
    totalItemCount: function() {
      var totalItemCount = 0
      for (itemIndex in this.items) {
        var item = this.items[itemIndex];
        totalItemCount += item.amount;
      }
      return totalItemCount;
    },
    totalPrice: function() {
      var totalPrice = 0;
      for (itemIndex in this.items) {
        var item = this.items[itemIndex];
        totalPrice += item.price*item.amount;
      }
      return totalPrice;
    },
    priceWithTip: function() {
      return Math.round(this.totalPrice * this.selectedTip).toFixed(2);
    },
    actualTip: function() {
      return (((this.priceWithTip/this.totalPrice)-1)*100.00).toFixed(2);
    }
  },

  filters: {
    currency: function(number, digits) {
      return number.toLocaleString('de-DE', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2})
    }
  },
  methods: {
    addItem: function() {
      this.newItem.amount = 1;
      this.items.push(this.newItem);
      this.newItem = {};
    },
    removeItem: function(item) {
      this.items.splice(this.items.indexOf(item), 1)
    },
    increaseItemAmount: function(item) {
      var indexOfItem = this.items.indexOf(item);
      item.amount++;
      Vue.set(app.items, indexOfItem, item);
    },
    decreaseItemAmount: function(item) {
      var indexOfItem = this.items.indexOf(item);
      if (item.amount > 0) {
        item.amount--;
      }
      Vue.set(app.items, indexOfItem, item);
    },
    setSelectedTip: function(selectedTip) {
      this.selectedTip = selectedTip;
    }
  }
});
