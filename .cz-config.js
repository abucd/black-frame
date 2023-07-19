module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: '✨ feat:     添加了一个超赞的新功能' },
    { value: 'fix', name: '🐛 fix:      解决了个小bug' },
    { value: 'docs', name: '📝 docs:     更新了文档，变得更易懂啦' },
    { value: 'style', name: '💅 style:    优化了代码的样式，美轮美奂' },
    { value: 'refactor', name: '♻️ refactor: 重构了一下代码，更高效了' },
    { value: 'perf', name: '⚡️ perf:     提升了性能，飞起来了' },
    { value: 'test', name: '✅ test:     增加了一些厉害的测试' },
    { value: 'chore', name: '🔧 chore:    调整了构建过程或辅助工具，更顺畅了' },
    { value: 'revert', name: '⏪️ revert:   回退到以前的版本' },
    { value: 'build', name: '📦 build:    打包成可执行文件，可以装进口袋了' }
  ],
  // 消息步骤
  messages: {
    type: '请选择你认为最酷的类型:',
    customScope: '请告诉我这个改动牵扯到的范围（可选）:',
    subject: '请用一句话简要地描述这个酷炫的提交（必填）:',
    body: '请详细描述一下，让大家瞪大眼睛赞叹不已（可选）:',
    footer: '请输入你要一并澄清的问题号码（可选）:',
    confirmCommit: '确认用以上信息击败全宇宙？(y/n/e/h)'
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72
}
