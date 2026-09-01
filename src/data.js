export const API_KEY = 'AIzaSyAqr3lLBpD7DPvBLD5oFeW8cA-NNu_crdE'

export const value_converter = (value) => {
    if(value >= 1000000) {
        return Math.floor(value / 1000000) + "M"
    }
    else if(value >= 1000) {
        return Math.floor(value / 1000) + "K"
    }
    else {
        return value
    }
}