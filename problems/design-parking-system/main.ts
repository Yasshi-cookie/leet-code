class ParkingSystem {
    big: number
    medium: number
    small: number
    constructor(big: number, medium: number, small: number) {
        this.big = big
        this.medium = medium
        this.small = small
    }

    addCar(carType: number): boolean {
        const cType = new CarType(carType)

        if (cType.isBig()) {
            if (this.big <= 0) {
                return false
            }

            this.big -= 1
        }

        if (cType.isMedium()) {
            if (this.medium <= 0) {
                return false
            }

            this.medium -= 1
        }

        if (cType.isSmall()) {
            if (this.small <= 0) {
                return false
            }

            this.small -= 1
        }

        return true
    }
}

class CarType {
    static readonly BIG = 1
    static readonly MEDIUM = 2
    static readonly SMALL = 3
    constructor(readonly value: number) {
    }

    isBig(): boolean {
        return this.value === CarType.BIG
    }

    isMedium(): boolean {
        return this.value === CarType.MEDIUM
    }

    isSmall(): boolean {
        return this.value === CarType.SMALL
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

const parkingSystem = new ParkingSystem(1, 1, 0)
console.log(parkingSystem.addCar(1))
console.log(parkingSystem.addCar(2))
console.log(parkingSystem.addCar(3))
console.log(parkingSystem.addCar(1))
