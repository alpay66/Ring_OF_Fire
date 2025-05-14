export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCard: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 13; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }
        this.shuffle();
    }

    shuffle() {
        let currentIndex = this.stack.length;

        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // Tausche Elemente
            [this.stack[currentIndex], this.stack[randomIndex]] = [
                this.stack[randomIndex], this.stack[currentIndex]
            ];
        }
    }
}
