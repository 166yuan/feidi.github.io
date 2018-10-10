module.exports = {
  name: 'list',
  data(){
  	return{
  		 winSize: {
                width: '',
                height: ''
            }
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