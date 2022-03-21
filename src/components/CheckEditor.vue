<template>
    <div class="checkEditBox">
        <div class="check" 
            :class="{ checked: modelValue }"
            @click="checkClick"
        ></div>
        <input 
            class="check-input" 
            type="text"
            :value="text"
            @input="handleTextChange"
        >
    </div>
</template>

<script>
export default {
    props:{
        modelValue: Boolean, //是否选中
        text: String, //文本
        textModifiers: { //自定义修饰符
            default: () => ({}),
        },
    },
    setup(props,ctx){

        const checkClick = () => {
            ctx.emit("update:modelValue", !props.modelValue);
        }

        const handleTextChange = (e) => {
            let value = e.target.value;
            // 自定义的修饰符
            if (props.textModifiers && props.textModifiers.trim) {
                value = value.trim();
            }

            ctx.emit("update:text", !props.modelValue);
        }

        return {
            checkClick,
            handleTextChange
        }
    }
}
</script>

<style scoped>
    .checkEditBox{
        width: 100px;
        display: flex;
        align-items: center;
    }
    .check{
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        position: relative;
    }
    .check.checked{
        border-color: blue;
    }
    .check.checked::after{
        content: '';
        border-radius: 4px;
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: blue;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .check-input{
        border: none;
        height: 20px;
        width: 100px;
        margin-left: 8px;
    }
</style>