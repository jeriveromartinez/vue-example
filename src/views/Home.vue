<template>
  <div id="app" class="row">
    <div class="col-md-3">
        <form @submit.prevent="save">
            <input type="hidden" v-model="index">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea type="text" class="form-control" v-model="description"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
    <div class="row col-md-8">
        <Card v-for="card in cards" v-bind:key="card.index" :index="card.index" :title="card.title" :description="card.description"/>
    </div>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Card from "../components/Card";

    export default {
        name: 'Home',
        components: { Card },
        data: () => {
            return { title: '', description: '', index: -1 }
        },
        computed: {
            cards: {
                get() {
                    return this.getCards();
                },
                set(value) {
                    this.setCard(value);
                }
            }
        },
        methods: {
            ...mapGetters([ 'getCards' ]),
            ...mapActions([ 'setCard' ]),

            save() {
                this.cards = { index: this.cards.length, title: this.title, description: this.description };
                this.title = '';
                this.description = '';
                this.index = -1;
            }
        }
    }
</script>

<style lang="scss">
#app {
    padding: 10px;

    .card ~ .card {
        margin-left: 5px;
    }
}
</style>
