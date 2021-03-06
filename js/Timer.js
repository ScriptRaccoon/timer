class Timer {
    constructor(deltaTime = 1 / 60) {
        let accumulatedTime = 0;
        let lastTime = null;

        this.loop = (currentTime) => {
            if (lastTime) {
                accumulatedTime += (currentTime - lastTime) / 1000;
                if (accumulatedTime > 1) {
                    accumulatedTime = 1;
                }
                while (accumulatedTime > deltaTime) {
                    this.update(deltaTime);
                    accumulatedTime -= deltaTime;
                }
            }

            lastTime = currentTime;

            this.start();
        };
    }

    start() {
        requestAnimationFrame(this.loop);
    }
}

const timer = new Timer();

timer.update = (deltaTime) => {
    // do some stuff
};
