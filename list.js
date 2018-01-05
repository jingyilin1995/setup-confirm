const people = `
Brett Ritter <b.ritter@neu.edu>
Bin Shi <shi.b@husky.neu.edu>
Wenhui Liu <liu.wenh@husky.neu.edu>
`.split('\n').filter( truthy => truthy );

if (require.main === module) {
  for ( person of people ) {
    console.log(person);
  }
}

module.exports = people;
