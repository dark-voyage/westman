// Counter
let count = 0;
const counter = async () => {

  count += 1;
  const date = await new Date();
  const dateString = `${date.getDate()}${date.getMonth()}`;
  return `${count}D${dateString}`;
};

module.exports = counter;
