/* str = '\u00bd + \u00bc = \u00be';

console.log(str + ": " + str.length + " characters, " +
  Buffer.byteLength(str, 'utf8') + " bytes"); */
  
/* var arr = [Buffer('1234'), Buffer('01234'),Buffer('01234')];
arr.sort(Buffer.compare);
console.log(arr) */

/* var buf1 = new Buffer(256);  //分配缓存大小
var buf2 = new Buffer("Hello Buffer");  //根据字符串和编码格式创建buffer，默认为utf8
var buf3 = new Buffer([0x65,0x66,0x67]);  //根据字节数组来创建buffer
var buf4 = new Buffer(buf2);  //根据buffer实例创建一个新的buffer
console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4); */

/* var buf1 = new Buffer(256);  //分配缓存大小
buf1.fill(0); //处理乱码
buf1.write('abc');
console.log("buf1\'s content: ", buf1.toString());  */

var buf = new Buffer('test');
var json = JSON.stringify(buf);

console.log(json);
var copy = JSON.parse(json, function(key, value) {
    return value && value.type === 'Buffer'
      ? new Buffer(value.data)
      : value;
  });

console.log(copy);

/* var buf1 = new Buffer(256);
buf1.fill(0);
buf1.write('abc');
console.log("buf1\'s length - %d, not 3\n", buf1.length);//buffer.length的长度是缓存区的字节长度，不会随缓冲内容变化而变化
buf1.write('abcdef');
console.log("buf1\'s length - %d, not 6\n", buf1.length); */

/* var name = new String('who is \u5F20\u4E09\u4E30?');
console.log('name.length = %d', name.length);  //name.length = 11
console.log('byteLength = %d', Buffer.byteLength(name, 'utf8'));  //byteLength = 17 */

/* var buf1 = new Buffer('1234');
var buf2 = new Buffer('12567');
var bufList = [buf1, buf2];
var buf3 = Buffer.concat(bufList);
console.log('buf3 - %s', buf3.toString());
var buf4 = buf3.slice(3, 8);
console.log('buf4 - %s', buf4.toString());
var buf5 = new Buffer(5);
buf3.copy(buf5, 0,0,5); //四个参数：targetStart指定目标缓冲区的起始偏移，sourceStart指定源缓冲区的起始偏移，它们默认都是0；sourceEnd指定源缓冲区的结束位置，默认是源缓冲区的长度。
console.log('buf5 - %s', buf5.toString()); */

/* var buf1 = new Buffer('1234');
var buf2 = new Buffer('12567');
var buf3 = new Buffer('1234');
var buf4 = new Buffer('0123');
console.log('buf1.compare(buf2) = ', buf1.compare(buf2));
console.log('buf1.compare(buf3) = ', buf1.compare(buf3));
console.log('buf1.compare(buf4) = ', buf1.compare(buf4)); */