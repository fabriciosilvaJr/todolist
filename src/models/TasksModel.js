import Model from "./Model";

export default class Tasks extends Model {
    resource() {
        return "task";
    }

    async fetchTasks() {
        const token = localStorage.getItem("token");

        const response = await fetch(`${this.baseUrl}/${this.resource()}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        return response.json();
    }
}
