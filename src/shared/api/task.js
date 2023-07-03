
import instance from "./auth";

export async function getTask(data) {
    const { data: result } = await instance.post("api/task/TaskInMonth", data);
 return result
}

export async function addTask(data) {
    const { data: result } = await instance.post("api/task/addTask", data);
 return result
}
export async function deleteTask(id) {
    const { data: result } = await instance.delete(`api/task/${id}`);
 return result
}
export async function editTask(id, task) {

    const { data: result } = await instance.put(`api/task/${id}`, task);
 return result
}
