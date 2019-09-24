var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.plan = function () {
        console.log("Dominar el mundo");
    };
    return Villano;
}());
var v = new Villano("Xmen");
console.log(v.plan()); // Modificacion a branch2
