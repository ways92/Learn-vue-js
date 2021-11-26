// export default {
//     posts: []
// }

// import { reactive, toRefs } from 'vue'

// export default {
//     name: 'Card',
//     async setup() {
//         const data = reactive({
//             list:[]
//         });

//         const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//         data.list = await result.json();

//         return { ...toRefs(data) }
//     }
// }