<template>
    <div class="home">
        <div class="banner">
            <h2 class="header">Hacker News API Implementation</h2>
            <img class="home-img" src="../assets/logo.png">
        </div>
        <div class="container">
            <singleStoryItem :item="story" :comments="comments"></singleStoryItem>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line import/extensions
import singleStoryItem from '@/components/SingleStoryItem';
import { getSingleItem, getSingleStoryComments } from '../services/storyService';

export default {
  name: 'Home',
  components: {
    singleStoryItem,
  },
  data() {
    return {
      story: {},
      comments: [],
    };
  },
  created() {
    getSingleItem(this.$route.params.id).then((res) => {
      this.story = res;
    });
    getSingleStoryComments(this.$route.params.id).then((res) => {
      this.comments = res;
    });
  },
};
</script>

<style scoped>
.content {
    /*no grid support*/
    float: left;
    width: 79.7872%;
    /* grid */
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: 0 !important;
    margin: 30px;
}

.banner {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    background-color: teal;
}

.header {
    font-weight: 900;
    margin: 4rem;
    width: 60%;
}

.home-img {
    width: 40%;
}
</style>
