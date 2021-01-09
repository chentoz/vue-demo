// #data
var vm = new Vue({
  el: "#vue_det",
  data: {
    firstname: "Ria",
    lastname: "Singh",
    address: "Mumbai"
  },
  methods: {
    mydetails: function () {
      return "I am " + this.firstname + " " + this.lastname
    }
  }
})

// example of data integration
var _obj = { fname: "Raj", lname: "Singh" }
var vm2 = new Vue({
  data: _obj
})

console.log(vm2.$data)
console.log(vm2.$data.fname)
console.log(vm2.fname)

// example of vue component
var Component = Vue.extend({
  data: function () {
    return _obj
  }
})

var myComponentInstance = new Component()
console.log(myComponentInstance.lname)
console.log(myComponentInstance.$data)

// props :  an array of string or object
Vue.component("props-demo-advanced", {
  props: {
    height: Number,
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  }
})

var Comp = Vue.extend({
  props: ['msg'],
  template: '<div> {{msg}} </div>'
})

// propsData : used for unit testing
// array of string
var vm3 = new Comp({
  propsData: {
    msg: 'hello'
  }
})

// Computed :
var vm4 = new Vue({
  data: { a: 2 },
  computed: {
    aSum: function () {
      return this.a + 2
    },
    aSquare: {
      get: function () {
        return this.a * this.a
      },
      set: function (v) {
        this.a = v * 2
      }
    }
  }
})
console.log(vm4.aSquare)
vm4.aSquare = 3
console.log(vm4.a)
console.log(vm4.aSum)

// Methods :
var vm5 = new Vue({
  data: { a:5 },
  methods: {
    aSquare: function() {
      this.a *= this.a
    }
  }
})
vm5.aSquare()
console.log(vm5.a)