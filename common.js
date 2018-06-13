class PureFullPage {
  constructor(options) {
    // 属性定义
    // 1. 手动计算page的高度
    // #pureFullPage高度？
    // this.pages
    this.container = document.getElementById('pureFullPage');
    this.viewHeight = document.documentElement.clientHeight;
    this.init();
  }
  init () {
    this.container.style.height = `${this.viewHeight}px`;
    // 事件监听 浏览器嗅探 mousewheel firefox DOMMouseScroll
    // mousewheel 截流
    // this.scrollMouse    方法，负责滚动 执行多次，用throttle 在规定时间呢只执行一次
    // 重新返回一个函数，handleMouseWheel，闭包，将this.scrollMouse封装到内部
    // this函数执行的作用域context
    // 1000 delay推迟执行
    const handleMouseWheel=utils.throttle(this.scrollMouse,this,1000);//截流
    if(navigator.userAgent.toLowerCase().indexOf('firefox')===-1){
        document.addEventListener('mousewheel',handleMouseWheel,false);
    }else{
        document.addEventListener('DOMMouseScroll',function(){
            console.log('scroll');
            
        },false)
    }
   
  }
//   滚动事件处理函数
  scrollMouse(){
    console.log(this.container);
    
  }
}
