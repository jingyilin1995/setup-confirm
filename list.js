const people = `
Brett Ritter <b.ritter@neu.edu>
Bin Shi <shi.b@husky.neu.edu>
Jingyi "Ashley" Lin <lin.jin@husky.neu.edu>
Lulu Zhang <zhang.lulu@husky.neu.edu>
Wenhui Liu <liu.wenh@husky.neu.edu>
Hao Tian <tian.h@husky.neu.edu>
Yuhan Wang<wang.yuhan2@husky.neu.edu>
Yiteng Luo <luo.yit@husky.neu.edu>
Zihan "Alexis" Ding <ding.ziha@husky.neu.edu>
Jia Wang<wang.jia1@husky.neu.edu>
Chun Yang <yang.chun@husky.neu.edu>
Yujia Chen <chen.yuji@husky.neu.edu>
Xiaoxiao Zhou <zhou.xiaox@husky.neu.edu>
Sihan Zhao <zhao.sih@husky.neu.edu>
Ze Yu <yu.ze@husky.neu.edu>
`.split('\n').filter( truthy => truthy );

if (require.main === module) {
  for ( person of people ) {
    console.log(person);
  }
}

module.exports = people;
