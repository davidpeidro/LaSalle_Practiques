<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

    <div class="wrapper">
        <div class="appBox">
            <div>
                <img src="./../assets/VueLogo.png" style="width: 11rem;margin: 10px 10px" />
            </div>

            <div class="container">
                <div class="row">

                    <div class="col float-start">
                        <router-link to="/ListView"
                            style="color: black;display:inline;text-decoration:none;vertical-align: middle; margin: 0px 10px ">
                            <img src="./../assets/VueListActive.png" width="30" height="30" alt="List"
                                style="vertical-align: middle; " />
                        </router-link>
                        <router-link to="/StateView"
                            style="display:inline-flex;text-decoration:none;vertical-align: middle; margin: 0px 10px">
                            <img src="./../assets/VueDragListDeActive.png" width="30" height="30" alt="State"
                                style="vertical-align: middle; margin: 0px 10px" />
                        </router-link>
                    </div>

                    <div class="col">
                        <input class="form-control" v-model="search" placeholder="Search title.." type="search"
                            style="display: inline" />
                    </div>

                   <!--  <div class="col">
                        <img src="./../assets/VueFilter.png" width="20" height="20" alt="Filter"
                            style="display: inline" />
                    </div> -->
                    <div class="col">
                        <img src="./../assets/user.png" width="30" height="30" alt="users" />
                        <p style="display: inline"> {{ dynamicSelected }}</p>
                        <select v-model="dynamicSelected">
                            <option v-for="option in options" :value="option.value" :key="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                    <div class="col">
                        <p @click="insertTask" style="font-size: 1.5rem;cursor: pointer">+ Add task</p>
                        <!-- <p @click="insertTask" style='font-size: xx-large;cursor: pointer;'>+ Add</p> -->
                    </div>
                </div>
            </div>
            <div><br /></div>
            <div class="container">
                <div v-for="task in TaskList" :key="task.id">
                    <ItemList :task="task">
                    </ItemList>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemList from "../components/ItemList.vue"
import { useTaskStore } from '../stores/TaskStore'

let search = ""

export default {
    data() {
        return {
            dynamicSelected: "",
            options: [
                { text: "Antonio" },
                { text: "David" },
                { text: "Judith" },
                { text: "Lucía" },
                { text: "Rocío" },
            ],
        }
    },
    setup() {
        const taskStore = useTaskStore()
        return { taskStore }
    },

    computed: {
        TaskList() {
            return this.taskStore.getTaskList
        },

    },

    components: {
        ItemList,
    },

    methods: {
        insertTask() {
            this.taskStore.insertTask()
        },

        /* searchTasks() {
            console.log("Entra a search de ListView "  + search)
            return this.taskStore.getTaskList.filter((task) => {
                return task.title.toLowerCase().includes(search.toLowerCase());
            });
            //this.taskStore.searchTasks(input)
        },
        applyFilter(){
            search='44'
        } */

    },

};
</script>
  
<style scoped>
.wrapper {
    display: grid;
    place-items: center;
    min-height: 100vh;
    /*background: linear-gradient(to bottom, #C9A9E2, #8A3CC7);*/
    background-image: url("../assets/fondo.png");
    background-size: cover;
}

.appBox {
    max-width: 660px;
    min-height: 400px;
    width: 80%;
    margin: 100px;
    padding: 20px;
    box-shadow: 3px 2px 12px 8px #e1e1e1;
    border-radius: 20px;
    background: #eee;
}
</style>
  