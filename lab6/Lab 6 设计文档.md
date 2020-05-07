# Lab 6 设计文档

## 1、TestTime

类似于前面lab的问题。增加了last()函数确保在第一个函数执行完毕后才会执行后面的函数。

```
function testTime(){
    let showNum=1;
    let Runs=0;
    let startMinute=new Date().getMinutes();
    console.log(showNum);
    let interval=setInterval(function () {
        if(new Date().getMinutes()!==startMinute){
            console.log("Time is out!");
            last();
            clearInterval(interval);
        }else if(Runs>=10){
            console.log("Has Been Run Ten Times!");
            last();
            clearInterval(interval);
        }else{
            showNum *=2;
            Runs++;
            console.log("Has Been Run "+Runs+" Times!");
            console.log(showNum);
        }
    },5000)
}
```

## 2、testMail

邮箱正则：用了助教在前面lab给的有顶级域（TLD）正则。

手机正则：^1代表以1开头，后面的3、4、5、8、9则考虑了三大运营商的电话设定（新出了19开头），后面是9位数字，确保手机号码11位格式正确。

运用了三目表达式来呈现提示信息。

```
function testMail(telephone,mail) {
let ismail=/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(mail);
let isTelephone=/^1[3|4|5|8|9][0-9]\d{8}$/.test(telephone);
    console.log("The telephone is " + (isTelephone ? "right" : "wrong") + " and the mail is " + (ismail ? "right" : "wrong"));
}
```

## 3、testRedundancy

正则+修改匹配点，用slice()确定只取10个，并重设置了cmp()排序。

```
function testRedundancy(str) {
let set=new Set();
let pattern=/\b([a-z]+)\s\1\b/gi;
let temp;
while((temp =pattern.exec(str))!==null){
    set.add(temp[0]);
    pattern.lastIndex -=(temp[0].length-1) / 2;
}
function cmp(a,b) {
if(a.toUpperCase()>b.toUpperCase()){
    return 1;
}else if(a.toUpperCase()===b.toUpperCase()){
    return 0;
}else return -1;
}
console.log(new Set(Array.from(set).sort(cmp).slice(0,10)));
}
```

## 4、testKeyBoard

掌握集合数组性质可用filter一行解决(虽然一定会被《软件工程》的导师骂)

```
function testKeyBoard(wantInput, actualInput) {
    console.log(new Set(Array.from(new Set(wantInput.toUpperCase())).filter(e =>!new Set(actualInput.toUpperCase()).has(e))));
}
```

## 5、testSpecialReverse

匹配空格并翻转 强行使用数组

```
function testSpecialReverse(str) {
//强用数组
let temp=Array.from(str.replace(/\s+/g, " ").split(" ")).reverse();
let wanna="";
    // 强行循环
    for (let i = 0; i <temp.length ; i++) {
        wanna += temp[i]+" ";
    }
    console.log(wanna.trim());
}
```

## 6、twoSum

运用Map，设置了键值映射，并通过一次循环建立映射。

```
function twoSum(nums, target) {
    let Map = {};
    for (let i = 0; i < nums.length; i++) {
        // 对应键名
        let key = target - nums[i];
        if (Map[key] || Map[key] === 0) {
           console.log("[ "+Map[key]+","+ i+" ]");
        }
        // 循环建立映射
        Map[nums[i]] = i;
    }
}
```

## 7、lengthOfLongestSubstring

标记初始子串下标来进行对比，一次循环搞定。

```
function lengthOfLongestSubstring(str) {
    let map = new Map(), max = 0;
    //显示使用了一次循环，start用来标记无重复子串的开始下标
    for(let start = 0, Traver = 0; Traver < str.length; Traver++) {
        if(map.has(str[Traver])) {
            start = Math.max(map.get(str[Traver]) + 1, start)
        }
        max = (max>Traver - start + 1) ? max:Traver - start + 1;
        map.set(str[Traver], Traver)
    }
    console.log(max);
}
```

## 8、 Country

正常使用三类继承方式

```
function Country() {
    this.name = "国家";
}
function  DevelopingCountry() {
Country.call(this)
}
DevelopingCountry.prototype.sayHi = function () {
console.log("Hi,i am a developing country.")
};
function PoorCountry() {}
PoorCountry.prototype=new Country();
PoorCountry.prototype.saySad = function () {
console.log("I am a sad poor country.");
};
function  DevelopedCountry() {
Country.call(this);
}
DevelopedCountry.prototype = Object.create(Country.prototype);
DevelopedCountry.prototype.constructor = DevelopedCountry;
DevelopedCountry.prototype.sayHappy = function () {
console.log("I am a Happy developed country.")
};
function last() {
    testMail("13312321111", "sds.edu.cn");
    testMail("19121758956", "dhafhsudai@fudan.edu.cn");
    testMail("19121758956", "dhafhsudai@qq.com");
    testRedundancy("cool coOL Cool the the Boy bOY full func fun");
    testRedundancy("Is is the iS is cost of of gasoline going up up");
    testKeyBoard("7_This_is_a_test", "_hs_s_a_es");
    testKeyBoard("You are a bad boy", "ourey");
    testSpecialReverse("You! A bad Boy!");
    testSpecialReverse("  hello  world!  F*");
    twoSum([2,5,6,9], 11);
    twoSum([1, 2, 3, 4], 5);
    lengthOfLongestSubstring("aaaaa");
    lengthOfLongestSubstring("kljhssssssa");
    lengthOfLongestSubstring("abbbbbb");
    let dvl = new DevelopingCountry();
    dvl.sayHi();
    let poor = new PoorCountry();
    poor.saySad();
    let developed = new DevelopedCountry();
    developed.sayHappy();
}
function test() {
 testTime();
}
```

## 截图

运行结果

![网页效果截图1](D:\Study\Web\Labs\SOFT130002_lab-lab5-\lab6\网页效果截图1.png)

![网页效果截图2](D:\Study\Web\Labs\SOFT130002_lab-lab5-\lab6\网页效果截图2.png)

Github（提交了截图了又修改文档重新提交？）

![github截图](D:\Study\Web\Labs\SOFT130002_lab-lab5-\lab6\github截图.png)

## 其他

无