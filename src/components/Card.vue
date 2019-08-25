<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{description}}</p>
            <a href="#" class="card-link">Select</a>
            <a href="#" class="card-link">Remove</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            index: Number,
            title: String,
            description: String
        }
    }
</script>
