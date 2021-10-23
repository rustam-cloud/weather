import { useHistory } from "react-router";
import { getCurrentWeatherByCityName } from "../api/weather";
import { useData } from "../hooks/useData";

export default function Search() {
  const [{ coord }, dispatch] = useData();
  const history = useHistory();
  console.log(history);
  async function handleSubmit(e) {
    e.preventDefault();
    const searchQuery = e.target.search.value.trim();
    const [city, cityError] = await getCurrentWeatherByCityName(searchQuery);
    if (cityError) {
      alert("City not found!");
      return;
    }
    if (city) {
      dispatch({ type: "SET_COORD", payload: { lat: city.coord.lat, lon: city.coord.lon } });
      e.target.reset();
      history.push(`/city/${city.name},${city.sys.country}`);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="search" required placeholder="'Mexico' or 'London,GB'" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
