class Timer {
    constructor(deltaTime) {
        let accumulatedTime = 0;
        let lastTime = 0;

        this.loop = (currentTime) => {
            accumulatedTime += (currentTime - lastTime) / 1000;

            while (accumulatedTime > deltaTime) {
                this.update(deltaTime);
                accumulatedTime -= deltaTime;
            }

            lastTime = currentTime;

            this.start();
        };
    }

    start() {
        requestAnimationFrame(this.loop);
    }
}

const timer = new Timer(1 / 60);

timer.update = (deltaTime) => {
    // do some stuff
};