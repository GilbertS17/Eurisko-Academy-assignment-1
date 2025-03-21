class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;
    addTask(name: string): void {
      if (!name.trim()) return; // if no name entered
      this.tasks.push({ id: this.currentId, name: name, status: "pending" });
      this.currentId++;
    }
    completeTask(id: number): void {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          this.tasks[i].status = "completed";
          return;
        }
      }
    }
    displayTasks(): void {
      if (this.tasks.length === 0) return; // if there is no any task
      this.tasks.forEach((task) =>
        console.log(
          `Task ID: ${task.id}, name: "${task.name}", status: ${task.status}\n`
        )
      );
    }
  }
  