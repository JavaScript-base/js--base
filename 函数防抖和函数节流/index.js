// function debounce(callback) {
//     var time;
//     return function () {
//         const args = arguments;
//         clearTimeout(time);
//         time = setTimeout(() => {
//             callback.apply(null, args)
//         }, 1000)
//     }
// }


// function throttle(callback, time) {
//     var timeout, args;
//     return function() {
//         args = arguments;
//         if(!timeout) {
//             callback.apply(null, args)
//             timeout = setTimeout(() => {
//                 timeout = null;
//             }, time)
//         }
//     }
//   }
  
//   var handle = throttle(function (val, inp) {
//     console.log(val, inp)
//   }, 3000)
  
//   window.onresize = function() {
//     handle(document.documentElement.clientWidth, 12);
//   }

  function debounce(callback, time) {
    var timer;
    return function () {
        clearTimeout(timer);
        const args = arguments;
        timer = setTimeout(() => {
            callback.apply(null, args);
        }, time);
    }
  }

//   const resize = debounce((option) => {
//     console.log(option);
//   }, 3000)

//   window.onresize = (option) => {
//     resize(option);
//   }

  function throttle(callback, wait) {
    var timer, args;
    return function () {
        args = arguments;
        if(!timer) {
            callback.apply(null, args);
            timer = setTimeout(() => {
                timer = null;
            }, wait)
        }
    }
  }

const resize = throttle((option) => {
    console.log(option);
}, 3000)
    
window.onresize = (option) => {
    resize(option);
}