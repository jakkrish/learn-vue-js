<template>
    <div class="nav">
        <ul>
            <li v-for="item in navList" :key="item">
                <a v-bind:href="item.url">
                    {{item.navItem}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
        return {
            navList: [
                {
                    navItem:'home',
                    url: 'home'
                },
                {
                    navItem:'about us',
                    url: 'about-us'
                },
                {
                    navItem:'gallery',
                    url: 'gallery'
                },
                {
                    navItem:'contact',
                    url: 'contact'
                },
                {
                    navItem:'careers',
                    url: 'careers'
                }
            ]
        }
    }
    
}
</script>