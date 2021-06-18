const baiduMixin = {
  data() {
    return {
      keyword: "",
      list: [],
      //防抖
      timer: "",
    };
  },
  methods: {
    getData() {
      //百度 接口   搜索的内容为 vue
      // 此接口的回调函数是cb
      var api =
        "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" +
        this.keyword;

      //输入框存在值，就请求数据
      if (this.keyword) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          // 带回调函数的写法
          this.fetchJsonp(api, {
            jsonpCallback: "cb",
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data.s);
              this.list = data.s;
            })
            .catch(function(error) {
              console.log(error);
            });
        }, 200);
      } else {
        this.list = [];
      }
    },
    success(){
      console.log("znq");
      
    }
  },
};

export default baiduMixin;