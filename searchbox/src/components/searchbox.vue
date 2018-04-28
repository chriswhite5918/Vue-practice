<template>
    <div>
        <header>
            <h1 class="grey-text" @click="test">{{ title }}</h1>
        </header>
        <section class="searchbox">
            <input type="search" placeholder="Search..."  v-model="search">
        </section>
        <section class="content" v-for="content in filteredSearch">
            <h5>{{ content.title }}</h5>
            <p>{{ content.content }}</p>
        </section>

    </div>
</template>

<script>
    export default {
        
        data: function() {
            return {
                title: 'Search Box',
                search: '',
                contents: [
                    {
    title: 'purus in nibh porta',
    content:
      ' sapien pretium mattis eu eget sapien. Sed varius ante metus, vel feugiat orci vestibulum sagittis. Morbi mollis, erat et placerat sollicitudin, felis tellus tincidunt lectus, nec feug'
  },
  {
    title: 'fermentum ipsum',
    content:
      ' ristique senectus et netus et malesuada fames ac turpis egestas. Maecenas pellentesque urna sed commodo ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imper'
  },
  {
    title: 'pellentesque mauri',
    content:
      ' sla facilisi. Proin tristique diam id augue eleifend, vitae mollis lectus euismod. Duis sed turpis nisi. Curabitur tristique mattis sem sed hendrerit. Nunc ex tortor, euismod nec convallis at, molestie vel tortor. Integer cursus ligula quis feugiat egestas. Mauris viverra porttitor aliquam'
  },
  {
    title: 'placerat purus ut',
    content:
      'vitae dui et ligula consequat rutrum a in ligula. Integer placerat purus ut magna posuere sodales vel luctus odio. Donec ornare metus quis leo elementum, vitae pulvinar ligula mattis. Curabitur tempus dignissim orci id molestie. Mauris fringilla, nisl eu rhoncus convallis, erat magna mollis tortor, id rhoncus '
  },
  {
    title: 'sollicitudin. Aliquam era',
    content:
      ' sapien pretium mattis eu eget sapien. Sed varius ante metus, vel feugiat orci vestibulum sagittis. Morbi mollis, erat et placerat sollicitudin, felis tellus tincidunt lectus, nec feug'
  },
  {
    title: 'Nulla facilisi. Proin tristique',
    content:
      'scelerisque ut quam. Etiam eget vulputate magna. Integer ullamcorper imperdiet nunc, sit amet sollicitudin ex iaculis feugiat. Nullam sit amet tellus feugiat, tempor lorem vel, fermentum sapien. In convallis, eros eget ullamcorper rutrum, diam enim auctor purus, eu suscipit neque leo vel leo. Nulla facilisi. Proin tristique diam id augue eleifend, vitae mollis lectus euismod. Duis sed turpis nisi. Curabitur tristique m'
  }
                ]
                
            }
        },
        methods: {
            test() {
                console.log(data.title)
            }
        },
        computed: {
            filteredSearch() {
                return this.contents.filter(content => content.title.match(this.search))
            }
        }
    };
    
</script>

<style>

</style>