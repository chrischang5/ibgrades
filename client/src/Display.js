import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function Display(props) {
  let data = props.data || {
    Name: "",
    Candidates: 0,
    "1%": 0,
    "2%": 0,
    "3%": 0,
    "4%": 0,
    "5%": 0,
    "6%": 0,
    "7%": 0,
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="container">
      <Bar
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: data["Name"],
            },
          },
        }}
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Number Candidates",
              data: [
                Math.round((data["1%"] / 100) * data["Candidates"]),
                Math.round((data["2%"] / 100) * data["Candidates"]),
                Math.round((data["3%"] / 100) * data["Candidates"]),
                Math.round((data["4%"] / 100) * data["Candidates"]),
                Math.round((data["5%"] / 100) * data["Candidates"]),
                Math.round((data["6%"] / 100) * data["Candidates"]),
                Math.round((data["7%"] / 100) * data["Candidates"]),
              ],
              backgroundColor: ["#28a745"],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}

export default Display;
