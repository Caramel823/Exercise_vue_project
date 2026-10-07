<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="ID" width="200" show-overflow-tooltip />
            <el-table-column prop="title" label="Title" width="200">
                <template #default="scope">
                    <el-link @click="goDetail(scope.row)">{{ scope.row.title }}</el-link>
                </template>
            </el-table-column>
            <el-table-column prop="description" label="Description" min-width="180" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

const router = useRouter()

const tableData = ref([
    {
        id: uuidv4(),
        title: '手写Debounce防抖',
        description: '',
        path: '/debounce',
    },
    {
        id: uuidv4(),
        title: '手写Throttle节流',
        description: '',
        path: '/throttle',
    },
    {
        id: uuidv4(),
        title: '手写响应式系统',
        description: '',
        path: '/reactive_system',
    },
    {
        id: uuidv4(),
        title: 'Card卡片',
        description: 'Apple 风格产品卡片——简洁、白底、大留白、hover 时卡片轻微上浮',
        path: '/card',
    },
    {
        id: uuidv4(),
        title: 'TodoList',
        description: '',
        path: '/todolist',
    },
    {
        id: uuidv4(),
        title: 'Grif布局',
        description: 'grid布局练习',
        path: '/grid',
    },
])

const goDetail = (row: any) => {
    router.push({ path: row.path })
}
</script>

<style scoped>

</style>