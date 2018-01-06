const people = `
Brett Ritter <b.ritter@neu.edu>
Bin Shi <shi.b@husky.neu.edu>
Jingyi "Ashley" Lin <lin.jin@husky.neu.edu>
Lulu Zhang <zhang.lulu@husky.neu.edu>
Wenhui Liu <liu.wenh@husky.neu.edu>
Xiaoxiao Zhou <zhou.xiaox@husky.neu.edu>
`.split('\n').filter( truthy => truthy );

if (require.main === module) {
  for ( person of people ) {
    console.log(person);
  }
}

module.exports = people;
