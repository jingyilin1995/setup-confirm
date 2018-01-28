const people = `
Brett Ritter <b.ritter@neu.edu>
Bin Shi <shi.b@husky.neu.edu>
Jingyi "Ashley" Lin <lin.jin@husky.neu.edu>
Lulu Zhang <zhang.lulu@husky.neu.edu>
Wenhui Liu <liu.wenh@husky.neu.edu>
Lu Niu <niu.l@husky.neu.edu>
Hao Tian <tian.h@husky.neu.edu>
Yuhan Wang <wang.yuhan2@husky.neu.edu>
Yiteng Luo <luo.yit@husky.neu.edu>
Zihan "Alexis" Ding <ding.ziha@husky.neu.edu>
Jia Wang <wang.jia1@husky.neu.edu>
Chun Yang <yang.chun@husky.neu.edu>
Yujia Chen <chen.yuji@husky.neu.edu>
Xiaoxiao Zhou <zhou.xiaox@husky.neu.edu>
Ryan Zhang <zhang.tingy@husky.neu.edu>
Sihan Zhao <zhao.sih@husky.neu.edu>
Mengying Wu <wu.mengyi@husky.neu.edu>
Bokin <zhang.boqu@husky.neu.edu>
Ze Yu <yu.ze@husky.neu.edu>
Zhongfei Chi <chi.zh@husky.neu.edu>
Harsha Vykunta <vykunta.h@husky.neu.edu>
Yujia Zhang <zhang.yujia@husky.neu.edu>
Zhongyu Shi <shi.zho@husky.neu.edu>
Qifei "Rose" Lu <lu.qi@husky.neu.edu>
Yuxin Li <li.yux@husky.neu.edu>
Hengyi "Edward" Yang <yang.heng@husky.neu.edu>
Ce Lan <lan.c@husky.neu.edu>
Jing Fu <fu.jing1@husky.neu.edu>
Qianchen He <he.qian@husky.neu.edu>
Tianyi Cheng <cheng.ti@husky.neu.edu>
Lyuping Du <du.ly@husky.neu.edu>
Lulu Tong <tong.lu@husky.neu.edu>
Kaiwen "Kevin" Zheng <zheng.kaiw@husky.neu.edu>
Lin "Frank" Liu <liu.lin2@husky.neu.edu>
Manjula Bashini Prabhu <prabhu.ma@husky.neu.edu>
Xuhan Shan <shan.xu@husky.neu.edu>
Tianyu Hou <hou.tia@husky.neu.edu>
Rucheng Xiao <xiao.ruc@husky.neu.edu>
ChungChe Cheng <cheng.chung@husky.neu.edu>
Ching-Chi "Amanda" Chang<chang.ching@husky.neu.edu>
Xiao Yang <yang.xiao1@husky.neu.edu>
Yue Yang <yang.yue@husky.neu.edu>
Xiaohan Qiu <qiu.x@husky.neu.edu>
Hongbin Li <li.hongb@husky.neu.edu>
Yehong Sun <sun.yeh@husky.neu.edu>
`.split('\n').filter( truthy => truthy );


if (require.main === module) {
  for (person of people) {
    console.log(person);
  }
}

module.exports = people;
