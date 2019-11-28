<template>
    <div class="list-container">
        New Item: <input v-model="newValue" @keyup.enter="addNew()" class="input-box" type="text">
        <ol class="list-holder">
            <!-- <span>No items yet</span> -->
            <!-- <li class="list-elem" @click="deleteThis()"></li> -->
        </ol>
    </div>
</template>

<script>
export default {
    name: 'ListComponent',
    data(){
        return{ 
            newValue: ''
        }
    },
    methods: {
        addNew : function(){
            let listHolder = document.querySelector('.list-holder');
            // let listElem = document.createElement("li");
            // listElem.classList='list-elem';
            listHolder.innerHTML += `<li class="list-elem" @click="deleteThis()">`+this.newValue+`</li>`;
            // listHolder.appendChild(listElem);
            this.newValue = "";

            // let listElem = document.querySelector('.list-elem');
            // listElem.innerText = this.newValue;
            // this.newValue = "";
        }
        // deleteThis : function () {
        //     console.log('pls work');
        // }
    }
}
</script>

<style scoped>
    .list-holder{
        cursor: pointer;
        list-style-position: inside;
        max-width: 400px;
    }
    .list-elem{
        background-color: #E7E7E7;
        text-align: left;
        padding: 10px;
        border-radius: 5px;
        /* box-shadow: 5px 5px rgba(0,0,0,.05); */
        color: gray;
    }
</style>