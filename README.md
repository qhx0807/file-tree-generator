# filetree
 
以树形结构显示文件目录结构，它非常适合给别人介绍文件目录的组成框架。默认忽略 `node_modules` 和 `.git`

## Installation

```bash

$ npm install file-tree-generator -g
```

## Usage

```bash
# 在任何目录下输入
$ filetree

# 出现
# -------目录树文件filetree.txt已创建-------
```
`filetree.txt`
```
├── /adapters/
│  ├── http.js
│  ├── README.md
│  └── xhr.js
├── axios.js
├── /cancel/
│  ├── Cancel.js
│  ├── CancelToken.js
│  └── isCancel.js
├── /core/
│  ├── Axios.js
│  ├── createError.js
│  ├── dispatchRequest.js
│  ├── enhanceError.js
│  ├── InterceptorManager.js
│  ├── mergeConfig.js
│  ├── README.md
│  ├── settle.js
│  └── transformData.js
├── defaults.js
├── /helpers/
│  ├── bind.js
│  ├── buildURL.js
│  ├── combineURLs.js
│  ├── cookies.js
│  ├── deprecatedMethod.js
│  ├── isAbsoluteURL.js
│  ├── isURLSameOrigin.js
│  ├── normalizeHeaderName.js
│  ├── parseHeaders.js
│  ├── README.md
│  └── spread.js
└── utils.js
```
