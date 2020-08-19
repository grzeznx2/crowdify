export default class {
    constructor(radius) {
        this.radius = radius
        this.circumference = 2 * Math.PI * radius
    }

    calcProgressDashoffset(percent) {
        this.progressDashoffset = (this.circumference - ((percent / 100) * this.circumference))
    }
}