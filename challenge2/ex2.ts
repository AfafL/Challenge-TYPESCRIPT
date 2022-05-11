class Animal {}
interface Nourissable {}
class Animal4Pattes extends Animal {}
class Chat extends Animal4Pattes {}
class Chien extends Animal4Pattes {}
class Oiseau extends Animal {}
class Poisson extends Animal {}
class ChatEuropeen extends Chat implements Nourissable{}
class ChatChartreu extends Chat {}
class ChienTerreNeuve extends Chien implements Nourissable{}
class ChienMoonMoon extends Chien{}
class Mesange extends Oiseau{}
class Merle extends Oiseau implements Nourissable{}
class Thon extends Poisson {}
class Requin extends Poisson {}
class Asticot extends Animal {}


function photographier(animal:Animal){
    console.log('cheese......')
}
function miauler(chat:Chat){
  console.log('miau..miau......')
}
function aboyer(chien:Chien){
  console.log('aouu..aouu......')
}
function voler(oiseau:Oiseau){
  console.log('vole..vole......')
}
function najer(poisson:Poisson){
  console.log('nage..nage......')
}
function caresser(animal4Pattes:Animal4Pattes){
  console.log('caresser..caresser......')
}
function nourrir(nourissable:Nourissable){
  console.log('a table........')
}

let chatEuropeen : ChatEuropeen = new ChatEuropeen()
let chienMoonMoon : ChienMoonMoon = new ChienMoonMoon()


nourrir(chatEuropeen)
miauler(chatEuropeen)
miauler(chienMoonMoon)