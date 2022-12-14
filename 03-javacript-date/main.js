var today = "09/11/2022";
var products = [
  {
    productionDate: "2022-01-01",
    expiredDate: "10/06/2023",
  },
  {
    productionDate: "2022-02-14",
    expiredDate: "17/08/2022",
  },
];

function format(arg) {
  const date = arg.split("/");

  if (date.length > 1) {
    return new Date(`${date[2]}-${date[1]}-${date[0]}`);
  }
  return new Date(arg);
}

function getFormat(dateOne, dateTwo) {
  return (dateOne.getTime() - dateTwo.getTime()) / (1000 * 3600 * 24);
}

const detailProducts = products.map((product) => {
  const expiredIn = getFormat(format(product.expiredDate), format(today));
  return {
    productionDate: product.productionDate,
    expiredDate: product.expiredDate,
    shelfLife: getFormat(format(product.expiredDate), format(product.productionDate)),
    age: getFormat(format(today), format(product.productionDate)),
    expiredIn,
    isExpired: expiredIn > 0 ? true : false,
  };
});

console.log(detailProducts);
