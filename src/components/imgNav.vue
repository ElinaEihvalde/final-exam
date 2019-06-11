<template>
<v-container class="container" fluid grid-list-xl pa-2>
     <v-layout align-center justify-center row wrap @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card"> 
        <v-flex xs2 v-for="card in cards" :key="card.id" class="card"  
      :style="cardStyle">
            <v-card dark :style="[cardBgTransform, cardBgImage]">
                <v-img v-bind:src="card.image" class="white--text" height="45vh" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end justify-center  ">
                        <div class="line-height">
                            <p class="headline">{{card.title}}</p>
                            <p class="subheading">{{card.description}}</p>
                        </div>
                    </v-card-title>
                </v-img>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>

<!-- <div>
    <div class="container" v-for="picture in pictures" :key="picture.id">
        <a  :href="picture.link">
      <div class="overlay"></div>
      <div><img :src= "picture.image" width="100%"></div>
      <div class="description">
          <h4>{{picture.title}}</h4>
          <p>{{picture.description}}</p>
      </div>
  </a>
    </div>
</div> -->
</template>

<script>
export default {
    mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
    data() {
        
        return {
            width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
            cards: [{
                    id: 1,
                    link: '#',
                    image: require('@/assets/img1.jpg'),
                    title: 'Observatory',
                    description: 'SOMETHING'
                },
                {
                    id: 2,
                    link: '#',
                    image: require('@/assets/img1.jpg'),
                    title: 'Guest house',
                    description: 'SOMETHING'
                },

                {
                    id: 3,
                    link: '#',
                    img: '../assets/observatory.jpg',
                    title: 'Observatory',
                    description: 'SOMETHING'
                }
            ]
        }
    },
    computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }

}
</script>

<style>

.line-height {line-height: 0.5;}
/*     .card-hover {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .card-hover:hover {
    transform: scale(.8); 
    transition-duration: .5s;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .white--text:hover {
    transform: scale(1.3); 
    transition-duration: .5s;
    }
 */
</style>
<style lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

body {
  margin: 40px 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #BCAAA4;
  -webkit-font-smoothing: antialiased;
}

.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5D4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1+p, p+p {
  margin-top: 10px;
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  // background-color: #fff;
  
  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info, .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .card-bg {
      transition: 
        0.6s $hoverEasing,
        opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition:
        0.6s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(white, 0.2) 0 0 40px 5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(black, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s $returnEasing,
    opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  * {
    position: relative;
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>

