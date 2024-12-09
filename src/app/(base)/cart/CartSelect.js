const select = {};
const selectOne = (id) => (select[id] = 1);
const selectMany = (arr) => arr.map(ele=> select[ele] = 1);
const removeOne = (id) => delete select[id];
const getSelected = () => Object.keys(select);

export { selectOne,selectMany, removeOne, getSelected };
