<template>
  <div
    id="main"
    class="main"
  >
    <div
      class="container login col-md-6 inset"
      align="center"
      style="margin-top: 10%"
    >
      <h2>欢迎光临宠物系统</h2>
      <el-form
        ref="elForm" 
        :model="formData"
        :rules="rules"
        size="medium"
        label-width="100px" 
      >
        <el-form-item
          label="账号"
          prop="userName"
        >
          <el-input
            v-model="formData.userName"
            placeholder="请输入账号"
            clearable
            :style="{ width: '80%' }"
          />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="passWord"
        >
          <el-input
            v-model="formData.passWord"
            placeholder="请输入密码"
            show-password
            clearable
            :style="{ width: '80%' }"
          />
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="verifyCode"
        >
          <el-input
            v-model="formData.verifyCode"
            placeholder="请输入"
            clearable
            :style="{ width: '40%' }"
          />
          <img
            id="verifyimg"
            :src="imgcodeUrl"
            @click="Verification"
          >
        </el-form-item>
        <el-form-item size="large">
          <el-button
            type="primary"
            size="medium"
            @click="submitForm"
          >
            提交
          </el-button>
          <el-button
            size="medium"
            @click="dialogFormVisible = true"
          >
            注册
          </el-button>
        </el-form-item>
      </el-form>
      <el-dialog
        v-model="dialogFormVisible"
        title="注册"
      >
        <login-registered />
      </el-dialog>
    </div>
  </div>
</template>
<script>
// 引入注册组件 
import LoginRegistered from '../components/LoginRegistered.vue' 
export default {
  components: {
    LoginRegistered,
  },
  props: [],
  data() {
    return {
      imgcodeUrl: '',
      dialogFormVisible: false,
      formData: {
        userName: undefined,
        passWord: undefined,
        verifyCode: undefined,
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur',
          },
        ],
        passWord: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
        verifyCode: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  computed: {},
  watch: {},
  created() {
    document.title = '宠物管理'
  },
  mounted() {
    this.Verification()
  },
  methods: {
    // 登录
    submitForm() {
      this.$refs['elForm'].validate((valid) => {
        if (valid) {
          this.axios.post('api/login/submit', this.formData).then((res) => {
            this.$message({
              message: res.data.message,
              type: res.data.code == 200 ? 'success' : 'error',
            })
            if (res.data.success) {
              this.$router.push({ name: 'MainPet' }) 
            }
          })
        }
      })
    },
    // 验证码接口
    Verification() {
      this.axios
        .get('api/login/verifyCode', { responseType: 'arraybuffer' })
        .then((response) => {
          return (
            'data:image/png;base64,' +
            btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
              )
            )
          )
        })
        .then((res) => {
          this.imgcodeUrl = res
        })
    },
  },
}
</script>
<style>
.login {
  width: 25%;
  margin: auto;
  margin-top: 10%;
}
body{
  margin: 0%;
  padding: 0%;
}
.main {
  width: 100%;
  height: 100%;
  background: url(../img/banner.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* start editing from here */
a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
/*end reset*/
/****-----start-body----****/
h1 {
  font-size: 2.4em;
  padding-bottom: 28px;
  color: #fff;
  text-align: center;
}
h2 {
  font-size: 1.5em;
  padding-bottom: 28px;
  color: #0091e6;
  text-align: center;
}
.login {
  padding: 2em 0;
}
.inset {
  position: relative;
  background: #fff;
  padding: 2.5em;
  border-radius: 0.3em;
  -webkit-border-radius: 0.3em;
  -o-border-radius: 0.3em;
  -moz-border-radius: 0.3em;
  box-shadow: 0px 0px 15px #545454;
}
form span {
  display: block;
  font-size: 1em;
  color: #333;
  font-weight: 400;
}
/* input[type="text"], input[type="password"] , select{
	padding: 9px;
	width: 93.4%;
	font-size: 1.1em;
	margin: 3px 0px 25px;
	color: #666666;
	background: #f0f0f0;
	border: none;
	font-weight:400;
	outline: none;
	-webkit-transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-ms-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	transition: all 0.3s ease-out;
	border-radius: 0.2em;
	-webkit-border-radius: 0.2em;
	-o-border-radius: 0.2em;
	-moz-border-radius: 0.2em;
} */
input[type="text"]:hover,
input[type="Password"]:hover,
#active {
  border: none;
  outline: none;
}
.sign {
  padding: 10px 0 0;
  text-align: center;
}
.submit {
  margin-right: 11px;
  background: #0091e6;
  border: none;
  outline: none;
  padding: 8px 30px;
  cursor: pointer;
  color: #fff;
  font-size: 0.9em;
  border-radius: 0.3em;
  -webkit-border-radius: 0.3em;
  -moz-border-radius: 0.3em;
  -o-border-radius: 0.3em;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  font-weight: 600;
  margin: 0 auto;
}
.submit:hover {
  background: #c5c5c5;
}
.rzm {
  position: relative;
}
.rzm img {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 45px;
}

/*----start-responsive design-----*/
h1 {
  font-size: 2.2em;
}

@media (max-width: 991px) {
  h1 {
    font-size: 2em;
  }

  h1 {
    font-size: 2.1em;
  }

  .inset {
    padding: 2em;
  }
  h1 {
    font-size: 1.9em;
  }
  .login {
    padding: 2em 0 0;
  }
}
</style>
