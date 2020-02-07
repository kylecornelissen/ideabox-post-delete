export const postOptions = (data) => {
  return {
    method: 'POST',
    body: JSON.stringify({
      id: Date.now(),
      name: data.name,
      head_coach: data.headCoach,
      sport: data.sport
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
};
