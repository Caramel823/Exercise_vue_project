<template>
    <div class="todoList">
        <div class="add-container">
            <el-input ref="addInputRef" v-model="inputValue" @focus="handleInputFocus" @blur="handleInputBlur"></el-input>
            <el-button type="primary" :disabled="!inputValue" @click="handleAdd">新增</el-button>
        </div>

        <el-card class="list-container">
            <template v-if="todoList && todoList.length > 0">
                <div class="main-list-container">
                    <div class="item-container" v-for="todoItem in todoList" :key="todoItem.id">
                        <div class="completed-container" @click="toggleTask(todoItem)">
                            <el-icon v-if="todoItem.completed" size="20px" color="#409eff"><CircleCheckFilled /></el-icon>
                            <div v-else class="not-completed"></div>
                        </div>
                        <div class="text-container">{{ todoItem.content }}</div>
                        <el-button type="danger" @click="handleDelete(todoItem)">删除</el-button>
                    </div>
                </div>
                <div class="statistic-container">
                    {{ todoList.filter(item => item.completed).length || 0 }} / {{ todoList.length || 0 }}
                </div>
            </template>
            <el-empty v-else description="暂无任务" />
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

type TodoItem = {
    id: string;
    content: string;
    completed: boolean;
}

const addInputRef = ref()
const inputValue = ref('')
const todoList = ref<TodoItem[]>([])
const initial = ref(true)

// 新增任务
const handleAdd = () => {
    if(!inputValue.value) return;
    const newTask = {
        id: uuidv4(),
        content: inputValue.value,
        completed: false
    }
    todoList.value.push(newTask);
    inputValue.value = '';
    addInputRef.value.blur()
}

// 切换任务完成状态
const toggleTask = (todoItem: TodoItem) => {
    if(!todoItem) return;
    if(todoItem.completed) {
        todoItem.completed = false;
    } else {
        todoItem.completed = true;
    }
}

// 删除任务
const handleDelete = (todoItem: TodoItem) => {
    const index = todoList.value.findIndex(item => item.id === todoItem.id);
    if (index !== -1) {
        todoList.value.splice(index, 1);
    }
}

// 输入框获取焦点事件
const handleInputFocus = () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleAdd();
        }
    });
}

// 输入框失焦
const handleInputBlur = () => {
    console.log('输入框失焦');
}

watch(() => todoList.value, (newVal) => {
    if(initial.value) return; // 初始化获取localStorage值时不触发以下事件
    const data = JSON.stringify(newVal)
    localStorage.setItem('todo_list', data)
    
}, {deep: true})

onMounted(() => {
    const jsonData = localStorage.getItem('todo_list')
    const storageData = JSON.parse(jsonData ? jsonData : '[]')
    todoList.value = storageData
    initial.value = false;
})

</script>

<style scoped lang="scss">
.todoList {
    box-sizing: border-box;
    width: 500px;
    padding: 15px;
    margin: 0 auto;
    .add-container {
        display: flex;
        gap: 10px;
    }
    .list-container {
        margin-top: 10px;
        .item-container {
            display: flex;
            align-items: center;
            padding: 10px 0;

            &:not(:last-child) {
                border-bottom: 1px solid #ccc;
            }
            .completed-container {
                margin-right: 10px;
                .not-completed {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                }
            }
            .text-container {
                flex: 1;
            }
        }
        .statistic-container{
            display: flex;
            justify-content: end;
            font-size: 14px;
            color: #999999;
        }
    }
}
</style>