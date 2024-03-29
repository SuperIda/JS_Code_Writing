// 对通过new Date()生成的时间格式化为'yyyy-m-d hh:mm:ss'

      // 方法一
      // function formatDate(date) {
      //   let year = date.getFullYear();
      //   let month = date.getMonth() + 1;
      //   month = month < 10 ? "0" + month : month;
      //   let day = date.getDate();
      //   day = day < 10 ? "0" + day : day;
      //   let hour = date.getHours();
      //   hour = hour < 10 ? "0" + hour : hour;
      //   let minute = date.getMinutes();
      //   minute = minute < 10 ? "0" + minute : minute;
      //   let second = date.getSeconds();
      //   second = second < 10 ? "0" + second : second;
      //   return (
      //     year +
      //     "-" +
      //     month +
      //     "-" +
      //     day +
      //     " " +
      //     hour +
      //     ":" +
      //     minute +
      //     ":" +
      //     second
      //   );
      // }

      // 方法二
      function formatDate(time) {
        const y = time.getFullYear(),
          m = (time.getMonth() + 1).toString().padStart(2, "0"), // padStart()有字符串补全长度的功能, 接收两个参数
          d = time.getDate().toString().padStart(2, "0"), // 第一个参数是字符串的最小长度; 第二个参数是用来补全的字符串
          hh = time.getHours().toString().padStart(2, "0"), // 因为hh原来是数字型, 所以要先转成字符串类型, 才能用此方法
          mm = time.getMinutes().toString().padStart(2, "0"),
          ss = time.getSeconds().toString().padStart(2, "0");
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`; // 模板字符串
      }

      var now = new Date();
      console.log(formatDate(now));