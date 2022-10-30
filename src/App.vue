<template>
    <router-view></router-view>
</template>

<script>

import { useTaskStore } from './stores/TaskStore'

export default {
    name: "App",
    setup() {
        const taskStore = useTaskStore()
        return { taskStore }
    },
    created() {
        this.taskStore.initializedTask();
    },
}
</script>

