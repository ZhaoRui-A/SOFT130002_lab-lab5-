/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
// */
// testTime();
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


/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
// testMail("191217589","516911867com");
function testMail(telephone,mail) {
let ismail=/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(mail);
let isTelephone=/^1[3|4|5|8|9][0-9]\d{8}$/.test(telephone);
    console.log("The telephone is " + (isTelephone ? "right" : "wrong") + " and the mail is " + (ismail ? "right" : "wrong"));
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
// testRedundancy("Is is is  the iS is cost of of gasoline going up up");
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


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
// testKeyBoard("7_This_is_a_tes t","h");
function testKeyBoard(wantInput, actualInput) {
    console.log(new Set(Array.from(new Set(wantInput.toUpperCase())).filter(e =>!new Set(actualInput.toUpperCase()).has(e))));
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
// testSpecialReverse("  hello  world!  ");
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

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/
// twoSum([1,2,3,4],5);
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


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
// lengthOfLongestSubstring("");
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

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
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