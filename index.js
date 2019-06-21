#!/usr/bin/env node

const fs = require('fs')
const { resolve } = require('path')

const charSet = {
  node: '├──',
  pipe: '│  ',
  last: '└──'
}

const fileMap = (dir, deep) => {
  if (dir.indexOf('node_modules') > -1 || dir.indexOf('.git') > -1) return false
  let files = fs.readdirSync(dir)
  let maps = []
  files.forEach(file => {
    const filepath = resolve(dir, file)
    const isdir = fs.statSync(filepath).isDirectory()
    const obj = {
      name: file,
      isdir: isdir,
      deep: deep,
      children: []
    }
    if (isdir) {
      let d = deep + 1
      obj.children = fileMap(filepath, d)
    }
    maps.push(obj)
  })
  return maps
}

const filestack = fileMap(process.cwd(), 0)

const fileOutPutLog = (arr) => {
  let str = ''
  arr.forEach((item, index) => {
    let i = 0
    while (i < item.deep) {
      str += charSet.pipe
      i++
    }
    str += (index === arr.length - 1 && item.children.length === 0) ? charSet.last : charSet.node
    str += item.isdir ? ` /${item.name}/\r\n` : ` ${item.name}\r\n`
    if (item.children.length > 0) {
      str += fileOutPutLog(item.children)
    }
  })
  return str
}
const contents = fileOutPutLog(filestack)
fs.writeFile(process.cwd() + '/filetree.txt', contents, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('-------目录树文件filetree.txt已创建-------')
})
