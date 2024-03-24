console.log("program started")

let object_data = {"id":2,"name":"Jane Smith"}
console.log(object_data)

// accessing object data
console.log("id=",object_data.id)
console.log("name=",object_data.name)
console.log("age=",object_data.age)

// add or Update  object data
object_data.id=3
object_data.name="tom"
object_data.age=20
console.log(object_data)

// delete object data
delete object_data.age
console.log(object_data)

let array_of_objects = [
    {"id":1,"name":"John Doe"}, // 0
    {"id":2,"name":"Jane Smith"}, // 1
    {"id":3,"name":"Tom Jerry"} // 2
]

// update name of id having 3
console.log("0 ",array_of_objects[0])
console.log("1 ",array_of_objects[1])
console.log("2 ",array_of_objects[2])
console.log("3 ",array_of_objects[3])

console.log("2 id",array_of_objects[2].id)
array_of_objects[2].name = "Tom and Jerry"
console.log("2 name",array_of_objects[2].name)

console.log("program ended")