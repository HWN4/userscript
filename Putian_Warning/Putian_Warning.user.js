// ==UserScript==
// @name Putian Warning
// @version 3
// @description 莆田系医院网站提醒
// @include http://*/*
// @include https://*/*
// @author ShuangYa
// @run-at document-end
// @grant GM_addStyle
// @namespace http://blog.sylingd.com
// @updateURL https://userscript.firefoxcn.net/js/Putian_Warning.meta.js
// @downloadURL https://userscript.firefoxcn.net/js/Putian_Warning.user.js
// ==/UserScript==
(function() {
	var list = {"www.lztlyy.com":{"名称":"兰州天伦不孕症医院","网址":["http:\/\/www.lztlyy.com"]},"www.scmylike.com":{"名称":"成都美莱医学美容医院","证据":["参见文末美莱医疗美容连锁医院集团条目"],"电话":["02868268888"],"网址":["http:\/\/www.scmylike.com\/"],"地址":["成都市青华路31号杜甫草堂北大门旁"]},"www.whablnk.com":{"名称":"武汉阿波罗男科医院","电话":["02785888669"],"网址":["http:\/\/www.whablnk.com"]},"www.xdmnyy.com":{"名称":"武汉现代泌尿外科医院","电话":["02782886888"],"网址":["http:\/\/www.xdmnyy.com"]},"www.whnanke.net":{"名称":"武汉博大男科医院","电话":["02785896666"],"网址":["http:\/\/www.whnanke.net"]},"www.whmsnk.com":{"名称":"武汉名仕泌尿外科医院","电话":["02788328080"],"网址":["http:\/\/www.whmsnk.com"]},"www.snvzi.com":{"名称":"湖州阳光女子医院","网址":["http:\/\/www.snvzi.com","http:\/\/www.hznvzi.com"]},"www.hznvzi.com":{"名称":"湖州阳光女子医院","网址":["http:\/\/www.snvzi.com","http:\/\/www.hznvzi.com"]},"www.fzhmzx.com":{"名称":"福州华美美莱整形医院","证据":["参见文末美莱医疗美容连锁医院集团条目"],"电话":["059122966666"],"网址":["http:\/\/www.fzhmzx.com\/"],"地址":["福州市晋安区塔头路177号"]},"www.chinesefamousdoctor.org":{"名称":"中华名医协会未完待续","相关资料:":["工信部备案信息主办单位名称北京世华天地网络技术服务有限公司主办单位性质企业网站名称名医协会网站负责人姓名周建网站备案许可号京ICP证000045号23"],"电话":["15911030069","香港8522915.7428"],"网址":["http:\/\/www.chinesefamousdoctor.org\/"],"地址":["香港铜锣湾轩尼诗道488号轩尼诗大厦10M永久地址"]},"www.cnzhongliu.com":{"名称":"中国肿瘤网未完待续","网址":["http:\/\/www.cnzhongliu.com\/"]},"shmdy2015.tecenet.com":{"名称":"上海美迪亚医院投资集团有限公司","证据":["上海工商行政管理局企业注册登记信息公开(http:\/\/www.sgs.gov.cn\/lz\/etpsInfo.do?method=index)查询显示上海美迪亚医院投资集团有限公司的法定代表人陈国兴","陈国兴相关信息莆田中国健康产业总会(http:\/\/www.99169916.com\/content\/899171989538.html)","公司主页显示美迪亚医院集团目前投资的主要项目有中美合资上海美迪西生物医药有限公司北京中研东方国际医学研究院上海杭州深圳武汉长沙无锡昆山温州宁波河南新郑等地设立大型医疗机构拥有上海虹桥医院上海健桥医院上海新虹桥医院昆山虹桥医院无锡虹桥医院杭州虹桥医院杭州天目山医院深圳建国泌尿外科医院等三十多家医院可依据以上名单确认各地区医院为莆田系"],"网址":["http:\/\/shmdy2015.tecenet.com\/"],"地址":["上海市闵行区吴中路686弄D座10楼"]},"www.mylike.com":{"名称":"美莱医疗美容连锁医院集团","证据":["工信部备案信息:上海美莱投资管理有限公司网站负责人陈国付备案号沪ICP备12022412号6","全国企业信息公示系统(https:\/\/m.imgur.com\/I3rbbxh)显示上海美莱投资管理有限公司法定代表人陈金秀自然人股东为陈金秀和詹建昇","谷歌缓存页面(https:\/\/webcache.googleusercontent.com\/search?q=cache:D5otmZNewMJ:www.ptshsh.com\/index.php%3Fm%3Dcms%26q%3Dview%26id%3D33cd=1hl=enct=clnklr=langen%7ClangzhCN%7ClangzhTW)显示这是谷歌对上海市莆田商会(http:\/\/www.ptshsh.com\/)网页的缓存陈金秀是上海市莆田商会名誉会长籍贯秀屿区东庄镇","以上证据确认完毕可按照美莱医疗美容医院集团的官网确认其下属各地医院属于莆田系无需继续查证"],"电话":["4008980000"],"网址":["http:\/\/www.mylike.com\/"]},"www.songhongen.com.cn":{"名称":"中华肿瘤康复网(中医肿瘤康复咨询网)未完待续","相关资料":["工信部备案信息主办单位个人并非企业网站负责人宋洪恩备案许可号豫ICP备09017762号1网站名称健康康复网和显示名称中医肿瘤康复咨询网明显不符而百度搜索显示为中华肿瘤康复网","网站显示汇款信息(http:\/\/www.songhongen.com.cn\/order\/index.htm)"],"电话":["037168717218","037168715173","13803893403","13803893402"],"网址":["http:\/\/www.songhongen.com.cn\/"],"地址":["郑州市航海中路95号(台胞小区24号)"]},"www.whdsfk.com":{"名称":"武汉都市妇产医院","电话":["02785268003"],"网址":["http:\/\/www.whdsfk.com"]},"www.87189999.com":{"名称":"武汉真爱妇产医院","电话":["02787189999"],"网址":["http:\/\/www.87189999.com"]},"www.whbjyy.com":{"名称":"武汉百佳医院","电话":["02766666333"],"网址":["http:\/\/www.whbjyy.com"]},"www.mlyfc.net":{"名称":"武汉玛利亚妇产科医院","电话":["02788858965"],"网址":["http:\/\/www.mlyfc.net"]},"www.lr120.com":{"名称":"合肥丽人妇科医院","电话":["055163653311"],"网址":["http:\/\/www.lr120.com\/","http:\/\/3612999.com\/"],"地址":["安徽省合肥市包河区屯溪路349号"]},"3612999.com":{"名称":"合肥丽人妇科医院","电话":["055163653311"],"网址":["http:\/\/www.lr120.com\/","http:\/\/3612999.com\/"],"地址":["安徽省合肥市包河区屯溪路349号"]},"www.hfneweye.com":{"名称":"合肥新视界眼科医院","电话":["4006651616"],"网址":["http:\/\/www.hfneweye.com\/"],"地址":["合肥包河区徽州大道689号(徽州大道与九华山路交口往南300米)"]},"www.qdszyy.com":{"名称":"启东市中医院","电话":["051383212540"],"网址":["http:\/\/www.qdszyy.com\/"],"地址":["江苏省启东市紫薇中路458号"]},"www.fuke120.cn":{"名称":"北京艾丽斯妇科医院","用户反馈":["亲测医院收费不透明治疗过程中各种乱开检查的单子手术价格为普通医院价格10倍左右最后医院连检查的结果都不会给你有类似的受害者http:\/\/money.163.com\/16\/0329\/09\/BJAIJCRK00253B0H.html(http:\/\/money.163.com\/16\/0329\/09\/BJAIJCRK00253B0H.html)http:\/\/ask.yaolan.com\/question\/15112409310913796432.html(http:\/\/ask.yaolan.com\/question\/15112409310913796432.html)"],"网址":["http:\/\/www.fuke120.cn\/"]},"www.bjmylike.com":{"名称":"北京美莱医疗美容医院(所属为北京美莱医疗美容医院有限公司美莱医疗美容(连锁)医院集团http:\/\/www.mylike.com\/)","电话":["01056935111"],"网址":["http:\/\/www.bjmylike.com\/"],"地址":["北京市朝阳区朝阳门外大街227号"]},"www.bjjsyy.com":{"名称":"北京京顺医院","电话":["01069423999"],"网址":["http:\/\/www.bjjsyy.com\/"]},"www.whmdgc.com":{"名称":"武汉明德肛肠医院","电话":["02787585666"],"网址":["http:\/\/www.whmdgc.com"]},"www.39bsw.com":{"名称":"武汉博仕肛肠肛肠医院","电话":["02788855999"],"网址":["http:\/\/www.39bsw.com"]},"www.hbjieshi.com":{"名称":"武汉京都结石病医院","电话":["02788616718"],"网址":["http:\/\/www.hbjieshi.com"]},"www.whrenan.com":{"名称":"武汉仁安眼耳鼻喉医院","电话":["4006027669"],"网址":["http:\/\/www.whrenan.com"]},"www.gytsm.com":{"名称":"武汉国医堂","电话":["02787639188"],"网址":["http:\/\/www.gytsm.com"]},"www.hzjl120.com":{"名称":"杭州萧山九龙男科医院","网址":["http:\/\/www.hzjl120.com","http:\/\/www.nkxsjl.com"]},"www.nkxsjl.com":{"名称":"杭州萧山九龙男科医院","网址":["http:\/\/www.hzjl120.com","http:\/\/www.nkxsjl.com"]},"www.0571tongji.com":{"名称":"杭州同济医院","网址":["http:\/\/www.0571tongji.com","http:\/\/www.hztjh.com"]},"www.hztjh.com":{"名称":"杭州同济医院","网址":["http:\/\/www.0571tongji.com","http:\/\/www.hztjh.com"]},"www.hzgryy.com":{"名称":"杭州广仁医院","网址":["http:\/\/www.hzgryy.com","http:\/\/www.zjbybyw.com"]},"www.zjbybyw.com":{"名称":"杭州广仁医院","网址":["http:\/\/www.hzgryy.com","http:\/\/www.zjbybyw.com"]},"www.hzmylike.com":{"名称":"杭州美莱医疗美容医院","证据":["参见文末美莱医疗美容连锁医院集团条目"],"电话":["4000085188"],"网址":["http:\/\/www.hzmylike.com\/"],"地址":["杭州市西湖区莫干山路333号"]},"www.hzhqyy.com":{"名称":"杭州虹桥医院","网址":["http:\/\/www.hzhqyy.com"]},"www.hzabl.com":{"名称":"杭州阿波罗男子医院","网址":["http:\/\/www.hzabl.com","http:\/\/www.hzabl.cn"]},"www.hzabl.cn":{"名称":"杭州阿波罗男子医院","网址":["http:\/\/www.hzabl.com","http:\/\/www.hzabl.cn"]},"www.hzmly.com":{"名称":"杭州玛莉亚妇女医院","网址":["http:\/\/www.hzmly.com"]},"www.97120.cn":{"名称":"杭州天目山妇产医院(杭州天目山医院)","证据":["确认莆田系参见文末上海美迪亚医院投资集团有限公司条目","天涯帖子:杭州天目山医院你到底黑不黑(http:\/\/bbs.tianya.cn\/postfree19291961.shtml)"],"网址":["http:\/\/www.97120.cn\/","http:\/\/www.tmsfk.com\/"],"地址":["杭州市天目山路319号"]},"www.tmsfk.com":{"名称":"杭州天目山妇产医院(杭州天目山医院)","证据":["确认莆田系参见文末上海美迪亚医院投资集团有限公司条目","天涯帖子:杭州天目山医院你到底黑不黑(http:\/\/bbs.tianya.cn\/postfree19291961.shtml)"],"网址":["http:\/\/www.97120.cn\/","http:\/\/www.tmsfk.com\/"],"地址":["杭州市天目山路319号"]},"www.hm120.cn":{"名称":"杭州和睦医院","网址":["http:\/\/www.hm120.cn"]},"www.zsxdfk.com":{"名称":"舟山现代妇科医院","网址":["http:\/\/www.zsxdfk.com"]},"www.tjcg120.com":{"名称":"天津长庚耳鼻喉医院","电话":["4006703120"],"网址":["http:\/\/www.tjcg120.com"]},"www.huaxiahp.com":{"名称":"天津华厦医院","电话":["02228230188"],"网址":["http:\/\/www.huaxiahp.com"]},"":{"名称":"丽水九龙男科医院","电话":["05782119011"],"QQ:3082311948":[],"相关信息":["全国企业信用信息公示系统浙江(http:\/\/gsxt.zjaic.gov.cn\/appbasicinfo\/doViewAppBasicInfo.do?corpid=780CFC6E907B4DB490707687D41A927EA2D082CB21CFD8173A93D6CF9ADA5299)显示法定代表人为陈元华"],"地址":["浙江省丽水市莲都区解放街88号"],"工商注册名称":["丽水九龙医院有限公司"],"网址":["http:\/\/www.lsjlyy.com","http:\/\/www.2119011.com","http:\/\/www1.2119011.com","www.lsjlnkyy.com","m.lsjlnkyy.com"]},"www.yafrlaowuw.com":{"名称":"天津254医院\/解放军254医院部分科室","电话":["02226220266"],"网址":["http:\/\/www.yafrlaowuw.com\/"],"地址":["天津市河北区黄纬路60号"]},"www.28278888.com":{"名称":"天津乐园医院","电话":["02228278888"],"网址":["http:\/\/www.28278888.com"]},"www.lr16.com":{"名称":"天津丽人女子医院","电话":["02224156655"],"网址":["http:\/\/www.lr16.com","http:\/\/www.tjlrfk.com","http:\/\/lr16.tj.aimeicity.com"]},"www.tjlrfk.com":{"名称":"天津丽人女子医院","电话":["02224156655"],"网址":["http:\/\/www.lr16.com","http:\/\/www.tjlrfk.com","http:\/\/lr16.tj.aimeicity.com"]},"lr16.tj.aimeicity.com":{"名称":"天津丽人女子医院","电话":["02224156655"],"网址":["http:\/\/www.lr16.com","http:\/\/www.tjlrfk.com","http:\/\/lr16.tj.aimeicity.com"]},"www.tjhsfk.com":{"名称":"天津华山医院","电话":["02258815889"],"网址":["http:\/\/www.tjhsfk.com","http:\/\/www.bevall.com"]},"www.bevall.com":{"名称":"天津华山医院","电话":["02258815889"],"网址":["http:\/\/www.tjhsfk.com","http:\/\/www.bevall.com"]},"www.nkyy022.com":{"名称":"天津阿波罗医院","电话":["02228111999"],"网址":["http:\/\/www.nkyy022.com\/"],"地址":["天津市南开区黄河道38号"]},"www.huabeihp.com":{"名称":"天津华北医院","电话":["02224418755"],"网址":["http:\/\/www.huabeihp.com"]},"www.tjkrml.com":{"名称":"天津坤如玛丽医院","电话":["02228285031"],"网址":["http:\/\/www.tjkrml.com"]},"www.022nz.com":{"名称":"天津现代女子医院","电话":["02224459999"],"网址":["http:\/\/www.022nz.com"]},"www.dgmaria.cn":{"名称":"东莞玛丽亚妇产医院","电话":["076922993333"],"网址":["http:\/\/www.dgmaria.cn\/"],"地址":["东莞南城莞太大道(广彩城酒店旁)"]},"www.39568888.com":{"名称":"大连长城妇科医院","电话":["4000078120"],"网址":["http:\/\/www.39568888.com"]},"zqnkyy120.com":{"名称":"肇庆现代男科医院","电话":["07582221120"],"网址":["http:\/\/zqnkyy120.com\/"],"地址":["肇庆市端州区二塔路中段市二人民医院前行20米左转"]},"www.nccharm.com.cn":{"名称":"南昌佳美美容医院","微信公众号":["nccharm"],"电话":["4006796066"],"网址":["http:\/\/www.nccharm.com.cn"],"地址":["江西省南昌市青云谱区洪都南大道273号"]},"www.btsdhjsj.com":{"名称":"南昌博爱泌尿专科医院","QQ":["542099677","3237581371"],"电话":["079186658922","079187958517"],"网址":["http:\/\/www.btsdhjsj.com","http:\/\/www.ncboai.cn","http:\/\/www.ncboai.net","http:\/\/www.ot8.cn","http:\/\/www.xngxw.com"],"地址":["江西省南昌市东湖区胜利路355号(近八一桥)"]},"www.ncboai.cn":{"名称":"南昌博爱泌尿专科医院","QQ":["542099677","3237581371"],"电话":["079186658922","079187958517"],"网址":["http:\/\/www.btsdhjsj.com","http:\/\/www.ncboai.cn","http:\/\/www.ncboai.net","http:\/\/www.ot8.cn","http:\/\/www.xngxw.com"],"地址":["江西省南昌市东湖区胜利路355号(近八一桥)"]},"www.ncboai.net":{"名称":"南昌博爱泌尿专科医院","QQ":["542099677","3237581371"],"电话":["079186658922","079187958517"],"网址":["http:\/\/www.btsdhjsj.com","http:\/\/www.ncboai.cn","http:\/\/www.ncboai.net","http:\/\/www.ot8.cn","http:\/\/www.xngxw.com"],"地址":["江西省南昌市东湖区胜利路355号(近八一桥)"]},"www.ot8.cn":{"名称":"南昌博爱泌尿专科医院","QQ":["542099677","3237581371"],"电话":["079186658922","079187958517"],"网址":["http:\/\/www.btsdhjsj.com","http:\/\/www.ncboai.cn","http:\/\/www.ncboai.net","http:\/\/www.ot8.cn","http:\/\/www.xngxw.com"],"地址":["江西省南昌市东湖区胜利路355号(近八一桥)"]},"www.xngxw.com":{"名称":"南昌博爱泌尿专科医院","QQ":["542099677","3237581371"],"电话":["079186658922","079187958517"],"网址":["http:\/\/www.btsdhjsj.com","http:\/\/www.ncboai.cn","http:\/\/www.ncboai.net","http:\/\/www.ot8.cn","http:\/\/www.xngxw.com"],"地址":["江西省南昌市东湖区胜利路355号(近八一桥)"]},"www.ncebh.com":{"名称":"南昌博大耳鼻咽喉专科医院","电话":["079186658908"],"网址":["http:\/\/www.ncebh.com"],"地址":["江西省南昌市青云谱区洪都南大道237号"]},"www.hand120.com":{"名称":"南昌曙光手足外科医院","微信公众号":["shuguanggongyi"],"电话":["079188230000"],"网址":["http:\/\/www.hand120.com"],"地址":["江西省南昌市解放西路99号"]},"www.nz91.com":{"名称":"南昌仁爱女子医院","电话":["079185207758","079186573333"],"网址":["http:\/\/www.nz91.com"],"地址":["江西省南昌市洪城路636号(洪城大市场正门往西300米路南)"]},"www.wy120.com":{"名称":"南昌市第五医院","微信公众号":["ncdwrmyy"],"电话":["4001606199","079186658901"],"网址":["http:\/\/www.wy120.com"],"地址":["江西省南昌市青云谱区井冈山大道239号(家乐福超市对面)"]},"www.hsbyby.cn":{"名称":"南昌华山不孕不育医院","电话":["4006013130","079186658913","18507005120"],"网址":["http:\/\/www.hsbyby.cn","http:\/\/www.nch3yy.com"],"地址":["江西省南昌市迎宾北大道285号"]},"www.nch3yy.com":{"名称":"南昌华山不孕不育医院","电话":["4006013130","079186658913","18507005120"],"网址":["http:\/\/www.hsbyby.cn","http:\/\/www.nch3yy.com"],"地址":["江西省南昌市迎宾北大道285号"]},"www.0791gc.com":{"名称":"南昌东大肛肠专科医院","电话":["079186822072"],"网址":["http:\/\/www.0791gc.com"],"微信":["ddgc0791"],"地址":["江西省南昌市胜利路298号(八一桥旁)"]},"www.whhxyy.com":{"名称":"武汉华夏医院","电话":["02787275566"],"网址":["http:\/\/www.whhxyy.com"]},"www.hbsrjyy.com":{"名称":"湖北省荣军医院","电话":["02762084891"],"网址":["http:\/\/www.hbsrjyy.com"]},"www.boaifk.com":{"名称":"武汉博爱医院","电话":["02786722223"],"网址":["http:\/\/www.boaifk.com"]},"www.whrenai.com":{"名称":"武汉仁爱医院","电话":["02783798531"],"网址":["http:\/\/www.whrenai.com"]},"www.whzyyy.com":{"名称":"武汉中原医院","电话":["02785733999"],"网址":["http:\/\/www.whzyyy.com"]},"www.hqsmk.com":{"名称":"武汉虎泉医院","电话":["02788089120"],"网址":["http:\/\/www.hqsmk.com"]},"www.szn027.com":{"名称":"武汉送子鸟不孕不育医院","电话":["02783771313"],"网址":["http:\/\/www.szn027.com"]},"www.ctbyw.com":{"名称":"武汉黄浦中西医结合医院","电话":["4009961009"],"网址":["http:\/\/www.ctbyw.com"]},"www.lyys120.com":{"名称":"耒阳云森医院","网址":["http:\/\/www.lyys120.com\/"]},"www.njgtyy.com":{"名称":"南京肛泰中医医院","网址":["http:\/\/www.njgtyy.com\/"],"地址":["建邺区黄山路2号"]},"www.4000303027.com":{"名称":"武汉韩辰整形医院","电话":["4000303027"],"网址":["http:\/\/www.4000303027.com"]},"www.whyestar.com":{"名称":"武汉艺星医疗美容医院","电话":["4000601992"],"网址":["http:\/\/www.whyestar.com"]},"www.zswzx.com":{"名称":"武汉华美整形医院","电话":["4000070606"],"网址":["http:\/\/www.zswzx.com"]},"www.88077777.com":{"名称":"武汉五洲美莱整形美容医院","电话":["02786785799"],"网址":["http:\/\/www.88077777.com"]},"www.bbrmyy.com":{"名称":"信阳博士医院","地址:信阳市申城大道(原大庆路)沁园春旁":[],"网址":["http:\/\/www.bbrmyy.com"],"电话":["03763222555"]},"www.shmylike.com":{"名称":"上海美莱医疗美容医院","电话":["02122235555"],"网址":["http:\/\/www.shmylike.com\/"],"证据:":["所属为美莱医疗美容(连锁)医院集团http:\/\/www.mylike.com\/详见文末美莱医疗美容(连锁)医院集团为莆田系信息"],"地址":["上海长宁区延安西路789号美莱大厦曹家堰路88号"]},"www.tcmmh.com":{"名称":"上海市闵行区中医医院原上海莱茵医院","电话":["02151876888"],"网址":["http:\/\/www.tcmmh.com"],"证据:":["该院页面(http:\/\/www.tcmmh.com\/entry\/149)信息显示上海市闵行区卫生局上海中医药大学附属龙华医院西红柿投资控股有限公司合作共建闵行区中医医院其中上海西红柿投资控股集团董事执行总裁为林一平","全国企业信用信息系统(https:\/\/m.imgur.com\/ADiokDn)显示上海西红柿投资控股有限公司的法定代表人是陈金秀自然人股东包括李爱兰和陈金秀","谷歌缓存页面(https:\/\/webcache.googleusercontent.com\/search?q=cache:D5otmZNewMJ:www.ptshsh.com\/index.php%3Fm%3Dcms%26q%3Dview%26id%3D33cd=1hl=enct=clnklr=langen%7ClangzhCN%7ClangzhTW)显示这是谷歌对上海市莆田商会(http:\/\/www.ptshsh.com\/)网页的缓存陈金秀是上海市莆田商会名誉会长籍贯秀屿区东庄镇","通过上海市企业注册登记信息公开(http:\/\/www.sgs.gov.cn\/lz\/etpsInfo.do?method=index)地址查询显示(https:\/\/imgur.com\/wUqEpMU)上海莱茵医院有限公司于今年四月二十八日注销该公司法定代表人为林一平"],"地址":["上海市闵行区合川路3071号"]},"www.sh411wgk.com":{"名称":"解放军411医院","电话":["4000789411"],"网址":["http:\/\/www.sh411wgk.com"]},"www.mary120.cn":{"名称":"上海玛丽女子医院","电话":["02169726299"],"网址":["http:\/\/www.mary120.cn\/","http:\/\/www.shmary.cn\/"],"地址":["上海市青浦区公园路380号"]},"www.shmary.cn":{"名称":"上海玛丽女子医院","电话":["02169726299"],"网址":["http:\/\/www.mary120.cn\/","http:\/\/www.shmary.cn\/"],"地址":["上海市青浦区公园路380号"]},"www.wz120.cc":{"名称":"上海万众医院","证据":["全国企业信用信息公示系统显示上海万众医院有限公司法定代表人(http:\/\/gsxt.sh.gov.cn\/notice\/notice\/view?uuid=PS0hIGEWVK63gZt7AqIcxkQZ5Db8QeQZtab=01)占阳珊","占阳珊为莆田健康产业总商会常务副会长上海市福建商会理事确认参考新华网微博(http:\/\/weibo.com\/ttarticle\/p\/show?id=2309351000123970977124987204)上海市莆田商会网页谷歌缓存(https:\/\/webcache.googleusercontent.com\/search?q=cache:aEauriVoQOEJ:www.shptsh.com\/index.php%3Fm%3Dcms%26q%3Dview%26id%3D94cd=2hl=enct=clnklr=langen%7ClangzhCN%7ClangzhTW)新闻同济大学与莆系医疗合作共建附属医院(http:\/\/t1.cnhealthcare.com\/article\/20150401\/content472036.html)","用户反馈患者家属(http:\/\/health.dahe.cn\/yypj\/yhb\/201207\/t20120716397644.html)","用户反馈Google缓存(http:\/\/webcache.googleusercontent.com\/search?q=cache%3A%2F%2Fhealth.dahe.cn%2Fyypj%2Fyhb%2F201207%2Ft20120716397644.htmlrlz=1C5CHFAenUS659US659oq=cache%3A%2F%2Fhealth.dahe.cn%2Fyypj%2Fyhb%2F201207%2Ft20120716397644.htmlaqs=chrome..69i57j69i58.4789j0j4sourceid=chromeie=UTF8)","用户反馈天涯网友(http:\/\/bbs.tianya.cn\/post419430301.shtml)","用户反馈Google缓存(http:\/\/webcache.googleusercontent.com\/search?q=cache%3A%2F%2Fbbs.tianya.cn%2Fpost419430301.shtmlrlz=1C5CHFAenUS659US659oq=cache%3A%2F%2Fbbs.tianya.cn%2Fpost419430301.shtmlaqs=chrome..69i57j69i58.2551j0j4sourceid=chromeie=UTF8)"],"电话":["4008892218"],"网址":["http:\/\/www.wz120.cc\/"],"地址":["上海市徐汇区吴中路2号"]},"www.shzhenai.com":{"名称":"上海真爱(整形美容)医院","电话":["02162269000"],"用户反馈":["患者1(http:\/\/www.kobeei.com\/lc\/31713.html)","Google缓存(http:\/\/webcache.googleusercontent.com\/search?sourceid=chromepsyapi2ion=1espv=2ie=UTF8q=cache%3A%2F%2Fwww.kobeei.com%2Flc%2F31713.htmloq=cache%3A%2F%2Fwww.kobeei.com%2Flc%2F31713.htmlrlz=1C5CHFAenUS659US659aqs=chrome..69i57j69i58.4678j0j4)"],"网址":["http:\/\/www.shzhenai.com\/"]},"www.jqbyby.com":{"名称":"上海健桥医院","电话":["02156659999","02165022556"],"上海长江医院":[],"网址":["http:\/\/www.jqbyby.com","http:\/\/www.cjhospital.com"]},"www.cjhospital.com":{"名称":"上海健桥医院","电话":["02156659999","02165022556"],"上海长江医院":[],"网址":["http:\/\/www.jqbyby.com","http:\/\/www.cjhospital.com"]},"www.xinhongqiao.cn":{"名称":"上海新虹桥医院(号称上海男科医院)","电话":["02162092255"],"网址":["http:\/\/www.xinhongqiao.cn\/"],"地址":["上海长宁区虹古路85号(虹桥开发区西侧)"]},"23759.zhaopin.job120.com":{"名称":"上海国正医院(注:隶属上海明爱医疗集团)没有找到","电话":["02158009999","18801856118"],"网址":["http:\/\/23759.zhaopin.job120.com\/","http:\/\/shgzyy.cn.b2b168.com\/"],"地址":["上海市南汇区惠南镇人民西路99号"]},"shgzyy.cn.b2b168.com":{"名称":"上海国正医院(注:隶属上海明爱医疗集团)没有找到","电话":["02158009999","18801856118"],"网址":["http:\/\/23759.zhaopin.job120.com\/","http:\/\/shgzyy.cn.b2b168.com\/"],"地址":["上海市南汇区惠南镇人民西路99号"]},"www.nanpuyy.com":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"www.brandv.org":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"www.fyjx.org":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"www.fdfzxy.org":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"www.acgene.org":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"www.nanpu120.com":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"m.up54.com":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"www.rzjfk.com":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"yyk.qqyy.com":{"名称":"上海南浦妇科医院","相关资料:":["这是百度和谷歌发现网址最多的医院","最后一个网址http:\/\/yyk.qqyy.com\/h14964\/所属全球医院网http:\/\/www.qqyy.com\/工信部备案信息(https:\/\/m.imgur.com\/VqVuGnj)为闽ICP备09014062号20141106福州网健天下网络科技有限公司","谷歌搜索关键词医院site:.qqyy.com可以发现很多在这个名单上出现的医院可以为进一步搜索参考","天涯帖子上海南浦妇科医院的受害者该怎么维权(http:\/\/bbs.tianya.cn\/post8287848591.shtml)","网址http:\/\/www.pmref.com\/将自己称为上海松江区妇科医院而电话仍然是02158891199并且在这个网页http:\/\/www.pmref.com\/yyjs\/51.html显示为南浦妇科医院"],"电话":["02158891199","15821608827"],"网址":["http:\/\/www.nanpuyy.com\/","http:\/\/www.brandv.org\/","http:\/\/www.fyjx.org\/","http:\/\/www.fdfzxy.org\/","http:\/\/www.acgene.org\/","http:\/\/www.nanpu120.com\/","http:\/\/m.up54.com\/","http:\/\/www.rzjfk.com\/","http:\/\/yyk.qqyy.com\/h14964\/"],"地址":["上海市浦东新区浦东南路2250号南浦大桥下"]},"www.28567.hos.999120.net":{"名称":"上海城市女子医院","电话":["02151092999"],"网址":["http:\/\/www.28567.hos.999120.net\/"],"地址":["上海市普陀区曹安路1352号"]},"www.long120.cn":{"名称":"上海九龙男子医院","电话":["02152739067","02152732699"],"网址":["http:\/\/www.long120.cn","http:\/\/www.shjlnzyy.com\/"],"地址":["上海市长宁区中山西路333号近中山公园"]},"www.shjlnzyy.com":{"名称":"上海九龙男子医院","电话":["02152739067","02152732699"],"网址":["http:\/\/www.long120.cn","http:\/\/www.shjlnzyy.com\/"],"地址":["上海市长宁区中山西路333号近中山公园"]},"www.shhuamei.cn":{"名称":"上海华美医疗美容医院","相关资料":["工信部备案信息主办单位上海华美医疗美容医院有限公司网站负责人蔡智俊备案许可证号沪ICP备13030768号1","上海企业信息登记注册公开查询信息上海华美医疗美容医院有限公司法定代表人雷启龙自然人股东洪玲燕黄志佳","黄志佳相关信息莆田青年发展促进会珠海第三次交流会顺利召开(http:\/\/zonghui.hxyjw.com\/show146921)中国健康产业总会上海分会筹备大会在沪胜利召开上海市莆田商会(https:\/\/www.google.com\/search?hl=enq=%E9%BB%84%E5%BF%97%E4%BD%B3site%3Awww.ptshsh.comnewwindow=1hl=enq=%E9%BB%84%E5%BF%97%E4%BD%B3site:ptshsh.com)请进一步求证"],"电话":["02158856655","4008806580"],"网址":["http:\/\/www.shhuamei.cn"],"地址":["上海市市辖区浦东新区源深路155号"]},"boaihospital.com":{"名称":"上海博爱医院是否属于莆田系存在争议请继续求证","电话":["02164333999","02164312600"],"网址":["http:\/\/boaihospital.com\/"],"证据:":["这个网页(http:\/\/www.gotoread.com\/s\/e\/?vo=3803p=43)是瞭望东方周刊2007年第4期(电子杂志)的报道莆田系败走上海博爱医院报道记者为李蔚和朱国栋文章提到上海博爱医院是上海第一家民营医院2004年莆田系曾入股上海博爱医院当时莆田人的股份是中骏20%美迪亚20%澳信20%这三家医疗投资集团的掌门人分别为莆田游医大佬詹玉鹏詹国团和林宗金2006年3月上海市卫生局会同市工商局药监物价等部门对全市医疗机构的专项检查中上海博爱医院成为问题最多的医院违规项目包括使用毁灭癌症细胞提高存活率等明显违规用于门口则擅自挂有瑞士羊胚胎素注射亚洲服务中心等招牌擅自实行医保自费病人收费双轨制部分收费项目自费病人要高出医保病人达三四倍且未明码标价王家屏告诉瞭望东方周刊记者不久之后博爱医院就被取消了医保资格过了一段时间莆田系多数股份黯然推出博爱医院"],"地址":["上海市淮海中路1590号"]},"www.giivi.com":{"名称":"上海真美妇科医院","电话":["02155099999"],"网址":["http:\/\/www.giivi.com\/","http:\/\/www.zdia.net\/"],"地址":["上海市杨浦区宁国路313弄4号"]},"www.zdia.net":{"名称":"上海真美妇科医院","电话":["02155099999"],"网址":["http:\/\/www.giivi.com\/","http:\/\/www.zdia.net\/"],"地址":["上海市杨浦区宁国路313弄4号"]},"www.yodak.net":{"名称":"上海远大心胸医院(号称上海心脏病医院)","电话":["02164829999"],"网址":["http:\/\/www.yodak.net\/"],"地址":["上海市徐汇区龙漕路218号"]},"www.4006306997.com":{"名称":"上海东方丽人医疗美容医院","相关资料:":["工信部备案信息闽ICP备15019526号主办单位性质个人主办单位名称\/网站负责人胡森森网站名称麦凯乐网(和网站显示名称严重不符)"],"电话":["4006306997","1379444015"],"网址":["http:\/\/www.4006306997.com\/index.html"],"地址":["上海市长宁区安龙路835号"]},"www.shtl120.com":{"名称":"上海天伦医院(注:隶属上海明爱医疗集团)done","电话":["02165667633","02165259999","9864006660102","02155158829"],"网址":["http:\/\/www.shtl120.com\/","http:\/\/www.shbyby.org\/","http:\/\/www.shtlyy.com\/","http:\/\/www.shtianlun.org\/","http:\/\/www.tianlun100.com\/"],"地址":["上海市虹口区凉城路545号"]},"www.shbyby.org":{"名称":"上海天伦医院(注:隶属上海明爱医疗集团)done","电话":["02165667633","02165259999","9864006660102","02155158829"],"网址":["http:\/\/www.shtl120.com\/","http:\/\/www.shbyby.org\/","http:\/\/www.shtlyy.com\/","http:\/\/www.shtianlun.org\/","http:\/\/www.tianlun100.com\/"],"地址":["上海市虹口区凉城路545号"]},"www.shtlyy.com":{"名称":"上海天伦医院(注:隶属上海明爱医疗集团)done","电话":["02165667633","02165259999","9864006660102","02155158829"],"网址":["http:\/\/www.shtl120.com\/","http:\/\/www.shbyby.org\/","http:\/\/www.shtlyy.com\/","http:\/\/www.shtianlun.org\/","http:\/\/www.tianlun100.com\/"],"地址":["上海市虹口区凉城路545号"]},"www.shtianlun.org":{"名称":"上海天伦医院(注:隶属上海明爱医疗集团)done","电话":["02165667633","02165259999","9864006660102","02155158829"],"网址":["http:\/\/www.shtl120.com\/","http:\/\/www.shbyby.org\/","http:\/\/www.shtlyy.com\/","http:\/\/www.shtianlun.org\/","http:\/\/www.tianlun100.com\/"],"地址":["上海市虹口区凉城路545号"]},"www.tianlun100.com":{"名称":"上海天伦医院(注:隶属上海明爱医疗集团)done","电话":["02165667633","02165259999","9864006660102","02155158829"],"网址":["http:\/\/www.shtl120.com\/","http:\/\/www.shbyby.org\/","http:\/\/www.shtlyy.com\/","http:\/\/www.shtianlun.org\/","http:\/\/www.tianlun100.com\/"],"地址":["上海市虹口区凉城路545号"]},"www.tida.sh.cn":{"名称":"上海天大医疗美容医院","相关资料":["百度搜索关键词上海五官科医院上海沪申五官科医院可以直接看到搜索结果把两者混淆"],"电话":["02164080808"],"网址":["http:\/\/www.tida.sh.cn","http:\/\/www.tida120.com","http:\/\/www.er021.com"],"上海五官科医院(注:这个隶属深圳博爱医疗集团":["非汾阳路的复旦大学附属眼耳鼻喉科医院\/上海市五官科医院)复旦大学附属眼耳鼻喉科医院\/上海市五官科医院是卫计委直属公立三甲医院此条目仅一字之差容易混淆目前百度搜索上海五官科医院也是导向到复旦大学附属眼耳鼻喉科医院\/上海市五官科医院院方申明www.fdeent.org\/content\/4408"]},"www.tida120.com":{"名称":"上海天大医疗美容医院","相关资料":["百度搜索关键词上海五官科医院上海沪申五官科医院可以直接看到搜索结果把两者混淆"],"电话":["02164080808"],"网址":["http:\/\/www.tida.sh.cn","http:\/\/www.tida120.com","http:\/\/www.er021.com"],"上海五官科医院(注:这个隶属深圳博爱医疗集团":["非汾阳路的复旦大学附属眼耳鼻喉科医院\/上海市五官科医院)复旦大学附属眼耳鼻喉科医院\/上海市五官科医院是卫计委直属公立三甲医院此条目仅一字之差容易混淆目前百度搜索上海五官科医院也是导向到复旦大学附属眼耳鼻喉科医院\/上海市五官科医院院方申明www.fdeent.org\/content\/4408"]},"www.er021.com":{"名称":"上海天大医疗美容医院","相关资料":["百度搜索关键词上海五官科医院上海沪申五官科医院可以直接看到搜索结果把两者混淆"],"电话":["02164080808"],"网址":["http:\/\/www.tida.sh.cn","http:\/\/www.tida120.com","http:\/\/www.er021.com"],"上海五官科医院(注:这个隶属深圳博爱医疗集团":["非汾阳路的复旦大学附属眼耳鼻喉科医院\/上海市五官科医院)复旦大学附属眼耳鼻喉科医院\/上海市五官科医院是卫计委直属公立三甲医院此条目仅一字之差容易混淆目前百度搜索上海五官科医院也是导向到复旦大学附属眼耳鼻喉科医院\/上海市五官科医院院方申明www.fdeent.org\/content\/4408"]},"www.renai.cn":{"名称":"上海仁爱医院","电话":["02164688888"],"网址":["http:\/\/www.renai.cn\/"],"地址":["上海市徐汇区漕溪路133号(近万体馆)"]},"www.shhqyy.com":{"名称":"上海虹桥医院所属上海闵行虹桥医院有限公司(http:\/\/weibo.com\/shhqyy02164659999)","电话":["02164659999"],"网址":["http:\/\/www.shhqyy.com"],"地址":["上海市闵行区虹梅路2181号近吴中路"]},"www.hs5g.com":{"名称":"上海沪申五官科医院","电话":["02154305338"],"网址":["http:\/\/www.hs5g.com"]},"www.sdaj.net":{"名称":"上海西郊骨科医院","电话":["02152208866","13651724016"],"网址":["http:\/\/www.sdaj.net\/","http:\/\/www.gb5u.com\/","http:\/\/www.gkyy120.com\/","http:\/\/www.cqgkzj.com\/"],"地址":["上海市长宁区剑河路595号4号楼"]},"www.gb5u.com":{"名称":"上海西郊骨科医院","电话":["02152208866","13651724016"],"网址":["http:\/\/www.sdaj.net\/","http:\/\/www.gb5u.com\/","http:\/\/www.gkyy120.com\/","http:\/\/www.cqgkzj.com\/"],"地址":["上海市长宁区剑河路595号4号楼"]},"www.gkyy120.com":{"名称":"上海西郊骨科医院","电话":["02152208866","13651724016"],"网址":["http:\/\/www.sdaj.net\/","http:\/\/www.gb5u.com\/","http:\/\/www.gkyy120.com\/","http:\/\/www.cqgkzj.com\/"],"地址":["上海市长宁区剑河路595号4号楼"]},"www.cqgkzj.com":{"名称":"上海西郊骨科医院","电话":["02152208866","13651724016"],"网址":["http:\/\/www.sdaj.net\/","http:\/\/www.gb5u.com\/","http:\/\/www.gkyy120.com\/","http:\/\/www.cqgkzj.com\/"],"地址":["上海市长宁区剑河路595号4号楼"]},"www.wzjg120.com":{"名称":"温州建国医院","网址":["http:\/\/www.wzjg120.com","http:\/\/www.wzcwk120.com"]},"www.wzcwk120.com":{"名称":"温州建国医院","网址":["http:\/\/www.wzjg120.com","http:\/\/www.wzcwk120.com"]},"www.120cz.com":{"名称":"温州长征医院","网址":["http:\/\/www.120cz.com"]},"www.xczshp.com":{"名称":"许昌中山医院","电话":["03742158889"],"网址":["http:\/\/www.xczshp.com","http:\/\/www.xcyyhp.com","http:\/\/www.2158888.com","http:\/\/www.xczsnk.com","xczsnk.com"],"地址":["许昌市西大街280号"]},"www.xcyyhp.com":{"名称":"许昌中山医院","电话":["03742158889"],"网址":["http:\/\/www.xczshp.com","http:\/\/www.xcyyhp.com","http:\/\/www.2158888.com","http:\/\/www.xczsnk.com","xczsnk.com"],"地址":["许昌市西大街280号"]},"www.2158888.com":{"名称":"许昌中山医院","电话":["03742158889"],"网址":["http:\/\/www.xczshp.com","http:\/\/www.xcyyhp.com","http:\/\/www.2158888.com","http:\/\/www.xczsnk.com","xczsnk.com"],"地址":["许昌市西大街280号"]},"www.xczsnk.com":{"名称":"许昌中山医院","电话":["03742158889"],"网址":["http:\/\/www.xczshp.com","http:\/\/www.xcyyhp.com","http:\/\/www.2158888.com","http:\/\/www.xczsnk.com","xczsnk.com"],"地址":["许昌市西大街280号"]},"www.82056999.com":{"名称":"嘉兴博爱医院","网址":["http:\/\/www.82056999.com"]},"www.jxjk.cn":{"名称":"嘉兴曙光中西医结合医院","网址":["http:\/\/www.jxjk.cn"]},"www.sian.cc":{"名称":"浙江新安国际医院","网址":["http:\/\/www.sian.cc"]},"www.qlxzhuanke.com":{"名称":"贵阳结石病医院","电话":["085188546001","085188546002"],"网址":["http:\/\/www.qlxzhuanke.com","http:\/\/www.gyjsbyy.com"]},"www.gyjsbyy.com":{"名称":"贵阳结石病医院","电话":["085188546001","085188546002"],"网址":["http:\/\/www.qlxzhuanke.com","http:\/\/www.gyjsbyy.com"]},"www.owei.com":{"名称":"贵州省第二人民医院耳鼻喉科(贵阳耳鼻喉科医院)","电话":["4000851962"],"网址":["http:\/\/www.owei.com","http:\/\/www.ygzhu8.com"]},"www.ygzhu8.com":{"名称":"贵州省第二人民医院耳鼻喉科(贵阳耳鼻喉科医院)","电话":["4000851962"],"网址":["http:\/\/www.owei.com","http:\/\/www.ygzhu8.com"]},"www.lsjlyy.com":{"名称":"丽水九龙男科医院","电话":["05782119011"],"QQ:3082311948":[],"相关信息":["全国企业信用信息公示系统浙江(http:\/\/gsxt.zjaic.gov.cn\/appbasicinfo\/doViewAppBasicInfo.do?corpid=780CFC6E907B4DB490707687D41A927EA2D082CB21CFD8173A93D6CF9ADA5299)显示法定代表人为陈元华"],"地址":["浙江省丽水市莲都区解放街88号"],"工商注册名称":["丽水九龙医院有限公司"],"网址":["http:\/\/www.lsjlyy.com","http:\/\/www.2119011.com","http:\/\/www1.2119011.com","www.lsjlnkyy.com","m.lsjlnkyy.com"]},"www.2119011.com":{"名称":"丽水九龙男科医院","电话":["05782119011"],"QQ:3082311948":[],"相关信息":["全国企业信用信息公示系统浙江(http:\/\/gsxt.zjaic.gov.cn\/appbasicinfo\/doViewAppBasicInfo.do?corpid=780CFC6E907B4DB490707687D41A927EA2D082CB21CFD8173A93D6CF9ADA5299)显示法定代表人为陈元华"],"地址":["浙江省丽水市莲都区解放街88号"],"工商注册名称":["丽水九龙医院有限公司"],"网址":["http:\/\/www.lsjlyy.com","http:\/\/www.2119011.com","http:\/\/www1.2119011.com","www.lsjlnkyy.com","m.lsjlnkyy.com"]},"www1.2119011.com":{"名称":"丽水九龙男科医院","电话":["05782119011"],"QQ:3082311948":[],"相关信息":["全国企业信用信息公示系统浙江(http:\/\/gsxt.zjaic.gov.cn\/appbasicinfo\/doViewAppBasicInfo.do?corpid=780CFC6E907B4DB490707687D41A927EA2D082CB21CFD8173A93D6CF9ADA5299)显示法定代表人为陈元华"],"地址":["浙江省丽水市莲都区解放街88号"],"工商注册名称":["丽水九龙医院有限公司"],"网址":["http:\/\/www.lsjlyy.com","http:\/\/www.2119011.com","http:\/\/www1.2119011.com","www.lsjlnkyy.com","m.lsjlnkyy.com"]},"www.qzmylike.com":{"名称":"泉州华美美莱整形美容医院","电话":["059528266666"],"负责人":["龚英格"],"网址":["http:\/\/www.qzmylike.com","http:\/\/www.qzhmzx.com"]},"www.qzhmzx.com":{"名称":"泉州华美美莱整形美容医院","电话":["059528266666"],"负责人":["龚英格"],"网址":["http:\/\/www.qzmylike.com","http:\/\/www.qzhmzx.com"]},"www.0595fk.com":{"名称":"泉州新阳光女子医院","电话":["059528966788"],"负责人":["郑海滨"],"网址":["http:\/\/www.0595fk.com","http:\/\/www.xyg120.net","http:\/\/www.xygfkyy.com","http:\/\/www.xygfkyy.net","http:\/\/www.qzsznyy.net","http:\/\/www.qzsznyy.com"]},"www.xyg120.net":{"名称":"泉州新阳光女子医院","电话":["059528966788"],"负责人":["郑海滨"],"网址":["http:\/\/www.0595fk.com","http:\/\/www.xyg120.net","http:\/\/www.xygfkyy.com","http:\/\/www.xygfkyy.net","http:\/\/www.qzsznyy.net","http:\/\/www.qzsznyy.com"]},"www.xygfkyy.com":{"名称":"泉州新阳光女子医院","电话":["059528966788"],"负责人":["郑海滨"],"网址":["http:\/\/www.0595fk.com","http:\/\/www.xyg120.net","http:\/\/www.xygfkyy.com","http:\/\/www.xygfkyy.net","http:\/\/www.qzsznyy.net","http:\/\/www.qzsznyy.com"]},"www.xygfkyy.net":{"名称":"泉州新阳光女子医院","电话":["059528966788"],"负责人":["郑海滨"],"网址":["http:\/\/www.0595fk.com","http:\/\/www.xyg120.net","http:\/\/www.xygfkyy.com","http:\/\/www.xygfkyy.net","http:\/\/www.qzsznyy.net","http:\/\/www.qzsznyy.com"]},"www.qzsznyy.net":{"名称":"泉州新阳光女子医院","电话":["059528966788"],"负责人":["郑海滨"],"网址":["http:\/\/www.0595fk.com","http:\/\/www.xyg120.net","http:\/\/www.xygfkyy.com","http:\/\/www.xygfkyy.net","http:\/\/www.qzsznyy.net","http:\/\/www.qzsznyy.com"]},"www.qzsznyy.com":{"名称":"泉州新阳光女子医院","电话":["059528966788"],"负责人":["郑海滨"],"网址":["http:\/\/www.0595fk.com","http:\/\/www.xyg120.net","http:\/\/www.xygfkyy.com","http:\/\/www.xygfkyy.net","http:\/\/www.qzsznyy.net","http:\/\/www.qzsznyy.com"]},"www.0595ml.com":{"名称":"泉州坤如玛丽医院","网址":["http:\/\/www.0595ml.com"],"负责人":["徐金源"]},"www.szsayy.com":{"名称":"苏州圣爱医院","电话":["051268078047"],"网址":["http:\/\/www.szsayy.com"]},"www.mlmryy.com":{"名称":"苏州华美美莱整形医院","电话":["4008816499"],"网址":["http:\/\/www.mlmryy.com"]},"www.szdwyy.com":{"名称":"苏州东吴医院","电话":["051268120120"],"网址":["http:\/\/www.szdwyy.com"]},"www.cy5g.com":{"名称":"张家港朝阳五官科医院","电话":["051258983999"],"网址":["http:\/\/www.cy5g.com"]},"www.ksyy120.com":{"名称":"昆山虹桥医院","电话":["051257399999"],"网址":["http:\/\/www.ksyy120.com"]},"www.csfk.net":{"名称":"常熟东方妇科医院","电话":["051251531111"],"网址":["http:\/\/www.csfk.net"]},"www.nbhqyy.com":{"名称":"宁波虹桥医院","网址":["http:\/\/www.nbhqyy.com"]},"www.nbnkyy.com":{"名称":"宁波欧亚男科医院","网址":["http:\/\/www.nbnkyy.com"]},"www.nbmylike.com":{"名称":"宁波美莱整形美容医院","网址":["http:\/\/www.nbmylike.com"]},"www.cxsayy.net":{"名称":"慈溪圣爱医院","网址":["http:\/\/www.cxsayy.net"]}};
	var domain = unsafeWindow.location.hostname;
	if (unsafeWindow.location.href === '') {
		return;
	}
	//不在列表中
	if (typeof(list[domain]) === 'undefined') {
		return;
	}
	//生成随机ID
	var randStr = function (len) {
	　	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
	　	var maxPos = chars.length;
		var result = '';
		for (var i = 0; i < len; i++) {
			result += chars.charAt(Math.floor(Math.random() * maxPos));
		}
		return result;
	}
	var randomId = randStr(10) + '_sypt';
	console.log('RandomId is ' + randomId);
	//基本样式
	GM_addStyle('\
	#' + randomId + '_t {\
		display: block !important;\
		width: 100%;\
		height: 100px;\
		line-height: 100px;\
		position: fixed;\
		top: 0;\
		left: 0;\
		z-index: 99999;\
		font-size: 50px;\
		text-align: center;\
		color: white;\
		background: red;\
	}\
	#' + randomId + '_t > * {\
		vertical-align: middle;\
	}\
	#' + randomId + '_t > button {\
		font-size: 30px;\
	}\
	#' + randomId + '_i {\
		width: 400px;\
		position: fixed;\
		display: none;\
		top: 150px;\
		left: 50%;\
		z-index: 99999;\
		font-size: 15px;\
		margin: 0 -200px;\
		background: #FFF;\
		color: #000;\
		border: 1px solid #000;\
		padding: 20px;\
	}\
	#' + randomId + '_i p {\
		margin-bottom: 5px;\
	}\
	#' + randomId + '_i a {\
		color: #337ab7;\
		text-decoration: underline;\
	}');
	console.log('Create Style finished');
	//顶部
	var t = document.createElement('div');
	t.id = randomId + '_t';
	var t_btn = document.createElement('button');
	t_btn.innerHTML = '查看详情';
	var t_text = document.createElement('span');
	t_text.innerHTML = '此网站可能为莆田系医院';
	t.appendChild(t_text);
	t.appendChild(t_btn);
	console.log('Create Top finished');
	//详情框
	var info = document.createElement('div');
	info.id = randomId + '_i';
	var childEle;
	for (var k in list[domain]) {
		childEle = document.createElement('p');
		childEle.innerHTML = '<b>' + k + ':</b>&nbsp;';
		if (typeof(list[domain][k]) === 'string') {
			childEle.innerHTML += list[domain][k];
		} else {
			for (var kk in list[domain][k]) {
				childEle.innerHTML += list[domain][k][kk] + '&nbsp;';
			}
		}
		info.appendChild(childEle);
	}
	//详情框的一些按钮
	var info_text = document.createElement('p');
	info_text.innerHTML = '信息来自<a href="https://github.com/open-power-workgroup/Hospital" target="_blank">Hospital项目</a>，您可以<a href="https://github.com/open-power-workgroup/Hospital/blob/master/guide.md" target="_blank">参与</a>或者<a href="https://github.com/open-power-workgroup/Hospital/issues/new" target="_blank">提出异议</a>';
	info.appendChild(info_text);
	console.log('Create Info finished');
	var info_close = document.createElement('p');
	var info_close_btn = document.createElement('button');
	info_close_btn.innerHTML = '关闭';
	info_close.appendChild(info_close_btn);
	info.appendChild(info_close);
	//事件
	t_btn.addEventListener('click', function() {
		info.style.display = 'block';
	});
	info_close_btn.addEventListener('click', function() {
		info.style.display = 'none';
	});
	//加入body
	console.log('Append to body');
	var body = unsafeWindow.document.getElementsByTagName('body')[0];
	body.appendChild(t);
	body.appendChild(info);
})();