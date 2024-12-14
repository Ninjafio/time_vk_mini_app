export const fetchFilms = async () => {
  try {
    const response = await fetch("http://localhost:3001/films", {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error("GG WP");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchResults = async (userId:number) => {
  try{
      const response = await fetch(`http://localhost:3001/user/results/${userId}`);
      if (!response.ok) {
          throw new Error("Failed to fetch dogs");
      }
      return await response.json();
  } catch (error) {
      console.error("Error fetching data:", error);
      return [];
  }
};
