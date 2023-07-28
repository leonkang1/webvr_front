<template>

    <el-button class="scene-fullscreen-btn" type="primary" @click="show_iframe()">
        fullscreen
    </el-button>

    <iframe class="scene-frame" id="scene-iframe" src="src\assets\Build\Record2\index.html" frameborder="0" allowfullscreen></iframe>

</template>

<script>
export default{
    data(){
        return{
            iframeSrc: "../assets/Build/Record2/index.html",
            enable_iframe: false,
        }
    },
    methods:{
        show_iframe(){
            this.enable_iframe = true;
            let iframeElement = document.getElementById('scene-iframe');
            iframeElement.requestFullscreen();
        }
    },
}
</script>

<style scoped>
.scene-frame{
    height: 97vh;
    width: 98vw;
}
.scene-fullscreen-btn{
    position: absolute;
}
</style>