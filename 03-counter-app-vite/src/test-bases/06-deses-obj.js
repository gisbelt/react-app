
//Extract object from object
export const userContext2 = ({name, age, password, range = "Captain"}) =>{
    return {
        passName: password,
        year: age,
        latlng: {
            lat: 14.1232,
            lng: -21.455
        }
    }
}
