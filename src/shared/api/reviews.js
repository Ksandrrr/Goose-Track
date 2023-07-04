import instance from "./auth";

export async function getFeedback () {
    const { data: result } = await instance.get("reviews/");
 return result
}

export async function addFeedback (data) {
    const { data: result } = await instance.post("reviews/own", data);
 return result
}