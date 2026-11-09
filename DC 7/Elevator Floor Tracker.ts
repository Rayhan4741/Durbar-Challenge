function trackElevator(startFloor: number, minFloor: number, maxFloor: number, commands: string[]): number {
  let currentFloor = startFloor;

  for (const cmd of commands) {
    if (cmd === "UP") {
      if (currentFloor < maxFloor) {
        currentFloor++;
      }
    } else if (cmd === "DOWN") {
      if (currentFloor > minFloor) {
        currentFloor--;
      }
    }
  }

  return currentFloor;
}
