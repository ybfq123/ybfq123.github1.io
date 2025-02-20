//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://image.ybfq.us.kg/bizhihui_com_20231111162437169969107731154.jpg)",
    "url(https://image.ybfq.us.kg/bizhihui_com_20231111170038169969323820811.jpg)",
    "url(https://image.ybfq.us.kg/【哲风壁纸】日向雏田-水中女孩.png)",
    "url(https://image.ybfq.us.kg/c58cef0d5e8a8e05a038ea76fd836cccda70cbdd.jpg)",
    "url(https://image.ybfq.us.kg/pexels-pok-rie-33563-2049422.jpg)",
    "url(https://image.ybfq.us.kg/6628990012b51.jpg)",
    "url(https://image.ybfq.us.kg/1710220343872171022034348.jpg)",
    "url(https://image.ybfq.us.kg/【哲风壁纸】武侠-水墨.png)",
    "url(https://image.ybfq.us.kg/【哲风壁纸】冬天的吉林-积雪森林.png)",
    "url(https://image.ybfq.us.kg/【哲风壁纸】氛围感-街边小店.png)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];