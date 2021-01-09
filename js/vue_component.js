// global registration
Vue.component('testcomponent'), {
    template: '<div><h1>This is coming from component : global registration</h1></div>'
}

var vm = new Vue({
    el: "#component_test"
})

// local registration
var vm = new Vue({
    el: "#component_test1",
})
