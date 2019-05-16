var a=1;
function addA(a){
  return this.a;
}
console.log('addA',addA(a)); 
///////////////////////////////////////////////
var b=1;
function addB(){
  return b++;
}
console.log('addB',addB());  
///////////////////////////////////////////////
var b=1;
function addBB(){
  let c = b++;
  return b;
}
console.log('addBB',addBB());  
///////////////////////////////////////////////
var b=1;
function addBBB(){
  var c = b++;
  return c;
}
console.log('addBBB',addBBB());  
///////////////////////////////////////////////
var c=1;
function addC(c){
  return this.c;
}
console.log('addC',addC());
///////////////////////////////////////////////
var d=1;
function addD(){
  return ++d;
}
console.log('addD',addD());  
///////////////////////////////////////////////
var e=1;
function addE() {
  var e=2;
  return e;
}
console.log('addE',addE());
///////////////////////////////////////////////
var e=1;
function addF() {
  const e=2;
  ++e;
  return e;
}
console.log('addF',addF());
///////////////////////////////////////////////
var e=1;
function addG() {
  const e=2;
  console.log('window.e',this.e);
  return this.e;
}
console.log('window.ee',e);
console.log('addG',addG());
///////////////////////////////////////////////
var E=1;
function addH() {
  const e=4;
  return E++;
}
console.log('addH',addH());
///////////////////////////////////////////////
const a=1;
var addI = () => {
  a=4;
  return ++a;
}
console.log('addI()',addI());
console.log('addI',addI);
///////////////////////////////////////////////
const a=1;
var addJ = () => {
  a=4;
  return this.a;
}
console.log('addJ()',addJ());
///////////////////////////////////////////////
const aa=1;
var addK = (aa) => {
  aa=4;
  return aa;
}
console.log('addK()',addK(this.aa));
///////////////////////////////////////////////
const aa=1;
this.aa=2;
console.log('aa',aa);
var addL = (aa) => {
  var aa=4;
  return aa;
}
console.log('addL()',addL(this.aa));
///////////////////////////////////////////////
var e=1;
function addF() {
  const e=2;
  return e;
}
console.log('addF',addF());
///////////////////////////////////////////////
function addMe(a,b){
  return a+b;
}
function addMe(a,b,c){
  return a+b+c;
}
console.log('addMe(1,2)',addMe(1,2));
console.log('addMe(1,2,3)',addMe(1,2,3));
///////////////////////////////////////////////
let numbers = [1,2,2,3,4,4,5]
numbers.map((i)=> {
  console.log(i);
})

var evenNumbers = numbers.filter((i)=>{
  return i%2==0;
})
console.log(evenNumbers);
///////////////////////////////////////////////
let person = {
  firstName : 'santosh',
  lastName : 'kumar',
  fullName : function() {
    return this.firstName + this.lastName;
  }
}
console.log('1',person);
console.log('2',person.fullName);
console.log('3()',person.fullName());
console.log('4()',person.fullName(person.firstName,person.lastName));
///////////////////////////////////////////////
let person = {
  firstName : 'santosh',
  lastName : 'kumar',
  fullName : () => {
    let firstName = 'sa';
    let lastName = 'nan';
    return firstName + lastName;
  }
}
console.log('5()',person.fullName());