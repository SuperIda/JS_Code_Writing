// 过滤掉obj中的 undefined '' null []
export const filterEmptyParams = (params) => {
    if (Object.prototype.toString.call(params) !== '[object Object]') return {};
  
    const keyList = Object.keys(params);
    const arr = keyList.filter((t) => {
      if (
        Object.prototype.toString.call(params[t]) === '[object Array]' &&
        params[t].length === 0
      ) {
        return false;
      }
      return params[t] || params[t] === 0 || params[t] === false;
    });
  
    const dataArr = arr.reduce((total, t) => {
      total[t] = params[t];
      return total;
    }, {});
  
    return dataArr;
};