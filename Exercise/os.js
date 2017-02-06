var os =require('os');
//暫存資料夾
console.log(os.tmpdir())
//哪種endian
console.log(os.endianness())
//系統hostname
console.log(os.hostname())
//作業系統名稱
console.log(os.type())
//作業系統類別
console.log(os.platform())
//系統cpu類別D
console.log(os.arch())
//作業系統版本
console.log(os.release())
//開機到現在時間
console.log(os.uptime())
//回傳最近 1/5/15分鐘內的系統平均loading
console.log(os.loadavg())
//回傳系統總記憶體大小
console.log(os.totalmem())
//回傳空閒記憶體大小
console.log(os.freemem())
//每顆cpu資訊
console.log(os.cpus())
//列出目前有啟動的網路介面資訊
console.log(os.networkInterfaces())



