<template>
  <section class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Welcome to Anschreiben</h1>
        <p class="lead">A late-night webapp that keeps track of your orders.</p>
      </div>
    </div>
    <div class="row justify-content-center pb-2">
      <div class="col-12 col-lg-8">
        <div class="card">
          <div class="card-header container">
            <div class="row align-items-center justify-content-between">
              <div class="col">
                <p class="h4">Your orders</p>
              </div>
              <div class="col text-right" v-if="items.length > 0">
                <div v-if="!confirmClearOrders">
                  <button class="btn btn-danger btn-sm" @click="toggleClearConfirmDialoge">
                    <font-awesome-icon :icon="['fas', 'trash']"/> Clear Orders
                  </button>
                </div>
                <div v-if="confirmClearOrders" class="btn-group btn-group-sm">
                  <button class="btn btn-danger btn-sm" @click="removeAllItems">Clear</button>
                  <button class="btn btn-warning btn-sm" @click="toggleClearConfirmDialoge">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="form-inline justify-content-center align-items-center d-flex">
                <div class="form-group mx-3 mb-2">
                  <label for="name" class="mr-2">Name</label>
                  <input type="text" class="new-item form-control" id="name" v-model="newItem.name" placeholder="Jug of moonshine">
                </div>
                <div class="form-group mx-3 mb-2">
                  <label for="price" class="mr-2">Price</label>
                  <input type="number" class="new-item form-control" id="price" v-model="newItem.price" placeholder="eg 3.90">
                </div>
                <button id="add" class="btn btn-primary mb-2 add-button" :disabled="!newItem.price" @click="addItem"><font-awesome-icon :icon="['fas', 'plus']"/> Add item</button>
              </div>
              <hr>
              <template v-for="(item, index) in items.slice().reverse()">
                <div class="row justify-content-center align-items-center mb-2" >
                  <div class="col col-lg-3">
                    <span class="name h5">{{item.name}}</span><br>
                    <span class="amount lead">{{item.amount}} x</span>
                    <span class="price lead">{{item.price | currency}}</span>
                  </div>
                  <div class="col col-lg-3 text-right">
                    <div class="btn-group btn-group-sm">
                      <button type="button" class="btn btn-sm btn-secondary" @click="increaseItemAmount(item)"><font-awesome-icon :icon="['fas', 'plus']"/>
                      </button>
                      <button type="button" class="btn btn-sm btn-secondary" @click="decreaseItemAmount(item)"><font-awesome-icon :icon="['fas', 'minus']"/>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger" @click="removeItem(item)"><font-awesome-icon :icon="['fas', 'trash']"/>
                      </button>
                    </div>
                  </div>
                </div>
                <hr>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" v-show="items.length" v-cloak>
      <div class="col-xs-12 col-lg-8">
        <div class="card">
          <div class="card-header">
            <h4>What to pay</h4>
          </div>
          <div class="card-body">
            <div class="card-text text-center">
              <div class="row align-items-center justify-content-center">
                <div class="col">
                  <p class="lead">
                    You ordered <br>
                    <span class="h5">{{totalItemCount}} Items</span> <br>
                    for a total of
                  </p>
                </div>
                <div class="col">
                  <p class="h4" id="sum">{{totalPrice | currency}}</p>
                </div>
              </div>
              Please choose a tip below <br>
              <div class="btn-group btn-group-lg btn-group-toggle pt-2" data-toggle="buttons">
                <label class="btn btn-primary tip-button" @click="setSelectedTip(1.05)">
                  <input type="radio" name="options" id="5-percent" data-tip="1.05" autocomplete="off" > 5%
                </label>
                <label class="btn btn-lg btn-primary tip-button" @click="setSelectedTip(1.10)">
                  <input type="radio" name="options" id="10-percent" data-tip="1.10" autocomplete="off" > 10%
                </label>
                <label class="btn btn-lg btn-primary tip-button" @click="setSelectedTip(1.15)">
                  <input type="radio" name="options" id="15-percent" data-tip="1.15" autocomplete="off" > 15%
                </label>
              </div>
              <p class="pt-2 h3 lead" v-show="selectedTip">
                Paying <br>
                <span class="h4">{{priceWithTip | currency}}</span> <br>
                equals a tip of <br>
                <span class="h4">{{actualTip}}</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import {mapActions, mapMutations} from 'vuex'

  const ITEM_STORAGE_KEY = 'anschreiben - todos';
  const MISC_STORAGE_KEY = 'anschreiben - misc';
  const itemStorage = {
    fetch: function () {
      var items = JSON.parse(localStorage.getItem(ITEM_STORAGE_KEY) || '[]');
      items.forEach(function (item, index) {
        item.id = index
      });
      itemStorage.uid = items.length;
      return items
    },
    save: function (items) {
      localStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(items));
    }
  };

  export default {
    data() {
      return {
        newItem: {},
        items: itemStorage.fetch(),
        selectedTip: 0,
        confirmClearOrders: false
      }
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
      ...mapActions([]),
      ...mapMutations([]),
      totalItemCount: function() {
        let totalItemCount = 0
        for (let itemIndex in this.items) {
          let item = this.items[itemIndex];
          totalItemCount += item.amount;
        }
        return totalItemCount;
      },
      totalPrice: function() {
        let totalPrice = 0;
        for (let itemIndex in this.items) {
          let item = this.items[itemIndex];
          totalPrice += item.price*item.amount;
        }
        return totalPrice;
      },
      priceWithTip: function() {
        return Math.round(this.totalPrice * this.selectedTip);
      },
      actualTip: function() {
        return (((this.priceWithTip/this.totalPrice)-1)*100.00).toFixed(2);
      }
    },
    filters: {
      currency: function(value, digits) {
        let number = parseFloat(value);
        let options = {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        };
        return number.toLocaleString('de-DE', options)
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
        let indexOfItem = this.items.indexOf(item);
        item.amount++;
        this.$set(this.items, indexOfItem, item);
      },
      decreaseItemAmount: function(item) {
        let indexOfItem = this.items.indexOf(item);
        if (item.amount > 0) {
          item.amount--;
        }
        this.$set(this.items, indexOfItem, item);
      },
      setSelectedTip: function(selectedTip) {
        this.selectedTip = selectedTip;
      },
      toggleClearConfirmDialoge: function() {
        this.confirmClearOrders = !this.confirmClearOrders;
      },
      removeAllItems: function() {
        this.confirmClearOrders = false
        this.items = []
      }
    },
    components: {
      Logo
    }
  }
</script>

<style>
</style>
