// global registration
Vue.component('testcomponent', {
    template: '<div><h1>This is coming from component</h1></div>'
})
var vm = new Vue({
    el: '#component_test'
})
var vm1 = new Vue({
    el: '#component_test1',
    components:{
        'testcomponent': {
           template : '<div><h1>This is coming from component : local initiazation</h1></div>'
        }
     }
})