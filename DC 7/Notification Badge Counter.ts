interface NotificationEvent {
  type: 'ADD' | 'READ' | 'CLEAR';
  count?: number;
}

function updateNotificationCount(
  initialCount: number,
  events: NotificationEvent[]
): number {
  let count = initialCount;

  for (const event of events) {
    const amount = event.count ?? 1;

    switch (event.type) {
      case "ADD":
        count += amount;
        break;
      case "READ":
        count = Math.max(0, count - amount);
        break;
      case "CLEAR":
        count = 0;
        break;
    }
  }

  return count;
}
