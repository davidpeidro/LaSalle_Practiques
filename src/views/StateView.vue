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
                            <img src="./../assets/VueListDeActive.png" width="30" height="30" alt="List"
                                style="vertical-align: middle; " />
                        </router-link>
                        <router-link to="/StateView"
                            style="display:inline-flex;text-decoration:none;vertical-align: middle; margin: 0px 10px">
                            <img src="./../assets/VueDragListActive.png" width="30" height="30" alt="State"
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
                <div class="lists">
                    <!-- LEFT LIST (TODO) -->
                    <div class="left">
                        <h3 style="text-align: center;">To Do</h3>
                        <div class="row">
                            <div v-for="task in TaskList.filter((task) => task.state === 'Todo')"
                                :key="task.id">
                                <ItemState :task="task">
                                </ItemState>
                                <br />
                            </div>
                        </div>
                    </div>
                    <!-- RIGHT LIST (DONE) -->
                    <div class="right">
                        <h3 style="text-align: center;">Done</h3>
                        <div class="row">
                            <div v-for="task in TaskList.filter((task) => task.state === 'Done')"
                                :key="task.id">
                                <ItemState :task="task" >
                                </ItemState>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
  
<script>
import ItemState from "../components/ItemState.vue"
import { useTaskStore } from '../stores/TaskStore'

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
            console.log(this.taskStore.taskList)
            return this.taskStore.getTaskList
        }
    },

    components: {
        ItemState,
    },

    methods: {
        insertTask() {
            this.taskStore.insertTask()
        }

        /*filteredList() {
            return this.taskList.filter((task) => {
                return task.title.toLowerCase().includes(this.search.toLowerCase());
            });
        },*/
    },
};
</script>
  
<style>
.lists {
    padding-left: 2vw;
    padding-right: 2vw;
    display: flex;
    align-items: flex-start;
}

.left {
    width: 45vw;
    padding: 20px;
    min-height: 200px;
}

.item {
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    justify-content: space-between;
}

.right {
    width: 45vw;
    padding: 20px;
    min-height: 200px;
}

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