String.prototype.makeRound = function() {
    if(this.toString().toLowerCase() === 'earth') {
        // blasphemy!
        throw new Error("But it's flat!");
    }
    return this;
}

