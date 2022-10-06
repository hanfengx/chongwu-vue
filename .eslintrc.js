module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    'indent': ['error', 2], //2 个空格缩进
    'no-alert': 0,
    'no-multi-spaces': 'error', // 禁止多个空格 
    'semi': [2, 'never'] ,// 自动补充分号
    'quotes': ['error', 'single'], // 使用单引号
      
      
  }
}
