function simulateTicketQueue(commands) {
  const queue = [];
  const served = [];
  const queueSet = new Set();

  for (const command of commands) {
    if (command === "serve") {
      if (queue.length > 0) {
        const person = queue.shift();
        queueSet.delete(person);
        served.push(person);
      }
    } else if (command.startsWith("join ")) {
      const name = command.slice(5);
      if (!queueSet.has(name)) {
        queueSet.add(name);
        queue.push(name);
      }
    } else if (command.startsWith("leave ")) {
      const name = command.slice(6);
      if (queueSet.has(name)) {
        queueSet.delete(name);
        const index = queue.indexOf(name);
        if (index !== -1) {
          queue.splice(index, 1);
        }
      }
    }
  }

  return { queue, served };
}
