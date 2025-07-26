const BASE = "http://localhost:8000/api/features/";

export async function fetchFeatures() {
  return (await fetch(BASE)).json();
}

export async function addFeature(obj) {
  return (
    await fetch(BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
  ).json();
}

export async function upvote(id) {
  return (await fetch(`${BASE}${id}/upvote/`, { method: "POST" })).json();
}
