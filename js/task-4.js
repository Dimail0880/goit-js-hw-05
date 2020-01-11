class StringBuilder {
    constructor(value = "") {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    append(value) {
        return (this._value = this._value += value);
    }
    prepend(value) {
        return (this._value = value += this._value);
    }
    pad(value) {
        return (this._value = value += this._value += value);
    }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='