<template>
  <div
    id="registered"
    class="registered"
  >
    <el-form
      ref="elRegistered"
      :model="formRegistered"
      :rules="rules"
      size="medium"
      label-width="100px"
    >
      <el-form-item
        label="账号"
        prop="userAccount"
      >
        <el-input
          v-model="formRegistered.userAccount"
          placeholder="请输入账号"
          clearable
          :style="{ width: '100%' }"
        />
      </el-form-item>
      <el-form-item
        label="用户名"
        prop="userName"
      >
        <el-input
          v-model="formRegistered.userName"
          placeholder="请输入用户名用户名"
          clearable
          :style="{ width: '100%' }"
        />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="passWord"
      >
        <el-input
          v-model="formRegistered.passWord"
          show-password
          placeholder="请输入密码密码"
          clearable
          :style="{ width: '100%' }"
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="againUserPwd"
      >
        <el-input
          v-model="formRegistered.againUserPwd"
          show-password
          placeholder="请输入确认密码"
          clearable
          :style="{ width: '100%' }"
        />
      </el-form-item>
      <el-form-item size="large">
        <el-button
          type="primary"
          @click="submitForm"
        >
          提交
        </el-button>
        <el-button @click="resetForm">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formRegistered.passWord) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      formRegistered: {
        userAccount: undefined,
        userName: undefined,
        passWord: undefined,
        againUserPwd: undefined,
      },
      rules: {
        userAccount: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur',
          },
        ],
        userName: [
          {
            required: true,
            message: '请输入用户名用户名',
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
        againUserPwd: [
          {
            required: true,
            validator: validatePass2,
            trigger: 'blur',
          },
        ],
      },
    }
  },
  created() {},
  methods: {
    submitForm() {
      this.$refs['elRegistered'].validate((valid) => {
        if (valid) {
          this.axios
            .post('api/login/registered', this.formRegistered)
            .then((res) => {
              this.$message({
                message: res.data.message,
                type: res.data.code == 200 ? 'success' : 'error',
              })
            })
        }
      })
    },
    resetForm() {
      this.$refs['elRegistered'].resetFields()
    },
  },
}
</script>
<style>
.registered {
  width: 50%;
  height: 30%;
  margin: auto;
}
</style>
