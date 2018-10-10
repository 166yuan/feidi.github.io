module.exports = {
  name: 'add',
  data(){
  	return{
  		 winSize: {
                width: '',
                height: ''
       },
       brands:[{
        value: 'farm',
        label: '农夫山泉'
       },{
        value: 'yibao',
        label: '怡宝'
       }
       ],
       names:[{
        value: 'farm',
        label: '农夫山泉'
       },{
        value: 'yibao',
        label: '怡宝'
       }
       ],
       styles:[{
        value: 'big',
        label: '大号'
       },{
        value: 'small',
        label: '小号'
       }
       ],
       stores:[{
        value: 'farm',
        label: '农夫山泉'
       },{
        value: 'yibao',
        label: '怡宝'
       }
       ],
       brand_value:'',
       name_valye:'',
       style_value:'',
       store_value:'' 
  	}
  },
  methods: {
  	setSize() {
            this.winSize.width = $(window).width() + "px";
            this.winSize.height = $(window).height() + "px";
        }
  },
  created() {
        this.setSize();
        $(window).resize(() => {
            this.setSize();
        });
    }
}