import * as Mock from 'mockjs'
console.log(111,Mock)
// 使用 Mock.js生成随机数据
 Mock.mock('/api/regis', 'post', () => {
    console.log('888')
    return {
        code: 200,
        data: {
         id:111
        },
      }
});