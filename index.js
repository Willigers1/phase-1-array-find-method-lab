// code your solution here

const superbowlWin = (record) => {
  const winYear = record.find((item) => item.result === "W");
  return winYear ? winYear.year : undefined;
};

const record = [
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

console.log(superbowlWin(record));
