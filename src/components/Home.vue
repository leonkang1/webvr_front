<template>
    <div class="home-total">
        <el-container>
            <el-header height="7vh" class="home-header">
                <div class="home-header-buttons-right">
                    <el-popconfirm v-if="is_login" width="230" title="Are you sure to log out?" @confirm="log_out">
                        <template #reference>
                            <el-button circle size="large" class="home-user-button">
                                <el-icon><User/></el-icon>
                            </el-button>
                        </template>
                    </el-popconfirm>
                    <el-button v-if="!is_login" circle size="large" class="home-user-button" @click="user_operate">
                        <el-icon><User/></el-icon>
                    </el-button>
                </div>
            </el-header>
            <el-divider class="header-divider"/>
            <el-main class="home-main">
                <div class="home-img-container">
                    <div class="home-title">
                        HumanThor
                    </div>
                </div>
                <div class="home-about">
                    <div class="home-about-title">
                        About
                    </div>
                    <div class="home-about-introduction">
                        This is the introduction of human-thor
                    </div>
                </div>

                <el-divider/>
                
                <div class="home-scene-selection">
                    <div class="home-scene-selection-title">
                        Scenes
                    </div>

                    <el-dropdown class="home-scene-types">
                        <el-button type="plain">
                            Types<el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-item v-for="scene_type in scene_types">
                                {{ scene_type }}
                            </el-dropdown-item>
                        </template>
                    </el-dropdown>

                    <div class="home-scenes">
                        <el-row v-for="i in scenes_row_count" :key="i" :gutter="40">
                            <el-col v-for="j in scenes_col_count(i)" :key="j" :span="8">
                                <el-card class="home-scene-card" @click="to_scene()">
                                    <img :src="card_pic(i, j)" class="home-card-img"/>
                                    <div class="home-card-title"> 
                                        {{ scene_array[(i - 1) * 3 + j - 1].title }}
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>

</template>

<script>
import img from "../assets/pic/2.png"
export default{
    mounted(){

    },
    data(){
        return{
            scene_types: ["type1"],
            scene_array: [{"title": "scene1", "pic": "../assets/pic/2.png"}],
        }
    },
    methods:{
        scenes_col_count(i){
            if (i < Math.ceil(this.scene_array.length / 3)){
                return 3;
            } 
            let left = this.scene_array.length % 3;
            if (left == 0) {
                return 3;
            } else {
                return left;
            }
        },
        card_pic(i ,j){
            // console.log("pic", this.scene_array[(i - 1) * 3 + j - 1].pic)
            return img;
        },
        to_scene(){
            this.$router.push("/scene")
        }
    },
    computed: {
        scenes_row_count(){
            return Math.ceil(this.scene_array.length / 3);
        },
    }
}

</script>

<style scoped>
.home-total{
    height: 100%;
}

.home-header{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 3;
    background-color: white;
}

.home-header-buttons-right{
    margin-right: 1vw;
}

.header-divider{
    padding: 0;
    margin: 0;
    position: fixed;
    top: 7vh;
}

.home-main{
    position: relative;
    top: 7vh;
    height: 92vh;
    width: 100%;
    padding-top: 0;
}

.home-img-container{
    width: 100%;
    height: 55vh;
    background-image: url("../assets/pic/1.png");
    background-size:cover;
    background-repeat: no-repeat;
    overflow: hidden;
    background-position: 0 -10vh;
    position: relative;
}

.home-title{
    left: 50%;
    width: 100%;
    top: 50%;
    position: absolute;
    color: whitesmoke;
    font-size: 10vh;
    font-family:Georgia, 'Times New Roman', Times, serif;
    z-index: 1;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    justify-content: center;
}

.home-about-title{
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    font-size: 4vh;
    font-weight: bold;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.home-about-introduction{
    margin-top: 1vh;
    position: relative;
    margin-left: 10vw;
    margin-right: 10vw;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}

.home-scene-selection-title{
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    font-size: 4vh;
    font-weight: bold;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.home-scene-types{
    margin-left: 5vw;
}

.home-card-img{
    object-fit: cover;
    width: 100%; 
    height: 40vh;
    /* border-radius: 25px;
    border: 4px solid transparent;  */
}

.home-scenes{
    margin-top: 5vh;
    margin-left: 5vw;
    margin-right: 5vw;
}

.home-card-title{
    display: flex;
    justify-content: center;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 1vh;
}
</style>