# 角色扮演对话游戏

## 使用前请先阅读前言和用法！！！

## 前言
马上就是情人节了！是不是还在为送女友什么礼物而发愁呢？作为一个程序员，当然要送一些**有心意**而且带有**程序员特色**的小礼物啦，我已经为大家准备好了！

写这款作品的前因是女朋友一直催我写一个能够有这种效果的小东西来促进交流，奈何之前一直技术与时间不允许，现在终于能够沉下心来做了那么一款小作品。希望这个小东西可以给大家带来一些帮助，或者能够帮你们得到女朋友微微一笑，我就不算白花了这些功夫吧。
## 效果图

 ![image](https://github.com/ctts/dialogue/raw/dev/images/效果图.png)
 ![image](https://github.com/ctts/dialogue/raw/dev/images/创建页面.png)
 
## 用法
用法分为新建和导入，建议先导入测试json来查看效果。
### 导入
因为并没有做服务端，和数据库端，所以所有操作都是在本地和localstrorage中执行的。数据都是以json的格式存储。
1.打开createText.html文件，点击**导入代码**按钮，将json数据粘贴进去，点击确定，**不要加引号**
2.点击**转到**按钮即可测试。

为了帮助大家熟悉使用，这里贴一条测试json。**看完之后请不要吐槽剧情！**  这里的json只是我的个人想法，熟悉操作之后，大家可以自由发挥，自制一个对话游戏。

{"0":{"plotArray":[],"id":"0","keyNode":{"id":-1,"content":"请刷新页面重新开始游戏","leftOption":"拜拜~","rightOption":"拜拜~","leftNext":"0","rightNext":"0"}},"1":{"plotArray":[],"id":"1","keyNode":{"id":-1,"content":"欢迎来到游戏（男友去哪儿了）。/n\n请选择你的角色","leftOption":"女友","rightOption":"陌生人","leftNext":"2","rightNext":"999"}},"2":{"plotArray":[],"id":"2","keyNode":{"id":-1,"content":"您的职业是（女友） /n\n是否开始冒险。","leftOption":"我还需要等一会","rightOption":"是","leftNext":"998","rightNext":"3"}},"3":{"plotArray":[{"id":0,"content":"早上一起床，你发现你的男友突然消失了！ /n\n你会去哪里找他呢？","leftOption":"厨房","rightOption":"厕所"}],"id":"3","keyNode":{"id":-1,"content":"你过去一看，发现你的男友一脸深沉的站在那里。  /n\n你仿佛瞟见一个黑色的身影从你身后一闪而过，当你回头看时，男友一把抱住了你 /n\n之后一言不发的独自走了。","leftOption":"上去拉住他","rightOption":"莫名其妙","leftNext":"4","rightNext":"997"}},"4":{"plotArray":[],"id":"4","keyNode":{"id":-1,"content":"你愣了一会，在后面叫住了他 /n\n 可他还是头也不回的跑走了。这时候你选择","leftOption":"他可能来姨夫了，不管他","rightOption":"去找他！","leftNext":"997","rightNext":"5"}},"5":{"plotArray":[],"id":"5","keyNode":{"id":-1,"content":"\n你仔细思考了一番，决定先去他家调查一番。    /n\n这是你第一次来到他家，你站在他家门前。","leftOption":"万一家长在怎么办……","rightOption":"硬着头皮敲门。","leftNext":"997","rightNext":"6"}},"6":{"plotArray":[{"id":0,"content":"你过去敲了门，却发现门开着。","leftOption":"走进去","rightOption":"走进去"},{"id":1,"content":"你凭着感觉来到了他的房间，发现他的桌上摊着笔记本。","leftOption":"翻看","rightOption":"翻看"},{"id":2,"content":"上面写着：“不要来找我！”","leftOption":"……","rightOption":"……"}],"id":"6","keyNode":{"id":-1,"content":"你经过了一番深思熟虑，决定……","leftOption":"听他的，先放放吧","rightOption":"不行！继续找","leftNext":"997","rightNext":"7"}},"7":{"plotArray":[{"id":0,"content":"你决定继续搜索线索，你在他的床底下发现了一个水晶球  /n在球里的影像里看见了你们经常去的公园","leftOption":"去公园","rightOption":"去公园"},{"id":1,"content":"你来到了水晶球中显示的地方，看见他站在那里，你问到","leftOption":"这是怎么回事？","rightOption":"你去干嘛了？"},{"id":2,"content":"“我这是在救你。”","leftOption":"？？？","rightOption":"？？？"},{"id":3,"content":"“这是一个神秘人给我的水晶球，他说这个水晶球可以预知未来，但是只有一次机会……”","leftOption":"然后呢？","rightOption":"你预知了什么？"},{"id":4,"content":"“我选择了预知我们的未来，于是我在球里看到了未来我们婚后出去旅游时出了车祸，你英年早逝”","leftOption":"……","rightOption":"……"}],"id":"7","keyNode":{"id":-1,"content":"“我决定要阻止这一切的发生”/n  ……  /n“我们结束吧。”","leftOption":"……那好吧","rightOption":"不，我不相信","leftNext":"997","rightNext":"8"}},"8":{"plotArray":[{"id":0,"content":"“我这是为你好……”","leftOption":"一个破球就把你动摇了？","rightOption":"一个破球的话你也信？"},{"id":1,"content":"“唉，由不得我不信啊”","leftOption":"……","rightOption":"……"},{"id":2,"content":"这时候，一个黑色人影突然出现，说道：“我是一个死神” /n“如果我说球里发生的都是真的，你还会继续爱他吗？”","leftOption":"嗯，大不了以后不去旅游了","rightOption":"……没有什么难关是我们携手度过不了的"},{"id":3,"content":"“哈哈哈哈哈，恭喜你们通过了我对你们的考验……”","leftOption":"……","rightOption":"？？？"},{"id":4,"content":"“很久没有遇到像你们这样的情侣的，祝福你们，你们将会白头偕老。”","leftOption":"我还没反应过来……","rightOption":"……谢谢"},{"id":5,"content":"“哈哈哈哈，不打扰你们了，再见” /n说完，人影逐渐消失。\n\n“宝贝……我……”","leftOption":"不用多说，我们回家吧  /n","rightOption":"嘘……我们回家吧"}],"id":"8","keyNode":{"id":-1,"content":"\n在回去的路上。\n  /n\n“我有话想对你说……”","leftOption":"我也有话想对你说 /n 那我先说","rightOption":"我也有话想对你说 /n 那你先说","leftNext":"9","rightNext":"10"}},"9":{"plotArray":[],"id":"9","keyNode":{"id":-1,"content":"好……那你说吧","leftOption":"我要带你去见家长","rightOption":"我要带你去见家长","leftNext":"11","rightNext":"11"}},"10":{"plotArray":[],"id":"10","keyNode":{"id":-1,"content":"我想带你去见见爸妈……","leftOption":"嗯……好","rightOption":"你抢我台词！","leftNext":"11","rightNext":"11"}},"11":{"plotArray":[],"id":"11","keyNode":{"id":-1,"content":"两人在见过家长后，不久就结婚了 /n\n\n从此，两人过上了幸福快乐的日子。","leftOption":"HappyEnding","rightOption":"HappyEnding","leftNext":"11","rightNext":"11"}},"997":{"plotArray":[],"id":"997","keyNode":{"id":-1,"content":"你失去了你男友的消息。","leftOption":"重新开始","rightOption":"重新开始","leftNext":"997","rightNext":"997"}},"998":{"plotArray":[],"id":"998","keyNode":{"id":-1,"content":"你的男友在你等待时被别人拐走了。","leftOption":"……","rightOption":"……","leftNext":"998","rightNext":"998"}},"999":{"plotArray":[],"id":"999","keyNode":{"id":-1,"content":"对不起，这里不欢迎陌生人。","leftOption":"拜拜~","rightOption":"拜拜~","leftNext":"0","rightNext":"0"}}}


### 新建对话
1. 下载项目后，打开createTest.html文件
2. 请根据createTest文件中的按钮阅读操作文档
3. 完成剧本后，点击展示按钮，复制控制台中的json
4. **打开index.html源代码，将json复制入63行，取消63，64行的注释。**
5. **可以将项目放入服务器，或通过H5Builder将项目打包成app**
6. 发送给别人



## 操作文档
我们先看一下原理。

 ![image](https://github.com/ctts/dialogue/raw/dev/images/原理.png)
 
 全文是通过队列的id将剧情串联起来，通过关键节点中的id，联系到下个节点，如此反复。
 
### /n
在内容框中输入内容希望可以分条发送时，使用 /n 来将两句话隔开,如
```
欢迎来到游戏（男友去哪儿了）。/n
请选择你的角色
```

### 更换头像
想要更换头像直接前往images文件夹下更改left_head图像和right_head图像。

### 更改对话人
修改index页面第三十行

### 添加队列按钮
  点击可以添加一个剧情队列
  
### 展示按钮
  当你完成剧本后，点击展示按钮可以将数据显示在控制台上（f12）。打开控制台，选中数据后复制。
  
### 转到按钮
  当你完成剧本后，点击展示按钮可以前往index页面进行测试。
 
### 清空缓存
  清空**本地和面板**上的所有数据。
  
### 导入代码
  将复制的json代码复制入框内可以实现快速编辑。
  
### 添加内容
  添加一个剧情框
  
### 删除项
  删除一个剧情框
  
### 删除列
  删除一个剧情队列




