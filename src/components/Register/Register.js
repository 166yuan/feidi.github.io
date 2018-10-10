module.exports = {
  name: 'register',
  data(){
  	return{
       registerForm: {
          account:'',
          password:''
       },
       formRules:{
        account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
         password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ]
       },
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