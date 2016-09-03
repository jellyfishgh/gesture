class NinePoint {
    constructor() {
        this.path = [[0,0,0],[0,0,0],[0,0,0]];
    }
    /*
        at least 4 points
    */
    allLocks() {
        let sum = 0;
        for(let n = 4; n < 10; n++) {
            for(i = 0; i < 3; i++) {
                for(j = 0; j < 3; j++) {
                    this.path[i][j] = 1;
                    sum += this.path[i][j];
                }
            }
            if(sum > n)break;
        }
    }
}