<template>
    <h3>手写的迷你响应式系统</h3>
</template>

<script setup>
let activeEffect = null;

class Dep {
    constructor () {
        this.subscribers = new Set();
    }

    depend () {
        if (activeEffect) {
            this.subscribers.add(activeEffect);
        }
    }

    notify () {
        this.subscribers.forEach(effect => effect());
    }
}

// effect 函数的作用是：
// 把用户传入的函数包装成一个可被"记住"和"重新执行"的 effectFn，
// 并在执行期间用 activeEffect 标记"当前是谁在读数据"，
// 让 Proxy 能正确地建立依赖关系
function effect (fn) {
    const effectFn = () => {
        activeEffect = effectFn;
        fn();
        activeEffect = null;
    }
    effectFn();
}

function myReactive(target) {
    const depsMap = new Map();
    return new Proxy(target, {
        get(target, key, receiver) {
            let dep = depsMap.get(key);
            if (!dep) {
                dep = new Dep();
                depsMap.set(key, dep);
            }
            dep.depend();
            // Reflect.get方法允许你从一个对象中取属性值。就如同属性访问器 语法，但却是通过函数调用来实现。
            return Reflect.get(target, key, receiver);
        },
        set(target, key, value, receiver) {
            const oldValue = target[key];
            const result = Reflect.set(target, key, value, receiver);
            if(oldValue !== value) {
                let dep = depsMap.get(key);
                if (dep) {
                    dep.notify();
                }
            }
            return result;
        }
    })
}

const state = myReactive({ count: 0 });

effect(() => {
    console.log(`count is: ${state.count}`);
});

state.count = 1;
state.count = 2;
state.count = 3;
</script>

<style scoped lang="scss">

</style>