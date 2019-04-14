<template>
    <div class="card">
        <div class="card-header container">
            <div class="row align-items-center justify-content-between">
                <div class="col">
                    <p class="h4">Your orders</p>
                </div>
                <div class="col text-right" v-if="items.length > 0">
                    <div v-if="!confirmClearOrders">
                        <button class="btn btn-danger btn-sm" @click="toggleClearConfirmDialoge"><i class="fa fa-trash"></i> Clear Orders</button>
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
                    <button id="add" class="btn btn-primary mb-2 add-button" :disabled="!newItem.price" @click="addItem"><i class="fa fa-plus"></i> Add item</button>
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
                                <button type="button" class="btn btn-sm btn-secondary" @click="increaseItemAmount(item)"><i class="fa fa-plus"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-secondary" @click="decreaseItemAmount(item)"><i class="fa fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-danger" @click="removeItem(item)"><i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Orders",
    props: {
      items: {
        type: array,
        default: () => []
      }
    },
    data() {
      return {
      }
    },
    methods: {
      increaseItemAmount: function(item) {
        let indexOfItem = this.items.indexOf(item);
        item.amount++;
        Vue.set(this.items, indexOfItem, item);
      },
      decreaseItemAmount: function(item) {
        let indexOfItem = this.items.indexOf(item);
        if (item.amount > 0) {
          item.amount--;
        }
        Vue.set(this.items, indexOfItem, item);
      }
    }
  }
</script>

<style scoped>

</style>
