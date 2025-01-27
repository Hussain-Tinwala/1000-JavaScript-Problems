class SimpleQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        console.log(`${element} added to the queue.`);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty! Nothing to dequeue.");
            return null;
        }
        const removedElement = this.queue.shift();
        console.log(`${removedElement} removed from the queue.`);
        return removedElement;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        console.log(`Front element is: ${this.queue[0]}`);
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        console.log(`Queue size: ${this.queue.length}`);
        return this.queue.length;
    }

    displayQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }
        console.log("Queue elements: ", this.queue.join(", "));
    }
}

const queue = new SimpleQueue();

while (true) {
    const choice = prompt(
        "Choose an operation:\n1. Enqueue\n2. Dequeue\n3. Peek\n4. Display Queue\n5. Check if Empty\n6. Get Size\n7. Quit"
    );

    switch (choice) {
        case "1":
            const element = prompt("Enter an element to enqueue:");
            queue.enqueue(element);
            break;
        case "2":
            queue.dequeue();
            break;
        case "3":
            queue.peek();
            break;
        case "4":
            queue.displayQueue();
            break;
        case "5":
            console.log(queue.isEmpty() ? "Queue is empty." : "Queue is not empty.");
            break;
        case "6":
            queue.size();
            break;
        case "7":
            console.log("Exiting! Thanks for using the Queue");
            exit = true;
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }

    if (choice === "7") break;
}
